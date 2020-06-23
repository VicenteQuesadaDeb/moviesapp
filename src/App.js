import React, { useState } from "react";
import "./App.css";
import styled from "styled-components";
import MovieCard from "./components/MovieCard";
import moviesList from "./data/movieDataBase";

function App() {
  //Search bar state
  const [search, setSearch] = useState("");
  const handleSearch = (event) => event.preventDefault();
  //Movie name bar state
  const [movieName, setMovieName] = useState("");
  const handleMovieName = (event) => setMovieName(event.target.value);
  //Movie genre bar state
  const [movieGenre, setMovieGenre] = useState("");
  const handleMovieGenre = (event) => setMovieGenre(event.target.value);
  //Radio buttons state
  const [checkedHorror, setCheckedHorror] = useState(false)
  const handleClickHorror = () => setCheckedHorror(!checkedHorror)
  const [checkedRomance, setCheckedRomance] = useState(false)
  const handleClickRomance = () => setCheckedRomance(!checkedRomance)
  const [checkedCommedy, setCheckedCommedy] = useState(false)
  const handleClickCommedy = () => setCheckedCommedy(!checkedCommedy)

  return (
    <div id="app-main-container">
      <div id="container">
        <StyledTitle>MoviesApp</StyledTitle>
        <StyledInputs>
          <StyledLabel htmlFor="movieNameInput">Enter movie name</StyledLabel>

          <StyledNameInput
            type="text"
            name="movieNameInput"
            value={movieName}
            onChange={handleMovieName}
          ></StyledNameInput>

          <StyledLabel htmlFor="movieGenreInput">Enter movie genre</StyledLabel>

          <StyledGenreInput
            type="text"
            name="movieGenreInput"
            value={movieGenre}
            onChange={handleMovieGenre}
          ></StyledGenreInput>
        </StyledInputs>
        <StyledSubmitButton onClick={() => console.log("Submit movie")}>
          Submit
        </StyledSubmitButton>

        <StyledRadioButton
          type="radio"
          name="horrorRadioButton"
          value="horror"
          checked={checkedHorror}
          onClick={handleClickHorror}
        ></StyledRadioButton>
        <StyledLabel htmlFor="horrorRadioButton">Horror</StyledLabel>
        <StyledRadioButton
          type="radio"
          name="romanceRadioButton"
          value="romance"
          checked={checkedRomance}
          onClick={handleClickRomance}
        ></StyledRadioButton>
        <StyledLabel htmlFor="romanceRadioButton">Romance</StyledLabel>
        <StyledRadioButton
          type="radio"
          name="commedyRadioButton"
          value="commedy"
          checked={checkedCommedy}
          onClick={handleClickCommedy}
        ></StyledRadioButton>
        <StyledLabel htmlFor="commedyRadioButton">Commedy</StyledLabel>
        <StyledResetButton onClick={() => console.log("Reset genre filter")}>
          Reset
        </StyledResetButton>

        <StyledLabel htmlFor="searchInput">Search by name</StyledLabel>

        <StyledForm>
          <StyledSearchInput
            type="text"
            name="searchInput"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          ></StyledSearchInput>
          <StyledSearchButton onClick={handleSearch}>Search</StyledSearchButton>
        </StyledForm>

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

const StyledForm = styled.form`
   {
    display: flex;
    flex-direction: row;
    border-width: 1px solid #0d0327;
    padding: 2px;
  }
`;

const StyledSearchInput = styled.input`
   {
    display: flex;
    background-color: #f4f2c9;
    font-size: 1.2em;
    text-align: center;
    flex: 1;
    width: 100%;
  }
`;

const StyledSearchButton = styled.button`
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
    padding: 10px auto;
    font-weight: bold;
    font-size: 1.1em;
  }
`;

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
