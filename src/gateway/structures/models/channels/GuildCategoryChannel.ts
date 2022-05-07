import { Client } from "../../../../client/HeptaClient";
import { ChannelData, ChannelType } from "../../types/Channel";
import { Guild } from "../Guild";
import { Channel } from "./Channel";
import { GuildChannel } from "./GuildChannel";

export class GuildCategoryChannel extends GuildChannel {
    type: ChannelType.GUILD_CATEGORY;

    constructor(client: Client, data: ChannelData, guild: Guild) {
        super(client, data, guild);
    }
}