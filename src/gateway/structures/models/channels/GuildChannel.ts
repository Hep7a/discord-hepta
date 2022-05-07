import { Client } from "../../../../client/HeptaClient";
import { ChannelData } from "../../types/Channel";
import { Guild } from "../Guild";
import { Channel } from "./Channel";

export class GuildChannel extends Channel {
    guild: Guild;
    guildID: string;
    name: string;
    position: number;
    nsfw: boolean;
    parentID: string;
    permissionOverwrites: any[] // cba

    constructor(client: Client, data: ChannelData, guild: Guild) {
        super(client, data);
        this.guild = guild;

        this.readFromData(data);
    }

    readFromData(data: ChannelData) {
        this.guildID = data.guild_id ?? this.guild.id ?? this.guildID;
        
        this.name = data.name ?? this.name;
        this.nsfw = data.nsfw ?? this.nsfw;
        this.parentID = data.parent_id ?? this.parentID;
        this.position = data.position ?? this.position;
    }
}