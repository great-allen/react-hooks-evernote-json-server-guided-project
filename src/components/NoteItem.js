import React from "react";

function NoteItem({note,onAddNote}) {

  function handleClick(){
    onAddNote(note)
    
  }

  return (
    <li onClick={handleClick}>
      <h2>{note.title}</h2>
      <p>{note.body.length > 10 ? note.body.substring(0, 12) + "..." : note.body}</p>
    </li>
  );
}

export default NoteItem;
