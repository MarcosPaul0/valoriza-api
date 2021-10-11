import { inject, injectable } from 'tsyringe';
import { IComplimentsRepository } from '../../repositories/IComplimentsRepository';
import { Compliment } from '../../entities/Compliment'

@injectable()
export class ListComplimentsSendedService {
  constructor(
    @inject('ComplimentsRepository')
    private complimentsRepository: IComplimentsRepository
  ) {}

  async execute(id: string): Promise<Compliment[]> {
    if(!id) {
      throw new Error('User dont exists');
    }

    const complimentsSended = await this.complimentsRepository.listComplimentsSended(id);

    if(complimentsSended.length === 0) {
      throw new Error('You didn\'t send any compliments');
    }

    return complimentsSended;
  }
}