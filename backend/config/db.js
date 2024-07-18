import mongoose from "mongoose";

const connectDB = async () => {
    try{
        let conn = await mongoose.connect(process.env.MONGODB_URI); // // This process is used to fetch the value from env file using package.json >> server.
        console.log(`Connect to database at ${conn.connection.host}.`);
    }catch(err) {
        console.log(`Error wile connecting to database`, err.message);
        process.exit(1);
    }
};

export default connectDB;

