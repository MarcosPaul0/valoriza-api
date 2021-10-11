import { Repository, getRepository, EntityRepository } from 'typeorm'
import { IComplimentsRepository, ICreateComplimentDTO } from '../IComplimentsRepository'
import { Compliment } from '../../entities/Compliment';

@EntityRepository(Compliment)
export class ComplimentsRepository implements IComplimentsRepository {
  private repository: Repository<Compliment>;

  constructor() {
    this.repository = getRepository(Compliment);
  }

  async create({ tag_id, user_sender, user_receiver, message }: ICreateComplimentDTO): Promise<Compliment> {
    const compliment = this.repository.create({
      tag_id,
      user_sender,
      user_receiver,
      message
    });

    await this.repository.save(compliment);

    return compliment;
  }

  async listComplimentsReceived(id: string): Promise<Compliment[]> {
    const compliments = await this.repository.find({
      where: {
        user_receiver: id
      },
      relations: ['userSender', 'userReceiver', 'tag']
    })

    return compliments;
  }

  async listComplimentsSended(id: string): Promise<Compliment[]> {
    const compliments = await this.repository.find({
      where: {
        user_sender: id
      },
      relations: ['userSender', 'userReceiver', 'tag']
    })

    return compliments;
  }
}