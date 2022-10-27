import React, { useEffect, useState } from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";






function NoteContainer() {
  const[notes,setNotes]=useState([])
  const[noteToShow,setNoteToShow]=useState([])
  const[searchTerm,setSearchTerm]=useState("")
  const[sortby,setSortBy]=useState("ALL")
  
  
  useEffect(()=>{
    fetch("https://notes-api-1670.onrender.com/notes")
    .then(r=>r.json()).then(setNotes).catch(err=>alert(err))
  },[])

  function addNote(noteClicked){
    const noteToClicked={...noteClicked,isClicked:true,isEdited:false};
    setNoteToShow(noteToClicked)
  }
  
  const noteToDisplay=notes.filter((note)=>{
    return note.title.toLowerCase().includes(searchTerm.toLowerCase());
  })

  function handleAddNewNote(newNote){
    const updatedNotes= [...noteToDisplay,newNote]
    setNotes(updatedNotes)
  }

  function handleStartEdit(noteThatClicked){
    const noteToClickedAgain={...noteThatClicked,isClicked:false,isEdited:true}
    setNoteToShow(noteToClickedAgain)
  }
  
  function handleChangeForm(name,value){
    setNoteToShow({
      ...noteToShow,[name]:value
    })
  }

  function handleEditForm (updatedNote){
    const updatedNotes= notes.map((note)=>{
      return note.id===updatedNote.id? updatedNote:note;
    })
    
    setNoteToShow(updatedNote);
    setNotes(updatedNotes)
  }

  function addAnotherNote(showNote){
    const showToNote=notes.find((note)=>{
      return note.id===showNote.id
    })
    setNoteToShow({...showToNote,isClicked:true,isEdited:false})
  }
  const sortedNotes=noteToDisplay.sort((note1,note2)=>{
    if (sortby==="A-Z"){
      return note1.title.localeCompare(note2.title)
    }
    return noteToDisplay
  })
  return (
    <>
      
      <Search searchTerm={searchTerm} 
      onSearch={setSearchTerm}
      changeSortBy={setSortBy}/>
      
      <div className="container">
        <Sidebar notes={sortedNotes} 
        onAddNote={addNote} 
        addToSideBar={handleAddNewNote}/>
        <Content noteToShow={noteToShow} 
        startEdit={handleStartEdit} 
        onChangeForm={handleChangeForm} 
        onEditForm={handleEditForm}
        backToEdit={addAnotherNote}/>
      </div>
    </>
  );
}

export default NoteContainer;
