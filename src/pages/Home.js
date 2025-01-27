import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getHomePageVideos } from "../store/reducers/getHomePageVideos";
import Shimmer from "../components/Shimmer";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "../components/Card";

const Home = () => {
  const dispatch = useDispatch();
  const videos = useSelector((state) => state.youtubeApp.videos);

  useEffect(() => {
    const fetchHomePageVideos = async () => {
      try {
        await dispatch(getHomePageVideos(false));
        console.log(videos);
      } catch (error) {
        console.error(error);
      }
    };

    fetchHomePageVideos();
  }, [dispatch, videos]);

  const fetchMoreVideos = async () => {
    try {
      await dispatch(getHomePageVideos(true));
    } catch (error) {
      console.error(error);
    }
  };

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
            next={fetchMoreVideos}
            hasMore={videos.length < 500}
            loader={<Shimmer />}
            height={650}
          >
            <div className="grid gap-y-10 gap-x-8 grid-cols-4 p-8">
              {videos.map((item) => {
                return <Card data={item} key={item.videoId} />;
              })}
            </div>
          </InfiniteScroll>
        ) : (
          <Shimmer />
        )}
      </div>
    </div>
  );
};

export default Home;
