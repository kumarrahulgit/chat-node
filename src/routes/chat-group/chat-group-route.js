import express from 'express';
import { getChatGroups, createChatGroup, updateChatGroup, deleteChatGroup } from '../../modules/chat-group/chat-group.controller.js';
import { verifyUser } from '../../middleware/auth.js';

const chatGroupRouter = express();

chatGroupRouter.use(verifyUser);

chatGroupRouter.get("/", getChatGroups);
chatGroupRouter.post("/", createChatGroup);
chatGroupRouter.put("/:groupId", updateChatGroup);
chatGroupRouter.delete("/:groupId", deleteChatGroup);

export default chatGroupRouter;
