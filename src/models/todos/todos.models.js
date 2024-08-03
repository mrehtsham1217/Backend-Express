import { type } from "express/lib/response";
import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    content: {
        type: string,
        default:false
    },
    completed: {
        type: Boolean,
        default: false
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    subTodos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'SubTodo'
        }
    ]


}, { timestamps: true });

export const Todo=mongoose.model('Todo', TodoSchema);