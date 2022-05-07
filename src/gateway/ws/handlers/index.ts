import { readSync } from "fs";
import { Client } from "../../../client/HeptaClient";
import { GatewayEvents, Payload } from "../../structures/WebSocket";
import { WebSocketManager } from "../WebSocketManager";
import { guildCreate } from "./guildCreate";
import { guildMemberUpdate } from "./guildMemberUpdate";
import { messageCreate } from "./messageCreate";
import { ready } from "./ready";

export const gatewayHandlers: { 
    [eventValue in GatewayEvents]: GatewayHandler
} = {
    READY: ready,
    GUILD_CREATE: guildCreate,
    MESSAGE_CREATE: messageCreate,
    GUILD_MEMBER_UPDATE: guildMemberUpdate
}

export type GatewayHandler = (ws: WebSocketManager, data: any) => void