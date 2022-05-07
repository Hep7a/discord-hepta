export interface ChannelData {
    id: string;
    type: ChannelType;
    guild_id?: string;
    position?: number;
    permission_overwrites?: any[]; // PermissionOverwriteData[]
    name?: string;
    topic?: string;
    nsfw?: boolean;
    last_message_id?: string;
    bitrate?: number;
    user_limit?: number;
    rate_limit_per_user?: number;
    recipients?: number;
    icon?: string;
    owner_id?: string;
    application_id?: string;
    parent_id?: string;
    last_pin_timestamp?: number;
    rtc_region?: string;
    video_quality_mode?: VideoQualityMode;
    message_count?: number;
    member_count?: number;
    thread_metadata?: any; // ThreadMetadataData
    member?: any; // ThreadMemberData
    default_auto_archive_duration?: number;
    permissions?: string;
}

export enum ChannelType {
    GUILD_TEXT = 0,
    DM = 1,
    GUILD_VOICE = 2,
    GROUP_DM = 3,
    GUILD_CATEGORY = 4,
    GUILD_NEWS = 5,
    GUILD_STORE = 6,
    GUILD_NEWS_THREAD = 10,
    GUILD_PUBLIC_THREAD = 11,
    GUILD_PRIVATE_THREAD = 12,
    GUILD_STAGE_VOICE = 13
}

export enum VideoQualityMode {
    AUTO = 1,
    FULL = 2
}