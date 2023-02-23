import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AddPost } from "./components/AddPost";
import { Counter } from "./components/Counter";
import { DoggyDirectory } from "./components/DoggyDirectory";
import { ListPosts } from "./components/ListPosts";
import { LoginForm } from "./components/LoginForm";

import Menu from "./components/Menu/Menu";
import { Tasks } from "./components/Tasks";

function App() {
  return (
    <div className="container">
      <h1 className="mb-4">React testing library</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/posts" element={<ListPosts />} />
          <Route path="/add-post" element={<AddPost />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/doggy-directory" element={<DoggyDirectory />} />
          <Route path="/tasks" element={<Tasks />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
