import React from 'react'
import  "./xmodal.css";
import {  useState } from "react";

const Xmodal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOpen = () => {
        setIsModalOpen(true);
      };

  return (
    <div className='modalcontainer'>
        <h1>User Details Modal</h1>
              <button  className='myBtn' onClick={handleOpen}>Open Form</button>
              {isModalOpen && 
<div className="modal">

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
        
        <div class="modal-footer border-top-0 d-flex justify-content-center">
          <button type="submit" class="btn btn-success">Submit</button>
          </div>
      </form>
    


      </div>
</div>}

</div>

    
  )
}

export default Xmodal
