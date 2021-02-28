export interface ShiftNote {
    text: string;
    flags: NoteFlag;
    createdBy: string;
    createdOn: Date;
    comments?: string[];
    relatedTo?: "Support Case" | "Flash Notice" | "Telco Shit" | "Facilities"
}

export interface NoteFlag {
    pinned: boolean;
    closed: boolean;
    followup: boolean;
}