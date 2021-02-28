import React from 'react';
import { render, screen } from '@testing-library/react';
import NoteList from './NoteList.component';
import { ShiftNote } from '../../models';

const notes: ShiftNote[] = [
    {
        text: "Test note",
        createdBy: "Testing",
        createdOn: new Date(),
        flags: {
            closed: false,
            followup: false,
            pinned: false
        }
    },
    {
        text: "Test note",
        createdBy: "Testing",
        createdOn: new Date(),
        flags: {
            closed: false,
            followup: false,
            pinned: false
        }
    },{
        text: "Test note",
        createdBy: "Testing",
        createdOn: new Date(),
        flags: {
            closed: false,
            followup: false,
            pinned: false
        }
    }
];

test('notes are rendered', () => {
    render(<NoteList notes={notes} />)
    const textElements = screen.getAllByText("Test note");
    expect(textElements).toBeTruthy();
    expect(textElements.length).toBe(3);
})