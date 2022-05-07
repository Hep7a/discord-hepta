import { Client } from "../../client/HeptaClient";
import { DMChannel } from "../structures/models/channels/DMChannel";
import { GuildCategoryChannel } from "../structures/models/channels/GuildCategoryChannel";
import { GuildTextChannel } from "../structures/models/channels/GuildTextChannel";
import { GuildVoiceChannel } from "../structures/models/channels/GuildVoiceChannel";
import { Guild } from "../structures/models/Guild";
import { ChannelData, ChannelType } from "../structures/types/Channel";
import { GuildChannels } from "../structures/types/Guild";

export async function resolveGuildChannels(client: Client, guild: Guild) {
    const channelMap: Map<string, GuildChannels> = new Map();
    const res = await client.rest.fetchGuildChannels(guild.id);

    for (const channel of res) {
        switch (channel.type) {
            case ChannelType.GUILD_TEXT:
                channelMap.set(channel.id, new GuildTextChannel(client, channel, guild));
                break;
            
            case ChannelType.GUILD_VOICE:
                channelMap.set(channel.id, new GuildVoiceChannel(client, channel, guild));
                break;

            case ChannelType.GUILD_CATEGORY:
                channelMap.set(channel.id, new GuildCategoryChannel(client, channel, guild));
                break;
        }
    }

    return channelMap;
}

export function buildChannelFromType(client: Client, data: ChannelData, guild?: Guild) {
    switch (data.type) {
        case ChannelType.DM:
            return new DMChannel(client, data);
            
        case ChannelType.GUILD_TEXT:
            return new GuildTextChannel(client, data, guild);
            
        case ChannelType.GUILD_CATEGORY:
            return new GuildCategoryChannel(client, data, guild);

        case ChannelType.GUILD_VOICE:
            return new GuildVoiceChannel(client, data, guild);
    }
}