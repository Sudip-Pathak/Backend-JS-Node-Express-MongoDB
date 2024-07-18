import { app } from "./app.js";
import connectDB from "./config/db.js";

const PORT = process.env.PORT || 8000;
connectDB().then(() => {   // // Here inside connectDB we are handling promise(means this function have capability of .then and .catch) so we can put listen inside it to run database first.
    app.listen(5050, ()=> 
        console.log(`Server is up and running at port ${PORT}.`));
});


