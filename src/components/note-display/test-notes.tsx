import { ShiftNote } from '../../models';

export const note: ShiftNote = {
    text: "This is a regular, active note. It is not pinned and no followup is required. It has no comments.",
    createdBy: "Testing",
    createdOn: new Date(),
    flags: {
        closed: false,
        followup: false,
        pinned: false
    }
};

export const closedNote: ShiftNote = {
    text: "This note has been closed, which means the information contained within it is no longer relevant.",
    createdBy: "Testing",
    createdOn: new Date(),
    flags: {
        closed: true,
        followup: false,
        pinned: false
    }
}

export const followupNote: ShiftNote = {
    text: "This note requires followup. It has a yellow background to encourage you to pay close attention to it.",
    createdBy: "Testing",
    createdOn: new Date(),
    flags: {
        closed: false,
        followup: true,
        pinned: false
    }
}

export const pinnedNote: ShiftNote = {
    text: "This note is pinned so that it always appears towards the top of the list or in the side gutter",
    createdBy: "Testing",
    createdOn: new Date(),
    flags: {
        closed: false,
        followup: false,
        pinned: true
    }
}

export const commentNote: ShiftNote = {
    text: "This note has comments. Click it to reveal them.",
    createdBy: "Testing",
    createdOn: new Date(),
    comments: [
        "Click again to hide the comments again.",
        "Another comment",
        "A third comment"
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