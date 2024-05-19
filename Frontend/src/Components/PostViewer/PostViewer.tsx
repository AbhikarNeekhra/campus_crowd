import React, { useEffect, useState } from "react";

const PostViewer = ({ post }) => {
  const [imageeurl, setImageUrl] = useState<string>("");

  useEffect(() => {
    ShowImage();
  }, []);

  function ShowImage() {
    fetch(`http://localhost:6969/image/filename/${post.imageName}`)
      .then((response) => response.blob()) // Get response as blob
      .then((blob) => {
        const imageUrl = URL.createObjectURL(blob); // Create object URL from blob
        setImageUrl(imageUrl); // Set image URL
      })
      .catch((error) => console.error("Error:", error));
  }

  return (
    <>
      <div className="border border-gray-200 rounded-md mb-4 shadow-abhi2 px-2">
        <div className="w-full px-6 py-2 text-xl font-bold">
          {post.postTitle}
        </div>
        <div className="w-full px-6 py-1 flex">
          <img
            src="/public/myImage.jpeg"
            className="h-[8vh] aspect-square mx-1 bg-green-300 rounded-full flex justify-center items-center"
          />
          <div className="h-full px-3 text-center text-lg font-semibold">
            {post.user.name}
            <br />
            <p className="text-sm">{post.user.email}</p>
          </div>
        </div>
        <img
          className="h-[60vh] w-full bg-gray-500 shadow-abhi2 rounded-2xl"
          src={imageeurl}
          alt="Post"
        />
        <div className="w-full px-6 py-2 text-center text-lg font-semibold">
          {post.postSubTitle}
        </div>
        <div className="p-4">
          <p>{post.postContent}</p>
        </div>
      </div>
    </>
  );
};

export default PostViewer;
