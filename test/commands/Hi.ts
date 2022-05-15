import { Command } from "../../src";
import { Message } from "../../src";

export default class HiCommand extends Command {
    constructor() {
        super("hi", {
            aliases: ["hello"],
            help: {
                description: "Hi!",
                usage: "h7 hi",
                examples: [
                    "h7 hi"
                ]
            }
        });
    }

    exec(message: Message) {
        message.channel.send("Hi!")
    }
}