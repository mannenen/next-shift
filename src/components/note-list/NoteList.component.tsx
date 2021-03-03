import React from 'react';
import styled from 'styled-components';
import { ShiftNote } from '../../models';
import NoteDisplay from '../note-display/NoteDisplay.component';

interface Props {
    notes: ShiftNote[]
}
interface State {}


const ListDisplay = styled.div`
    display: flex;
    flex-flow: column nowrap;
`

const getOrder = (flags: { closed: boolean, followup: boolean, pinned: boolean}): number => {
    if (flags.closed) return 100;
    if (flags.followup) return -3;
    if (flags.pinned) return -5;
    return 0;
}

export default class NoteList extends React.Component<Props, State> {
    render() {
        let notes = this.props.notes.map((note, index) => {
            return (
                <div style={ {flex: 1, order: getOrder(note.flags)} }>
                    <NoteDisplay note={note} key={index} />
                </div>
            );
        })
        return (
            <ListDisplay>
                {notes}
            </ListDisplay>
        )
    }
}