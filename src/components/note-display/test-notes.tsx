import { ShiftNote } from '../../models';

export const note: ShiftNote = {
    text: "Test note",
    createdBy: "Testing",
    createdOn: new Date(),
    flags: {
        closed: false,
        followup: false,
        pinned: false
    }
};

export const closedNote: ShiftNote = {
    text: "Test note",
    createdBy: "Testing",
    createdOn: new Date(),
    flags: {
        closed: true,
        followup: false,
        pinned: false
    }
}

export const followupNote: ShiftNote = {
    text: "Test note",
    createdBy: "Testing",
    createdOn: new Date(),
    flags: {
        closed: false,
        followup: true,
        pinned: false
    }
}

export const pinnedNote: ShiftNote = {
    text: "Test note",
    createdBy: "Testing",
    createdOn: new Date(),
    flags: {
        closed: false,
        followup: false,
        pinned: true
    }
}

export const commentNote: ShiftNote = {
    text: "Test note",
    createdBy: "Testing",
    createdOn: new Date(),
    comments: [
        "Test comment 1",
        "Test comment 2",
        "Test comment 3"
    ],
    flags: {
        closed: false,
        followup: false,
        pinned: false
    }
}

const notes: ShiftNote[] = [
    note, closedNote, followupNote, pinnedNote, commentNote
]

export default notes;