import { CommandManager } from "../CommandManager";
import { Message } from "../../../gateway/structures/models/message/Message";
import { HeptaModule } from "../../HeptaModule";
import { CommandOptions } from "./CommandOptions";

export abstract class Command extends HeptaModule {
    options: CommandOptions;
    handler: CommandManager;

    constructor(id: string, options?: CommandOptions) {
        super(id);

        this.options = options;
    }

    exec(message: Message): any;
    exec(message: Message, args: any): any;
    exec() {
        throw new Error("Not implemented.")
    }
}