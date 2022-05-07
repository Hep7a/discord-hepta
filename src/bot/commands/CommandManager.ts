import { Client } from "../../client/HeptaClient";
import { Message } from "../../gateway/structures/models/message/Message";
import { Command } from "./structures/Command";

export class CommandManager {
    commands: Map<string, Command> = new Map();
    client: Client;

    constructor(client: Client) {
        this.client = client;

        this.setup();
    }

    setup() {
        this.client.once('ready', () => {
            this.client.on('messageCreate', (message: Message) => {
                if (message.content.startsWith(this.client.config.prefix)) {
                    const args = message.content.split(" ");
                    console.log(args);
                    if (this.commands.has(args[1])) this.commands.get(args[1]).exec(message);
                }
            })
        })
    }

    register(command: Command) {
        command.handler = this;
        command.client = this.client;
        this.commands.set(command.id, command);
        return this;
    }
}