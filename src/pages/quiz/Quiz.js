import React, { useEffect, useState } from 'react';
import Questions from '../../component/question/Questions';

const Quiz = ({ name,score,questions,setQuestions,setScore }) => {
const [options,setOptions] = useState();
const [currQues,setCurrQues] = useState(0);

  useEffect(()=>{
    console.log(questions);
    setOptions(
      questions && 
      handleSuffel([
        questions[currQues]?.correct_answer,
        ...questions[currQues]?.incorrect_answers
      ])
      );
  },[questions,currQues]);
  
  console.log(options);

function handleSuffel(optionss){
    return optionss.sort(() =>Math.random() -0.5);
};

  return (
    <div>
      <div className='Quiz-login'>
      <span >Welcome, {name}</span>
      </div>

      { questions ?(
        <>
      <div style={{display:"flex",justifyContent:"space-between",padding:"5px 20px",fontWeight:"bold",color:"white",fontSize:"20px"}}>
        <span>{questions[currQues].category}</span>
        <span>SCORE : {score}</span>
      </div>

      <Questions 
      currQues={currQues}
      setCurrQues={setCurrQues}
      questions={questions}
      options={options}
      correct={questions[currQues]?.correct_answer}
      score={score}
      setScore={setScore}
      />

      </>
      ):
      <h1>Loadding....</h1>
      
      }


    </div>
  )
}

export default Quiz