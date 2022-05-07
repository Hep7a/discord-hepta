import { Client } from "../../../client/HeptaClient";
import { GuildMemberData } from "../types/GuildMember";
import { Base } from "./Base";
import { Role } from "./Role";
import { User } from "./User";
import { Guild } from "./Guild";

export class GuildMember extends Base {
    guild: Guild;

    avatar: string;
    timeoutUntil: string;
    isDeaf: boolean;
    joinedAt: string;
    isMuted: boolean;
    nick: string;
    isPending: boolean;
    permissions: string;
    premiumSince: string;
    roles: Map<string, Role> = new Map();
    user: User;

    constructor(client: Client, guild: Guild, data?: GuildMemberData) {
        super(client, data);
        this.guild = guild;

        if (data?.user !== undefined) this.user = new User(this.client, data.user)

        this.readFromData(data);
        
        if (data.roles !== undefined && this.guild !== undefined) {
            for (const roleID of data.roles) {
                const role = this.guild.roles.get(roleID);
                this.roles.set(role.id, role);
            }
        }
    }

    private readFromData(data: GuildMemberData) {
        this.avatar = data.avatar ?? this.avatar;
        this.timeoutUntil = data.communication_disabled_until ?? this.timeoutUntil;
        this.isDeaf = data.deaf ?? this.isDeaf;
        this.joinedAt = data.joined_at ?? this.joinedAt;
        this.isMuted = data.mute ?? this.isMuted;
        this.nick = data.nick ?? this.nick;
        this.isPending = data.pending ?? this.isPending;
        this.permissions = data.permissions ?? this.permissions;
        this.premiumSince = data.premium_since ?? this.premiumSince;
    }
}