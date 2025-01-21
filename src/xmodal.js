import React from 'react'
import  "./xmodal.css";
import {  useState ,useEffect} from "react";
import { useRef } from 'react';
import Model  from "./Model.js";

const Xmodal = () => {
    let [isModalOpen, setIsModalOpen] = useState(false);
    
    const handleOpen = () => {
        setIsModalOpen(true);
      };
      const handleClose = () => {
        setIsModalOpen(false);
      };

     
 return (
    <div>
    <div className='modalcontainer'>
        <h1>User Details Modal</h1>
              <button  className='myBtn' onClick={handleOpen}>Open Form</button>
              {isModalOpen ?<Model handleClose={handleClose} isModalOpen={isModalOpen}/> :""}
              </div>     
</div>
 )
}

export default Xmodal
