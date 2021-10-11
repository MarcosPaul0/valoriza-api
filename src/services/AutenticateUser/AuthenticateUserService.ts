import dotenv from 'dotenv';
dotenv.config();
import { inject, injectable } from 'tsyringe';
import { IUsersRepository } from '../../repositories/IUsersRepository';
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'


interface IAuthenticateRequest {
  email: string;
  password: string;
}

@injectable()
export class AuthenticateUserService {
  constructor(
    @inject('UsersRepository') 
    private usersRepository: IUsersRepository
  ) {}
  
  async execute({ email, password}: IAuthenticateRequest) {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new Error('Email/password incorrect!');
    }
    
    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error('Email/password incorrect!');
    }

    const token = sign({
      email: user.email,
    }, 
    process.env.TOKEN_SECRET_PRIVATE_KEY, 
    {
      subject: user.id,
      expiresIn: '1d'
    });

    return token
  }
}