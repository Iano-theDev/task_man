import { Request, Response, NextFunction} from "express";
import User from "../models/user.model";

export interface ExtendedRequest extends Request {
    user: any
}

export async function getUser(req: Request, res: Response, next: NextFunction){
    let user
    try {
        user =  await User.findById(req.params.id)
        if (user == null){
            return res.status(404).json({message: "Cannot Find The Specified User!"})
        }
    } catch (error: any) {
        return res.status(500).json({message: error.message})
    }

    res.locals.user = user
    next()
}