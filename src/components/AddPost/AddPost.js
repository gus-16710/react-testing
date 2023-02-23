import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const AddPost = () => {
  const [post, setPost] = useState({
    title: "",
    body: "",
    userId: 1,
  });

  const [success, setSuccess] = useState("");

  const handleChangeForm = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const { data } = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      { ...post }
    );

    setPost({
      ...post,
      title: "",
      body: "",
    });

    setSuccess(`The post ${data.title} has been saved succesfully!`);
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Add new post form</h5>
        <form onSubmit={handleSubmitForm}>
          {success && (
            <div
              className="alert alert-success"
              role="alert"
              data-testid="success-alert"
            >
              {success}
            </div>
          )}
          <Link to="/" className="mb-4 d-block">
            Home
          </Link>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              placeholder="Title"
              onChange={handleChangeForm}
              value={post.title}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="body" className="form-label">
              Body
            </label>
            <input
              type="text"
              className="form-control"
              id="body"
              name="body"
              placeholder="Body"
              onChange={handleChangeForm}
              value={post.body}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPost;
