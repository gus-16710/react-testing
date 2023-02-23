const List = (props) => {
  const { tasks } = props;

  return (
    <>
      <h3>List of tasks</h3>
      <ol className="list-group list-group-numbered">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="list-group-item d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">{task.title}</div>
              {task.text}
            </div>
          </li>
        ))}
      </ol>
    </>
  );
};

export default List;
