import { Tag } from '../entities/Tag'

export interface ITagsRepository {
  create(name: string): Promise<Tag>;
  listTags(): Promise<Tag[]>;
  findByName(name: string): Promise<Tag>;
}