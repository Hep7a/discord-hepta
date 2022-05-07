import { RoleData } from "./Role";
import { UserData } from "./User";

export interface EmojiData {
    id: string;
    name: string;
    roles?: string[];
    user?: UserData;
    require_colons?: boolean;
    managed?: boolean;
    animated?: boolean;
    available?: boolean;
}