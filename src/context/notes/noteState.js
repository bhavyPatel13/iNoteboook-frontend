import React, { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

    // get all note
    const getNotes = async () => {
      // Api call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "auth-token":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjgwNTNiNGViZjcyMDgzNmZmZmFkMjE0In0sImlhdCI6MTc0NTE3NDA5Mn0.7CRVuGA2uRvgs1AZUoBpvqWLAq0STYNbudoWThDI380",
          },
        });
        const json = await response.json();
        console.log(json);
        setNotes(json);
    };

  // Add a note
  const addNote = async (title, description, tag) => {
    // TODO: API call
    // Api call
    try {
      const response = await fetch(`${host}/api/notes/addnote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjgwNTNiNGViZjcyMDgzNmZmZmFkMjE0In0sImlhdCI6MTc0NTE3NDA5Mn0.7CRVuGA2uRvgs1AZUoBpvqWLAq0STYNbudoWThDI380",
        },
        body: JSON.stringify({title, description, tag}),
      });
      const json = await response.json();
    
    }catch (error) {
      console.error("Fetch Error:", error);
    }

    console.log("Adding a new note");
    const note = {
      _id: "6807afb2bd42d7d2d23e912a",
      user: "68053b4ebf720836fffad214",
      title: title,
      description: description,
      tag: tag,
      date: "2025-04-22T15:03:14.081Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  // Delete a note
  const deleteNote = (id) => {
    // TODO: API call
    console.log("Deleting a note with id" + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  // Edit a note
  const editNote = async (id, title, description, tag) => {
    // Api call
    const response = await fetch(`${host}/api/notes/updateNotes/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjgwNTNiNGViZjcyMDgzNmZmZmFkMjE0In0sImlhdCI6MTc0NTE3NDA5Mn0.7CRVuGA2uRvgs1AZUoBpvqWLAq0STYNbudoWThDI380",
      },
      body: JSON.stringify({title, description, tag}),
    });
    const json = response.json();

    // logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  return (
    <noteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes}}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
