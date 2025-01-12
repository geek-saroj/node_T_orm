import { Router } from 'express';
import { ChatController } from './socket.controller';


const router = Router();

router.get('/messages', (req, res) => {
    const messages = ChatController.getMessages();
    res.json(messages);
});

export default router;
