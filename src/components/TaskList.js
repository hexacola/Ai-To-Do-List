import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCheck, 
  faTrash, 
  faClock, 
  faChevronDown, 
  faChevronUp, 
  faExclamationCircle,
  faListUl,
  faPlay
} from '@fortawesome/free-solid-svg-icons';
import TaskStartModal from './TaskStartModal';

const TaskListContainer = styled.div`
  margin-top: 2rem;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 3rem 1rem;
  border: 2px dashed var(--primary-yellow);
  
  h3 {
    font-family: 'Bebas Neue', sans-serif;
    font-size: var(--title-small);
    margin-bottom: 1rem;
    color: var(--primary-yellow);
  }
  
  p {
    color: var(--secondary-cream);
    font-family: 'Roboto', sans-serif;
    font-size: var(--text-medium);
    max-width: 500px;
    margin: 0 auto;
  }
`;

const TaskCard = styled(motion.div)`
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid var(--primary-yellow);
  margin-bottom: 1.5rem;
  padding: 1.25rem;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background-color: ${props => props.$completed ? 'var(--accent-green)' : 'var(--primary-red)'};
  }
  
  h3 {
    font-family: 'Oswald', sans-serif;
    font-size: var(--text-large);
    color: ${props => props.$completed ? 'var(--accent-green)' : 'var(--primary-yellow)'};
    margin-bottom: 0.75rem;
    text-decoration: ${props => props.$completed ? 'line-through' : 'none'};
    transition: all 0.3s ease;
  }
`;

const TaskHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const TaskDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  .subtask-count {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    background-color: rgba(255, 255, 255, 0.1);
    padding: 0.25rem 0.5rem;
    border-radius: 2px;
    font-size: var(--text-small);
    color: var(--secondary-cream);
    
    svg {
      color: var(--primary-yellow);
      font-size: 0.75rem;
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const IconButton = styled.button`
  background-color: transparent;
  border: 1px solid ${props => props.color || 'var(--primary-yellow)'};
  color: ${props => props.color || 'var(--primary-yellow)'};
  width: 36px;
  height: 36px;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  padding: 0;
  
  &:hover {
    background-color: ${props => props.color || 'var(--primary-yellow)'};
    color: var(--secondary-black);
  }
`;

// Add a new styled component for the Start button
const StartButton = styled(IconButton)`
  background-color: rgba(0, 180, 0, 0.2);
  color: var(--accent-green);
  border-color: var(--accent-green);
  
  &:hover {
    background-color: var(--accent-green);
    color: var(--secondary-black);
  }
`;

const TimeInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--secondary-cream);
  margin-bottom: 1rem;
  font-family: 'Roboto', sans-serif;
  font-size: var(--text-small);
  
  svg {
    color: var(--primary-yellow);
  }
`;

const SubtaskContainer = styled(motion.div)`
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px dashed rgba(247, 208, 44, 0.3);
`;

const SubtaskItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
  margin-bottom: 0.5rem;
  border-bottom: 1px solid rgba(255, 253, 208, 0.1);
  color: var(--secondary-cream);
  opacity: ${props => props.$completed ? 0.6 : 1};
  transition: all 0.3s ease;
  position: relative;
  
  .checkbox {
    min-width: 18px;
    height: 18px;
    border: 2px solid var(--primary-yellow);
    border-radius: 2px;
    margin-right: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease;
    
    svg {
      opacity: 0;
      color: var(--secondary-black);
      transition: opacity 0.2s ease;
    }
    
    &.checked {
      background-color: var(--primary-yellow);
      
      svg {
        opacity: 1;
      }
    }
    
    &:hover {
      transform: scale(1.1);
    }
  }
  
  .subtask-text {
    text-decoration: ${props => props.$completed ? 'line-through' : 'none'};
    font-family: 'Roboto', sans-serif;
    flex-grow: 1;
    margin-right: 50px; /* Make room for the time estimate */
  }
  
  .subtask-time {
    position: absolute;
    right: 0;
    background-color: rgba(178, 34, 34, 0.25);
    color: var(--primary-yellow);
    padding: 0.2rem 0.4rem;
    font-size: 0.75rem;
    border-radius: 2px;
    font-family: 'Bebas Neue', sans-serif;
    letter-spacing: 0.5px;
    display: flex;
    align-items: center;
    gap: 4px;
    
    svg {
      font-size: 0.7rem;
    }
  }
`;

const ExpandButton = styled.button`
  background: transparent;
  border: 1px solid rgba(255, 253, 208, 0.15);
  color: var(--primary-yellow);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;
  font-size: var(--text-small);
  letter-spacing: 1px;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  border-radius: 3px;
  transition: all 0.2s ease;
  
  &:hover {
    color: var(--secondary-cream);
    background-color: rgba(255, 253, 208, 0.05);
    border-color: var(--primary-yellow);
  }
  
  svg {
    transition: transform 0.3s ease;
    transform: ${props => props.$expanded ? 'rotate(180deg)' : 'rotate(0)'};
  }
`;

const TaskProgress = styled.div`
  width: 100%;
  height: 5px;
  background-color: rgba(255, 255, 255, 0.1);
  margin-top: 0.75rem;
  position: relative;
  overflow: hidden;
  
  .progress-bar {
    height: 100%;
    background-color: var(--accent-green);
    width: ${props => props.$progress || 0}%;
    transition: width 0.5s ease;
  }
  
  /* Add pulse animation for in-progress tasks */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transform: translateX(-100%);
    animation: ${props => props.$progress > 0 && props.$progress < 100 ? 'progressPulse 2s infinite' : 'none'};
  }
  
  @keyframes progressPulse {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`;

const NoSubtasksMessage = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--secondary-cream);
  opacity: 0.7;
  padding: 1rem 0;
  
  svg {
    color: var(--primary-yellow);
  }
`;

const TaskList = ({ tasks, deleteTask, toggleComplete, toggleSubtask }) => {
  const [expandedTasks, setExpandedTasks] = useState({});
  const [activeTaskId, setActiveTaskId] = useState(null);
  
  // Auto-expand tasks on initial render if there are only a few
  useEffect(() => {
    if (tasks.length > 0 && tasks.length <= 3) {
      const initialExpanded = {};
      tasks.forEach(task => {
        initialExpanded[task.id] = true;
      });
      setExpandedTasks(initialExpanded);
    }
  }, [tasks]);

  const toggleTaskExpand = (id) => {
    setExpandedTasks(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const getTaskProgress = (task) => {
    if (!task.subtasksCompleted || task.subtasksCompleted.length === 0) return 0;
    const completedCount = task.subtasksCompleted.filter(Boolean).length;
    return (completedCount / task.subtasksCompleted.length) * 100;
  };
  
  // Format time for display
  const formatTime = (minutes) => {
    if (!minutes) return "0 min";
    if (minutes < 60) return `${minutes} min`;
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`;
  };

  // Handle starting a task
  const handleStartTask = (taskId) => {
    setActiveTaskId(taskId);
  };

  // Handle closing the task modal
  const handleCloseModal = () => {
    setActiveTaskId(null);
  };

  // Get the active task object
  const getActiveTask = () => {
    return tasks.find(task => task.id === activeTaskId);
  };

  // Animation variants for list items
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, x: -50, transition: { duration: 0.2 } }
  };

  // Animation variants for subtask items
  const subtaskVariants = {
    hidden: { opacity: 0, x: -20, height: 0 },
    visible: i => ({ 
      opacity: 1, 
      x: 0,
      height: 'auto', 
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 24,
        mass: 0.6,
        delay: i * 0.07 // Enhanced stagger effect
      } 
    }),
    exit: { 
      opacity: 0, 
      x: -10, 
      height: 0, 
      transition: { 
        duration: 0.15,
        ease: "easeInOut" 
      } 
    }
  };

  return (
    <TaskListContainer>
      {tasks.length === 0 ? (
        <EmptyState>
          <h3>NO TASKS YET, PARTNER</h3>
          <p>Start adding tasks above to get your productivity journey going with some Tarantino flair!</p>
        </EmptyState>
      ) : (
        <AnimatePresence>
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              $completed={task.completed}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={cardVariants}
              layoutId={task.id}
            >
              <TaskHeader>
                <h3>{task.text}</h3>
                <ButtonGroup>
                  <StartButton onClick={() => handleStartTask(task.id)} title="Start working on this task">
                    <FontAwesomeIcon icon={faPlay} />
                  </StartButton>
                  <IconButton onClick={() => toggleComplete(task.id)}>
                    <FontAwesomeIcon icon={faCheck} />
                  </IconButton>
                  <IconButton color="var(--primary-red)" onClick={() => deleteTask(task.id)}>
                    <FontAwesomeIcon icon={faTrash} />
                  </IconButton>
                </ButtonGroup>
              </TaskHeader>
              
              <TaskDetails>
                <TimeInfo>
                  <FontAwesomeIcon icon={faClock} />
                  <span>Estimated: {formatTime(task.estimatedMinutes)}</span>
                </TimeInfo>
                
                <div className="subtask-count">
                  <FontAwesomeIcon icon={faListUl} />
                  <span>
                    {task.subtasksCompleted.filter(Boolean).length}/{task.subtasksCompleted.length}
                  </span>
                </div>
              </TaskDetails>
              
              <TaskProgress 
                $progress={getTaskProgress(task)}
              >
                <div className="progress-bar"></div>
              </TaskProgress>
              
              <ExpandButton 
                $expanded={expandedTasks[task.id]} 
                onClick={() => toggleTaskExpand(task.id)}
              >
                {expandedTasks[task.id] ? 'Hide Subtasks' : 'Show Subtasks'} 
                <FontAwesomeIcon icon={expandedTasks[task.id] ? faChevronUp : faChevronDown} />
              </ExpandButton>
              
              <AnimatePresence>
                {expandedTasks[task.id] && (
                  <SubtaskContainer
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ 
                      duration: 0.3,
                      ease: "easeInOut"
                    }}
                  >
                    {task.subtasks && task.subtasks.length > 0 ? (
                      task.subtasks.map((subtask, index) => (
                        <motion.div
                          key={`subtask-${task.id}-${index}`}
                          custom={index}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          variants={subtaskVariants}
                        >
                          <SubtaskItem 
                            $completed={task.subtasksCompleted && task.subtasksCompleted[index]}
                          >
                            <div 
                              className={`checkbox ${task.subtasksCompleted && task.subtasksCompleted[index] ? 'checked' : ''}`}
                              onClick={() => toggleSubtask(task.id, index)}
                            >
                              <FontAwesomeIcon icon={faCheck} size="xs" />
                            </div>
                            <span className="subtask-text">
                              {typeof subtask === 'string' ? subtask : (subtask.text || '')}
                            </span>
                            {subtask && subtask.timeEstimate && (
                              <span className="subtask-time">
                                <FontAwesomeIcon icon={faClock} />
                                {subtask.timeEstimate} min
                              </span>
                            )}
                          </SubtaskItem>
                        </motion.div>
                      ))
                    ) : (
                      <NoSubtasksMessage>
                        <FontAwesomeIcon icon={faExclamationCircle} />
                        <span>No subtasks available</span>
                      </NoSubtasksMessage>
                    )}
                  </SubtaskContainer>
                )}
              </AnimatePresence>
            </TaskCard>
          ))}
        </AnimatePresence>
      )}
      
      {/* Task Start Modal */}
      <TaskStartModal 
        key={activeTaskId || 'no-task'}
        task={getActiveTask()} 
        isOpen={activeTaskId !== null}
        onClose={handleCloseModal}
        onCompleteSubtask={toggleSubtask}
      />
    </TaskListContainer>
  );
};

export default TaskList; 