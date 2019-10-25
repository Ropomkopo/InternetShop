import { Schema, Types } from 'mongoose';

export const CartItemSchema: Schema = new Schema({
    _id: Schema.Types.ObjectId,
    product: Types.ObjectId,
    quantity: {
        type: String,
        required: true
    },
    totalSum: {
        type: Number,
        required: true
    }
});

export interface CartItemInterface extends Document {
  _id: Types.ObjectId;
  name: string;
  totalSum: number
}
