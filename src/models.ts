export interface ShiftNote {
    text: string;
    flags: NoteFlag;
    createdBy: string;
    createdOn: Date;
    comments?: string[];
}

export interface NoteFlag {
    pinned: boolean;
    closed: boolean;
    followup: boolean;
}

export interface GetAllNotesOptions {
    includeClosed?: boolean,
    sort?: "asc" | "desc"
}

export interface NoteTransferService {
    getNote(id: string): ShiftNote;
    updateField<K extends keyof ShiftNote>(id: string, k: K, v: ShiftNote[K]): ShiftNote;
    getAllNotes(options: GetAllNotesOptions): ShiftNote[];
    getNotesWithFlag(flag: keyof NoteFlag): ShiftNote[];
}