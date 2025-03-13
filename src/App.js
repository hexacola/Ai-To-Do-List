import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './styles/App.css';

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('pulpTasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('pulpTasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    // Ensure subtasks are in the correct format
    const processedTask = {
      ...task,
      subtasks: task.subtasks.map(subtask => {
        if (typeof subtask === 'string') {
          return { text: subtask, timeEstimate: 15 }; // Default time estimate
        }
        return subtask;
      }),
      subtasksCompleted: new Array(task.subtasks.length).fill(false)
    };
    
    setTasks([...tasks, processedTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        // If toggling to complete, mark all subtasks as complete too
        const newCompletedStatus = !task.completed;
        return { 
          ...task, 
          completed: newCompletedStatus,
          // If main task is marked complete, all subtasks should be completed too
          subtasksCompleted: newCompletedStatus 
            ? new Array(task.subtasks.length).fill(true) 
            : task.subtasksCompleted 
        };
      }
      return task;
    }));
  };

  const toggleSubtask = (taskId, subtaskIndex) => {
    setTasks(tasks.map(task => {
      if (task.id === taskId) {
        const newSubtasksCompleted = [...task.subtasksCompleted];
        newSubtasksCompleted[subtaskIndex] = !newSubtasksCompleted[subtaskIndex];
        
        // If all subtasks are completed, mark the main task as completed
        const allSubtasksCompleted = newSubtasksCompleted.every(Boolean);
        
        return {
          ...task,
          subtasksCompleted: newSubtasksCompleted,
          completed: allSubtasksCompleted
        };
      }
      return task;
    }));
  };

  return (
    <div className="app">
      <motion.div 
        className="container"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Header />
        
        <motion.div
          className="content-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <TaskForm addTask={addTask} />
          
          <div className="divider"></div>
          
          <TaskList 
            tasks={tasks} 
            deleteTask={deleteTask} 
            toggleComplete={toggleComplete}
            toggleSubtask={toggleSubtask}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;