export const FLIP_CARD = "FLIP_CARD"
export const START_GAME = 'START_GAME';

export const startGame = (id)=>{
    return {type: FLIP_CARD , otherPlayer:id}
}

export const flipCrad = (id)=>{
    return {type: FLIP_CARD , cardId : id}
}