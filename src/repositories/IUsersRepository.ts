import { User } from '../entities/User'

export interface ICreateUserDTO {
  name: string;
  email: string;
  password: string;
  admin?: boolean;
}

export interface IUsersRepository {
  create({ name, email, password, admin }: ICreateUserDTO): Promise<User>;
  listUsers(): Promise<User[]>;
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>;
}