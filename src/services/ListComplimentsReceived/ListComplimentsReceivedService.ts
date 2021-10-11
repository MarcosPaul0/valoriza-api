import { inject, injectable } from 'tsyringe';
import { IComplimentsRepository } from '../../repositories/IComplimentsRepository';
import { Compliment } from '../../entities/Compliment'

@injectable()
export class ListComplimentsReceivedService {
  constructor(
    @inject('ComplimentsRepository')
    private complimentsRepository: IComplimentsRepository
  ) {}

  async execute(id: string): Promise<Compliment[]> {
    if(!id) {
      throw new Error('User dont exists');
    }

    const complimentsReceived = await this.complimentsRepository.listComplimentsReceived(id);

    if(complimentsReceived.length === 0) {
      throw new Error('You didn\'t received any compliments');
    }

    return complimentsReceived;
  }
}