import { Channel } from "../../models/channels/Channel";
import { Client } from "../../../../client/HeptaClient";
import { GuildMemberData } from "../../types/GuildMember";
import { ChannelData } from "../../types/Channel";
import { MessageData } from "../../types/Message";
import { UserData } from "../../types/User";
import { RoleData } from "../../types/Role";
import { Base } from "../Base";
import { Guild } from "../Guild";
import { User } from "../User";
import { Role } from "../Role";
import { GuildMember } from "../GuildMember";
import { TextChannel } from "../channels/TextChannel";

export class Message extends Base {
    channel: TextChannel;
    guild: Guild;
    author: User;
    member: GuildMember;
    referencedMessage: Message; // leave undefined
    thread: Channel; // ThreadChannel

    mentionedChannels: Map<string, Channel> = new Map();
    mentionedRoles: Map<string, Role> = new Map();
    mentions: Map<string, User> = new Map();

    activity: any;
    application: any;
    attachments: any[];
    components: any[];
    content: string;
    editedTimestamp: string;
    embeds: any[];
    flags: number;
    interaction: any;
    messageReference: any;
    mentionsEveryone: boolean;
    nonce: string | number;
    isPinned: boolean;
    reactions: any[];
    stickerItems: any[];
    stickers: any[];
    timestamp: string;
    isTTS: boolean;
    type: number;
    webhookID: string;

    constructor(client: Client, data: MessageData, channel: TextChannel) {
        super(client, data);
        this.channel = channel;

        this.readFromData(data);
    }

    private readFromData(data: MessageData) {
        if (data.member !== undefined) this.member = new GuildMember(this.client, this.guild, data.member);
        this.author = new User(this.client, data.author);
        this.guild = this.client.guilds.get(data.guild_id);
        if (data.thread !== undefined) this.thread = new Channel(this.client, data.thread);

        if (data.mention_channels !== undefined) {
            for (const mentionedChannel of data.mention_channels) {
                const channel = this.guild.channels.get(mentionedChannel.id);
                this.mentionedChannels.set(channel.id, channel);
            }
        }

        if (data.mention_roles !== undefined) {
            for (const roleID of data.mention_roles) {
                const role = this.guild.roles.get(roleID);
                this.mentionedRoles.set(role.id, role);
            }
        }

        if (data.mentions !== undefined) {
            for (const mention of data.mentions) {
                this.mentions.set(mention.id, new User(this.client, mention));
            }
        }

        this.activity = data.activity;
        this.application = data.application;
        this.attachments = data.attachments;
        this.components = data.components;
        this.content = data.content;
        this.editedTimestamp = data.edited_timestamp;
        this.embeds = data.embeds;
        this.flags = data.flags;
        this.interaction = data.interaction;
        this.mentionsEveryone = data.mention_everyone;
        this.messageReference = data.message_reference;
        this.nonce = data.nonce;
        this.isPinned = data.pinned;
        this.reactions = data.reactions;
        this.stickerItems = data.sticker_items;
        this.stickers = data.stickers;
        this.timestamp = data.timestamp;
        this.isTTS = data.tts;
        this.type = data.type;
        this.webhookID = data.webhook_id;
    }
}