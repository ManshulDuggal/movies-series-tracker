import axios from "axios";
import { previewMovies, previewSeries } from "../../api";

export const getPreview = (id) => async (dispatch) => {
  const previewMoviesData = await axios.get(previewMovies(id));

  dispatch({
    type: "LOADING_DETAILS",
  });
  dispatch({
    type: "GET_PREVIEWS",
    payload: {
      previewMovies: previewMoviesData.data.results,
    },
  });
};

export const getPreviewSeries = (id) => async (dispatch) => {
  const previewSeriesData = await axios.get(previewSeries(id));

  dispatch({
    type: "LOADING_DETAILS",
  });
  dispatch({
    type: "GET_PREVIEWS_SERIES",
    payload: {
      previewSeries: previewSeriesData.data.results,
    },
  });
};
