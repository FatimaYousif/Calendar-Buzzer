import React, { useState } from 'react';
// import AddIcon from '@material-ui/icons/AddIcon';



function CreateNote(props) {

const [note, setNote] = useState({
  title: '',
  content: ' '

});

const InputEvent = (event) =>{
 
   const {name, value} = event.target

  setNote( (PrevData)=>{
    return {
        ...PrevData, 
        [name]: value,
    }
  })
  console.log(note)
}

const AddEvent = ()=>{
  props.passNote(note);

  
}

  return (
    <div className='container'>
    <div className="CreateNote">
      <form>
        <input type='text' value={note.title} onChange={InputEvent} placeholder='Title'name='title' />
        <textarea rows='4' value={note.content} onChange={InputEvent}   placeholder='Write A Note...'  name='content'>
        </textarea>
       <button onClick={AddEvent}>
        <i className='fas fa-plus'></i>
       </button>
      </form>

    </div>
    </div>
  );
}

export default CreateNote;
