import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css';
import Footer from './component/footer/Footer';
import Header from './component/header/Header';
import Home from './pages/home/Home';
import Quiz from './pages/quiz/Quiz';
import Result from './pages/result/Result';
import { useState } from 'react';
import axios from 'axios';

function App() {

const [name,setName] = useState("");
const [questions, setQuestions] = useState();
const [score,setScore] = useState(0); 

const fetchQuestions= async (category="", difficulty="") => {

const {data} = await axios.get(
  `https://opentdb.com/api.php?amount=10${
    category && `&category=${category}`
  }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
);
setQuestions(data.results);
};

  return (
    <BrowserRouter>
    <div className="app" style={{ backgroundImage:'URL("https://wallpaperaccess.com/full/2384075.jpg")' }}>
      <Header/>
      <Routes>
        <Route path="/" element={<Home name={name} setName={setName} fetchQuestions={fetchQuestions}/>} />
        <Route path="/quiz" element={<Quiz name={name} questions={questions} score={score} setScore={setScore} setQuestions={setQuestions} />} />
        <Route path="/result" element={<Result score={score}/>} />
      </Routes>
    </div> 
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

