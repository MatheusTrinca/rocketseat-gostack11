import { Router } from 'express';
import CreateUserService from '../services/CreateUserService';

const userRouter = Router();

userRouter.post('/', async (request, response) => {
  try {
    const { name, email, password } = request.body;

    const userService = new CreateUserService();

    const newUser = await userService.execute({ name, email, password });

    return response.json(newUser);
  } catch (err) {
    return response.status(400).json({ error: (err as Error).message });
  }
});

export default userRouter;
