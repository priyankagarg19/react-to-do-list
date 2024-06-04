import "./App.css";
import { useState, useEffect } from "react";
import { Tasks } from "./task.js";
import { FaPlus } from "react-icons/fa";

function Clock({ color, time }) {
  return (
    <h1
      style={{
        color: color,
      }}
    >
      {time}
    </h1>
  );
}

const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", { weekday: "long" })
    .format(date)
    .toUpperCase();
}
function App() {
  const [todolist, setTodolist] = useState([]);
  const [newtask, setNewtask] = useState("");
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handletask = (event) => {
    setNewtask(event.target.value);
  };

  const addtask = () => {
    const task = {
      id: todolist.length === 0 ? 1 : todolist[todolist.length - 1].id + 1,
      taskName: newtask,
      completed: false,
    };
    setTodolist([...todolist, task]);
  };
  const deletetask = (id1) => {
    setTodolist(todolist.filter((task1) => task1.id !== id1));
  };
  const completetask = (id2) => {
    setTodolist(
      todolist.map((task) => {
        if (task.id === id2) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div className="App">
      <div className="title">
        <h4>
          <Clock color="white" time={time} />
        </h4>
        <h1>TO-DO LIST </h1>
        <h1>{formatDate(today)}</h1>
      </div>

      <div className="List">
        {todolist.map((task2) => {
          return (
            <Tasks
              id={task2.id}
              taskName={task2.taskName}
              deletetask={deletetask}
              completetask={completetask}
              completed={task2.completed}
            />
          );
        })}
      </div>
      <div className="footerdiv">
        <div className="addTask">
          <input
            className="inputbar"
            type="text"
            placeholder="Enter Your Tasks..."
            onChange={handletask}
            style={{ background: "none", border: "none" }}
          />
          <button
            className="addbar"
            onClick={addtask}
            style={{ background: "none", border: "none" }}
          >
            <FaPlus size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
