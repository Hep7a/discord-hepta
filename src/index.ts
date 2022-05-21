import { Command, CommandOptions, Listener } from "./bot";
import { Client, ClientConfig, ClientOptions } from "./client";
import { Message } from "./gateway";

export function createClient(config: ClientConfig, options?: ClientOptions) {
    const client = new Client(config, options);
    return client;
}

export * from "./bot";
export * from "./client";
export * from "./gateway";
export * from "./rest";