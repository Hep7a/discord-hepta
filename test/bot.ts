import { join } from "path";
import { createClient, registerCommand, registerListener } from "../src";
import { Command } from "../src/bot/commands/structures/Command";
import { Listener } from "../src/bot/listeners/structures/Listener";
import { Client } from "../src/client/HeptaClient";
import { Message } from "../src/gateway/structures/models/message/Message";
import { token } from "./Config";

const client = createClient({
    token: token,
    intents: 513,
    prefix: "h7"
}, {
    command: {
        directory: join(__dirname, "commands")
    },
    listener: {
        directory: join(__dirname, "listeners")
    },
    debug: true
});
client.connect();