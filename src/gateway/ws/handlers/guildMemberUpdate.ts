import { WebSocketManager } from "../WebSocketManager";

export function guildMemberUpdate(ws: WebSocketManager, data: any) {
    console.log(data);
}