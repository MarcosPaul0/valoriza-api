import { User } from '../../entities/User'
import { Repository, getRepository, EntityRepository } from 'typeorm'
import { IUsersRepository, ICreateUserDTO } from '../IUsersRepository'

@EntityRepository(User)
export class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({ name, email, password, admin }: ICreateUserDTO): Promise<User> {
    const user = this.repository.create({
      name,
      email,
      password,
      admin
    });

    await this.repository.save(user);

    return user;
  }

  async listUsers(): Promise<User[]> {
    const users = await this.repository.find()

    return users;
  }
  
  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({ email });

    return user;
  }

  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne(id);

    return user;
  }
} 