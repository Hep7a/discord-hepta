import EventEmitter = require("events");
import { Client } from "../../client/HeptaClient";
import { ModuleManager } from "../ModuleManager";
import { Listener } from "./structures/Listener";

export interface ListenerManagerOptions {
    directory: string;
}

export class ListenerManager extends ModuleManager {
    listeners: Map<string, Listener> = new Map();
    emitters: Map<string, EventEmitter> = new Map();
    client: Client;

    constructor(client: Client, options: ListenerManagerOptions) {
        super(client, options);
        this.client = client;

        this.emitters.set("client", this.client);

        this.loadDir();
    }

    register(listener: Listener) {
        super.register(listener);

        const emitter = this.emitters.get(listener.emitter);
        if (!(emitter instanceof EventEmitter)) return;
        emitter.on(listener.event, listener.exec);

        this.listeners.set(listener.id, listener);
        return this;
    }
}