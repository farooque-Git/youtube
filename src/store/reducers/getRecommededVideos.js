// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// import { parseData } from "../../utils/parseData";

// const API_KEY = process.env.React_APP_YOUTUBE_API_KEY;

// export const getRecommededVideos = createAsyncThunk(
//   "youtube/App/homePageVideos",
//   async (isNext, { getState }) => {
//     const {
//       youtubeApp: { nextPageToken: nextPageTokenFromState, videos },
//     } = getState();
//     const response = await axios.get(
//       `https://youtube.googleapis.com/youtube/v3/search?maxResults=20&q="OpenAI" &key=${API_KEY}&part=snippet&type=video`
//     );

//     const items = response.data.items;
//     const parsedData = await parseData(items);

//     return {
//       parsedData: [...videos, ...parsedData],
//       nextPageToken: nextPageTokenFromState,
//     };
//   }
// );
