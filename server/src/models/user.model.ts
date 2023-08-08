import mongoose, { Schema } from "mongoose"

// export interface IUser {
//     _id: string
//     userName: string
//     email: string
//     password: string
//     createdAt: Date
//     updatedAt: Date
// }

const userSchema: Schema = new mongoose.Schema({
    userName: {type: String, require: true},
    email: {type: String, require: true, unique: true },
    password: {type: String, require: true}
}, 
{
    timestamps: true,
    strict: false,
    collection: 'users'
})

export default mongoose.model('User', userSchema)
// export default mongoose.model<IUser>('User', userSchema)