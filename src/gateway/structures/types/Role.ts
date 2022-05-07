import { RoleTag } from "../models/Role";

export interface RoleData {
    id: string;
    name: string;
    color: number;
    hoist: boolean;
    icon?: string;
    unicode_emoji?: string;
    position: number;
    permissions: string;
    managed: boolean;
    mentionable: boolean;
    tags?: RoleTagData;
}

export interface RoleTagData {
    bot_id: string;
    integration_id: string;
    premium_subscriber: boolean;
}