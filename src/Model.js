import React from 'react'
import { useState, useRef ,useEffect} from 'react';


const Model  = ({handleClose,isModalOpen}) => {
  let modalRef = useRef();
   function handleClickOutside(e) {
          if(isModalOpen && modalRef.current && !modalRef.current.contains(e.target)){
              handleClose()
          }
        }
        
        useEffect(() => {
          document.addEventListener('mousedown',handleClickOutside);
          return () =>document.removeEventListener("mousedown", handleClickOutside);
        },[isModalOpen])
  return (
    
      <div>
<div className="modal" ref={modalRef}>

<div className="modal-content">
      <form>
      <h2>Fill Details</h2>
        
              <div class="form-group">
            
          <label for="username"><bold>Username:</bold> </label><br/>
            <input type="text" class="form-control" id="username" aria-describedby="emailHelp" /><br/>
            <label for="email"><bold>Email address:</bold> </label><br/>
            <input type="email" class="form-control" id="email" aria-describedby="emailHelp"/>
           
          </div>
          <div class="form-group">
            <label for="phone"><bold>Phone Number:</bold></label><br/>
            <input type="tel" class="form-control" id="phone"/>     </div>
          <div class="form-group">
            <label for="dob"><bold>Date of Birth:</bold></label><br/>
            <input type="date" name="bday" id="dob" />
          </div>
        
        <div >
          <button type="submit" class="btn btn-success">Submit</button>
          </div>
      </form>
    


      </div>
      
    </div>
    </div>
  )
}

export default Model 
