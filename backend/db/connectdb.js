import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDatabase = async () =>{
    try{
        await mongoose.connect("mongodb+srv://harshdomadiya1014:xlw7ubVtOn4gvcPA@cluster0.v2gprql.mongodb.net/chat-app-db?retryWrites=true&w=majority");
        console.log("connect db successfully");
         
    }catch(e){
        console.log("error from dbconnection:"+e.message);
    }
}

export default connectDatabase;