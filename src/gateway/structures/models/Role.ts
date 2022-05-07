import { Client } from "../../../client/HeptaClient";
import { RoleData } from "../types/Role";
import { Base } from "./Base";
import { Guild } from "./Guild";

export class Role extends Base {
    guild: Guild;
    name: string;
    color: number;
    hoist: boolean; // isPinned
    icon?: string;
    emoji?: string;
    position: number;
    permissions: string;
    isManaged: boolean;
    mentionable: boolean;

    tags: RoleTag; // leave for now

    constructor(client: Client, data: RoleData, guild: Guild) {
        super(client, data);

        this.guild = guild;
        this.readFromData(data)
    }

    private readFromData(data: RoleData) {
        this.color = data.color ?? this.color;
        this.emoji = data.unicode_emoji ?? this.emoji;
        this.hoist = data.hoist ?? this.hoist;
        this.icon = data.icon ?? this.icon;
        this.isManaged = data.managed ?? this.isManaged;
        this.mentionable = data.mentionable ?? this.mentionable;
        this.name = data.name ?? this.name;
        this.permissions = data.permissions ?? this.permissions;
        this.position = data.position ?? this.position;
    }
}

export interface RoleTag {
    botID: string;
    integrationID: string;
    isPremiumSubscriber?: boolean;
}