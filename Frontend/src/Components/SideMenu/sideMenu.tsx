import { IoMdPerson } from "react-icons/io";
import { GrProjects } from "react-icons/gr";
import { MdEmojiEvents } from "react-icons/md";
import { GiArchiveRegister } from "react-icons/gi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./sideMenu.css";

const SideMenu = () => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("User"));
  const { name, email, about, imageUrl } = user; // Destructure user object properties

  return (
    <>
      <div className="h-full w-full rounded-2xl">
        <div
          className="h-[25%] w-full rounded-xl flex justify-center align-center text-white backdrop-blur-3xl"
          style={{ background: "linear-gradient(#e66465, #9198e5)" }}
        >
          <div className="circle h-full w-[30%] grid place-items-center">
            <div className="h-24 w-24 mx-auto rounded-full bg-red-300">
              <img
                className="rounded-full grid place-items-center"
                src="public/myImage.jpeg"
                alt="User_image"
              />
            </div>
          </div>
          <div className="details h-full w-[70%]">
            <div className="w-full h-6 mt-1 text-center">Welcome</div>
            <div className="name w-full h-6 text-xl text-center font-bold">
              {name}
            </div>
            <div className="name w-full h-6 my-1 text-lg text-center font-semibold font-mono">
              {email}
            </div>
            <div className="w-full h-16 my-1 text-center">
              <p className="h-4 w-full text-center font-semibold">About You</p>
              <div className="email h-6 w-full text-center leading-normal pt-1">
                {about}
              </div>
            </div>
          </div>
        </div>
        <div className="line w-[80%] border border-black mx-auto my-2"></div>
        <div className="h-[74%] w-full pt-3 bg-[rgba(0,0,0,0.2)] rounded-2xl text-white">
          <div
            style={{
              background: "linear-gradient(to left,#e66465, #9198e5)",
            }}
            className="h-16 w-[90%] rounded-2xl my-5 cursor-pointer hover:scale-105 transition-all ease-in-out delay-75 mx-auto flex justify-center items-center"
          >
            <div className="h-full w-[30%] grid place-items-center">
              <IoMdPerson size={"3em"} />
            </div>
            <div
              onClick={() => {
                navigate("/seniors");
              }}
              className="h-full w-[65%] grid place-items-center text-2xl font-bold font-mono"
            >
              Contacts
            </div>
          </div>

          <div
            style={{ background: "linear-gradient(to left, #e66465, #9198e5)" }}
            className="h-16 w-[90%] rounded-2xl my-5 cursor-pointer hover:scale-105 transition-all ease-in-out delay-75 mx-auto flex justify-center items-center"
          >
            <div className="h-full w-[30%] grid place-items-center">
              <GrProjects size={"2.6em"} />
            </div>
            <div className="h-full w-[65%] grid place-items-center text-2xl font-bold font-mono">
              Top Projects
            </div>
          </div>

          <div
            style={{ background: "linear-gradient(to left, #e66465, #9198e5)" }}
            className="h-16 w-[90%] rounded-2xl my-5 cursor-pointer hover:scale-105 transition-all ease-in-out delay-75 mx-auto flex justify-center items-center"
          >
            <div className="h-full w-[30%] grid place-items-center">
              <FaChalkboardTeacher size={"3em"} />
            </div>
            <div className="h-full w-[65%] grid place-items-center text-2xl font-bold font-mono">
              Batch
            </div>
          </div>

          <div
            style={{ background: "linear-gradient(to left, #e66465, #9198e5)" }}
            className="h-16 w-[90%] rounded-2xl my-5 cursor-pointer hover:scale-105 transition-all ease-in-out delay-75 mx-auto flex justify-center items-center"
          >
            <div className="h-full w-[30%] grid place-items-center">
              <MdEmojiEvents size={"3em"} />
            </div>
            <div
              onClick={() => {
                navigate("/events");
              }}
              className="h-full w-[65%] grid place-items-center text-2xl font-bold font-mono"
            >
              Live Events
            </div>
          </div>

          <div
            style={{ background: "linear-gradient(to left, #e66465, #9198e5)" }}
            className="h-16 w-[90%] rounded-2xl my-5 cursor-pointer hover:scale-105 transition-all ease-in-out delay-75 mx-auto flex justify-center items-center"
          >
            <div className="h-full w-[30%] grid place-items-center">
              <GiArchiveRegister size={"3em"} />
            </div>
            <div className="h-full w-[65%] grid place-items-center text-2xl font-bold font-mono">
              Registrations
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideMenu;
