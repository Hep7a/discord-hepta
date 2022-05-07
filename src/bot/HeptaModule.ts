import { Client } from "../client/HeptaClient";

export class HeptaModule {
    id: string;
    client: Client;

    constructor(id: string) {
        this.id = id
    }
}