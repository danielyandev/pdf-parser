import {Schema, model} from "mongoose";

interface IUser {
  name: string;
  surname: string;
  email: string;
  password: string;
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true }
})

export const User = model<IUser>('User', userSchema);