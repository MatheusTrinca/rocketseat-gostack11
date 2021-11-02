import { Router } from 'express';
import ensureAuthentication from '../middlewares/ensureAuthentication';
import CreateUserService from '../services/CreateUserService';
import multer from 'multer';
import multerConfig from '../config/upload';
import UpdateUserAvatarService from '../services/UpdateUserAvatarService';

const userRouter = Router();
const upload = multer(multerConfig);

userRouter.post('/', async (request, response) => {
  try {
    const { name, email, password } = request.body;

    const userService = new CreateUserService();

    const newUser = await userService.execute({ name, email, password });

    // @ts-expect-error Aqui vai ocorrer um erro, mas estou ignorando
    delete newUser.password;

    return response.json(newUser);
  } catch (err) {
    return response.status(400).json({ error: (err as Error).message });
  }
});

userRouter.patch(
  '/avatar',
  ensureAuthentication,
  upload.single('avatar'),
  async (request, response) => {
    try {
      const updateUserAvatarService = new UpdateUserAvatarService();
      if (!request.file?.filename) {
        throw new Error('Missing avatar file');
      }
      const user = await updateUserAvatarService.execute({
        user_id: request.user.id,
        avatarFilename: request.file?.filename,
      });
      // @ts-expect-error Aqui vai ocorrer um erro, mas estou ignorando
      delete user.password;
      return response.json(user);
    } catch (err) {
      return response.status(400).json({ error: (err as Error).message });
    }
  },
);

export default userRouter;
