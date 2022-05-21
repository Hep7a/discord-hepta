# discord-hepta

A Discord library and bot framework for use in my discord bots.

# Usages

## Function-Based:
Generally for beginner developers or for those who are lazy and just want stuff done, so my personal favourite. Inspired by [discordeno](https://github.com/discordeno/discordeno).

```typescript
import { createClient } from "discord-hepta";

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
```

## Class-Based:
Mimics the classic [discord.js](https://github.com/discordjs/discord.js) bot. Inspired by [discord-akairo](https://github.com/discord-akairo/discord-akairo).
```typescript
// Client
import { Client } from "discord-hepta";

export const client = new Client({
    token: token,
    intents: 513,
    prefix: "h7"
});

client.connect();

client.registerCommand(new HiCommand());
```
```typescript
// Command
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
```
## Command and Listener Handler
A command and listener handler to make creating commands and listeners easier. Also inspired by [discord-akairo](https://github.com/discord-akairo/discord-akairo).
```typescript
export const client = createClient({
    token: token,
    intents: 513,
    prefix: "h7"
}, {
    debug: true,
    command: {
        directory: join(__dirname, "commands")
    },
    listener: {
        directory: join(__dirname, "listeners")
    }
});

client.connect();
```

