import React, { useState } from "react";
import styled from "styled-components";


export default (props) => {
  const [checked, setChecked] = useState(false)
  const handleClick = () => setChecked(!checked)

  return (
    <StyledCard>
      <StyledCheckBox
        id="checkbox"
        type="checkbox"
        name="checkbox"
        checked={checked}
        onClick={handleClick}
      ></StyledCheckBox>
      <StyledMovieTitle>{props.title}</StyledMovieTitle>
      <StyledButton
        onClick={() => {
          console.log("Delete Movie");
        }}
      >
        Delete
      </StyledButton>
      <StyledGenres>
        {props.genre.map((item, index) => {
          return <span key={index}>{(index ? ", " : "") + item}</span>;
        })}
      </StyledGenres>
    </StyledCard>
  );
};

const StyledGenres = styled.div`
   {
    display: flex;
    flex-direction: row;
    margin: 5px auto 10px auto;
    font-size: 1.2em;
  }
`;

const StyledButton = styled.button`
   {
    background-color: #f2f6ad;
    border: none;
    color: #eb3535;
    padding: 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 15px 10px;
    border-radius: 10px;
    font-weight: bold;
  }
`;

const StyledCheckBox = styled.input`
   {
    text-align: center;
    width: 30px;
    height: 30px;
    margin: 10px 0 0 10px;
  }
`;

const StyledMovieTitle = styled.p`
   {
    color: #f2f6ad;
    font-size: 2em;
    text-align: center;
    margin: auto;
  }
`;

const StyledCard = styled.div`
   {
    display: grid;
    align-items: center;
    text-align: center;
    margin: auto;
    background-color: #0d0327;
    color: #f4f2c9;
    border-width: 20px;
    border-color: #fff;
    border-bottom: 3px solid #fff;
  }
`;
