import { combineReducers } from "redux";

import { movieReducer } from "./moviesReducer";
import { seriesReducer } from "./seriesReducer";
import detailReducer from "./detailReducer";
import favoritesReducer from "./favoritesReducer";
import detailSeriesReducer from "./detailTvreducer";
import newListReducer from "./newListReducer";

const rootReducer = combineReducers({
  movies: movieReducer,
  series: seriesReducer,
  detail: detailReducer,
  detailtv: detailSeriesReducer,
  favorites: favoritesReducer,
  newList: newListReducer,
});

export default rootReducer;
