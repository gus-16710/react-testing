import { useState } from "react";
import { Link } from "react-router-dom";

export const validateEmail = (email) => {
  // eslint-disable-next-line
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    ? true
    : false;
};

const LoginForm = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [showUser, setShowUser] = useState(false);

  const handleChangeForm = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    if (validateEmail(login.email)) {
      setShowUser(true);
      setError("");
      return;
    }

    setShowUser(false);
    setError("Email is not valid");
  };

  const handleResetForm = () => {
    setLogin({
      email: "",
      password: "",
    });
    setShowUser(false);
    setError(false);
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Login form</h5>
        <Link to="/" className="mb-4 d-block">
          Home
        </Link>
        {showUser && (
          <div className="alert alert-success" role="alert">
            {login.email}
          </div>
        )}

        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmitForm}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="text"
              className="form-control"
              id="email"
              name="email"
              placeholder="Enter email"
              onChange={handleChangeForm}
              value={login.email}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Password"
              onChange={handleChangeForm}
              value={login.password}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <button
            type="button"
            className="ms-2 btn btn-secondary"
            onClick={handleResetForm}
          >
            Reset
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
