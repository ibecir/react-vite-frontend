import TaskList from "./components/TaskList";

const Tasks = () => {
  return (
    <>
      <div className="container pt-5">
        <div className="row">
          <div className="col-12 col-md-4">
            <TaskList />
          </div>
        </div>
      </div>
    </>
  );
};

export default Tasks;
