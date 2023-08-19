import mongoose, { Schema } from "mongoose";

const taskSchema: Schema = new mongoose.Schema ({
    title: {type: String, required: true},
    description: {type: String, required: true},
    date: {type: Date}
}, 
{
    timestamps: true,
    collection: 'tasks'
})


export default mongoose.model ('tasks', taskSchema)