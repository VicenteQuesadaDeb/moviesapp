import React from "react";
import "./App.css";
import styled from "styled-components";
import MovieCard from './components/MovieCard'

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
      <StyledSubmitButton onClick={() => console.log("Submit movie")}>
        Submit
      </StyledSubmitButton>

      <StyledRadioButton
        type="radio"
        name="horrorRadioButton"
        value="horror"
      ></StyledRadioButton>
      <StyledLabel htmlFor="horrorRadioButton">Horror</StyledLabel>
      <StyledRadioButton
        type="radio"
        name="romanceRadioButton"
        value="romance"
      ></StyledRadioButton>
      <StyledLabel htmlFor="romanceRadioButton">Romance</StyledLabel>
      <StyledRadioButton
        type="radio"
        name="commedyRadioButton"
        value="commedy"
      ></StyledRadioButton>
      <StyledLabel htmlFor="commedyRadioButton">Commedy</StyledLabel>
      <StyledResetButton onClick={() => console.log("Reset genre filter")}>
        Reset
      </StyledResetButton>

      <MovieCard 
        title={"Harry Potter"}
      />    
    </>
  );
}

export default App;


const StyledLabel = styled.label`
   {
    font-weight: bold;
  }
`;

const StyledResetButton = styled.button`
   {
    border-radius: 10px;
    border: none;
    text-decoration: none;
    display: inline-block;
    text-decoration: none;
    display: inline-block;
    border: none;
    background-color: #f2f6ad;
    color: #eb3535;
    padding: 10px 50px;
    margin-top: 10px;
    margin: 10px 120px 10px 120px;
    font-weight: bold;
  }
`;

const StyledRadioButton = styled.input`
   {
    margin: 10px 15px 10px 20px;
  }
`;

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
    padding-right: 50px;
    margin-top: 10px;
    margin: 10px 120px 10px 120px;
    font-weight: bold;
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
