
import React from 'react'; 
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import "./Note.css";

const note = () => {
  return (
    <div>
        <form className='Note'>
          <input name='Title' placeholder='Title'/>
          < textarea name='Content' placeholder='Write a note'/> 
            <Fab>
            <AddIcon />
            </Fab>
            
        </form>
    </div>
  )
}

export default note