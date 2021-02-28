import React from 'react';
import { ReactComponent as Arrow } from './arrow.svg';
import { ShiftNote } from '../../models';
import styled, { keyframes, css } from 'styled-components';

interface Props {
    note: ShiftNote;
}
interface State {
    showComments: boolean;
    initialClick: boolean;
}

const DisplayContainer = styled.div<Props>`
    display: grid;
    grid-template-columns: 1fr 50fr 1fr;
    gap: 0.5rem;
    grid-template-areas:
        "arrow text author"
        "arrow comments date";
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

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(90deg);
    }
`

const rotateRight = css`
    animation-name: ${rotate};
    animation-duration: 0.75s;
    animation-direction: normal;
`

const rotateLeft = css`
    animation-name: ${rotate};
    animation-duration: 0.75s;
    animation-direction: reverse;
`

export default class NoteDisplay extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { 
            showComments: false,
            initialClick: false
        };
        this.toggleComments = this.toggleComments.bind(this);
    }

    private toggleComments() {
        let i = this.state.initialClick;

        if (!i) {
            
        }

        this.setState({ 
            showComments: !this.state.showComments,
            initialClick: i ? i : !i
        });
        
    }

    render() {
        let note = this.props.note;
        let { createdBy, text, createdOn, comments } = note;
        return (
            <DisplayContainer data-testid="display-container" note={note} onClick={this.toggleComments}>
                {
                    comments && 
                    comments.length > 0 &&
                    <Arrow />
                }
                <Text>{text}</Text>
                <Author>{createdBy}</Author>
                <StyledDate>{createdOn.toISOString()}</StyledDate>
                {
                    comments && this.state.showComments &&
                    <Comments>{comments}</Comments>
                }
            </DisplayContainer>
        )
    }
    
}