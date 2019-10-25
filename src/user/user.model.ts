import { Types, Schema } from 'mongoose';

export interface UserInterface extends Document {
    _id: Types.ObjectId,
    name: string,
    email: string,
    age: number,
   
}
const validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};
export const UserSchema: Schema = new Schema({
    _id: Schema.Types.ObjectId,
    name: { type: String, required: true},
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    cart: Types.ObjectId
})