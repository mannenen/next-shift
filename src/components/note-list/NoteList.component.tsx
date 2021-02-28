import React from 'react';
import { ShiftNote } from '../../models';
import NoteDisplay from '../note-display/NoteDisplay.component';
import './NoteList.css';

interface Props {
    notes: ShiftNote[]
}
interface State {}

export default class NoteList extends React.Component<Props, State> {
    render() {
        let notes = this.props.notes.map((note, index) => {
            return <NoteDisplay note={note} key={index} />;
        })
        return (
            <div className="note-list-flex-container">
                {notes}
            </div>
        )
    }
}