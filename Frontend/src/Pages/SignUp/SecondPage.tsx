import React, { useState, ChangeEvent, useContext } from "react";
import ProgressBar from "./ProgressBar";
import { IoPersonSharp } from "react-icons/io5";
import { UserContext } from "../../Context/UserContext";
import { PageCountContext } from "../../Context/PageContext";
import { useNavigate } from "react-router-dom";

export default function SecondPage() {
  const { user, setName, setImagename, setAbout } = useContext(UserContext);

  const Navigate = useNavigate();

  const [selectedFile, setSelectedFile] = useState<File | Blob>();
  const [imageUrl, setImageUrl] = useState<string>("");
  const { setPageCount } = useContext(PageCountContext);

  const formData = new FormData();
  const api = async () => {
    formData.append("username", user.name);
    formData.append("email", user.email);
    formData.append("password", user.password);
    formData.append("about", user.about);
    if (selectedFile) {
      formData.append("image", selectedFile);
    }

    const data = await fetch("http://localhost:6969/api/users/add", {
      method: "POST",
      body: formData,
    });

    if (!data.ok) {
      alert("Some Error Occured while fetching the data");
    }

    if (data) {
      alert("Account Created Successfully");
      localStorage.setItem("User", JSON.stringify(user));
      Navigate("/success");
      console.log(JSON.stringify(data.json));
    }

    setPageCount((prev) => prev + 1);
  };

  const handleName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    console.log(user);
  };

  const handleAbout = (e: ChangeEvent<HTMLInputElement>) => {
    setAbout((e.target as HTMLInputElement).value);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      if (
        e.target.files[0].type == "image/jpeg" ||
        e.target.files[0].type == "image/png"
      ) {
        setImagename(e.target.files[0].name);
        setSelectedFile(e.target.files[0]);
        const imageurl = URL.createObjectURL(e.target.files[0]);
        setImageUrl(imageurl);
      } else {
        alert("Select Image Only");
      }
    } else {
      alert("No file got selected");
    }
  };

  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center">
        <div
          style={{
            background: "linear-gradient(#e66465, #9198e5)",
          }}
          className="md:h-5/6 md:w-2/4 lg:h-4/5 h-full w-full lg:w-1/4 grid place-items-center select-none"
        >
          <h1 className="h-10 w-full grid place-items-center text-4xl font-bold text-white">
            SIGN UP
            <div className="h-fit w-36 mx-auto bg-gradient-to-tr border-2 border-white mt-1"></div>
          </h1>
          <div className="h-32 w-full grid place-items-center">
            <div className="h-8 w-full text-xl text-center font-bold text-white select-none">
              SELECT YOUR PHOTO
            </div>
            {selectedFile ? (
              <>
                <label
                  htmlFor="inp"
                  className="h-28 w-28 bg-red-200 hover:shadow-abhi2 hover:scale-105 transition-all delay-75 ease-in-out mx-auto rounded-full cursor-pointer grid place-items-center"
                >
                  <img
                    className="min-h-full min-w-full rounded-full"
                    src={imageUrl}
                    alt="image of person"
                  />
                  <input
                    type="file"
                    id="inp"
                    onChange={handleFileChange}
                    accept="image/*"
                    hidden
                  />
                </label>
              </>
            ) : (
              <>
                <label
                  htmlFor="inp"
                  className="h-28 w-28 bg-red-200 hover:shadow-abhi2 hover:scale-105 transition-all delay-75 ease-in-out mx-auto rounded-full cursor-pointer grid place-items-center"
                >
                  <IoPersonSharp size={"3em"} />
                  <input
                    type="file"
                    id="inp"
                    onChange={handleFileChange}
                    accept="image/*"
                    hidden
                  />
                </label>
              </>
            )}
          </div>
          <div className="h-20 w-full grid place-items-center">
            <div className="h-8 w-full text-xl pl-16 font-semibold text-white select-none">
              ENTER NAME
            </div>
            <input
              required
              onChange={handleName}
              value={user.name}
              className="h-12 w-3/4 outline-none text-xl focus:rounded-xl ease-in-out transition-all delay-150 rounded-full pl-3"
              type="email"
              placeholder="Your Name"
            />
          </div>
          <div className="h-20 w-full grid place-items-center">
            <div className="h-8 w-full text-xl pl-16 font-semibold text-white select-none">
              WRITE ABOUT
            </div>
            <input
              required
              onChange={handleAbout}
              value={user.about}
              className="h-12 w-3/4 outline-none text-xl focus:rounded-xl ease-in-out transition-all delay-150 rounded-full pl-3"
              type="text"
              placeholder="Write About Yourself"
            />
          </div>

          {/* Progress bar space */}
          <ProgressBar />
          <button
            onClick={api}
            style={{
              background: "linear-gradient(to right ,#e66465, #9198e5)",
            }}
            className="h-12 w-2/4 bg-red-400 select-none rounded-full mx-auto shadow-xl mb-3 hover:scale-105 transition-all delay-150 ease-in-out text-xl font-bold text-white"
          >
            Create Account
          </button>
        </div>
      </div>
    </>
  );
}
