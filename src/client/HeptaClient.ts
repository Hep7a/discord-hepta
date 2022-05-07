import EventEmitter = require("events");
import { Guild, GuildMember, Message, User, WebSocketManager } from "../gateway";
import { CommandManager, ListenerManager } from "../bot";
import { RestAPIManager } from "../rest";

export interface ClientEvents {
    guildCreate: (guild: Guild) => void;
    guildMemberUpdate: (oldMember: GuildMember, newMember: GuildMember) => void;
    messageCreate: (message: Message) => void;
    ready: () => void;
}

export interface ClientConfig {
    token: string;
    intents: number;
    prefix: string;
}

export interface ClientOptions {
    debug?: boolean;
}

export declare interface Client {
    user: User;
    command: CommandManager;
    listener: ListenerManager;
    ws: WebSocketManager;
    rest: RestAPIManager;
    guilds: Map<string, Guild>;
    channels: Map<string, any>;

    on<K extends keyof ClientEvents>(
        event: K,
        listener: ClientEvents[K]
    ): this

    off<K extends keyof ClientEvents>(
        event: K,
        listener: ClientEvents[K]
    ): this

    once<K extends keyof ClientEvents>(
        event: K,
        listener: ClientEvents[K]
    ): this

    emit<K extends keyof ClientEvents>(
        event: K,
        ...args: any[]
    ): boolean
}

export class Client extends EventEmitter {
    private _token: string;
    get token() {
        return this._token
    }

    set token(token: string) {
        this._token = token;
    }

    config: ClientConfig;
    options: ClientOptions;

    ws: WebSocketManager;
    rest: RestAPIManager;

    command: CommandManager;
    listener: ListenerManager;

    user: User;

    public guilds: Map<string, Guild>;
    public channels: Map<string, any>;

    constructor(config: ClientConfig, options?: ClientOptions) {
        super();
        this.config = config;
        this.options = options;

        this.token = config.token;
        this.rest = new RestAPIManager(this, this.token);
        this.rest.token = config.token ?? this.token;

        this.ws = new WebSocketManager(this);

        this.guilds = new Map();
        this.channels = new Map();

        this.command = new CommandManager(this);
        this.listener = new ListenerManager(this);
    }

    connect() {
        this.ws.init();
    }

    debug(tag: string, msg: string) {
        if (this.options.debug === false) return;
        console.log(`[${tag}]: ${msg}`);
    }
}