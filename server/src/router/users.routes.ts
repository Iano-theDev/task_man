import { Router } from "express";
import { createUser, deleteUser, getAllUsers, getOneUser, loginUser, updateUser } from "../controller/users.controller";
import { getUser } from "../middleware/users.middleware";

const usersRouter = Router()

usersRouter.get('', getAllUsers)
usersRouter.post('/register', createUser)
usersRouter.post('/login', loginUser)
usersRouter.get('/:id', getUser, getOneUser)
usersRouter.delete('/:id', getUser, deleteUser)
usersRouter.patch('/:id', updateUser)

export default usersRouter