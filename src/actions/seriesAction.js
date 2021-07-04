import axios from "axios";
import { popularSeries, trendingSeries } from "../api";

//action creator

export const seriesAction = () => async (dispatch) => {
  const popularSeriesData = await axios.get(popularSeries());
  const trendingSeriesData = await axios.get(trendingSeries());

  dispatch({
    type: "FETCH_SERIES",
    payload: {
      popularSeries: popularSeriesData.data.results,
      trendingSeries: trendingSeriesData.data.results,
    },
  });
};
