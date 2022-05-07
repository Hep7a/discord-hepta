import { Guild, Listener } from "../../src";

export class GuildCreateListener extends Listener {
    constructor() {
        super("guildCreate", "client");
    }

    exec(guild: Guild): void {
        console.log(guild.name, guild.id);
    }
}