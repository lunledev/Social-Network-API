import { Schema, model, Document,ObjectId } from "mongoose";

//interface
interface IThought extends Document{
thoughtText:string;

}

//Schema to create Thought model
const thoughtSchma = new Schema<IThought>(
{
    thoughtText: {type: String, required: true},

});


//intialize Thought model
const Thought = model('thought', thoughtSchma);

//export Thought
export default Thought;