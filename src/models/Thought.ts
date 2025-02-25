import { Schema, model, Document,ObjectId } from "mongoose";

//interface
interface IThought extends Document{
thoughtText:string;

}
const minlen = 1;
const maxLen =280;
//Schema to create Thought model
const thoughtSchema = new Schema<IThought>(
{
    thoughtText: {type: String, 
        minlength: minlen,
        maxLength: maxLen,
        required: [true, `must be between ${minlen} and ${maxLen} characters`]},

});


//intialize Thought model
const Thought = model('thought', thoughtSchema);

//export Thought
export default Thought;