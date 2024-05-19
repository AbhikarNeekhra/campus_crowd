import React, { ChangeEvent, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import AuthProvider from "../../Context/Authprovider";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState({});

  const Navigate = useNavigate();

  const handleUsername = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail((e.target as HTMLInputElement).value);
  };

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword((e.target as HTMLInputElement).value);
  };

  function api() {
    fetch("http://localhost:6969/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((res) => {
        setResult(res);
        alert("Hello!, Welcome " + res.name);
        localStorage.setItem("isSignedIn", "true");
        AuthProvider({ isSignedIn: true });
        Navigate("/landing");
      });
    const { id, name, about } = result;
    console.log(id + " " + name + " " + about);
  }

  // const api = async () => {
  //   try {
  //     const response = await fetch("http://localhost:6969/api/users/login", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ email, password }),
  //     });
  //     if (!response.ok) {
  //       throw new Error("Error while fetching the data");
  //     }
  //     setResult(response);
  //     alert(result);
  //     console.log(JSON.stringify(result));
  //   } catch (error) {
  //     alert("An error occurred" + error);
  //     console.log(result);
  //   }
  // };

  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center">
        <div
          style={{
            background: "linear-gradient(#e66465, #9198e5)",
          }}
          className="lg:h-3/4 h-full w-full lg:w-2/4 xl:w-1/4 md:w-3/4 bg-red-300 grid place-items-center select-none"
        >
          <h1 className="h-10 w-full grid place-items-center text-4xl font-bold text-white">
            LOGIN
            <div className="h-fit w-28 mx-auto bg-gradient-to-tr border-2 border-white mt-1"></div>
          </h1>
          <div className="h-20 w-full grid place-items-center">
            <div className="h-8 w-full text-xl pl-16 font-semibold text-white select-none">
              USERNAME
            </div>
            <input
              onChange={handleUsername}
              className="h-12 w-3/4 focus:rounded-xl ease-in-out transition-all delay-150 rounded-full pl-3"
              type="email"
              placeholder="E-mail"
            />
          </div>
          <div className="h-20 w-full grid place-items-center">
            <div className="h-8 w-full text-xl pl-16 font-semibold text-white select-none">
              PASSWORD
            </div>
            <input
              onChange={handlePassword}
              className="h-12 w-3/4 focus:rounded-xl ease-in-out transition-all delay-150 rounded-full pl-3"
              type="Password"
              placeholder="Password"
            />
          </div>

          <div className="h-6 w-full background-red-400 text-white pl-5 transition-all delay-150 ease-in-out">
            <span className=" hover:underline cursor-pointer select-none">
              <a>Forgot Password ? Reset Here</a>
            </span>
          </div>

          <button
            style={{
              background: "linear-gradient(to right ,#e66465, #9198e5)",
            }}
            className="h-12 w-2/4 bg-red-400 select-none rounded-full mx-auto shadow-xl hover:scale-105 transition-all delay-150 ease-in-out text-xl font-bold text-white"
            onClick={api}
          >
            Login
          </button>
          <div className="h-fit w-full">
            <div className="h-6 w-full background-red-400 text-white text-center mb-2 transition-all delay-150 ease-in-out">
              <span className=" hover:underline cursor-pointer select-none mx-auto text-white">
                <a href="/signup">Dont Have an Account ? Register Here</a>
              </span>
            </div>
            <div className="h-fit w-4/5 mx-auto bg-gradient-to-tr border-2 border-white"></div>
            <div className="h-8 w-full background-red-400 select-none text-xl text-white text-center mb-2">
              Or Login With
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

export default Login;
