import mongoose, { Mongoose } from "mongoose";

const subTodoSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            required: true,
            lowercase: true,
        },
        completed: {
            type: Boolean,
            default: false,
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        }
    }
    , { timestamps: true });

export const subTodo = mongoose.model("SubTodo", subTodoSchema)