import { Client } from "../../../../client/HeptaClient";
import { ChannelData, ChannelType } from "../../types/Channel";
import { Guild } from "../Guild";
import { Channel } from "./Channel";
import { GuildChannel } from "./GuildChannel";

export class GuildVoiceChannel extends GuildChannel {
    name: string;
    type: ChannelType.GUILD_VOICE;
    bitrate: number;
    userLimit: number;
    rtcRegion: string;

    constructor(client: Client, data: ChannelData, guild: Guild) {
        super(client, data, guild);
        this.readFromData(data);
    }

    readFromData(data: ChannelData) {
        this.bitrate = data.bitrate ?? this.bitrate;
        this.name = data.name ?? this.name;
        this.rtcRegion = data.rtc_region ?? this.rtcRegion;
        this.userLimit = data.user_limit ?? this.userLimit;
    }
}