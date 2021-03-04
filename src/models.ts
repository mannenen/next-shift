export interface ShiftNote {
    text: string;
    flags: NoteFlag;
    createdBy: string;
    createdOn: Date;
    comments?: string[];
    relatedTo?: "Support Case" | "Flash Notice" | "Telco Shit" | "Facilities" | undefined;
}

export interface NoteFlag {
    pinned: boolean;
    closed: boolean;
    followup: boolean;
}

export interface NoteTransferService {
    getNote(id: string): ShiftNote;
    updateField<K extends keyof ShiftNote>(id: string, k: K, v: ShiftNote[K]): ShiftNote;
    (): ShiftNote[];
}