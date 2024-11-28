import { useEffect, useState } from "react";
import PostList from "./PostList";

export default function page() {
  const [posts, setPosts] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://dummyjson.com/posts")
        .then((res) => {
          if (!res.ok) {
            // error coming back from server
            throw Error("could not fetch the data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          setIsPending(false);
          setPosts(data);
          setError(null);
        })
        .catch((err) => {
          // auto catches network / connection error
          setIsPending(false);
          setError(err.message);
        });
    }, 1000);
  }, []);

  return (
    <div>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {posts && <PostList posts={posts} />}
    </div>
  );
}

import useFetch from "@/hooks/useFetch";

export default function page() {
  const {
    error,
    isPending,
    // More precise name given instead of just data
    data: posts,
  } = useFetch("https://dummyjson.com/posts");

  return (
    <div>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {posts && posts.map((post) => {
          return <p key={post.id}>{post.title}</p>;
        })}
    </div>
  );
}
