import { type } from "express/lib/response";
import mongoose from "mongoose";
const orderItemsSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    quantity: {
        type: Number,
        required: true
    }
})

const orderSchema = new mongoose.Schema(
    {
        price: {
            type: Number,
            required: true,
        },
        customer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        orderItems: {
            type: [orderItemsSchema]
        },
        address: {
            type: String,
            required: true
        },
        status: {
            type: String,
            enum: ["pending", "cancelled", "delivered"],
            default: "pending"
        }
    },
    { timestamps: true });

export const order = mongoose.model('order', orderSchema);