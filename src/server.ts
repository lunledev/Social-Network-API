import express from 'express'; // import express package
import db from './config/connection.js';
import routes from './routes/index.js';
import path from 'path'; //using a Nodejs library.
const app = express();  //creating a instance of express.
const PORT = process.env.PORT || 3001; //initialize a port.

//const project = path.basename(process.cwd()).match(/Social-Network-API/);
//const project = path.basename(process.cwd()).match(/\S+/);
const project = path.basename(process.cwd());

app.use(express.urlencoded({ extended: true })); //parseing of URL-encoded request body and allowing parsing of complex data structues.


app.use(express.json());//express function that parses incoming requests to json.
app.use(routes);

db.once('open',() =>{   //excutes only once the open connection to mongodb is successful.

  app.listen(PORT, () => { //starts the server to listen on a port.
    console.log(`${project} app listening at ${PORT}`);
  });

});
  
  
  
