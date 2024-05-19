
import mongoose from "mongoose";

type ConnectionObject={
    isConnected?:number
}

const connection:ConnectionObject={}

async function dbConnect():Promise<void>{
    if(connection.isConnected){
        console.log("ALready Connected to DB")
        return ;
    }
    try {
        const db= await mongoose.connect(process.env.MONGODB_URI||'',{})
        connection.isConnected=db.connection[0].readyState
        console.log("DB Connected")
    } catch (error) {
        console.log("DB Connection Failed ",error)
        process.exit();
    }
}
export default dbConnect;