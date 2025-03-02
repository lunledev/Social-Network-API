import { Schema, model, Document,ObjectId } from "mongoose";

//inteface
interface IUser extends Document{
username: string;
email: string;
thoughts: ObjectId[];
friends: ObjectId[];
friendCount: number;


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

        },
        thoughts:[
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought',  //reference to Thought Model

            },
        ],
        friends: [{
             type: Schema.Types.ObjectId,
             ref: 'User', //reference to User Model


        },
    ],
    
    },
    {
        //include virtual in response.
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

// Create a virtual property `friendCount` that retrieves length of user's friends on query.
userSchema.virtual('friendCount')
.get(function(this: any){
    return `${this.friends.length}`;
})

// intitialize our User model
const User = model('user',userSchema);



//export User
export default User;



