import { useState } from "react";
import { useContext } from "react";
import TasksContext from "../context/task";

function TaskCreate({ task, taskFormUpdate, onUpdate }) {
  const { createTask } = useContext(TasksContext);
  const [title, setTitle] = useState(task ? task.title : "");
  const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : "");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleTaskChange = (event) => {
    setTaskDesc(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskFormUpdate) {
      onUpdate(task.id, title, taskDesc);
    } else {
      createTask(title, taskDesc);
    }
    setTitle("");
    setTaskDesc("");
  };

  return (
    <div>
      {taskFormUpdate ? (
        <div className="taskUpdate">
          <h3>Lütfen Taskı Düzenleyiniz!</h3>
          <form className="taskForm">
            <label className="label">Başlığı Düzenleyiniz</label>
            <input
              value={title}
              onChange={handleChange}
              className="box"
              type="text"
            />
            <label className="label">Taskı Düzenleyiniz</label>
            <textarea
              value={taskDesc}
              onChange={handleTaskChange}
              className="box"
            />
            <button onClick={handleSubmit} className="button btnUpdate">
              Düzenle
            </button>
          </form>
        </div>
      ) : (
        <div className="taskCreate">
          <h3>Lütfen Task Ekleyiniz!</h3>
          <form className="taskForm">
            <label className="label">Başlık</label>
            <input
              value={title}
              onChange={handleChange}
              className="box"
              type="text"
            />
            <label className="label">Task Giriniz</label>
            <textarea
              value={taskDesc}
              onChange={handleTaskChange}
              className="box"
            />
            <button onClick={handleSubmit} className="button">
              Oluştur
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default TaskCreate;
