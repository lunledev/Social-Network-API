//import schema and model from mongoose
import { Schema, model, Document } from "mongoose";


//inteface
interface IUser extends Document{
username: string;
email: string;

}
//construct a new instance of the schema class
const userSchema = new Schema<IUser>(
    {
        username: {type: String, required: true },
        email: {type: String, required: true}.

    }
);

// using model() to compile a  model based on schema userSchema


//export Users



