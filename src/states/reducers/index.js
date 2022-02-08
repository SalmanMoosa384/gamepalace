import { combineReducers } from "redux";
import { genre } from "./genre";
import { creator } from "./creator";
import { developer } from "./developer";
import { platform } from "./platform";
import { publisher } from "./publisher";
import { tag } from "./tag";
import { store } from "./store";
import { gameType } from "./gameType";
import { gameList } from "./gameList";
import { gameDetail } from "./gameDetail";
const reducers = combineReducers({
  genre: genre,
  creator: creator,
  developer: developer,
  platform: platform,
  publisher: publisher,
  tag: tag,
  store: store,
  gameType: gameType,
  gameList:gameList,
  gameDetail:gameDetail
});

export default reducers;
