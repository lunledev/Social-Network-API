//import schema and model from mongoose
import { match } from "assert";
import { Schema, model, Document } from "mongoose";


//inteface
interface IUser extends Document{
username: string;
email: string;

}
//construct a new instance of the schema class
const userSchema = new Schema<IUser>(
    {
        username: {type: String, unique: true, required: true, trim: true },
        email: {type: String, unique: true,
            
            match: /^[\S]+@[\S]+.[\S]+$/, 
            validate: {
                validator: function(v)
                {
                   // return /[^\w\s]{2,}/g.test(v);
                   return /[^\w\s]{1}/g.test(v)&&/^[\S]+@[\S]+.[\S]+$/.test(v);
                },
                message: msg => `${msg.value}not a valid email`
            }, 
            required: [true, 'email required']

        }

    }
);

// using model() to compile a  model based on schema userSchema


//export Users



