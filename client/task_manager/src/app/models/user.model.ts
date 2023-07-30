export interface User{
    id: number;
    name: string;
    email: string;
    rating?: number;
    avatar?: string,
    admin?: boolean
}