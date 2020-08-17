/* eslint-disable camelcase */
import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import User from '../models/Users';

interface Request {
  email: string;
  password: string;
}
interface Response {
  user: User;
  token: string;
}

class CreateAppointmentService {
  public async execute({ email, password }: Request): Promise<Response> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne({ where: { email } });

    if (!user) {
      throw new Error('Incorret email/password.');
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new Error('Incorret email/password.');
    }

    const token = sign({}, 'ee2bc44fb7efc81ad3f3c9022e61cf9d', {
      subject: user.id, // quem gerou esse token
      expiresIn: '1d',
    });

    return { user, token };
  }
}

export default CreateAppointmentService;
