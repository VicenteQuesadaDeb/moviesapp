import React from "react";
import styled from "styled-components";

export default (props) => {
  return (
    <StyledCard>
      <StyledCheckBox type="checkbox"></StyledCheckBox>
      <StyledMovieTitle>{props.title}</StyledMovieTitle>
      <StyledButton onClick={() => {console.log("Delete Movie")}}>
          Delete
      </StyledButton>
    </StyledCard>
  );
};

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
    margin: 4px 10px;
    border-radius: 10px;
  }
`;

const StyledCheckBox = styled.input`
   {
    text-align: center;
    width: 30px;
    height: 30px;
    margin-left: 10px;
  }
`;

const StyledMovieTitle = styled.p`
   {
    color: #f2f6ad;
    font-size: 1.5em;
    text-align: center;
    margin: auto;
  }
`;

const StyledCard = styled.div`
   {
    display: flex;
    align-items: center;
    text-align: center;
    margin: auto;
    background-color: #0d0327;
    color: #f4f2c9;
  }
`;
