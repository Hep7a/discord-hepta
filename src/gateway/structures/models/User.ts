import { Client } from "../../../client/HeptaClient";
import { Base } from "./Base";
import { UserData } from "../types/User"

export class User extends Base {
    username: string;
    discriminator: string;
    avatar: string;
    isBot?: boolean;
    isSystem?: boolean;
    mfaEnabled?: boolean;
    banner?: string;
    accentColor?: number;
    locale?: string;
    verified?: boolean;
    email?: string;
    flags?: number;
    premiumType?: number;
    publicFlags?: number;

    constructor(client: Client, data: UserData) {
        super(client, data);

        this.readFromData(data);
    }

    private readFromData(data: UserData) {
        this.accentColor = data.accent_color ?? this.accentColor;
        this.avatar = data.avatar ?? this.avatar;
        this.banner = data.banner ?? this.banner;
        this.discriminator = data.discriminator ?? this.discriminator;
        this.email = data.email ?? this.email;
        this.flags = data.flags ?? this.flags;
        this.isBot = data.bot ?? this.isBot;
        this.isSystem = data.system ?? this.isSystem;
        this.locale = data.locale ?? this.locale;
        this.mfaEnabled = data.mfa_enabled ?? this.mfaEnabled;
        this.premiumType = data.premium_type ?? this.premiumType;
        this.publicFlags = data.public_flags ?? this.publicFlags;
        this.username = data.username ?? this.username;
        this.verified = data.verified ?? this.verified;
    }

    get tag(): string {
        return `${this.username}#${this.discriminator}`;
    }
}