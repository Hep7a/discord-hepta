import { ChannelData, ChannelType } from "./Channel";
import { GuildMemberData } from "./GuildMember";
import { RoleData } from "./Role";
import { UserData } from "./User";

export interface MessageData {
    channel_id: string;
    guild_id?: string;
    author: UserData;
    member?: GuildMemberData;
    content: string;
    timestamp: string;
    edited_timestamp: string;
    tts: boolean;
    mention_everyone: boolean;
    mentions: UserData[];
    mention_roles: string[];
    mention_channels?: ChannelMention[];
    attachments: any[]; // MessageAttachmentData[]
    embeds: any[]; // MessageEmbedData[]
    reactions?: any[]; // MessageReactionData[]
    nonce?: string | number;
    pinned: boolean;
    webhook_id?: string;
    type: number; // MessageType
    activity?: any; // MessageActivity
    application?: any; // Application
    application_id?: string;
    message_reference?: any; // MessageReference
    flags?: number;
    referenced_message?: MessageData;
    interaction?: any; // MessageInteraction
    thread?: ChannelData;
    components?: any[]; // MessageComponent[]
    sticker_items?: any[]; // MessageStickerItem[]
    stickers?: any[]; // MessageSticker[]
}

export interface ChannelMention {
    id: string;
    guild_id: string;
    type: ChannelType;
    name: string;
}