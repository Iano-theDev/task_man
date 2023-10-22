import { Request, Response } from "express";
import User from "../models/user.model"
// import nodemailer from 'nodemailer';
import bcrypt from 'bcrypt'
import userModel from "../models/user.model";
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken'


dotenv.config();

/**
 * getAllUsers - fetches all users from the db
 * @param req : request
 * @param res : response
 */
export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const allUsers = await User.find()
        res.status(200).send(allUsers)
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
}
// create user
export const createUser = async (req: Request, res: Response) => {
    try {
        const { userName, email, password } = req.body;

        const salt = await bcrypt.genSalt(10);
        const hashedPass = bcrypt.hashSync(password, salt);

        const newUser = new userModel({
            userName: userName,
            email: email,
            password: hashedPass
        })


        const savedUser = await newUser.save()
        res.status(201).json({ message: 'user saved successfully!', user: savedUser })
    } catch (error: any) {
        res.status(400).json({ message: error.message })
    }
}
/**
 * loginUser - authenticate user credentials
 * @param req : request
 * @param res : response
 */
export const loginUser = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        const userData: any = await User.findOne({ email: email });
        if (!userData) {
            return res.status(404).json({ message: "User not found!" })
        }
        const valid = await bcrypt.compare(password, userData.password);

        if (valid) {
            const jwtSecret: any = process.env.JWT_SECRET;
            const payload = {email: userData.email}
            const token = jwt.sign(payload, jwtSecret);

            return res.status(200).json({ token, message: "User Logged in successfuly"});
        } else {
            return res.status(401).json({ message: 'Invalid Credentials!' })
        }
    } catch (error) {
        res.status(500).json({ error, message: "server error, try again" })
    }

}
// get one user
export const getOneUser = async (req: Request, res: Response) => {
    const usr = res.locals.user;
    console.log("usr", usr, "res", res)
    if (!usr || usr == null) return res.status(400).json({ message: "No user" })
    else {
        res.status(200).json(usr)
    }
}
// update user
export const updateUser = async (req: Request, res: Response) => {

}

// delete user
export const deleteUser = async (req: Request, res: Response) => {

    const user = res.locals.user
    if (user) {
        await User.deleteOne(user)
        console.log("Deleted user successfully");
        res.status(200).json({ message: "User Deleted successfully!" })
    }
    else {
        console.log("No user found!")
        res.status(404).json({ message: "no user found" })
    }

}