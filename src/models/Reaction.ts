import { Schema, Document, ObjectId, Types } from "mongoose";

interface IReaction extends Document{

    reactionId: ObjectId;
}

const reactionSchema = new Schema<IReaction>(
{
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },

});







export default reactionSchema;

