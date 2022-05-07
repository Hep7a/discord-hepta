import { Emoji } from "../../structures/models/Emoji";
import { Guild } from "../../structures/models/Guild";
import { Role } from "../../structures/models/Role";
import { GuildData } from "../../structures/types/Guild";
import { buildChannelFromType, resolveGuildChannels } from "../../util/resolvers";
import { WebSocketManager } from "../WebSocketManager";

export async function guildCreate(ws: WebSocketManager, data: GuildData) {
    let guild = ws.client.guilds.get(data.id) as unknown as Guild;
    if (guild === undefined) {
        guild = new Guild(ws.client, data);
        ws.client.guilds.set(guild.id, guild);
    }

    for (const role of data.roles) {
        guild.roles.set(role.id, new Role(ws.client, role, guild));
    }

    for (const emoji of data.emojis) {
        guild.emojis.set(emoji.id, new Emoji(ws.client, emoji, guild));
    }

    for (const channel of data.channels) {
        channel.guild_id = data.id;
        ws.client.channels.set(channel.id, buildChannelFromType(ws.client, channel, guild));
    }

    guild.channels = await resolveGuildChannels(ws.client, guild);
    
    ws.client.emit('guildCreate', guild);
}