import { platform } from "os";
import { GuildData } from "./types/Guild";
import { UserData } from "./types/User";

export enum OPCode {
    DISPATCH = 0,
    HEARTBEAT = 1,
    IDENTIFY = 2,
    INVALID_SESSION = 9,
    HELLO = 10,
    HEARTBEAT_ACK = 11
}

export interface Payload {
    t: string | any;
    s: number | any;
    op: OPCode;
    d: any;
}

export const Heartbeat: Payload = {
    t: undefined,
    s: undefined,
    op: OPCode.HEARTBEAT,
    d: undefined
}

export const Identify: Payload = {
    t: undefined,
    s: undefined,
    op: OPCode.IDENTIFY,
    d: {
        token: undefined,
        properties: {
            $os: platform(),
            $browser: "hepta",
            $device: "hepta"
        },
        intents: 0
    }
}

export interface ReadyData {
    v: number;
    user: UserData;
    guilds: GuildData[];
    session_id: string;
    application: any; // ApplicationData
}

export enum Intents {
    GUILDS = 1 << 0,
    GUILD_MEMBERS = 1 << 1,
    GUILD_BANS = 1 << 2,
    GUILD_EMOJIS_AND_STICKERS = 1 << 3,
    GUILD_INTEGRATIONS = 1 << 4,
    GUILD_WEBHOOKS = 1 << 5,
    GUILD_INVITES = 1 << 6,
    GUILD_VOICE_STATES = 1 << 7,
    GUILD_PRESENCES = 1 << 8,
    GUILD_MESSAGES = 1 << 9,
    GUILD_MESSAGE_REACTIONS = 1 << 10,
    GUILD_MESSAGE_TYPING = 1 << 11,
    DIRECT_MESSAGES = 1 << 12,
    DIRECT_MESSAGE_REACTIONS = 1 << 13,
    DIRECT_MESSAGE_TYPING = 1 << 14,
    GUILD_SCHEDULED_EVENTS = 1 << 16,
}

export enum GatewayEvents {
    READY = "READY",
    GUILD_CREATE = "GUILD_CREATE",
    MESSAGE_CREATE = "MESSAGE_CREATE",
    GUILD_MEMBER_UPDATE = "GUILD_MEMBER_UPDATE"
}