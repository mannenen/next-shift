import React from 'react';
import { render, screen } from '@testing-library/react';
import NoteDisplay from './NoteDisplay.component';
import { note, closedNote, followupNote } from './test-notes';

describe('NoteDisplay tests', () => {
    test('renders note in cleartext if not closed', () => {
        render(<NoteDisplay note={note} />);
        let textElement = screen.getByText("This is a regular, active note. It is not pinned and no followup is required. It has no comments.");
        expect(textElement).toBeTruthy();

        textElement = screen.getByTestId('display-container');
        expect(textElement).not.toHaveStyle("text-decoration: line-through");
    });
    
    test('renders note with strikethrough if closed', () => {
        render(<NoteDisplay note={closedNote} />);
        let element = screen.getByText("This note has been closed, which means the information contained within it is no longer relevant.");
        expect(element).toBeTruthy();

        element = screen.getByTestId('display-container');
        expect(element).toHaveStyle("background-color: grey");
        expect(element).toHaveStyle("color: lightgrey");
        expect(element).toHaveStyle("text-decoration: line-through");
    });
    
    test('renders note display with yellow background if followup required', () => {
        render(<NoteDisplay note={followupNote} />);
        const textElement = screen.getByTestId("display-container");
        expect(textElement).toBeTruthy();
        expect(textElement).toHaveStyle("background-color: yellow");
    });
})

