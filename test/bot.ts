import { join } from "path";
import { createClient } from "../src";
import { Command } from "../src/bot/commands/structures/Command";
import { Listener } from "../src/bot/listeners/structures/Listener";
import { Client } from "../src/client/HeptaClient";
import { Message } from "../src/gateway/structures/models/message/Message";
import { token } from "./Config";

export const client = createClient({
    token: token,
    intents: 513,
    prefix: "h7"
}, {
    debug: true
});

client.connect();


const testCommand = client.createCommand("test", (message) => {
    message.channel.send("Hello!")
})
client.registerCommand(testCommand);