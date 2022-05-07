import { createClient, registerCommand, registerListener } from "../src";
import { Command } from "../src/bot/commands/structures/Command";
import { Listener } from "../src/bot/listeners/structures/Listener";
import { Client } from "../src/client/HeptaClient";
import { Message } from "../src/gateway/structures/models/message/Message";
import { HiCommand } from "./commands/Hi";
import { PingCommand } from "./commands/Ping";
import { token } from "./Config";
import { GuildCreateListener } from "./listeners/GuildCreate";
import { MessageCreateListener } from "./listeners/MessageCreate";
import { ReadyListener } from "./listeners/Ready";

const client = createClient({
    token: token,
    intents: 515,
    prefix: "h7"
}, {
    debug: true
});
client.connect();

client.on("ready", () => {
    console.log("test")
})

registerCommand(client, new HiCommand());
registerCommand(client, new PingCommand());

registerListener(client, new ReadyListener());
registerListener(client, new MessageCreateListener());
registerListener(client, new GuildCreateListener());