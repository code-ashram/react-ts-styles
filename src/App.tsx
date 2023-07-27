import {useState} from "react";

import mockData from "./constants/mockData.ts";
import TaskItem from "./models/TaskItem.ts";
import TaskList from "./components/Tasks/TaskList/TaskList";
import TaskInput from "./components/Tasks/TaskInput/TaskInput";

import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState<TaskItem[]>(mockData);

  const handleAddTask = (inputText: string) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      updatedTasks.unshift({text: inputText, id: Math.random().toString()});
      return updatedTasks;
    });
  };

  const handleDeleteTask = (taskId: string): void => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId))
  };

  let content = (
    <p style={{textAlign: "center"}}>Задач не найдено! Добавить?</p>
  );

  if (tasks.length > 0) {
    content = <TaskList items={tasks} onDeleteTask={handleDeleteTask}/>;
  }

  return (
    <div>
      <section id="task-form">
        <TaskInput onAddTask={handleAddTask}/>
      </section>
      <section id="tasks">{content}</section>
    </div>
  );
};

export default App;
