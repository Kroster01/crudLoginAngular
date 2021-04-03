import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { User } from '../entity/User';
import { validate } from 'class-validator';

export class UserController {

    static getAll = async (req: Request, res: Response) => {
        const userRepository = getRepository(User);
        let users;
        try {
            users = await userRepository.find();
        } catch (error) {
            res.status(404).json({ message: 'Something goes wrong.' });
        }
        if (users.length > 0) {
            res.send(users);
        } else {
            res.status(404).json({ message: 'Not result.' });
        }
    };

    static getById = async (req: Request, res: Response) => {
        const { id } = req.body;
        const userRepository = getRepository(User);
        try {
            const user = await userRepository.findOneOrFail(id);
            res.send(user);
        } catch (error) {
            res.status(404).json({ message: 'Not result.' });
        }
    };

    static newUser = async (req: Request, res: Response) => {
        const { username, password, role } = req.body;
        const user = new User();

        user.username = username;
        user.password = password;
        user.role = role;
        // validate.
        const validateOpt = { validationError: { target: false, value: false } };
        const errors = await validate(user, validateOpt);
        if (errors.length > 0) {
            return res.status(400).json(errors);
        }
        // TOOO: Hash Password.
        const userRepository = getRepository(User);

        try {
            user.hashPassword();
            const users = await userRepository.save(user);
        } catch (error) {
            res.status(409).json({ message: 'User already exist.' });
        }
        // All Okey
        res.send('User Created.');
    };

    static editUser = async (req: Request, res: Response) => {
        let user: User;
        const { id } = req.params;
        const { username, role } = req.body;
        const userRepository = getRepository(User);
        try {
            user = await userRepository.findOneOrFail(id);
            user.username = username;
            user.role = role;
        } catch (error) {
            res.status(404).json({ message: 'User not Found' });
        }
        const validateOpt = { validationError: { target: false, value: false } };
        const errors = await validate(user, validateOpt);
        if (errors.length > 0) {
            return res.status(400).json(errors);
        }

        try {
            await userRepository.save(user);
        } catch (error) {
            res.status(409).json({ message: 'User already in use.' });
        }
        // All Okey
        res.status(201).json('User Update.');
    };

    static deleteUser = async (req: Request, res: Response) => {
        const { id } = req.params;
        const userRepository = getRepository(User);
        let user: User;
        try {
            user = await userRepository.findOneOrFail(id);
        } catch (error) {
            res.status(404).json({ message: 'User not Found.' });
        }
        let result: any;
        try {
            result = await userRepository.delete(id);
        } catch (error) {
            res.status(404).json({ message: 'User not Deleted.' });
        }
        // All Okey
        res.status(201).json('User Deleted.');
    };
}
export default UserController;