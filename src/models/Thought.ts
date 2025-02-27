import { Schema, model, Document, ObjectId } from "mongoose";

//interface
interface IThought extends Document {
    thoughtText: string;
    createdAt: Date;
    createdAtFormatted: string;
    username: string;

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
            type: Date, default: Date.now,
        },
        username: {
            type: String,
            required: true,
            ref: 'User'
        },


    },
    {
        toJSON:
       {
            virtuals: true
       },
        id: false,
    },


);


/*thoughtSchema.virtual('createAtFormatted')
.get(function (createdAt: Date): string {
    return createdAt.toLocaleTimeString()+ " " + createdAt.toLocaleDateString();
});*/

//virtual property
//getters
thoughtSchema.virtual('createdAtFormatted')
.get(function (this: any){
    return this.createdAt.toLocaleTimeString()+ " " + this.createdAt.toLocaleDateString();
});


//intialize Thought model
const Thought = model('thought', thoughtSchema);

//export Thought
export default Thought;

