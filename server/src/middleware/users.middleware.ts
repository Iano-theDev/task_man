import { Request, Response, NextFunction} from "express";
import User from "../models/user.model";

interface ExtendedResponse extends Response {
    user: any
}

export async function getUser(req: Request, res: ExtendedResponse, next: NextFunction){
    let user
    try {
        const user = User.findById(req.params.id)
        if (user == null){
            return res.status(404).json({message: "Cannot Find The Specified User!"})
        }
    } catch (error: any) {
        return res.status(500).json({message: error.message})
    }

    res.user = user
    next()
}