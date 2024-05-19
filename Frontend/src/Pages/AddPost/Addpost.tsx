import React, { ChangeEvent, useState, useRef } from "react";
import { MdPermMedia } from "react-icons/md";
import PostServices from "../../Services/postServices";

const Addpost: React.FC = () => {
  const [postTitle, setPostTitle] = useState<string>("");
  const [postSubtitle, setPostSubtitle] = useState<string>("");
  const [postContent, setPostContent] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [isPostAdded, setIsPostAdded] = useState<boolean | null>(false);
  const [selectedFile, setSelectedFile] = useState<File | Blob>();
  const videoRef = useRef<HTMLVideoElement>(null);

  const formData = new FormData();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      if (file) {
        setSelectedFile(file);
        if (file.type.startsWith("video/")) {
          const video = videoRef.current;
          if (video) {
            video.src = URL.createObjectURL(file);
            video.currentTime = 0;
            video.pause();
            video.controls = false;
          }
        }
      }
      console.log(file.name);
    }
  };

  const handletitle = (e: ChangeEvent<HTMLInputElement>) => {
    setPostTitle(e.target.value);
  };

  const handlesubtitle = (e: ChangeEvent<HTMLInputElement>) => {
    setPostSubtitle(e.target.value);
  };

  const handleCategory = (e: ChangeEvent<HTMLSelectElement>) => {
    fetch(`http://localhost:6969/api/category/title/${e.target.value}`)
      .then((response) => response.json())
      .then((result) => {
        setCategory(result);
      });
    console.log(category);
  };

  const handleAddPost = () => {
    if (selectedFile) {
      formData.append("image", selectedFile);
    }
    formData.append("title", postTitle);
    formData.append("content", postContent);
    formData.append("subTitle", postSubtitle);

    fetch(
      `http://localhost:6969/api/posts/user/402/category/${category.categoryId}`,
      {
        method: "POST",
        body: formData,
      }
    )
      .then((response) => response.json())
      .then((result) => {
        setIsPostAdded(result);
        console.log(result);
      });
  };

  // const postServices = new PostServices("http://localhost:6969");

  // const handleAddPost = async () => {
  //   const formData = new FormData();
  //   if (image) {
  //     formData.append("file", image, image.name);
  //   }
  //   formData.append("postTitle", postTitle);
  //   formData.append("postContent", postContent);
  //   formData.append("postSubtitle", postSubtitle);

  //   try {
  //     const isPostAdded = await postServices.AddPost(
  //       `api/post/user/402/category/152`,
  //       postTitle,
  //       postContent,
  //       postSubtitle,
  //       image
  //     );
  //     setIsPostAdded(isPostAdded);
  //   } catch (error) {
  //     console.error("Error adding post:", error);
  //   }
  // };

  return (
    <>
      <div className="h-screen w-full ">
        <div className="h-12 w-full text-center bg-red-200 text-[2rem] font-bold">
          Add Post
        </div>
        <div className="h-fit w-full py-3 flex justify-center items-center">
          {!selectedFile ? (
            <div className="h-[340px] w-[600px] mr-32 bg-red-200 grid place-items-center border-black border-4 cursor-pointer border-dashed ">
              <label
                htmlFor="filee"
                className="h-full w-full grid place-items-center cursor-pointer"
              >
                <div className="mx-auto grid place-items-center">
                  <MdPermMedia size={"4rem"} />
                  <p className="text-xl font-semibold">
                    Add Media (Image or Video)
                  </p>
                </div>
              </label>
              <input
                onChange={handleFileChange}
                className="hidden"
                id="filee"
                type="file"
              />
            </div>
          ) : (
            <div className="h-[340px] w-[600px] mr-32 p-2 relative grid place-items-center border-black border-4 border-dashed ">
              {selectedFile.type.startsWith("video/") ? (
                <video ref={videoRef} className="max-h-[300px]" controls>
                  <source src={URL.createObjectURL(selectedFile)} />
                </video>
              ) : (
                <img
                  src={URL.createObjectURL(selectedFile)}
                  alt="Selected"
                  className="max-h-[300px]"
                />
              )}
              <div className="absolute h-full w-full top-0 left-0 bg-[rgba(0,0,0,0.4)] transition-all delay-125 ease-in-out grid place-items-center opacity-0 hover:opacity-100 ">
                <label
                  htmlFor="filee"
                  className="text-white text-2xl shadow-abhi2 px-6 py-3 font-semibold shadow-white cursor-pointer"
                >
                  CHANGE MEDIA
                </label>
                <input
                  onChange={handleFileChange}
                  className="hidden"
                  id="filee"
                  type="file"
                />
              </div>
            </div>
          )}
          <div className="h-[300px] w-[350px] bg-red-200 mr-20 grid place-items-center border-black border-2 border-dashed">
            <div className="h-20 w-full bg-green-100 px-2 py-1">
              <p className="h-6 w-full text-center font-semibold text-md">
                POST TITLE
              </p>
              <input
                onChange={handletitle}
                className="h-12 w-full text-xl rounded-xl px-2 font-semibold"
                type="text"
                placeholder="Enter Title of Your Post"
              />
            </div>

            <div className="h-20 w-full bg-green-100 px-2 py-1">
              <p className="h-6 w-full text-center font-semibold text-md">
                POST SUB-TITLE
              </p>
              <input
                onChange={handlesubtitle}
                className="h-12 w-full text-xl rounded-xl px-2 font-semibold"
                type="text"
                placeholder="Enter Sub Title of Your Post"
              />
            </div>

            <div className="h-20 w-full bg-green-100 px-2 py-1">
              <p className="h-6 w-full text-center font-semibold text-md">
                SELECT CATEGORY OF THE POST
              </p>
              <select
                onChange={handleCategory}
                className="h-12 w-full text-xl rounded-xl px-2 font-semibold"
              >
                <option value="">Select Post Category</option>
                <option value="Educational">Educational</option>
                <option value="Internship">Internship</option>
                <option value="ShowCase">ShowCase</option>
              </select>
            </div>
          </div>
          {/* <div className="h-[300px] w-[300px] bg-red-200 border-black border-2 border-dashed"> */}
          {/* empty Space */}
          {/* </div> */}
        </div>
        <div className="h-fit w-full  py-2 px-5 flex justify-center items-center">
          <div className="h-[300px] w-[580px] mr-48 bg-green-100 px-3 py-2 overflow-y-scroll">
            <p className="text-2xl font-semibold pb-2">
              ADD DESCRIPTION OF YOUR POST :-
            </p>
            <textarea
              onChange={(e) => setPostContent(e.target.value)}
              className="h-[230px] w-full shadow-abhi2 rounded-lg px-3 py-2"
              placeholder="Enter your text here"
            ></textarea>
          </div>
          <div className="h-[300px] w-[360px] grid place-items-center bg-red-300">
            <button
              onClick={handleAddPost}
              className="h-[20%] w-[30%] shadow-abhi2 bg-green-300 font-bold text-2xl"
            >
              Add Post
            </button>
            {isPostAdded && (
              <p className="text-4xl font-bold">Post added successfully!</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Addpost;
