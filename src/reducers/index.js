import { combineReducers } from "redux";

import { movieReducer } from "./moviesReducer";
import { seriesReducer } from "./seriesReducer";
import detailReducer from "./detailReducer";
import favouriteReducer from "./favouriteReducer";
import detailSeriesReducer from "./detailTvreducer";

const rootReducer = combineReducers({
  movies: movieReducer,
  series: seriesReducer,
  detail: detailReducer,
  detailtv: detailSeriesReducer,
  favourites: favouriteReducer,
});

export default rootReducer;
