import { Express, NextFunction } from "express";
import { Request, Response } from "express";
import User from "../models/user.model"
import { subscribe } from "diagnostics_channel";

import nodemailer from 'nodemailer';



// interface ExtendedResponse extends Response {
//     user: any
// }

// interface ExtendedRequest extends Request {
//     user: any
// }
const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'coleman.cronin64@ethereal.email',
        pass: 'W9F63expKZmBrnwsGn'
    }
});




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
        const savedUser = await newUser.save()
        // res.status(201).json({message: 'user saved successfully!', user: savedUser})
        let message = {
            from: '"Fred Foo 👻" <foo@example.com>', // sender address
            to: savedUser.email, // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello from Task Man</b>", // html body
          }

        //   console.log("Gotemail", savedUser.email)
        transporter.sendMail(message).then(()=>{
            res.status(201).json({message: "You should recieve an email from taskMan!"})
        })
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
export const deleteUser =  async(req: Request, res: Response) => {

    const user = res.locals.user
    if (user){
        await User.deleteOne(user)
        console.log("Deleted user successfully",);
        res.status(200).json({message: "User Deleted successfully!"})
    }
    else {
        console.log("No user found!")
        res.status(404).json({message: "no user found"})
    }
    
}