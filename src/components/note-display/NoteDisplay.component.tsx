import React from 'react';
import { ShiftNote } from '../../models';
import styled from 'styled-components';
import type {} from "styled-components/cssprop";

interface Props {
    note: ShiftNote;
}
interface State {
    showComments: boolean;
}

const DisplayContainer = styled.div<Props>`
    display: grid;
    grid-template-columns: 50fr 1fr;
    gap: 0.5rem;
    grid-template-areas:
        "text author"
        "comments date";
    padding: 1rem;
    margin: 1rem;
    
    ${props => props.note.flags.followup ? "background-color: yellow;" : ""}
    ${props => props.note.flags.closed ? 
        "text-decoration: line-through;"    +
        "background-color: grey;"           +
        "color: lightgrey;" : 
        ""
    }
`

const Text = styled.div`
    grid-area: text;
`

const Author = styled.div`
    grid-area: author;
    justify-self: right;
`

const StyledDate = styled.div`
    grid-area: date;
    justify-self: right;
`

const Comments = styled.div`
    grid-area: comments;
    display: hidden;
`

export default class NoteDisplay extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { 
            showComments: false,
        };
        this.toggleComments = this.toggleComments.bind(this);
    }

    private toggleComments() {

        this.setState({ 
            showComments: !this.state.showComments,
        });
        
    }

    render() {
        let note = this.props.note;
        let { createdBy, text, createdOn, comments } = note;
        let commentRows;

        if (comments) {
            commentRows = comments.map((comment) => {
                return <div>{comment}</div>
            })
        }
        return (
            <DisplayContainer data-testid="display-container" note={note} onClick={this.toggleComments}>
                
                <Text>{text}</Text>
                <Author>{createdBy}</Author>
                <StyledDate>{createdOn.toISOString()}</StyledDate>
                {
                    comments && this.state.showComments &&
                    <Comments>{commentRows}</Comments>
                }
            </DisplayContainer>
        )
    }
    
}