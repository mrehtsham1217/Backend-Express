//Step:1-->import mongoose
import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
    {
        username: {
            type: 'string',
            required: true,
            unique: true,
            minlength: 3,
            maxlength: 20,
            lowercase: true,
        },
        email: {
            type: 'string',
            unique: true,
            required: true,
            lowercase: true
        },
        password: {
            type:'string',
            required: true,
        }
        
    },{timestamps:true}
)
export const User=mongoose.model('User',userSchema);    