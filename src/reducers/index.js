import { combineReducers } from "redux";

import { movieReducer } from "./moviesReducer";
import { seriesReducer } from "./seriesReducer";
import detailReducer from "./detailReducer";

const rootReducer = combineReducers({
  movies: movieReducer,
  series: seriesReducer,
  detail: detailReducer,
});

export default rootReducer;
