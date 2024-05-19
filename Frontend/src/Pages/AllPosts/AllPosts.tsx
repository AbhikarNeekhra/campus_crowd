import React, { useState, useEffect } from "react";
import PostViewer from "../../Components/PostViewer/PostViewer";
import Header from "../../Components/Header/header";

export default function AllPost() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    fetch("http://localhost:6969/api/posts/getAll")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        return response.json();
      })
      .then((result) => {
        setPosts(result);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Header />
      {posts.map((post) => (
        <div key={post.id} className="h-full w-full py-3">
          <div className="h-full w-[46%] mx-auto">
            <PostViewer post={post} />
          </div>
        </div>
      ))}
    </>
  );
}
