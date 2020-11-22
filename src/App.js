import React, { useState } from 'react';
import Header from './Header'
import Footer from './Footer'
import CreateNote from './CreateNote'
import Note from './Note'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import './App.css';

function App() {

  const [addItem, setAddItem] = useState([]);


  // const addNote = (note)=>{
  //   setAddItem((prevData)=>{
  //     return [...prevData, note ];
  //   });
  //   console.log(note);

  // };

  const addNote = (note)=>{
    setAddItem((oldData)=>{
      return [...oldData, note]
    });
    console.log(note)
  }
  return (
    <React.Fragment>
    <Header/> 
    <CreateNote passNote ={addNote} />
   
   
    {addItem.map((val,index)=>{
      return (<Note key={index} id={index} title={val.title} content = {val.content} />)
    })}

    <Footer/>

      </React.Fragment>
  );
}

export default App;
