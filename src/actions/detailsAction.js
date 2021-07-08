import axios from "axios";
import { GetInfoMovie, GetTrailers, GetReviewMovie } from "../api";

export const getDetail = (id) => async (dispatch) => {
  const detailData = await axios.get(GetInfoMovie(id));
  const trailersData = await axios.get(GetTrailers(id));
  const reviewData = await axios.get(GetReviewMovie(id));
  console.log(trailersData);
  dispatch({
    type: "LOADING_DETAILS",
  });
  dispatch({
    type: "GET_DETAIL",
    payload: {
      reviews: reviewData.data.results,
      detail: detailData.data,
      trailers: trailersData.data.results,
    },
  });
};
