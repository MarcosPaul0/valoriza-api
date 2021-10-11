import { ITagsRepository } from '../ITagsRepository'
import { Tag } from '../../entities/Tag'
import { EntityRepository, Repository, getRepository } from 'typeorm'

@EntityRepository(Tag)
export class TagsRepository implements ITagsRepository {
  private repository: Repository<Tag>

  constructor() {
    this.repository = getRepository(Tag)
  }

  async create(name: string): Promise<Tag> {
    const tag = this.repository.create({ 
      name
    })

    await this.repository.save(tag)

    return tag;
  }

  async listTags(): Promise<Tag[]> {
    const tags = await this.repository.find();

    return tags;
  }

  async findByName(name: string): Promise<Tag> {
    const tag = await this.repository.findOne({ name })

    return tag;
  }
}