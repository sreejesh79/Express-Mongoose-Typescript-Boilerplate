import mongoose, { Document, Schema } from "mongoose";
import { IModel } from "types";

export interface IUserModel extends IModel {}


const Types = Schema.Types;
const UserSchema: Schema = new Schema({
    username: {type: Types.String, index: true, unique: true, required: true},
    password: {type: Types.String, required: true},
    email: {type: Types.String, unique: true, required: true, index: true},
    mobile: {type: Types.String, unique: true, required: true, index: true},
    firstName: { type: Types.String, index: true, text: true },
    lastName: { type: Types.String, index: true},
    token: { type: Types.String, index: true },
    active: {type: Types.Number, enum:[0,1], default:0},
});

export default mongoose.model<IUserModel>('User', UserSchema);