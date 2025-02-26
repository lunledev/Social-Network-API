import { Schema, model, Document, ObjectId } from "mongoose";

//interface
interface IThought extends Document {
    thoughtText: string;
    createdAt: Date;
    getDate: Date;

}

const minlen = 1;
const maxlen = 280;
//Schema to create Thought model
const thoughtSchema = new Schema<IThought>(
    {
        thoughtText: {
            type: String,
            minlength: minlen,
            maxLength: maxlen,
            required: [true, `must be between ${minlen} and ${maxlen} characters`]
        },
        createdAt: {
            type: Date, default: Date.now(),
            get: getDate
        }


        //toLocaleDateString();
        //toLocaleTimeString();

        




    },
    {
        toJSON:
       {
            getters: true
       },
        timestamps: true
    },


);
function getDate(createdAt: any) {
    const newDate = createdAt.toLocaleTimeString();

    return newDate;

}



//intialize Thought model
const Thought = model('thought', thoughtSchema);

//export Thought
export default Thought;

