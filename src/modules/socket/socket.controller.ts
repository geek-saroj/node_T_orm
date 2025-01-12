import { Socket } from 'socket.io';
import { Message } from '../../config/models/message';


export class ChatController {
    private static messages: Message[] = [];

    public static addMessage(socket: Socket, username: string, text: string) {
        const message: Message = { username, text };
        this.messages.push(message);
        socket.broadcast.emit('message', message);
    }

    public static getMessages() {
        return this.messages;
    }
}
