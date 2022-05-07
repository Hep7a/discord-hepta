import { Mixin } from "ts-mixer";
import { Client } from "../../../../client/HeptaClient";
import { ChannelData, ChannelType } from "../../types/Channel";
import { Guild } from "../Guild";
import { Channel } from "./Channel";
import { GuildChannel } from "./GuildChannel";
import { TextChannel } from "./TextChannel";

export class GuildTextChannel extends Mixin(TextChannel, GuildChannel) {
    type: ChannelType.GUILD_TEXT;
    rateLimitPerUser: number;
    topic: string;
    lastMessageID: string;
    defaultAutoArchiveDuration: number;

    constructor(client: Client, data: ChannelData, guild: Guild) {
        super(client, data, guild);

        this.guild = guild;
        this.readFromData(data);
    }

    readFromData(data: ChannelData) {
        this.lastMessageID = data.last_message_id ?? this.lastMessageID;
        this.rateLimitPerUser = data.rate_limit_per_user ?? this.rateLimitPerUser;
        this.topic = data.topic ?? this.topic;
        this.defaultAutoArchiveDuration = data.default_auto_archive_duration ?? this.defaultAutoArchiveDuration;
    }
}