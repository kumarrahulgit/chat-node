import mongoose from "mongoose";

const chatGroupSchema = new mongoose.Schema({
    name: String,
    owner: mongoose.SchemaTypes.ObjectId,
    members: {
        type: [mongoose.SchemaTypes.ObjectId],
        default: []
    }
}, {
    timestamps: true
});

const ChatGroup = mongoose.model("ChatGroup", chatGroupSchema, "chatGroups");

export default ChatGroup;