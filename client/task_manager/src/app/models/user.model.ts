import { ITask } from "./task.model";

export interface User{
    id: number;
    userName: string;
    email: string;
    rating?: number;
    avatar?: string,
    admin?: boolean,
    tasks?: ITask[]
}