import { Message } from "../models/messageSchema.js";

export const sendMessage = async (req, res) => {
  try {
    const { name, email, mobileNumber, event, message } = req.body;
    if (!name || !email || !mobileNumber || !event || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill all the fields!",
      });
    }
    await Message.create({ name, email, mobileNumber, event, message });
    res.status(200).json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    if(error.name === "ValidationError"){
      let errorMessage = "";
      if(error.errors.name){
        errorMessage += error.errors.name.message + " "
      }
      if(error.errors.email){
        errorMessage += error.errors.email.message + " "
      }
      if(error.errors.mobileNumber){
        errorMessage += error.errors.mobileNumber.message + " "
      }
      if(error.errors.event){
        errorMessage += error.errors.event.message + " "
      }
      if(error.errors.message){
        errorMessage += error.errors.message.message + " "
      }
      return res.status(400).json({
        success: false,
        message: errorMessage,
      });
    }


    return res.status(500).json({
        success: false,
        message: "Unknown Error",
      });
  }
};
