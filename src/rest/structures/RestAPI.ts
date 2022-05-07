export const API: string = "https://discord.com/api/v8" // choose version

export enum Endpoints {
    GUILDS = "guilds",
    CHANNELS = "channels",
    MESSAGES = "messages"
}

export const headers = {
    "Authorization": "",
    "Content-Type": "application/json"
}