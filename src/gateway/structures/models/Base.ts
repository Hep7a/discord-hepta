import { Client } from "../../../client/HeptaClient";

export class Base {
    client!: Client;
    id!: string;

    constructor(client: Client, data: any) {
        Object.defineProperty(this, "client", {
            value: client,
            enumerable: false
        });

        if (data !== undefined) this.id = data.id ?? this.id;
    }
}