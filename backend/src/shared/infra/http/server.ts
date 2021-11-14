import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import routes from './routes';
import uploadConfig from '@config/upload';
import '@shared/infra/typeorm';
import AppError from '@shared/errors/AppError';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/files', express.static(uploadConfig.directory));
app.use(routes);

app.use(
  (error: Error, request: Request, response: Response, _: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        error: error.message,
      });
    }

    // eslint-disable-next-line
    console.error(error);
    return response.status(500).json({
      error: 'Internal server error',
    });
  },
);

// eslint-disable-next-line
app.listen(3333, () => console.log('Server started on port 3333!'));
