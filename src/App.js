import React from "react";
import "./App.css";
import styled from "styled-components";
import MovieCard from "./components/MovieCard";
import moviesList from "./data/movieDataBase";

function App() {
  return (
    <div id="app-main-container">
      <div id="container">
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

        <StyledList>
          {moviesList.map((item) => (
            <MovieCard
              title={item.title}
              genre={item.genre}
              watched={item.watched}
              key={item.key}
            />
          ))}
        </StyledList>
      </div>
    </div>
  );
}

export default App;

const StyledList = styled.ul`
   {
    margin: auto;
    padding: 0;
    list-style-type: none;
  }
`;

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
    font-size: 1.1em;
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
    font-size: 2.5em;
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
    padding: 10px 45px;
    margin-top: 10px;
    margin: 10px 120px 10px 120px;
    font-weight: bold;
    font-size: 1.1em;
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
    font-size: 1.2em;
    text-align: center;
  }
`;

const StyledGenreInput = styled.input`
   {
    grid-column: 1 / span 3;
    background-color: #f4f2c9;
    font-size: 1.2em;
    text-align: center;
  }
`;
