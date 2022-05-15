import { GuildTextChannel, Listener } from "../../src";
import { Message } from "../../src";

export default class MessageCreateListener extends Listener {
    constructor() {
        super("messageCreate", "client");
    }

    exec(message: Message): void {
        if (message.author.isBot) return;
        if (message.content === "bonk bonk") {
            message.channel.send("bonk bonk");
        }

        console.log(`${message.content} ${message.guild.name} ${(message.channel as GuildTextChannel).name}`)

        const args: string[] = message.content.split(" ");
        if (args[0] === "getmember") {
            // const member = message.mentions.users.first;
        }
    }
}