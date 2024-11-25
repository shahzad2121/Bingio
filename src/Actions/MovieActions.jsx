import { loadMovie } from "../reducers/movieSlice";
import instance from "../Utils/Axios";

export const asyncloadmovie = (id) => async (dispatch) => {
  try {
    const details = await instance.get(`/movie/${id}`);
    const recommendations = await instance.get(`/movie/${id}/recommendations`);
    const releaseDates = await instance.get(`/movie/${id}/release_dates`);
    const similar = await instance.get(`/movie/${id}/similar`);
    const videos = await instance.get(`/movie/${id}/videos`);
    const watchProviders = await instance.get(`/movie/${id}/watch/providers`);

    let allDetails = {
      details: details.data,
      recommendations: recommendations.data.results,
      releaseDates: releaseDates.data.results,
      similar: similar.data.results,
      videos: videos.data.results.find((m) => m.type === "Trailer"),
      watchProviders: watchProviders.data.results.US,
    };
    dispatch(loadMovie(allDetails))
  } catch (error) {
    console.log("Error:", error);
  }
};
