import { Router } from 'express';
import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';

const sessionRouter = Router();

sessionRouter.post('/', async (request, response) => {
  try {
    const { email, password } = request.body;

    const authService = new AuthenticateUserService();

    const { user, token } = await authService.execute({ email, password });

    // @ts-expect-error Aqui vai ocorrer um erro, mas estou ignorando
    delete user.password;

    return response.json({ user, token });
  } catch (err) {
    return response.status(400).json({ error: (err as Error).message });
  }
});

export default sessionRouter;
