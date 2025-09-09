import httpStatus from "../../utils/httpStatus.js";
import { createChatGroupService, deleteChatGroupService, getChatGroupsService, updateChatGroupService } from "./chat-group.service.js";

export async function createChatGroup(req, res) {
    try {
        const userId = req.user.id;
        const chatGroup = await createChatGroupService({ ...req.body, userId });

        return res.status(httpStatus.SUCCESS).json({
            message: "Chat group created",
            data: chatGroup
        });
    } catch (e) {
        console.log(e)
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: 'Server Error!' });
    }
}

export async function updateChatGroup(req, res) {
    try {
        const groupId = req.params.groupId;
        const chatGroup = await updateChatGroupService(groupId, req.body);

        return res.status(httpStatus.SUCCESS).json({
            message: "Chat group updated",
            data: chatGroup
        });
    } catch (e) {
        console.log(e)
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: 'Server Error!' });
    }
}

export async function getChatGroups(_, res) {
    try {
        const chatGroups = await getChatGroupsService();

        return res.status(httpStatus.SUCCESS).json({
            message: 'Chat groups',
            data: chatGroups
        });
    } catch (e) {
        console.log(e)
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: 'Server Error!' });
    }
}

export async function deleteChatGroup(req, res) {
    try {
        const groupId = req.params.groupId;
        const chatGroup = await deleteChatGroupService(groupId);

        return res.status(httpStatus.SUCCESS).json({
            message: "Chat group updated",
            data: chatGroup
        });
    } catch (e) {
        console.log(e)
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: 'Server Error!' });
    }
}