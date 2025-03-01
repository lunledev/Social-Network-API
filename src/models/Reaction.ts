import { Schema, Document, ObjectId, Types } from "mongoose";

interface IReaction extends Document{

    reactionId: ObjectId;
    reactionBody: string;
    username: string;
    createdAt: Date;
    createdAtFormattedReaction: string;


}

const reactionSchema = new Schema<IReaction>(
{
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280,

    },
    username: {
        type: String,
        required: true,
        ref: 'User',
    },
    createdAt: {
        type: Date,
        default: Date.now,
        ref: 'Thought',
    }
},

{
    toJSON: {
        virtuals: true,

    },
    id: false,
}
);


//virtual property
//getters
reactionSchema.virtual('createdAtFormattedReaction')
.get(function (this: any){
    return this.createdAt.toLocaleTimeString()+ " " + this.createdAt.toLocaleDateString();
});



export {reactionSchema,IReaction};

