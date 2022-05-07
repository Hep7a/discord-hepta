import fetch from "node-fetch";
import { Client } from "../client/HeptaClient";
import { API, Endpoints, headers } from "./structures/RestAPI";
import { ChannelData } from "../gateway/structures/types/Channel";

export class RestAPIManager {
    client: Client;
    private _token: string;

    get token(): string {
        return this._token;
    }

    set token(token: string) {
        this._token = token;
        headers.Authorization = `Bot ${this.token}`
    }

    constructor(client: Client, token: string) {
        this.client = client;
        this.token = token;
    }

    async fetchGuildChannels(guildID: string): Promise<ChannelData[]> {
        const res = await fetch(`${API}/${Endpoints.GUILDS}/${guildID}/${Endpoints.CHANNELS}`, {
            headers
        });
    
        return res.json() as unknown as ChannelData[];
    }

    async postMessage(channelID: string, content: string) {
        const payload = {
            content,
            tts: false
        }

        const response = await fetch(`${API}/${Endpoints.CHANNELS}/${channelID}/${Endpoints.MESSAGES}`, {
            method: "POST",
            headers,
            body: JSON.stringify(payload)
        });

        return response.json();
    }
}