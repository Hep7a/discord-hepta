import { WebSocketManager } from "../WebSocketManager";

export function guildMemberUpdate(ws: WebSocketManager, data: any) {
    ws.debug(`${data}`);
}