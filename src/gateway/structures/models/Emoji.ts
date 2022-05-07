import { Client } from "../../../client/HeptaClient";
import { EmojiData } from "../types/Emoji";
import { Base } from "./Base";
import { Guild } from "./Guild";
import { Role } from "./Role";
import { User } from "./User";

export class Emoji extends Base {
    guild?: Guild;
    name: string;
    roles?: string[]
    creator?: User;
    requireColons?: boolean;
    isManaged?: boolean;
    isAnimated?: boolean;
    isAvailable?: boolean;

    constructor(client: Client, data: EmojiData, guild: Guild) {
        super(client, data);
        this.guild = guild;

        this.readFromData(data);
        if (data.user !== undefined) this.creator = new User(client, data.user);
    }

    private readFromData(data: EmojiData) {
        this.isAnimated = data.animated ?? this.isAnimated;
        this.isAvailable = data.available ?? this.isAvailable;
        this.isManaged = data.managed ?? this.isManaged;
        this.requireColons = data.require_colons ?? this.requireColons;
        this.roles = data.roles ?? this.roles;
    }
}