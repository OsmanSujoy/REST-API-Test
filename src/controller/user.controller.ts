import { Request, Response } from 'express';
import { UserInput } from 'src/models/user.model';
import { CreateUserInput } from '../schema/user.schema';
import { createUser } from '../service/user.service';
import logger from '../utils/logger';

export async function createUserHandler(
  req: Request<never, never, CreateUserInput['body']>,
  res: Response,
) {
  try {
    const input = req.body as UserInput;
    const user = await createUser(input);
    return res.send(user);
  } catch (e: any) {
    logger.error(e);
    return res.status(409).send(e.message);
  }
}
