import { Schema, Document, ObjectId, Types } from "mongoose";

interface IReaction extends Document{

    reactionId: ObjectId;
    reactionBody: string;

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

});







export default reactionSchema;

