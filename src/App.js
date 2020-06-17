import React from "react";
import "./App.css";
import styled from "styled-components";

function App() {
  return (
    <>
      <StyledTitle>MoviesApp</StyledTitle>
      <StyledInputs>
        <StyledNameInput
          type="text"
          name="movieNameInput"
          value="Enter movie name"
          onChange={() => {
            console.log("MovieNameInput");
          }}
        ></StyledNameInput>
        <StyledGenreInput
          type="text"
          name="movieGenreInput"
          value="Enter movie genre"
          onChange={() => {
            console.log("MovieGenreInput");
          }}
        ></StyledGenreInput>
      </StyledInputs>
      <StyledSubmitButton onClick={() => console.log("Submit movie")}>Submit</StyledSubmitButton>
    </>
  );
}

export default App;

const StyledTitle = styled.h1`
   {
    padding-top: 35px;
    padding-bottom: 20px;
    text-align: center;
    align-items: center;
    background-color: #2c1545;
    margin: auto;
    height: 50px;
    color: #f2f6ad;
    font-weight: bold;
  }
`;

const StyledSubmitButton = styled.button`
   {
    border-radius: 10px;
    border: none;
    text-decoration: none;
    display: inline-block;
    text-decoration: none;
    display: inline-block;
    border: none;
    background-color: #0d0327;
    color: #f4f2c9;
    padding: 10px 50px;
    padding-left: 40px;
    padding-right: 40px;
    margin-top: 10px;
    margin: 10px 120px 10px 120px;

  }
`;

const StyledInputs = styled.div`
   {
    display: grid;
    grid-template-colums: 60% 40%;
    grid-template-rows: auto auto;
  }
`;

const StyledNameInput = styled.input`
   {
    grid-column: 1 / span 3;
    background-color: #f4f2c9;
  }
`;

const StyledGenreInput = styled.input`
   {
    grid-column: 1 / span 3;
    background-color: #f4f2c9;
  }
`;
