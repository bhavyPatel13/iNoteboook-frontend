import React from 'react';
import { useContext } from 'react';
import ContextValue from '../context/notes/noteContext';
import NoteItem from './NoteItem';

const Notes = () => {
    const context = useContext(ContextValue);
    const {notes, setNotes} = context;
    return (
        <div className="row my-3">
            <h2>your notes</h2>
            {notes.map((note) => {
                return <NoteItem note={note} />
            })}
        </div>
    )
}

export default Notes
