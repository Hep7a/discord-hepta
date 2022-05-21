import { fstat, readdirSync } from "fs";
import { Client } from "../../client/HeptaClient";
import { Message } from "../../gateway/structures/models/message/Message";
import { ModuleManager, ModuleManagerOptions } from "../ModuleManager";
import { Command } from "./structures/Command";

export interface CommandManagerOptions {
    directory: string;
    prefix?: string;
}

export class CommandManager extends ModuleManager {
    commands: Map<string, Command> = new Map();
    client: Client;

    prefix: string;

    constructor(client: Client, options?: CommandManagerOptions) {
        super(client, options);
        this.client = client;
        
        this.prefix = options?.prefix ?? client.config.prefix;

        this.loadDir();
        this.setup();
    }

    debug(msg: any) {
        this.client.debug("Command", msg)
    }

    setup() {
        this.client.once('ready', () => {
            this.client.on('messageCreate', (message: Message) => {
                if (message.content.startsWith(this.prefix)) {
                    const args = message.content.split(" ");
                    this.debug(args);
                    if (this.commands.has(args[1])) this.commands.get(args[1]).exec(message);
                }
            })
        })
    }

    register(command: Command) {
        super.register(command);
        this.commands.set(command.id, command);

        return this;
    }
}