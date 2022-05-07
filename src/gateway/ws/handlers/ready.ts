import { Client } from "../../../client/HeptaClient";
import { User } from "../../structures/models/User";
import { Payload, ReadyData } from "../../structures/WebSocket";
import { WebSocketManager } from "../WebSocketManager";

export function ready(ws: WebSocketManager, data: ReadyData) {
    ws.client.user = new User(ws.client, data.user);

    ws.client.emit('ready');
}