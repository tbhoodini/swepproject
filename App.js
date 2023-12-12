import React, { useState, useEffect } from 'react';
import './style.module.css';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [deletedTasks, setDeletedTasks] = useState([]);
  const [showDeleted, setShowDeleted] = useState(false);

  useEffect(() => {
    // Load tasks from localStorage on page load
    loadTasks();
  }, []);

  const createTask = () => {
    const taskInput = document.getElementById("task-input");
    const taskValue = taskInput.value.trim();

    if (taskValue !== "") {
      const newTask = { taskName: taskValue, createdAt: new Date().toLocaleString() };
      saveTask(newTask);

      setTasks((prevTasks) => [...prevTasks, newTask]);
      taskInput.value = "";

      // No need to update task counter
    } else {
      alert("Please enter a task!");
    }
  };

  const showTaskInfo = (task) => {
    alert(`Task - ${task.taskName}\nDate Created: ${task.createdAt}`);
  };

  const editTask = (task) => {
    const newTaskValue = prompt(`Edit Task:`, task.taskName);

    if (newTaskValue !== null) {
      const updatedTask = { ...task, taskName: newTaskValue };
      updateTask(updatedTask);
    }
  };

  const deleteTask = (task) => {
    if (window.confirm("Are you sure you want to delete the task?")) {
      deleteTaskObject(task);
      moveTaskToDeleted(task);
    }
  };

  const moveTaskToDeleted = (task) => {
    setTasks((prevTasks) => prevTasks.filter((t) => t !== task));
    setDeletedTasks((prevDeletedTasks) => [...prevDeletedTasks, task]);
  };

  const restoreAllDeletedTasks = () => {
    setDeletedTasks([]);
  };

  const showDeletedTasks = () => {
    setShowDeleted(!showDeleted);
  };

  const saveTask = (task) => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    localStorage.setItem("tasks", JSON.stringify([...savedTasks, task]));
  };

  const updateTask = (updatedTask) => {
    const updatedTasks = tasks.map((task) => (task === updatedTask ? updatedTask : task));
    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  };

  const loadTasks = () => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  };

  const saveTasksToLocalStorage = (tasksToSave) => {
    localStorage.setItem("tasks", JSON.stringify(tasksToSave));
  };

  const deleteTaskObject = (taskToDelete) => {
    const updatedTasks = tasks.filter((task) => task !== taskToDelete);
    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  };

  return (
    <div className="todolist-container">
      <h1>Your To-Do List</h1>
      <input type="text" className="task-input" id="task-input" placeholder="Enter your task" />
      <button className="action-btn" onClick={createTask}>Create Task</button>

      <div id="task-list">
        {tasks.map((task, index) => (
          <div key={index} className="task-item">
            <span>{task.taskName}</span>
            <div className="task-menu">
              <div className="menu-item" onClick={() => showTaskInfo(task)}>Show Info</div>
              <div className="menu-item" onClick={() => editTask(task)}>Edit Task</div>
              <div className="menu-item" onClick={() => deleteTask(task)}>Delete Task</div>
            </div>
          </div>
        ))}
      </div>

      <div className="todolist-container deleted-tasks" style={{ display: showDeleted ? 'block' : 'none' }}>
        <h2>Deleted Tasks</h2>
        <div id="deleted-task-list">
          {deletedTasks.map((deletedTask, index) => (
            <div key={index} className="task-item">
              <span>{deletedTask.taskName}</span>
              {/* Deleted task menu goes here */}
            </div>
          ))}
        </div>
        <button className="action-btn" onClick={restoreAllDeletedTasks}>Restore All Deleted Tasks</button>
      </div>

      <button className="action-btn" onClick={showDeletedTasks}>Show Deleted Tasks</button>

      <div className="footer">
        <p>&copy; 2023 Oyesanya Adebayo | EES/20/21/0365 | 300 LVL | Comp Eng || </p>
      </div>
    </div>
  );
};

export default TodoList;
