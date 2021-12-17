import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { io } from "socket.io-client";
import { useSelector } from "react-redux";
import { DATACARD, PLAYERS } from "../dummy-data/data";
import Card from "./Card";
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
  const state = useSelector((state) => state.game);
  

  
  const player1Cards = state.player1.DATACARD.map((card) => {
    return <Card cardImg={card.img} val={card.val} />;
  });

  const player2Cards = state.player2.DATACARD.map((card) => {
    return <Card cardImg={card.img} val={card.val} />;
  });

  useEffect(() => {
    const socket = io(ENDPOINT);

    socket.on("connect", () => {
      console.log("ouou" + socket.id);
    });
  },[player1Cards]);
  useEffect(() => {
    const socket = io(ENDPOINT);

    socket.on("connect", () => {
      console.log("ouou" + socket.id);
    });
  },[player2Cards ]);

 

  return (
    <Container>
      <CardSectionContainer>{player1Cards}</CardSectionContainer>
      <CardSectionContainer>{player2Cards}</CardSectionContainer>
    </Container>
  );
};

export default CardSection;
