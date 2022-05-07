import { Client } from "../../../../client/HeptaClient";
import { ChannelData, ChannelType } from "../../types/Channel";
import { Base } from "../Base";

export class Channel extends Base {
    type: ChannelType;

    constructor(client: Client, data: ChannelData) {
        super(client, data);

        this.type = data.type;
    }
}