import { container } from 'tsyringe'
import { IUsersRepository } from '../../repositories/IUsersRepository'
import { UsersRepository } from '../../repositories/implements/UsersRepository'
import { ITagsRepository } from '../../repositories/ITagsRepository'
import { TagsRepository } from '../../repositories/implements/TagsRepository'
import { IComplimentsRepository } from '../../repositories/IComplimentsRepository'
import { ComplimentsRepository } from '../../repositories/implements/ComplimentsRepository'


container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
)

container.registerSingleton<ITagsRepository>(
  'TagsRepository',
  TagsRepository
)

container.registerSingleton<IComplimentsRepository>(
  'ComplimentsRepository',
  ComplimentsRepository
)