import axios from "axios";
import { useState } from "react";

const Form = (props) => {
  const { addTask } = props;

  const [task, setTask] = useState({
    title: "",
    text: "",
    category: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChangeForm = (event) => {
    setTask({
      ...task,
      [event.target.name]: event.target.value,
    });
  };

  const resetForm = () => {
    setTask({
      title: "",
      text: "",
      category: "",
    });
  };

  const handleSubmitForm = async (event) => {
    try {
      event.preventDefault();
      setIsLoading(true);

      const { data } = await axios.post("http://localhost:3500/tasks", {
        ...task,
      });
      addTask(data);

      resetForm();
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const disableButton = () => !(task.title && task.text && task.category);

  return (
    <>
      {isLoading ? (
        <h4 className="text-center mt-3" data-testid="form-loading">Loading...</h4>
      ) : (
        <form onSubmit={handleSubmitForm}>
          <h3>Create a new task</h3>
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
              value={task.title}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="text" className="form-label">
              Text
            </label>
            <input
              type="text"
              className="form-control"
              id="text"
              name="text"
              placeholder="Text"
              onChange={handleChangeForm}
              value={task.text}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="category" className="form-label">
              Category
            </label>
            <select
              className="form-select"
              id="category"
              name="category"
              onChange={handleChangeForm}
              value={task.category}
            >
              <option value="" disabled>
                Select a category
              </option>
              <option value="house">House</option>
              <option value="job">Job</option>
            </select>
          </div>
          <div className="text-center">
            <button className="btn btn-danger" disabled={disableButton()}>
              Create task
            </button>
          </div>
        </form>
      )}
    </>

    // <form onSubmit={handleSubmitForm}>
    //   <h3>Create a new task</h3>
    //   {isLoading && <h4 className="text-center mt-3">Loading...</h4>}
    //   <div className="mb-3">
    //     <label htmlFor="title" className="form-label">
    //       Title
    //     </label>
    //     <input
    //       type="text"
    //       className="form-control"
    //       id="title"
    //       name="title"
    //       placeholder="Title"
    //       onChange={handleChangeForm}
    //       value={task.title}
    //     />
    //   </div>
    //   <div className="mb-3">
    //     <label htmlFor="text" className="form-label">
    //       Text
    //     </label>
    //     <input
    //       type="text"
    //       className="form-control"
    //       id="text"
    //       name="text"
    //       placeholder="Text"
    //       onChange={handleChangeForm}
    //       value={task.text}
    //     />
    //   </div>
    //   <div className="mb-3">
    //     <label htmlFor="category" className="form-label">
    //       Category
    //     </label>
    //     <select
    //       className="form-select"
    //       id="category"
    //       name="category"
    //       onChange={handleChangeForm}
    //       value={task.category}
    //     >
    //       <option value="" disabled>
    //         Select a category
    //       </option>
    //       <option value="house">House</option>
    //       <option value="job">Job</option>
    //     </select>
    //   </div>
    //   <div className="text-center">
    //     <button className="btn btn-danger" disabled={disableButton()}>
    //       Create task
    //     </button>
    //   </div>
    // </form>
  );
};

export default Form;
