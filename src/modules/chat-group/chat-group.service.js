import mongoose from "mongoose";
import ChatGroup from "../../models/chat-group.model.js";
import { filterObject } from "../../utils/object.util.js";

export async function createChatGroupService(chatGroupData) {
    try {
        const { name, userId } = chatGroupData;

        const chatGroup = await ChatGroup.create({
            name,
            owner: new mongoose.Types.ObjectId(userId)
        });

        return chatGroup;
    } catch (ex) {
        return Promise.reject(ex);
    }
}

export async function getChatGroupsService() {
    try {
        const chatGroups = await ChatGroup.find({});

        return chatGroups;
    } catch (ex) {
        return Promise.reject(ex);
    }
}

export async function updateChatGroupService(chatGroupId, chatGroupData) {
    try {
        const data = filterObject(chatGroupData);

        const chatGroup = await ChatGroup.findByIdAndUpdate(
            chatGroupId,
            data,
            {
                new: true
            }
        );

        return chatGroup;
    } catch (ex) {
        return Promise.reject(ex);
    }
}

export async function deleteChatGroupService(chatGroupId) {
    try {
        const chatGroup = await ChatGroup.findByIdAndDelete(chatGroupId);

        return chatGroup;
    } catch (ex) {
        return Promise.reject(ex);
    }
}