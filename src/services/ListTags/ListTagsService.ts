import { inject, injectable } from 'tsyringe';
import { ITagsRepository } from '../../repositories/ITagsRepository';
import { Tag } from '../../entities/Tag';
import { classToPlain } from 'class-transformer';

@injectable()
export class ListTagsService {
  constructor(
    @inject('TagsRepository')
    private tagsRepository: ITagsRepository
  ) {}

  async execute() {
    const tags = await this.tagsRepository.listTags();

    if(!tags) {
      throw new Error('Tags don\'t exists');
    }

    return classToPlain(tags);
  }
}