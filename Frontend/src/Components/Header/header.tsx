import { LuSettings2 } from "react-icons/lu";
import { IoLogoCodepen } from "react-icons/io";
import AppLogo from "../../../public/1.png";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./header.css";

export default function Header() {
  const navigate = useNavigate();

  return (
    <>
      <head className="w-full sm:h-20 h-16 pb-1 flex justify-evenly items-center z-[20] sm:shadow-abhi">
        <div className="lg:w-48 md:w-32 sm:w-20 h-12 bg-blue-300 flex justify-center items-center scale-95 hover:cursor-pointer">
          <img src={AppLogo} alt="logo" />
        </div>
        <div className="w-2/5 h-12 rounded-full sm:bg-gray-200 sm:shadow-abhi2 flex md:justify-between justify-center items-center p-1 pt-3 pb-3 sm:pr-4 xl:mr-10">
          <div className="sear h-12 p-2 flex justify-center items-center pt-1 pb-1">
            <label
              htmlFor="sea"
              className="h-10 w-10 rounded-full mr-2 flex justify-evenly items-center cursor-pointer hover:shadow-abhi2 bg-gray-50"
            >
              <FaSearch size={"1.3em"} />
            </label>
            <input
              id="sea"
              className="h-10 xl:w-80 lg:w-76 md:w-52 sm:w-36 rounded-lg flex justify-evenly items-center cursor-pointer focus:rounded-full text-2xl p-2 pl-4 focus:outline-none bg-gray-50"
              type="text"
              placeholder="Search Here ..."
            />
          </div>
          <div className="h-10 xl:w-24 w-28 rounded-full cursor-pointer grid place-items-center text-xl text-white font-semibold bg-red-500">
            Search
          </div>
        </div>
        <div className="liss w-1/3 h-12 shadow-abhi2 rounded-xl sm:flex justify-between pr-3 pl-3 xl:pr-8 xl:pl-8 items-center none">
          <h2
            onClick={() => {
              navigate("/landing");
            }}
            className="md:text-xl lg:text-2xl cursor-pointer font-semibold delay-100 hover:underline"
          >
            DASHBOARD
          </h2>
          <h2
            onClick={() => {
              navigate("/allposts");
            }}
            className="md:text-xl lg:text-2xl cursor-pointer font-semibold delay-100 hover:underline"
          >
            POSTS
          </h2>
          <h2 className="md:text-xl lg:text-2xl cursor-pointer font-semibold delay-100 hover:underline">
            TRENDS
          </h2>
        </div>
        <div className="ass">
          <LuSettings2 size={"2.2em"} />
        </div>
      </head>
    </>
  );
}
