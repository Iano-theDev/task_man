import { Request, Response, NextFunction } from "express";

export async function getUser(req: Request, res: Response, next: NextFunction){
    const id = req.params.id
    
}