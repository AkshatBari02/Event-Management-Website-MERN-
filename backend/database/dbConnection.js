import mongoose from "mongoose";

export const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URI,{dbName:"EVENT_MANAGEMENT_WEBSITE"}).then(()=>{
        console.log("Connected to database!")
    })
    .catch((err)=>{
        console.log("Some error ocurred while connecting to database",err);
    })
}