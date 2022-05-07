import { ListenerManager } from "../ListenerManager";
import { Message } from "../../../gateway/structures/models/message/Message";
import { HeptaModule } from "../../HeptaModule";

export class Listener extends HeptaModule {
    event: string;
    emitter: string;
    handler: ListenerManager;

    constructor(event: string, emitter: string) {
        super(event);

        this.event = event;
        this.emitter = emitter;
    }

    exec(...args: any) {
        throw new Error("Put something in your exec function, dum dum.")
    }
}