import React, { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
    const notesInitial = [
        {
          "_id": "68062193d6287c3cde2be716",
          "user": "68053b4ebf720836fffad214",
          "title": "Reading",
          "description": "Please start the reading exam id not far",
          "tag": "personal",
          "date": "2025-04-21T10:44:35.580Z",
          "__v": 0
        },
        {
          "_id": "6807afaabd42d7d2d23e911e",
          "user": "68053b4ebf720836fffad214",
          "title": "Minecraft",
          "description": "Play minecraft and do graind diamond and netherite ingot",
          "tag": "genral youtube perpos",
          "date": "2025-04-22T15:03:06.573Z",
          "__v": 0
        },
        {
          "_id": "6807afacbd42d7d2d23e9120",
          "user": "68053b4ebf720836fffad214",
          "title": "Minecraft",
          "description": "Play minecraft and do graind diamond and netherite ingot",
          "tag": "genral youtube perpos",
          "date": "2025-04-22T15:03:08.395Z",
          "__v": 0
        },
        {
          "_id": "6807afacbd42d7d2d23e9122",
          "user": "68053b4ebf720836fffad214",
          "title": "Speak in english",
          "description": "You cannot speak english so you prectice for speak english otherwise you speak Gujrati",
          "tag": "read in PDF sand by sarth",
          "date": "2025-04-22T15:03:08.625Z",
          "__v": 0
        },
        {
          "_id": "6807afafbd42d7d2d23e9124",
          "user": "68053b4ebf720836fffad214",
          "title": "Minecraft",
          "description": "Play minecraft and do graind diamond and netherite ingot",
          "tag": "genral youtube perpos",
          "date": "2025-04-22T15:03:11.332Z",
          "__v": 0
        },
        {
          "_id": "6807afb0bd42d7d2d23e9126",
          "user": "68053b4ebf720836fffad214",
          "title": "Minecraft",
          "description": "Play minecraft and do graind diamond and netherite ingot",
          "tag": "genral youtube perpos",
          "date": "2025-04-22T15:03:12.015Z",
          "__v": 0
        },
        {
          "_id": "6807afb0bd42d7d2d23e9128",
          "user": "68053b4ebf720836fffad214",
          "title": "Write in english",
          "description": "Practice english writing because now your collage exam and your interview taken in english and all company work in english",
          "tag": "Suggestion by your HOD Dhaval Nimavat",
          "date": "2025-04-22T15:03:12.618Z",
          "__v": 0
        },
        {
          "_id": "6807afb2bd42d7d2d23e912a",
          "user": "68053b4ebf720836fffad214",
          "title": "Minecraft",
          "description": "Play minecraft and do graind diamond and netherite ingot",
          "tag": "genral youtube perpos",
          "date": "2025-04-22T15:03:14.081Z",
          "__v": 0
        }
    ]
    
    const [notes, setNotes] = useState(notesInitial);

    return(
        <noteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;