import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Watch = () => {
  //   const { id } = useParams();
  const { videoId } = useParams();

  console.log(videoId); // Retrieve the videoId from the URL parameters
  //   const dispatch = useDispatch();
  //   const navigate = useNavigate();
  //   const currentPlaying = useSelector(
  //     (state) => state.youtubeApp.currentPlaying
  //   );
  //   const recommededVideo = useSelector(
  //     (state) => state.youtubeApp.recommededVideo
  //   );

  //   useEffect(
  //     (id) => {
  //       if (id) {
  //         dispatch(getVideoDetails(id));
  //       } else {
  //         navigate("/");
  //       }
  //     },
  //     [dispatch, navigate, id]
  //   );

  //   useEffect(() => {
  //     if (currentPlaying && id) dispatch(getRecommendedVideo(id));
  //   }, [currentPlaying, dispatch, id]);

  return (
    <div style={{ width: "50%", height: "200%" }}>
      <iframe
        width="130%"
        height="800px"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube video player"
      ></iframe>
    </div>
  );
};

export default Watch;
