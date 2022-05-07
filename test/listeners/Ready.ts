import { Listener } from "../../src";

export class ReadyListener extends Listener {
    constructor() {
        super("ready", "client");
    }

    exec() {
        console.log("Ready!");
        /* 
        The problem is this event is called before the client is defined in the listener.
        */
    }
}