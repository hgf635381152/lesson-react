import { combineReducers } from 'redux';
import { reducer as recommendReducer } from "../application/Recommend/store/index";
import { reducer as singersReducer } from "../application/Singers/store/index";
import { reducer as singerInfoReducer } from "../application/Singer/store/index";
import { reducer as playerReducer } from "../application/Player/store/index";


export default combineReducers({
  recommend: recommendReducer,
  singers: singersReducer,
  // rank: rankReducer,
  // album: albumReducer,
  singerInfo: singerInfoReducer,
  player: playerReducer,
  // search: searchReducer,
  // user: userReducer
});