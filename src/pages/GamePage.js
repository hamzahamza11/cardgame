import React from "react";
import Cards from "../components/CardSection";
import { useParams , useLocation } from "react-router"
import queryString from 'query-string'


const GamePage = (props)=>{
    const {search} = useLocation()
    const parsed = queryString.parse(search);
    
    return (
        <div>
           <Cards room={parsed.roomCode }/>
        </div>
    )
}

export default GamePage;