import { Client } from "../../../../client/HeptaClient";
import { ChannelData } from "../../types/Channel";
import { Message } from "../message/Message";
import { Channel } from "./Channel";

export class TextChannel extends Channel {
    messages: Map<string, Message> = new Map();

    lastMessageID: string;
    lastPinTimestamp: string | number;

    constructor(client: Client, data: ChannelData) {
        super(client, data);
    }

    readFromData(data: ChannelData) {
        this.lastMessageID = data.last_message_id ?? this.lastMessageID;
        this.lastPinTimestamp = data.last_pin_timestamp ?? this.lastPinTimestamp;
    }

    async send(content: string) {
        const res = await this.client.rest.postMessage(this.id, content);
        console.log(res);
        return new Message(this.client, res, this);
    }
}