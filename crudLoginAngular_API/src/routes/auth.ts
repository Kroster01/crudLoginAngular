import { checkJwt } from "../middlewares/jwt";
import { Router } from 'express';
import AuthController from '../controller/AuthController';

const routes = Router();

routes.use('/login', AuthController.login);
routes.use('/change-password', [checkJwt], AuthController.changePassword);

export default routes;