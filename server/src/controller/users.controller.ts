import { Express, NextFunction } from "express";
import { Request, Response } from "express";
import User from "../models/user.model"
import { subscribe } from "diagnostics_channel";


interface ExtendedResponse extends Response {
    user: any
}

interface ExtendedRequest extends Request {
    user: any
}


// get all users
export const getAllUsers = async (req: Request, res: Response)=>{
    try {
        const allUsers =  await User.find()
        res.status(200).send(allUsers)
    } catch (error: any) {
        res.status(500).json({message: error.message})
    }
}
// create user
export const createUser = async (req: Request, res: Response) => {
    const newUser = new User({
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password
    })

    try {
        const saveUser = await newUser.save()
        res.status(201).json({message: 'user saved successfully!', user: saveUser})
    } catch (error: any) {
        res.status(400).json({message: error.message})
    }
}
// get one user
export const getOneUser =  async(req: Request, res: Response) => {
    const usr = res.locals.user;
    console.log("usr", usr, "res", res)
    if (!usr || usr == null) return res.status(400).json({message: "No user"})
    else{
        res.status(200).json(usr)
    }
}
// update user
export const updateUser =  async(req: Request, res: Response) => {
    
}

// delete user
export const deleteUser =  async(req: Request, res: Response, next: NextFunction) => {
    console.log("request user", req);
    
}