import WebSocket from "ws";
import { Client } from "../../client";
import { Payload, OPCode, Heartbeat, Identify } from "../structures/WebSocket";
import { gatewayHandlers } from "./handlers";

export class WebSocketManager {
    client!: Client;
    socket!: WebSocket;
    gatewayURL: string = "wss://gateway.discord.gg/?v=8&encoding=json";
    heartbeatInterval: number;
    sequenceID: number;
    ping: number = 0;
    lastPingTimestamp: number = 0;

    constructor(client: Client) {
        this.client = client;
    }

    debug(msg: string) {
        this.client.debug("Gateway", msg);
    }

    onOpen() {
        this.debug("Connecting...")
    }

    async onMessage(event: WebSocket.MessageEvent) {
        const packet = JSON.parse(event.data.toString());

        const { t: gatewayEvent, s, op, d }: Payload = packet;
        this.debug(`${gatewayEvent} ${op}`);

        switch (op) {
            case OPCode.DISPATCH:
                this.sequenceID = s;

                const handler = gatewayHandlers[gatewayEvent];

                try {
                    await handler(this, d)
                } catch (e) {
                    console.log(e);
                }

                break;
            case OPCode.HELLO:
                const { heartbeat_interval } = d;
                this.heartbeatInterval = heartbeat_interval;

                setInterval(() => {
                    this.heartbeat(s);
                    this.debug(`Heartbeat sent at an interval of ${this.heartbeatInterval}ms.`);
                }, this.heartbeatInterval);

                await this.identify(this.client.config.token, this.client.config.intents);
                break;

            case OPCode.INVALID_SESSION:
                throw new Error("Identify payload invalid.");
            case OPCode.HEARTBEAT_ACK:
                this.ping = Date.now() - this.lastPingTimestamp;
                this.debug(`Heartbeat recieved in ${this.ping}ms.`)
        }
    }

    onClose({ code }: CloseEvent) {
        this.debug(code.toString());
        switch (code) {
            case 4014:
                throw new Error("[Gateway]: DISALLOWED_INTENTS\nDouble check your intents, you may have defined an intent you're not allowed to use.")
        }
    }

    onError(event: WebSocket.ErrorEvent) {
        this.debug(event.message);
    }

    init(): void {
        this.socket = new WebSocket(this.gatewayURL)

        this.socket.onopen = this.onOpen.bind(this);
        this.socket.onmessage = this.onMessage.bind(this);
        this.socket.onclose = this.onClose.bind(this);
        this.socket.onerror = this.onError.bind(this);
    }
    
    heartbeat(sequenceID: number) {
        Heartbeat.d = sequenceID;
        this.socket.send(JSON.stringify(Heartbeat));
        this.lastPingTimestamp = Date.now();
    }

    async identify(token: string, intents: number) {
        Identify.d.token = token;
        Identify.d.intents = intents;
        this.debug(`Identifying client...`);
        return this.socket.send(JSON.stringify(Identify));
    }
}
