import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = process.env.YOUTUBE_DATA_API;

export const getHomePageVideos = createAsyncThunk(
  "youtube/App/homePageVideos",
  async (isNext, { getState }) => {
    const {
      youtubeApp: { nextPageToken: nextPageTokenFromState, videos },
    } = getState();

    const params = {
      part: "snippet",
      maxResults: 20,
      q: "Allah ki Rahmat",
      type: "video",
      key: API_KEY,
    };

    const response = await axios.get(
      "https://youtube.googleapis.com/youtube/v3/search",
      { params }
    );

    console.log(response.data.items);
    const items = response.data.items;
    console.log(items);
  }
);
