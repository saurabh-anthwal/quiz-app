import { Button, MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";
import Categories from "../../data/Categories";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import Error from "../../component/Error";

const Home = ({name,setName,fetchQuestions}) => {
const navigate = useNavigate();
const [category,setCategory] = useState("");
const [difficulty,setDifficulty] = useState("");
const [error,setError] =  useState(false);

function handleClick(){
if(!name || !difficulty || !category){
    setError(true)
    return; 
}else{
    setError(false)
    fetchQuestions(category, difficulty);
    navigate("/quiz")
}
}

  return (
    <div className="content">
      <div className="settings">
        <span style={{ fontSize: "30px" }}>Quiz Settings</span>
        <div className="setting-select">
            {
                error && (
                    <Error >Please Filled The Details!...</Error>
                )
            }
          <TextField
            style={{ marginBottom: "30px" }}
            label="Enter Your Name"
            variant="outlined"
            onChange={(e)=>setName(e.target.value)}
            
          />


          <TextField
            select
            label="Select Category"
            variant="outlined"
            style={{ marginBottom: "30px" }}
            onChange={(e)=>setCategory(e.target.value)}
            value={category}
          >
            {Categories.map((cat) => (
              <MenuItem key={cat.category} value={cat.value}>
                {cat.category}
              </MenuItem>
            ))}
          </TextField>

          <TextField 
           select
          style={{ marginBottom: "30px" }}
          label="Select Difficulty"
          variant="outlined"
          onChange={(el)=>setDifficulty(el.target.value)}
          value={difficulty}
          >
            <MenuItem key="Easy" value="easy">Easy</MenuItem>
            <MenuItem key="Medium" value="medium">Medium</MenuItem>
            <MenuItem key="Hard" value="hard">Hard</MenuItem>
          </TextField>

        <Button variant="contained" color="primary" size="large" onClick={handleClick}>
            Star Quiz
        </Button>

        </div>
      </div>
      <img
        src="https://static.vecteezy.com/system/resources/thumbnails/005/879/539/small/cloud-computing-modern-flat-concept-for-web-banner-design-man-enters-password-and-login-to-access-cloud-storage-for-uploading-and-processing-files-illustration-with-isolated-people-scene-free-vector.jpg"
        alt=""
        className="banner"
      />
    </div>
  );
};

export default Home;
