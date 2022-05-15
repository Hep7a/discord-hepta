import { Channel } from "../../structures/models/channels/Channel";
import { DMChannel } from "../../structures/models/channels/DMChannel";
import { TextChannel } from "../../structures/models/channels/TextChannel";
import { Message } from "../../../gateway/structures/models/message/Message";
import { MessageData } from "../../structures/types/Message";
import { Payload } from "../../structures/WebSocket";
import { WebSocketManager } from "../WebSocketManager";

export function messageCreate(ws: WebSocketManager, data: MessageData) {
    ws.debug(`${data}`);
    let channel = ws.client.channels.get(data.channel_id);
    if (!channel) {
        channel = new Channel(ws.client, {
            type: 1,
            id: data.channel_id
        });

        ws.client.channels.set(data.channel_id, channel);
    } else channel

    let message: Message = new Message(ws.client, data, channel);
    message.channel.messages.set(message.id, message);

    ws.client.emit('messageCreate', message);
}