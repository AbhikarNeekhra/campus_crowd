import { ChangeEvent, useState } from "react";

export default function AddPoss() {
  const [postTitle, setTitle] = useState<string>("");
  const [postSubTitle, setSubTitle] = useState<string>("");
  const [postContent, setDetails] = useState<string>("");
  const [selectedFile, setSelectedFile] = useState<File | Blob>();
  const [imageUrl, setImageUrl] = useState<string>("");

  function handleTitle(e: ChangeEvent<HTMLInputElement>) {
    setTitle(e.target.value);
  }

  function handleSubtitle(e: ChangeEvent<HTMLInputElement>) {
    setSubTitle(e.target.value);
  }

  function handleDetails(e: ChangeEvent<HTMLInputElement>) {
    setDetails(e.target.value);
  }

  const formData = new FormData();

  function handleFile(e: ChangeEvent<HTMLInputElement>) {
    // Create FormData object here
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      if (file) {
        setSelectedFile(file);
      }
      console.log(file.name);
    }
  }

  function ShowImage() {
    fetch("http://localhost:6969/image/2")
      .then((response) => response.blob()) // Get response as blob
      .then((blob) => {
        const imageUrl = URL.createObjectURL(blob); // Create object URL from blob
        setImageUrl(imageUrl); // Set image URL
      })
      .catch((error) => console.error("Error:", error));
  }

  function clickeD() {
    if (selectedFile) {
      formData.append("image", selectedFile);
      fetch("http://localhost:6969/image", {
        method: "POST",
        body: formData,
      });
    }
  }

  return (
    <>
      <div className="h-10 w-40 my-5 mx-10 border border-black outline-none">
        <input
          onChange={handleTitle}
          type="text"
          name="title"
          placeholder="title"
        />
      </div>
      <div className="h-10 w-40 my-5 mx-10 border border-black outline-none">
        <input
          onChange={handleSubtitle}
          type="text"
          name="sub-title"
          placeholder="sub-title"
        />
      </div>
      <div className="h-10 w-40 my-5 mx-10 border border-black outline-none">
        <input
          onChange={handleDetails}
          type="text"
          name="details"
          placeholder="details"
        />
      </div>
      <div className="h-10 w-40 my-5 mx-10">
        <input onChange={handleFile} type="file" name="file" />
      </div>
      <div>
        <button
          onClick={clickeD}
          className="w-fit my-5 mx-10 px-6 py-3 border border-black"
        >
          Click
        </button>
      </div>
      <div>
        {imageUrl && (
          <img src={imageUrl} alt="its an image" /> // Render image if imageUrl is available
        )}
      </div>
    </>
  );
}
