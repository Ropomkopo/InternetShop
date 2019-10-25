import { Schema, Types } from 'mongoose';

export const CartSchema: Schema = new Schema({
    _id: Schema.Types.ObjectId,
    cartItem: Types.ObjectId,
});

export interface CartInterface extends Document {
  _id: Types.ObjectId;
}
