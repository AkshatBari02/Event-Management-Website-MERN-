import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
    // name,email,phoneno,event,message

    name:{
        type: String,
        required: [true, "Name Required!"],
        minLength: [3, "Name must contain at least 3 characters!"],
    },
    email:{
        type: String,
        required: [true, "Email Required!"],
        validate:[validator.isEmail, "Please provide a valid email!"],
    },
    mobileNumber:{
        type: String,
        required: [true, "Phone Number Required!"],
        minLength: [10, "Phone Number must contain at least 10 characters!"],
    },
    event:{
        type: String,
        required: [true, "Please select an event!"],
    },
    message:{
        type: String,
        required: [true, "Message Required!"],
        minLength: [10, "Message must contain at least 10 characters!"],
    }
})

export const Message = mongoose.model("Message", messageSchema);