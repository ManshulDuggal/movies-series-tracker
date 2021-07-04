import axios from "axios";
import { GetInfo, GetTrailers } from "../api";

export const getDetail = (id) => async (dispatch) => {
  const detailData = await axios.get(GetInfo(id));
  const trailersData = await axios.get(GetTrailers(id));
  console.log(trailersData);
  dispatch({
    type: "LOADING_DETAILS",
  });
  dispatch({
    type: "GET_DETAIL",
    payload: {
      detail: detailData.data,
      trailers: trailersData.data.results,
    },
  });
};
