import React, { useEffect, useState } from "react";

function fetchWithDelay(url, delay = 2000) {
  const data = fetch(url).then((res) => res.json());

  return new Promise((res) => {
    setTimeout(() => {
      res(data);
    }, delay);
  });
}

export default function FetchAPIFunc() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWithDelay("https://jsonplaceholder.typicode.com/posts")
      .then(
        (data) => {
          setPosts(data);
          setLoading(false);
        }
      );
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <div>
        {loading ? 
          (<div>loading...</div>) : 
          (
            <div>
              {posts.map((post) => {
                return (
                  <div key={post.id}>
                    {post.id} {post.title}
                  </div>
                );
              })}
            </div>
          )
        }
      </div>
    </div>
  );
}