import { Router } from "express";
import { createUser, deleteUser, getAllUsers, getOneUser, updateUser } from "../controller/users.controller";
import { getUser } from "../middleware/users.middleware";

const usersRouter = Router()

usersRouter.get('', getAllUsers)
usersRouter.post('', createUser)
usersRouter.get('/:id', getUser, getOneUser)
usersRouter.delete('/:id', deleteUser)
usersRouter.patch('/:id', updateUser)

export default usersRouter