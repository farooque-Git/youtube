import { MdOutlineMenu } from "react-icons/md";
import { FaMicrophone, FaYoutube } from "react-icons/fa";
import { RiVideoAddLine } from "react-icons/ri";
import { MdOutlineNotifications } from "react-icons/md";

export default function Navbar() {
  return (
    <div className="flex bg-[#212121] text-white sticky justify-between px-14 h-12 items-center opacity-95">
      <div className="flex gap-48 items-center text-2xl">
        {/* left side icon */}
        <div className="flex justify-center pl-4 space-x-4 ">
          <div>
            <MdOutlineMenu className=" text-3xl" />
          </div>
          <div className="flex gap-2 items-center justify-center space-x-2">
            <div>
              <FaYoutube className=" text-3xl text-red-600 " />
            </div>
            <div className="text-xl">Youtube</div>
          </div>
        </div>

        {/* search */}

        <div className="flex items-center justify-center gap-3">
          <form>
            <div className="flex text-xl bg-zinc-900 items-center h-10 px-4 pr-0 rounded-3xl">
              <div className="flex gap-5 items-center pr-5">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-96 bg-zinc-900 focus:outline-none border-none"
                />
              </div>
            </div>
          </form>

          <div className="text-xl h-10 p-3 bg-zinc-900 rounded-full">
            <FaMicrophone />
          </div>
        </div>
        {/* user form */}
        <div className="flex gap-5 items-center justify-items-end text-xl">
          <div>
            <RiVideoAddLine />
          </div>
          <div className="relative">
            <MdOutlineNotifications />
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
  );
}
