import { GuildCategoryChannel } from "../models/channels/GuildCategoryChannel";
import { GuildTextChannel } from "../models/channels/GuildTextChannel";
import { GuildVoiceChannel } from "../models/channels/GuildVoiceChannel";
import { ChannelData } from "./Channel";
import { EmojiData } from "./Emoji";
import { RoleData } from "./Role";

export interface GuildData {
    id: string;
    name: string;
    icon: string;
    icon_hash?: string;
    splash: string;
    discovery_splash: string;
    owner?: boolean;
    owner_id: string;
    permissions?: string;
    region?: string;
    afk_channel_id: string;
    afk_timeout: number;
    widget_enabled?: boolean;
    widget_channel_id?: string;
    verification_level: VerificationLevel;
    default_message_notifications: DefaultMessageNotificationLevel;
    explicit_content_filter: ExplicitContentFilter;
    roles: RoleData[];
    emojis: EmojiData[];
    features: any[]; // GuildFeatureData[]
    mfa_level: number;
    application_id: string;
    system_channel_id: string;
    system_channel_flags: number;
    rules_channel_id: string;
    joined_at?: string;
    large?: boolean;
    unavailable?: boolean;
    member_count?: number;
    voice_states?: any[]; // VoiceStateData[]
    members?: any[]; // MemberData[]
    channels?: ChannelData[]; // ChannelData[]
    threads?: any[]; // ThreadData[]
    presences?: any[]; // PresenceData[]
    max_presences?: number;
    max_members?: number;
    vanity_url_code: string;
    description: string;
    banner: string;
    premium_tier: PremierTier;
    premium_subscription_count?: number;
    preferred_locale: string;
    public_updates_channel_id: string;
    max_video_channel_users?: number;
    approximate_member_count?: number;
    approximate_presence_count?: number;
    welcome_screen?: any; // WelcomeScreenData
    nsfw_level: NSFWLevel;
    stage_instances?: any[] // StageInstanceData[]
    stickers?: any[] // StickerData[]
    guild_scheduled_events?: any[] // GuildScheduledEventData[]
    premium_progress_bar_enabled: boolean;
}

export enum DefaultMessageNotificationLevel {
    ALL_MESSAGES = 0,
    ONLY_MENTIONS = 1
}

export enum ExplicitContentFilter {
    DISABLED = 0,
    MEMBERS_WITHOUT_ROLES = 1,
    ALL_MEMBERS = 2
}

export enum MFALevel {
    NONE = 0,
    ELEVATED = 1
}

export enum VerificationLevel {
    NONE = 0,
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3,
    VERY_HIGH = 4
}

export enum NSFWLevel {
    DEFAULT = 0,
    EXPLICIT = 1,
    SAFE = 2,
    AGE_RESTRICED = 3
}

export enum PremierTier {
    NONE = 0,
    TIER_1 = 1,
    TIER_2 = 2,
    TIER_3 = 3
}

export enum SystemChannelFlags {
    SUPRESS_JOIN_NOTIFICATIONS = 1 << 0,
    SUPRESS_PREMIUM_SUBSCRIPTIONS = 1 << 1,
    SUPRESS_GUILD_REMINDER_NOTIFICATIONS = 1 << 2,
    SUPRESS_JOIN_NOTIFICATION_REPLIES = 1 << 3
}

export type GuildChannels = 
    | GuildTextChannel
    | GuildVoiceChannel
    | GuildCategoryChannel