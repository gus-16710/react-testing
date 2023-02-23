import axios from "axios";
import { useEffect, useState } from "react";
import { Form, List } from "./";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const addTask = async (task) => {
    setTasks([...tasks, task]);
  };

  const fetchingTasks = async () => {
    setIsLoading(true);
    const { data } = await axios.get("http://localhost:3500/tasks");
    setTasks(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchingTasks();
  }, []);

  return (
    <div className="card">
      <div className="card-body">
        <Form addTask={addTask} />
        {isLoading ? (
          <h4 className="text-center mt-3" data-testid="task-loading">
            Loading...
          </h4>
        ) : (
          <List tasks={tasks} />
        )}
      </div>
    </div>
  );
};

export default Tasks;
