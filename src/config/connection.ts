import mongoose from 'mongoose';

const connectStrURL ='mongodb://127.0.0.1:27017';//local instance of MongoDB.
const dbName = 'SocialNetworkAPI';//hold a database name.

//using mongoose to connect to local connection to MongoDB(minimum connection).
mongoose.connect(`${connectStrURL}/${dbName}`);

export default mongoose.connection;


