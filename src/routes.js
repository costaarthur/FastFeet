import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
// novos \/
import StudentController from './app/controllers/StudentController';
import AdmController from './app/controllers/AdmController';

import authMiddleware from './app/middlewares/auth';
import admMiddleware from './app/middlewares/authadm';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

// project
routes.post('/admsessions', AdmController.store);

/* routes.get('/students/:id'),
  (req, res) => {
    const { id } = req.params.id;

    return res.json({ message: `Hello ${id}}` });
  }; */

routes.use(admMiddleware);
routes.post('/students', StudentController.store);
routes.put('/students', StudentController.update);

// routes.put('/users', authMiddleware, UserController.update);
// da para utilizar o middleware assim/\ de forma local

// ou de forma global assim. Ai funciona em apenas nas rotas abaixo dele
routes.use(authMiddleware);
routes.put('/users', UserController.update);

export default routes;
