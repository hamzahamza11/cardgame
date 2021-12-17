export const FLIP_CARD = "FLIP_CARD"
export const START_GAME = 'START_GAME';

export const startGame = (id1,id2)=>{
    return {type: START_GAME ,Player1:id1 ,Player2:id2}
}

export const flipCrad = (id)=>{
    return {type: FLIP_CARD , cardId : id}
}