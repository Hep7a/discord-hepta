export interface CommandOptions {
    aliases?: string[];
    help?: CommandHelp;
}

interface CommandHelp {
    description?: string;
    usage?: string;
    examples?: string[];
}