import React , {useState} from "react"
import styled from "styled-components"

import { DATACARD,  PLAYERS } from "../dummy-data/data"
import Card from "./Card"

const CardSectionContainer = styled.div`

height:300px;
width: 800px;
display: flex;
justify-content : space-around;

`
const Container = styled.div`


display: flex;
flex-direction:column;


`


const CardSection = ()=>{

    // const player1Cards = PLAYERS[0].cards.map(card=>{
    //     console.log(card.id)
    //     return (
    //         <Card cardImg={card.img} val ={card.val}/>

    //     )
    // })
   
   
    const playerCards = PLAYERS.map(player=>{
        console.log(player.id)

      const results =   player.cards.map(card=>{
            console.log(card)
            return (
                <Card cardImg={card.img} val ={card.val}/>
    
            )
        })

        return   <CardSectionContainer >{results}</CardSectionContainer>
       
    })
    return (
        <Container>
           
           
            {playerCards}
           
       
        </Container>

       
       
    )
}

export default CardSection;