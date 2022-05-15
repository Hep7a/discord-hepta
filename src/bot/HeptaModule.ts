import { Client } from "../client/HeptaClient";
import { ModuleManager } from "./ModuleManager";

export class HeptaModule {
    id: string;
    client: Client;
    manager: ModuleManager

    constructor(id: string) {
        this.id = id
    }
}