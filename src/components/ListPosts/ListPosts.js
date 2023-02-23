import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ListPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );

        setLoading(false);
        setPosts(data.slice(0, 10));
      } catch (error) {        
        setLoading(false);
        setError("Error");        
      }
    })();
  }, []);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error</h2>;

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">List of posts</h5>
        <Link to="/" className="mb-4 d-block">
          Home
        </Link>
        <ul className="mt-2">
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListPosts;
