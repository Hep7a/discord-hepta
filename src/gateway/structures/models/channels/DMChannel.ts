import { Client } from "../../../../client/HeptaClient";
import { ChannelData } from "../../types/Channel";
import { Channel } from "./Channel";

export class DMChannel extends Channel {
    constructor(client: Client, data: ChannelData) {
        super(client, data);
    }
}