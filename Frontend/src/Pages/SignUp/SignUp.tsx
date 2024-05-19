import React, { useContext, ChangeEvent, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import ProgressBar from "./ProgressBar";
import { UserContext } from "../../Context/UserContext";
import { PageCountContext } from "../../Context/PageContext";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [confirm, setConfirm] = useState("");

  const { user, setEmail, setPassword } = useContext(UserContext);
  const { pageCount, setPageCount } = useContext(PageCountContext);

  const Navigate = useNavigate();

  const handleNext = () => {
    setEmail(user.email);
    setPassword(user.password);
    Navigate("/second");
    setPageCount((prev) => prev + 1);
  };

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail((e.target as HTMLInputElement).value);
  };

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword((e.target as HTMLInputElement).value);
  };

  const handleConfirm = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirm((e.target as HTMLInputElement).value);
  };

  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center">
        <div
          style={{
            background: "linear-gradient(#e66465, #9198e5)",
          }}
          className="md:h-5/6 md:w-2/4 lg:h-4/5 h-full w-full lg:w-1/4 bg-red-300 grid place-items-center select-none"
        >
          <h1 className="h-10 w-full grid place-items-center text-4xl font-bold text-white">
            SIGN UP
            <div className="h-fit w-36 mx-auto bg-gradient-to-tr border-2 border-white mt-1"></div>
          </h1>
          <div className="h-20 w-full grid place-items-center">
            <div className="h-8 w-full text-xl pl-16 font-semibold text-white select-none">
              E-Mail
            </div>
            <input
              required
              onChange={handleEmail}
              value={user.email}
              className="h-12 w-3/4 outline-none text-xl focus:rounded-xl ease-in-out transition-all delay-150 rounded-full pl-3"
              type="email"
              placeholder="E-mail"
            />
          </div>
          <div className="h-20 w-full grid place-items-center">
            <div className="h-8 w-full text-xl pl-16 font-semibold text-white select-none">
              PASSWORD
            </div>
            <input
              required
              onChange={handlePassword}
              value={user.password}
              className="h-12 w-3/4 outline-none text-xl focus:rounded-xl ease-in-out transition-all delay-150 rounded-full pl-3"
              type="Password"
              placeholder="Password"
            />
          </div>

          <div className="h-20 w-full grid place-items-center">
            <div className="h-8 w-full text-xl pl-16 font-semibold text-white select-none">
              CONFIRM PASSWORD
            </div>
            <input
              required
              onChange={handleConfirm}
              value={confirm}
              className="h-12 w-3/4 outline-none text-xl focus:rounded-xl ease-in-out transition-all delay-150 rounded-full pl-3"
              type="Password"
              placeholder="Confirm Password"
            />
          </div>
          {/* empty space before button */}
          <ProgressBar />
          <button
            onClick={handleNext}
            style={{
              background: "linear-gradient(to right ,#e66465, #9198e5)",
            }}
            className="h-12 w-2/4 bg-red-400 select-none rounded-full mx-auto shadow-xl hover:scale-105 transition-all delay-150 ease-in-out text-xl font-bold text-white"
          >
            Next
          </button>
          <div className="h-fit w-full">
            <div className="h-6 w-full background-red-400 text-white text-center mb-2 transition-all delay-150 ease-in-out">
              <span className=" hover:underline cursor-pointer select-none">
                <a href="/login">Already Have Account ? Login Here</a>
              </span>
            </div>
            <div className="h-fit w-4/5 mx-auto bg-gradient-to-tr border-2 border-white"></div>
            <div className="h-8 w-full background-red-400 select-none text-xl text-white text-center mb-2">
              Or Create With
            </div>
            <div className="h-fit w-full images flex justify-evenly items-center">
              <FaFacebook
                className="cursor-pointer hover:scale-110 transition-all delay-150 ease-in-out"
                size={"3rem"}
              />
              <FcGoogle
                className="cursor-pointer hover:scale-110 transition-all delay-150 ease-in-out"
                size={"3rem"}
              />
              <FaSquareXTwitter
                className="cursor-pointer hover:scale-110 transition-all delay-150 ease-in-out"
                size={"3rem"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
