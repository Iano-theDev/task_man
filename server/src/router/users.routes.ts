import { NextFunction, Router } from "express";
import { Response } from "express";
import { createUser, deleteUser, getAllUsers, getOneUser, updateUser } from "../controller/users.controller";
import { ExtendedRequest, getUser } from "../middleware/users.middleware";

const usersRouter = Router()

usersRouter.get('', getAllUsers)
usersRouter.post('', createUser)
usersRouter.get('/:id', getUser, getOneUser)
usersRouter.delete('/:id', getUser, deleteUser)
usersRouter.patch('/:id', updateUser)

export default usersRouter