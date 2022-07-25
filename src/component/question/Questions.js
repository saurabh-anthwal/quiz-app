import React, { useState } from "react";
import "./Questions.css";
import Error from "../Error";
import { useNavigate } from "react-router-dom";

const Questions = ({
  currQues,
  setCurrQues,
  questions,
  options,
  correct,
  score,
  setScore
}) => {
  let navigate= useNavigate();
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);

  function handleSelected(i) {
    if (selected === i && selected === correct) {
      return "select";
    } else if (selected === i && selected !== correct) {
      return "wrong";
    } else if (i === correct) {
      return "select";
    }
  }

  function handleCheck(i) {
    setSelected(i)
    if(i===correct) setScore(score+1);
    setError(false)
  }

  function handleNext(){
    if(currQues>8){
      navigate("/result")
    }else if(selected){
      setCurrQues(currQues+1)
      setSelected()
    }else{
      setError("please select an option first");
    }
  }


  function handleQuit(){

  }


  return (
    <div>
      <h1 className="question-no">Question {currQues + 1} :</h1>
      <div className="question-ans">
        <h2 className="question">{questions[currQues].question}</h2>

        <div className="answer">
          {error && <Error>{error}</Error>}
          {options &&
            options.map((i) => (
              <button
                onClick={() => {
                  handleCheck(i);
                }}
                className={`singleOption ${selected && handleSelected(i)}`}
                key={i}
                disabled={selected}
              >
                {i}
              </button>
            ))}
        </div>

        <div className="controls">
          <button
          variant="contained"
          color="secondary"
          size="large"
          style={{width:185}}
          href="/"
          onClick={handleQuit}
          >Quit</button>

          <button 
          style={{width:185}}
          variant="contained"
          color="primary"
          size="large"
          onClick={handleNext}>Next Quetion</button>
        </div>

      </div>
    </div>
  );
};

export default Questions;
