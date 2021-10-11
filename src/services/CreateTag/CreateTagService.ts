import { Tag } from './../../entities/Tag';
import { inject, injectable } from 'tsyringe'
import { ITagsRepository } from '../../repositories/ITagsRepository'

@injectable()
export class CreateTagService {
  constructor(
    @inject('TagsRepository')
    private tagsRepositories: ITagsRepository
  ) {}

  async execute(name: string): Promise<Tag> {
    if (!name) {
      throw new Error('Name incorrect!');
    }

    const tag = await this.tagsRepositories.findByName(name);

    if (tag) {
      throw new Error('Tag already exists!');
    }

    const newTag = await this.tagsRepositories.create(name);

    return newTag
  }
}