import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { io } from "socket.io-client";
import { useSelector } from "react-redux";
import { DATACARD, PLAYERS } from "../dummy-data/data";
import Card from "./Card";
import { useDispatch } from "react-redux";
import { startGame } from "../store/actions/game";
const ENDPOINT = "http://localhost:8900/";

//////////////////////
const CardSectionContainer = styled.div`
  height: 300px;
  width: 800px;
  display: flex;
  justify-content: space-around;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardSection = () => {
    const disptach = useDispatch();
    const [player1id , setPlayer1id] =  useState()
    const [player2id , setPlayer2id] =  useState()
  const state = useSelector((state) => state.game);
  console.log(state)

  
  const player1Cards = state.player1.DATACARD.map((card) => {
    return <Card cardImg={card.img} val={card.val} />;
  });

  const player2Cards = state.player2.DATACARD.map((card) => {
    return <Card cardImg={card.img} val={card.val} />;
  });

  const socket = io(ENDPOINT);

        useEffect(() => {
            socket.on("connect", () => {
                console.log(socket.id)
               });
             
               socket.on("connect", () => {
                console.log(socket.id)
               });
        }, [])
     
      
    
  

  
 

if(player1id && player2id)
{
   
    disptach(startGame(player1id,player2id))
}
 

  return (
    <Container>
      <CardSectionContainer>{player1Cards}</CardSectionContainer>
      <CardSectionContainer>{player2Cards}</CardSectionContainer>
    </Container>
  );
};

export default CardSection;
