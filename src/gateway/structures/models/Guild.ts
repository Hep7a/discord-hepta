import { Channel } from "diagnostics_channel";
import { Client } from "../../../client/HeptaClient";
import { 
    VerificationLevel, 
    DefaultMessageNotificationLevel, 
    ExplicitContentFilter, 
    MFALevel, 
    NSFWLevel, 
    GuildData,
    GuildChannels
} from "../types/Guild";
import { Base } from "./Base";
import { Emoji } from "./Emoji";
import { Role } from "./Role";

export class Guild extends Base {
    name: string;
    icon: string;
    iconHash?: string;
    splash: string;
    discoverySplash: string;
    isOwner?: boolean;
    ownerID: string; // User
    permissions: string;
    region?: string;
    afkChannelID: string; // Channel
    afkTimeout: number;
    widgetEnabled?: boolean;
    widgetChannelID: string; // Channel
    verificationLevel: VerificationLevel;
    defaultMessageNotifications: DefaultMessageNotificationLevel;
    explicitContentFilter: ExplicitContentFilter;
    mfaLevel: MFALevel
    applicationID: string; // Application
    systemChannelID: string; // Channel
    systemChannelFlags: number;
    rulesChannelID: string;
    joinedAt?: string;
    isLarge?: boolean;
    isUnavailable?: boolean;
    memberCount?: number;
    maxPresences?: number;
    maxMembers?: number;
    vanityURL: string;
    description: string;
    banner: string;
    premierTier: number;
    premiumSubscriptionCount?: number;
    preferredLocale: string;
    publicUpdatesChannelID: string; // Channel
    maxVideoChannelUsers?: number;
    approximateMemberCount?: number;
    approximatePresenceCount?: number;
    welcomeScreen?: any; // WelcomeScreen
    nsfwLevel: NSFWLevel

    roles: Map<string, Role> = new Map();
    emojis: Map<string, Emoji> = new Map();
    features: any[]; // GuildFeature[]
    voiceStates: any[] // VoiceState[]
    members: any[] // GuildMember[] or Map<string, GuildMember>
    channels: Map<string, GuildChannels> = new Map();
    threads: any[] // Thread[]
    presences: any[] // GuildPresence[]
    stageInstances: any[] // StageInstance[]
    stickers: any[] // Sticker[]
    guildScheduledEvents: any[] // GuildScheduledEvent[]
    premiumProgressBarEnabled: boolean;

    constructor(client: Client, data: GuildData) { 
        super(client, data);

        this.readFromData(data);
    }

    private readFromData(data: GuildData) {
        this.isUnavailable = data.unavailable ?? this.isUnavailable;

        if (!this.isUnavailable) {
            this.afkChannelID = data.afk_channel_id ?? this.afkChannelID;
            this.afkTimeout = data.afk_timeout ?? this.afkTimeout;
            this.approximateMemberCount = data.approximate_member_count ?? this.approximateMemberCount
            this.approximatePresenceCount = data.approximate_presence_count ?? this.approximatePresenceCount;
            this.banner = data.banner ?? this.banner;
            this.defaultMessageNotifications = data.default_message_notifications ?? this.defaultMessageNotifications;
            this.description = data.description ?? this.description;
            this.discoverySplash = data.discovery_splash ?? this.discoverySplash;
            this.explicitContentFilter = data.explicit_content_filter ?? this.explicitContentFilter;
            this.icon = data.icon ?? this.icon;
            this.iconHash = data.icon_hash ?? this.iconHash;
            this.isLarge = data.large ?? this.isLarge;
            this.isOwner = data.owner ?? this.isOwner;
            this.joinedAt = data.joined_at ?? this.joinedAt;
            this.maxMembers = data.max_members ?? this.maxMembers;
            this.maxPresences = data.max_presences ?? this.maxPresences;
            this.maxVideoChannelUsers = data.max_video_channel_users ?? this.maxVideoChannelUsers;
            this.memberCount = data.member_count ?? this.memberCount;
            this.mfaLevel = data.mfa_level ?? this.mfaLevel;
            this.name = data.name ?? this.name;
            this.nsfwLevel = data.nsfw_level ?? this.nsfwLevel;
            this.ownerID = data.owner_id ?? this.ownerID;
            this.permissions = data.permissions ?? this.permissions;
            this.preferredLocale = data.preferred_locale ?? this.preferredLocale;
            this.premierTier = data.premium_tier ?? this.premierTier;
            this.premiumProgressBarEnabled = data.premium_progress_bar_enabled ?? this.premiumProgressBarEnabled;
            this.premiumSubscriptionCount = data.premium_subscription_count ?? this.premiumSubscriptionCount;
            this.publicUpdatesChannelID = data.public_updates_channel_id ?? this.publicUpdatesChannelID;
            this.region = data.region ?? this.region;
            this.rulesChannelID = data.rules_channel_id ?? this.rulesChannelID;
            this.splash = data.splash ?? this.splash;
            this.systemChannelFlags = data.system_channel_flags ?? this.systemChannelFlags;
            this.systemChannelID = data.system_channel_id ?? this.systemChannelID;
            this.vanityURL = data.vanity_url_code ?? this.vanityURL;
            this.verificationLevel = data.verification_level ?? this.verificationLevel;
            this.welcomeScreen = data.welcome_screen ?? this.welcomeScreen;
            this.widgetChannelID = data.widget_channel_id ?? this.widgetChannelID;
            this.widgetEnabled = data.widget_enabled ?? this.widgetEnabled;
        }
    }
}