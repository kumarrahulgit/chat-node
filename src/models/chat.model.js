import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
    groupId: mongoose.SchemaTypes.ObjectId,
    chats: [{
        senderId: mongoose.SchemaTypes.ObjectId,
        message: String,
        likedBy: [mongoose.SchemaTypes.ObjectId],
        createdAt: mongoose.SchemaTypes.Date
    }]
}, {
    timestamps: true
});

const Chat = mongoose.model("Chat", chatSchema, "chat-groups");

export default Chat;