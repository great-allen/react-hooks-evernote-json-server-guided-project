import React from "react";
import {
  FacebookShareButton,
  
} from "react-share";
import {
  FacebookIcon,
  
} from "react-share";

function NoteEditor({noteToShow,onChangeForm,onEditForm,backToEdit}) {
  
const shareUrl="https://phase2-react-project-notes.netlify.app/"

function onInputChange(e){
   onChangeForm(e.target.name,e.target.value);
}

  function handleSubmit(event){
    event.preventDefault()

    fetch(`https://notes-api-1670.onrender.com/notes/${noteToShow.id}`,{
      method:"PATCH",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(noteToShow)
    })
    .then(r=>r.json())
    .then(onEditForm).catch(err=>alert(err))
  }

  function handleClick(){
      backToEdit(noteToShow)
      
  }
    
  return (
    <form className="note-editor" >
      <input type="text" name="title" value={noteToShow.title} onChange={onInputChange}/>
      <textarea name="body" value={noteToShow.body} onChange={onInputChange}/>
      <div className="button-row">
        <input className="button" type="submit" value="Save" onClick={handleSubmit}/>
        <button type="button"  onClick={handleClick}>Cancel</button>
        <FacebookShareButton  url={shareUrl} style={{borderRadius:"200px",height:"27px"}}><FacebookIcon size={20} style={{fontSize:"14px"}}/></FacebookShareButton>
      </div>
    </form>
  );
}

export default NoteEditor;
