import EventEmitter = require("events");
import { Client } from "../../client/HeptaClient";
import { Listener } from "./structures/Listener";

export class ListenerManager {
    listeners: Map<string, Listener> = new Map();
    emitters: Map<string, EventEmitter> = new Map();
    client: Client;

    constructor(client: Client) {
        this.client = client;

        this.emitters.set("client", this.client);
    }

    register(listener: Listener) {
        listener.handler = this;
        listener.client = this.client;

        const emitter = this.emitters.get(listener.emitter);
        if (!(emitter instanceof EventEmitter)) return;
        emitter.on(listener.event, listener.exec);

        this.listeners.set(listener.id, listener);
        return this;
    }
}