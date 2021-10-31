import express from 'express';
import routes from './routes';

const app = express();

app.use(routes);

// eslint-disable-next-line
app.listen(3333, () => console.log('Server started on port 3333!'));
