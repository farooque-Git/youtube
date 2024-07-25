import { MdOutlineMenu } from "react-icons/md";
import { FaMicrophone, FaYoutube } from "react-icons/fa";
import { RiVideoAddLine } from "react-icons/ri";
import { MdOutlineNotifications } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  changeSearchTerm,
  clearVideos,
} from "../features/youtube/youtubeSlice";
import { getHomePageVideos } from "../store/reducers/getHomePageVideos";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.youtubeApp.searchTerm);

  const handleSearch = async () => {
    try {
      if (location.pathname !== "/search") {
        navigate("/search");
      } else {
        dispatch(clearVideos());
        await dispatch(getHomePageVideos(false));
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-[#212121] text-white sticky top-0 h-auto md:h-12 p-3 md:p-0 opacity-95">
      <div className="flex items-center justify-between w-full md:w-auto space-x-4 md:space-x-60">
        {/* left side icon */}
        <div className="flex justify-center pl-3 md:pl-7 space-x-4">
          <div>
            <MdOutlineMenu className="text-3xl" aria-label="Menu" />
          </div>
          <div className="flex gap-2 items-center justify-center space-x-2">
            <div>
              <FaYoutube
                className="text-3xl text-red-600"
                aria-label="YouTube"
              />
            </div>
            <div className="text-xl">YouTube</div>
          </div>
        </div>
        <div className="md:hidden">
          <div className="flex gap-5 items-center text-xl">
            <div>
              <RiVideoAddLine aria-label="Add Video" />
            </div>
            <div className="relative">
              <MdOutlineNotifications aria-label="Notifications" />
              <span className="absolute bottom-2 left-2 text-xs bg-red-600 rounded-full px-1"></span>
            </div>
            <div>
              <img
                src="https://cdn.pixabay.com/photo/2016/04/15/18/05/computer-1331579_640.png"
                alt="profile logo"
                className="w-9 rounded-full h-9"
              />
            </div>
          </div>
        </div>
      </div>
      {/* search */}
      <div className="flex items-center justify-center w-full md:w-auto mt-3 md:mt-0">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
          className="flex items-center"
        >
          <div className="flex text-xl bg-zinc-900 items-center h-10 px-4 pr-0 rounded-3xl">
            <div className="flex gap-5 items-center pr-5">
              <input
                type="text"
                placeholder="Search"
                className="w-56 md:w-96 bg-zinc-900 focus:outline-none border-none"
                aria-label="Search"
                value={searchTerm}
                onChange={(e) => dispatch(changeSearchTerm(e.target.value))}
              />
            </div>
            <button
              className="h-10 w-16 flex items-center justify-center bg-zinc-800 rounded-r-3xl"
              aria-label="Search button"
            >
              <AiOutlineSearch className="text-2xl" />
            </button>
          </div>
        </form>
        <div className="text-xl h-10 p-3 bg-zinc-900 rounded-full ml-3">
          <FaMicrophone aria-label="Microphone" />
        </div>
      </div>
      {/* user form */}
      <div className="hidden md:flex gap-5 items-center text-xl mr-4">
        <div>
          <RiVideoAddLine aria-label="Add Video" />
        </div>
        <div className="relative">
          <MdOutlineNotifications aria-label="Notifications" />
          <span className="absolute bottom-2 left-2 text-xs bg-red-600 rounded-full px-1"></span>
        </div>
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2016/04/15/18/05/computer-1331579_640.png"
            alt="profile logo"
            className="w-9 rounded-full h-9"
          />
        </div>
      </div>
    </div>
  );
}
