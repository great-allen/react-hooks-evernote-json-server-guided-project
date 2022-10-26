import React from "react";
import NoteItem from "./NoteItem";

function NoteList({notes,onAddNote}) {
  return (
    <ul>
      {/* Render list of notes here... */notes.map((note)=>{
        return <NoteItem  key={note.id} note={note} onAddNote={onAddNote}/>
      })}
      
    </ul>
  );
}

export default NoteList;
