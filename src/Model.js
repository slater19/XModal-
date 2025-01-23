import React from 'react'
import { useState, useRef ,useEffect} from 'react';
import validator from 'validator' 


const Model  = ({handleClose,isModalOpen}) => {
  let modalRef = useRef();
  const initialValues = { username: "", email: "", dob: "",phone:"" };
  const [formValues, setFormValues] = useState(initialValues);
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [dob, setDob] = useState('')


   function handleClickOutside(e) {
          if(isModalOpen && modalRef.current && !modalRef.current.contains(e.target)){
              handleClose()
          }
        }

        const handleChange = (e) => {
          const { name, value } = e.target;
          setFormValues({ ...formValues, [name]: value });
        };
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

            const validate = () => {
              
            
              if((!email.includes("@"))) {
                // alert(`Please include an @ in the email address.{email} is missing @.`) 
                alert("Invalid email. Please check your email address") 
              }
              if (!validator.isMobilePhone(phone)) { 
                alert("Invalid phone number. Please enter a 10-digit phone number.**” ");
              }}
                  
                
                  
          //     }
          

          //   const validatePhone = (e) => {
          //     setPhone(e.target.value);
            
          //     if (validator.isMobilePhone(phone)) {
                  
          //     } else {
                  
          //       alert("Invalid phone number. Please enter a 10-digit phone number.**” ");
                  
          //     }
          // }

          // const handleChange1 = (e) => {
          //   const  value  = e.target.value;
          //   setFormData((prevState) => ({ ...prevState, [e.target.name]: value }));
          // };  
    
        // const handleSubmit = (e) => {
        //     // Set initial error values to empty
        //     e.preventDefault();
            
          
        //     // Check if the user has entered both fields correctly
        //     if (username=== "user" && password=== "password") {
        //         setError('')
        //         setOnsubmit(true)
              
        //     }else{
        //         setError('Invalid username or password')
        //         setOnsubmit(false)
        //      }}
        const handleSubmit = (e) => {
          e.preventDefault();
          validate()
          // setIsSubmit(true);
        };
      
      
        
        useEffect(() => {
          document.addEventListener('mousedown',handleClickOutside);
          return () =>document.removeEventListener("mousedown", handleClickOutside);
        },[isModalOpen])
  return (
    
      <div>
<div className="modal" ref={modalRef}>

<div className="modal-content">
<form >

      <h2>Fill Details</h2>
        
              <div class="form-group">
            
          <label for="username"><bold>Username:</bold> </label><br/>
            <input type="text"   value={username} onChange={(e)=>setUsername(e.target.value)} id="username"required /><br/>
            <label for="email" ><bold>Email address:</bold> </label><br/>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}  id="email"required  />
           
          </div>
          <div class="form-group">
            <label for="phone"><bold>Phone Number:</bold></label><br/>
            <input type="tel" value={phone}id="phone" onChange={(e)=>setPhone(e.target.value)} required  />     </div>
          <div class="form-group">
            <label for="dob"><bold>Date of Birth:</bold></label><br/>
            <input type="date" value={dob} name="bday" id="dob" onChange={(e)=>setDob(e.target.value)} required />
          </div>
        
        <div >
          <button type="submit" className= "submit-button" onClick={handleSubmit}>Submit</button>
          </div>
      </form>
    


      </div>
      
    </div>
    </div>
  )
}

export default Model 
