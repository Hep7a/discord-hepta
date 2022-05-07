import { Command, Listener } from "./bot";
import { Client, ClientConfig, ClientOptions } from "./client";

export function createClient(config: ClientConfig, options?: ClientOptions) {
    const client = new Client(config, options);
    return client;
}

export function registerCommand(client: Client, command: Command): Client {
    client.command.register(command);
    return client;
}

export function registerListener(client: Client, listener: Listener): Client {
    client.listener.register(listener);
    return client;
}

export * from "./bot";
export * from "./client";
export * from "./gateway";
export * from "./rest";