import React from 'react';
import "./Result.css";
import { useNavigate } from 'react-router-dom';

const Result = ({score}) => {
  const navigate= useNavigate();
  function homepage(){
    navigate("/")
  }
  return (
    <div className='result'>
      <span className='title'>Final Score : {score} </span>
      <button 
      variant="contained"
      color="secondary"
      size="large"
      style={{alignSelf:"center",marginTop:20}}
      onClick={homepage}
      >
      GO TO HOMEPAGE        
      </button>
    </div>
  )
}

export default Result