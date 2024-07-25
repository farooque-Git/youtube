import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "../components/Card";
import Shimmer from "../components/Shimmer";
import { getSearchPageVideos } from "../store/reducers/getSearchPageVideos";
import { clearVideos } from "../features/youtube/youtubeSlice";

export default function Search() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const videos = useSelector((state) => state.youtubeApp.videos);
  const searchTerm = useSelector((state) => state.youtubeApp.searchTerm);

  useEffect(() => {
    dispatch(clearVideos());
    if (searchTerm === "") navigate("/");
    else {
      dispatch(getSearchPageVideos(false));
    }
  }, [dispatch, navigate, searchTerm]);
  return (
    <div className="max-h-screen overflow-auto">
      <div style={{ height: "7.5vh" }}>
        <Navbar />
      </div>
      <div className="flex" style={{ height: "92.5vh" }}>
        <Sidebar />
        {videos.length ? (
          <InfiniteScroll
            dataLength={videos.length}
            next={() => dispatch(getSearchPageVideos(true))}
            hasMore={videos.length < 500}
            loader={<Shimmer />}
            height={650}
          >
            {videos.map((item) => {
              <div className="grid gap-y-10 gap-x-8 grid-cols-5 p-8">
                return <Card data={item} key={item.videoId} />;
              </div>;
            })}
          </InfiniteScroll>
        ) : (
          <Shimmer />
        )}
      </div>
    </div>
  );
}
