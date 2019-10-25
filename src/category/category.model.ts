import { Schema, Types } from 'mongoose';

export const CategorySchema: Schema = new Schema({
    _id: Schema.Types.ObjectId,
    name: {
        type: String,
        required: true,
    },
});

export interface CategoryInterface extends Document {
  _id: Types.ObjectId;
  name: string;
}
