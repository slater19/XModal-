import React from 'react'
import { useState, useRef ,useEffect} from 'react';
import validator from 'validator' 


const Model  = ({handleClose,isModalOpen}) => {
  let modalRef = useRef();
let [email, setEmail ] = useState("");
let [dob,setDob  ] = useState("");
let [phone,setPhone ] = useState("");

   function handleClickOutside(e) {
          if(isModalOpen && modalRef.current && !modalRef.current.contains(e.target)){
              handleClose()
          }
        }
            //      function ValidateEmail(input) {

            // var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        
            // if (input.value.match(validRegex)) {
        
            //     alert("Valid email address!");
        
            //     document.form1.text1.focus();
        
            //     return true;
        
            // } else {
        
            //     alert("Invalid email!");
        
                
        
            //     return false;
        
            // }
            // const validateEmail = (e) => {
            //   var email = e.target.value
            
            //   if (validator.isEmail(email)) {
            //      setEmailError('Valid Email :)')
            //   } else {
            //      setEmailError('Enter valid Email!')
            //   }
            // }

            const validatePhone = (e) => {
              setPhone(e.target.value);
            
              if (validator.isMobilePhone(phone)) {
                  
              } else {
                  
                alert("Invalid phone number. Please enter a 10-digit phone number.**” ");
                  
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
            <label for="email" ><bold>Email address:</bold> </label><br/>
            <input type="email" value={email} class="form-control" id="email" aria-describedby="emailHelp"/>
           
          </div>
          <div class="form-group">
            <label for="phone"><bold>Phone Number:</bold></label><br/>
            <input type="tel" value={phone}class="form-control" id="phone" onChange={(e) => validatePhone(e)}/>     </div>
          <div class="form-group">
            <label for="dob"><bold>Date of Birth:</bold></label><br/>
            <input type="date" value={dob} name="bday" id="dob" />
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
