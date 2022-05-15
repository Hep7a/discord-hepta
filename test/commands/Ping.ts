import { Command, Message } from "../../src";

export default class PingCommand extends Command {
    constructor() {
        super("ping", {
            help: {
                description: "How fast is our gateway connection right now?",
                usage: "h7 ping",
                examples: [
                    "h7 ping"
                ]
            }
        });
    }

    exec(message: Message) {
        return message.channel.send(`Ping: ${this.client.ws.ping}ms`)
    }
}