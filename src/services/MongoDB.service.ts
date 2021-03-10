import { notDeepStrictEqual } from 'assert';
import { NoteTransferService, ShiftNote, GetAllNotesOptions } from '../models';

export default class MongoDBTransferService implements NoteTransferService {
    getNote(id: string): ShiftNote {
        throw new Error('Method not implemented.');
    }
    updateField<K extends 'text' | 'flags' | 'createdBy' | 'createdOn' | 'comments'>(id: string, k: K, v: ShiftNote[K]): ShiftNote {
        throw new Error('Method not implemented.');
    }
    getAllNotes(options: GetAllNotesOptions): ShiftNote[] {
        throw new Error('Method not implemented.');
    }
    getNotesWithFlag(flag: 'pinned' | 'closed' | 'followup'): ShiftNote[] {
        throw new Error('Method not implemented.');
    }

}