import React, { useState } from 'react';
import { useContext } from 'react';
import ContextValue from '../context/notes/noteContext';

const AddNote = () => {
    const context = useContext(ContextValue);
    const {addNote} = context;
    const [note, setNote] = useState({title: "", description: "", tag: "Default"}); 
    const handleClick = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        addNote(note.title, note.description, note.tag); // Call the addNote function with the note object
    }
    const onChange = (e) => {
      setNote({...note, [e.target.name]: e.target.value})
    }
    return (
        <div className="container my-3">
            <h2>Add a Notes</h2>
            <form className="my-3">
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">title</label>
                    <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" onChange={onChange}/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                    <input type="text" className="form-control" id="description" name="description" onChange={onChange}/>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
            </form>
        </div>
    )
}

export default AddNote;
