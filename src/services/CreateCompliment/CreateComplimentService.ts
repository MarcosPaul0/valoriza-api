import { inject, injectable } from 'tsyringe';
import { Compliment } from '../../entities/Compliment';
import { IComplimentsRepository } from '../../repositories/IComplimentsRepository'
import { IUsersRepository } from '../../repositories/IUsersRepository'

interface IRequestCreateCompliment {
  tag_id: string;
  user_sender: string;
  user_receiver: string;
  message: string;
}

@injectable()
export class CreateComplimentService {
  constructor(
    @inject('ComplimentsRepository')
    private complimentsRepository: IComplimentsRepository,
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute({ tag_id, user_sender, user_receiver, message }: IRequestCreateCompliment): Promise<Compliment> {
    if(user_sender === user_receiver) {
      throw new Error('Incorrect user receiver!');
    }
    
    const userReceiver = await this.usersRepository.findById(user_receiver);

    if(!userReceiver) {
      throw new Error('User receiver does not exists!');
    }

    const newCompliment = await this.complimentsRepository.create({
      tag_id,
      user_sender,
      user_receiver,
      message
    });

    return newCompliment;
  }
}