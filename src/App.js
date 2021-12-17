
import GamePage from "./pages/GamePage"
import {createStore, combineReducers} from "redux"
import { Provider } from 'react-redux';
import gameReducer from "./store/reducers/game";

const rootReducer = combineReducers({
  game : gameReducer
})

const store = createStore(rootReducer)

function App() {
  return (
   <Provider store={store}>
     <GamePage/>
   </Provider>
      
   
  );
}

export default App;
