import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import User from '../models/Users';

interface Request {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async execute({ name, email, password }: Request): Promise<User> {
    // Quando n tem metodos espicificos n precisa criar um repositorio, apenas usar
    // o getRepository()
    const usersRepository = getRepository(User);

    const chechUserExists = await usersRepository.findOne({
      where: { email },
    });

    if (chechUserExists) {
      throw Error('Email already used.');
    }

    const hashedPassword = await hash(password, 8);

    const user = usersRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
