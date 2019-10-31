import { Schema,Types } from 'mongoose';
import { CategoryInterface } from '../category/category.model';

export const ProductSchema: Schema = new Schema({
    _id: Schema.Types.ObjectId,
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        ref: 'Category'
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: false
    }
});

export interface ProductInterface extends Document {
    _id: Types.ObjectId;
    name: string;
    category: CategoryInterface['_id'],
    price: number,
    description?: string 
}