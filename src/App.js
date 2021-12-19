
import GamePage from "./pages/GamePage"
import './App.css'
import { BrowserRouter, Route,  Routes, Redirect } from "react-router-dom";
import Home from './pages/Home'


const App = () => {
  return (
    <BrowserRouter>
     < Routes>
       <Route path='/'  element={<Home />} />
      <Route path='/play' element={<GamePage/>} />
    </Routes>
    
    </BrowserRouter>
   
   
  )
}

export default App

