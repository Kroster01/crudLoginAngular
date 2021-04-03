import { checkJwt } from "../middleware/jwt";
import { checkRole } from "../middleware/role";
import { Router } from 'express';
import { UserController } from '../controller/UserController';

const routes = Router();

// Get all users
routes.get('/', [checkJwt, checkRole(['admin'])], UserController.getAll);
// Get one users
routes.get('/:id', [checkJwt, checkRole(['admin'])], UserController.getById);
// Create a new User
routes.post('/', [checkJwt, checkRole(['admin'])], UserController.newUser);
// Edit User
routes.patch('/:id', [checkJwt, checkRole(['admin'])], UserController.editUser);
// Delete User
routes.delete('/:id', [checkJwt, checkRole(['admin'])], UserController.deleteUser);

export default routes;