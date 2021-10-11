import { IUsersRepository } from '../../repositories/IUsersRepository';
import { inject, injectable } from 'tsyringe'
import { hash } from 'bcryptjs'
import { User } from '../../entities/User';

interface IUserRequest {
  name: string;
  email: string;
  password: string;
  admin?: boolean;
}

@injectable()
export class CreateUserService {
  constructor(
    @inject('UsersRepository') 
    private usersRepository: IUsersRepository
  ) {}

  async execute({ name, email, password, admin = false }: IUserRequest): Promise<User> {
    if (!email) {
      throw new Error('Email incorrect!');
    }

    if(!password) {
      throw new Error('Password incorrect!');
    }

    const userAlreadyExists = await this.usersRepository.findByEmail(email);
    
    if (userAlreadyExists) {
      throw new Error('User already exists!');
    }
    
    const passwordHash = await hash(password, 8)

    const newUser = await this.usersRepository.create({
      name,
      email,
      password: passwordHash,
      admin
    });

    return newUser;
  }
}