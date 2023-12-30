import React from 'react'
import userContextNote from './userContextNote'
import { useState } from 'react';

const NoteContextProvider = (props) => {
const host = "http://localhost:4000/"
  const initialnotes = [ 
   
]
const [notes, setnotes] = useState(initialnotes);

const [isAdmin, setIsAdmin] = useState("MANAGER");
// const [dashboardPresent, setDashboardPresent] = useState("MANAGER");

//-------------------------------------------------------------------------------------------------------------Fetch all nottes
const getnotes = async() => {
  //todo api
  const response = await fetch(`${host}/api/notes/fetchallnotes`,{
    method: 'GET',
    headers: {
      'content-type' : 'application.json',
      'auth-token': localStorage.getItem('token')

    },
    
  });
  const json = await response.json()
  
  setnotes(json)
}

  //----------------------------------------------------------------------------------------------------------------add note
  
const addNote = async(title, description, tag) => {
  //todo api
  const response = await fetch(`https://note-suit.onrender.com/api/notes/addnotes`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'auth-token': localStorage.getItem('token')
    },
    body: JSON.stringify({ title, description, tag })
  });
  const note = await response.json()
  
   
  setnotes(notes.concat(note));
};


 //-----------------------------------------------------------------------------------------------------------delete note
 const deleteNote = async(id)=>{
  const response = await fetch(`${host}/api/notes/delete/${id}`,{
    method: 'DELETE',
    headers: {
      'content-type' : 'application/json',
      'auth-token': localStorage.getItem('token')

    },
    
  });
const json = response.json();


  
 }

 //---------------------------------------------------------------------------------------------------------update note 
  
 const editNote = async (id,title,description,tag)=>{
   
  const response = await fetch(`${host}/api/notes/updatenote/${id}`,{
    method: 'PUT',
    headers: {
      'content-type' : 'application/json',
      'auth-token': localStorage.getItem('token')

    },
    body: JSON.stringify({title,description,tag})
  });
  const json =  response.json();
  
  for (let index = 0; index < notes.length; index++) {
    const element = notes[index];
    if (element._id === id) {
      element._id = id;
      element.title = title;
      element.description= description
      element.tag= tag
      
    }
    
  }
 }
 //----------------------------------------------------------------------------------------------------------------alert
 
 






  return (
    <userContextNote.Provider value={{ isAdmin, setIsAdmin}}>
      {props.children}
    </userContextNote.Provider>
  )
}
export default NoteContextProvider
 