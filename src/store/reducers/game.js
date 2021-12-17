import { DATACARD, PLAYERS } from "../../dummy-data/data";
import { io } from "socket.io-client";

import { START_GAME, FLIP_CARD } from "../actions/game";

const initialState = {
  payerTurn: "",
  isMatch: false,
 
  player1: {
    id: "",
    DATACARD: DATACARD,
    point:0,
    timeLeft:0,
    isTurn:false
  },
  player2: {
    id: "",
    DATACARD: DATACARD,
    point:0,
    timeLeft:0,
    isTurn:false
  },
};

const gameReducer = (state = initialState, action) => {
  // socket.emit("r1",state)
  switch (action.type) {
    case START_GAME:
      return;

    // socket.emit("r1",state)

    default:
      return state;
  }
};

export default gameReducer;
