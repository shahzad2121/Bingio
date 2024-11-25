import { loadtv } from "../reducers/tvSlice";
import instance from "../Utils/Axios";

export const asyncloadtv = (id) => async (dispatch) => {
  try {
    const details = await instance.get(`/tv/${id}`);
    const recommendations = await instance.get(`/tv/${id}/recommendations`);
    const releaseDates = await instance.get(`/tv/${id}/release_dates`);
    const similar = await instance.get(`/tv/${id}/similar`);
    const videos = await instance.get(`/tv/${id}/videos`);
    const watchProviders = await instance.get(`/tv/${id}/watch/providers`);

    let allTvDetails = {
      details: details.data,
      recommendations: recommendations.data.results,
      releaseDates: releaseDates.data.results,
      similar: similar.data.results,
      videos: videos.data.results.find((t) => t.type === "Trailer"),
      watchProviders: watchProviders.data.results.US,
    };
    dispatch(loadtv(allTvDetails))
  } catch (error) {
    console.log("Error:", error);
  }
};
