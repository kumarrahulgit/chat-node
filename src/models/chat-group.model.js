import mongoose from "mongoose";

const chatGroupSchema = new mongoose.Schema({
    name: String,
    owner: mongoose.SchemaTypes.ObjectId,
    members: [mongoose.SchemaTypes.ObjectId]
}, {
    timestamps: true
});

const ChatGroup = mongoose.model("ChatGroup", chatGroupSchema, "chat-groups");

export default ChatGroup;