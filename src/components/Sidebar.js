import React from "react";
import NoteList from "./NoteList";

function Sidebar({notes,onAddNote,addToSideBar}) {

  function onAdd(){
    fetch("https://notes-api-1670.onrender.com/notes",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        title:"default",
        body:"placeholder",
        useId: 1
      })
    })
    .then(r=>r.json())
    .then(addToSideBar).catch(err=>alert(err))
  }

  return (
    <div className="master-detail-element sidebar">
      <NoteList notes={notes} onAddNote={onAddNote}/>
      <button onClick={onAdd}>New</button>
    </div>
  );
}

export default Sidebar;
