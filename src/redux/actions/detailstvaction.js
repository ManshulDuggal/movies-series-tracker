import axios from "axios";
import { GetTrailersSeries, GetInfoSeries, GetReviewSeries } from "../../api";

export const getDetailSeries = (id) => async (dispatch) => {
  const trailersData = await axios.get(GetTrailersSeries(id));
  const seriesData = await axios.get(GetInfoSeries(id));
  const reviewData = await axios.get(GetReviewSeries(id));
  console.log(trailersData);
  console.log(seriesData);
  dispatch({
    type: "LOADING_DETAILS",
  });
  dispatch({
    type: "GET_DETAIL_SERIES",
    payload: {
      reviews: reviewData.data.results,
      detailSeries: seriesData.data,

      trailers: trailersData.data.results,
    },
  });
};
