import React from 'react';
import './App.css';
import notes from './components/note-display/test-notes';
import NoteList from './components/note-list/NoteList.component';

export default class App extends React.Component {
  render() {
    return (
      <NoteList notes={notes} />
    )
  }
}
