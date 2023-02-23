import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <ul className="list-group mt-4">
      <li className="list-group-item">
        <Link to="/posts">Posts</Link>
      </li>
      <li className="list-group-item">
        <Link to="/add-post">Add Post Form</Link>
      </li>
      <li className="list-group-item">
        <Link to="/login">Login Form</Link>
      </li>
      <li className="list-group-item">
        <Link to="/counter">Counter</Link>
      </li>
      <li className="list-group-item">
        <Link to="/doggy-directory">Doggy Directory</Link>
      </li>
      <li className="list-group-item">
        <Link to="/tasks">Tasks</Link>
      </li>
    </ul>
  );
};

export default Menu;
