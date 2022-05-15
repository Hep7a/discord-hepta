import { readdirSync } from "fs";
import { Client } from "../client";
import { HeptaModule } from "./HeptaModule";

export interface ModuleManagerOptions {
    directory: string;
}

export class ModuleManager {
    modules: Map<string, HeptaModule> = new Map();
    client: Client;

    directory: string;

    constructor(client: Client, options: ModuleManagerOptions) {
        this.client = client;
        this.directory = options.directory;
    }

    loadDir() {
        const modFiles = readdirSync(this.directory);
        console.log(modFiles);
        for (const file of modFiles) {
            const modClass = require(`${this.directory}/${file}`).default
            console.log(modClass);
            const module = new modClass();
            console.log(`Module found: ${module.id}`);
            this.register(module);
        }

        return this;
    }

    register(module: HeptaModule) {
        module.manager = this;
        module.client = this.client;

        this.modules.set(module.id, module);

        return this;
    }
}