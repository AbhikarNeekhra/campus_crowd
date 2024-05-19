import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { useNavigate } from "react-router-dom";

export default function Success() {
  const { user, setImageUrl } = useContext(UserContext);
  const [userid, setUserId] = useState("");
  const [imageeUrl, setImageUrll] = useState("");

  const navigate = useNavigate();

  //   const getUserId = () => {

  //   };

  function ShowImage() {
    fetch(`http://localhost:6969/api/users/getId/${user.name}`)
      .then((response) => response.json())
      .then((result) => {
        fetch(`http://localhost:6969/api/userImage/${result}`)
          .then((response) => response.blob()) // Get response as blob
          .then((blob) => {
            const imageUrl = URL.createObjectURL(blob); // Create object URL from blob
            setImageUrll(imageUrl);
            setImageUrl(imageUrl); // Set image URL
          })
          .catch((error) => console.error("Error:", error));
      });
    console.log(userid);

    console.log(imageeUrl);
  }

  useEffect(() => {
    // Function to run when the component mounts
    // getUserId();
    ShowImage();
    // You can call any function or perform any side effect here
    // For example, fetching data, subscribing to events, etc.
  }, []);

  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center">
        <div
          style={{
            background: "linear-gradient(#e66465, #9198e5)",
          }}
          className="md:h-5/6 md:w-2/4 lg:h-4/5 h-full w-full lg:w-1/4 grid place-items-center select-none"
        >
          <div className="h-40 w-40 bg-white mx-auto grid place-items-center shadow-abhi2 rounded-full">
            <img
              className="h-full w-full rounded-full"
              src="public/myImage.jpeg"
              alt="User_photo"
            />
          </div>
          <div className="text-center h-16 w-full font-semibold text-white text-xl px-2">
            CONGRATS <br></br>
            {user.name}
            <br></br>
            {user.email}
          </div>
          <div className="text-center h-28 w-full font-bold text-green-500 bg-[rgba(255,255,255,0.2)] text-3xl px-1">
            YOUR ACCOUNT HAVE BEEN CREATED SUCCESSFULLY
          </div>
          <button className="px-6 py-3 rounded-full bg-[rgba(255,255,255,0.4)] shadow-abhi3 text-white font-semibold hover:border hover:shadow-abhi2 hover:bg-gradient-to-tr from-[#e66465] to-[#9198e5] cursor-pointer">
            Create POSTS
          </button>
          <button
            onClick={() => {
              navigate("/landing");
            }}
            className="px-6 py-3 rounded-full bg-[rgba(255,255,255,0.4)] shadow-abhi3 text-white font-semibold hover:border hover:shadow-abhi2 hover:bg-gradient-to-tr from-[#e66465] to-[#9198e5] cursor-pointer"
          >
            DashBoard
          </button>
        </div>
      </div>
    </>
  );
}
