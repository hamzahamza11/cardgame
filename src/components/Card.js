import React , {useState} from "react"
import styled from "styled-components"

const CardContainer = styled.div`

height:100px;
width: 50px;
background: yellow

`


const Card = ()=>{
    const [isFliped, setIsFliped] = useState(false)

    const handleFlip = ()=>{
        setIsFliped(!isFliped)
    }

    let card = isFliped ? <div>face</div> : <div>back</div>;


    return (

        <CardContainer onClick={handleFlip}>
            {card}
        </CardContainer>
       
    )
}

export default Card;