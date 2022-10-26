import React from "react";

function NoteViewer({noteToShow,startEdit}) {
  
    
  return (
    <>
      <h2>{noteToShow.title}</h2>
      <p>{noteToShow.body}</p>
      <button onClick={()=>startEdit(noteToShow)}>Edit</button>
    </>
  );
}

export default NoteViewer;
