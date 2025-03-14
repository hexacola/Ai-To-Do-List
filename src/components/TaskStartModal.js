import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPlay, faPause, faStop, faCheckCircle, 
  faCircle, faClock, faTimes, faCheck, 
  faTrophy, faStopwatch, faCalendarCheck
} from '@fortawesome/free-solid-svg-icons';
import { completeTask, completeSubtask } from '../utils/rewards';

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: var(--spacing-md);
`;

const ModalContent = styled(motion.div)`
  background-color: var(--card-background);
  max-width: 800px;
  width: 90%;
  border-radius: 0;
  box-shadow: 10px 10px 0px rgba(0, 0, 0, 0.3);
  border: 3px solid var(--primary-yellow);
  border-left: 10px solid var(--primary-red);
  overflow: auto;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
`;

const ModalHeader = styled.div`
  background-color: var(--primary-yellow);
  padding: var(--spacing-md);
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  h2 {
    color: var(--text-color);
    font-family: 'Bebas Neue', sans-serif;
    margin: 0;
    font-size: 2rem;
    letter-spacing: 1.5px;
    text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    gap: 15px;
    
    svg {
      color: var(--primary-red);
      font-size: 1.6rem;
      filter: drop-shadow(1px 1px 0px rgba(0, 0, 0, 0.2));
    }
  }
  
  @media (max-width: 480px) {
    padding: var(--spacing-sm);
    
    h2 {
      font-size: 1.6rem;
    }
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: var(--primary-red);
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: scale(1.2);
  }
`;

const ModalBody = styled.div`
  padding: var(--spacing-lg);
  flex: 1;
  overflow-y: auto;
  
  @media (max-width: 480px) {
    padding: var(--spacing-md);
  }
`;

const Timer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  background-color: var(--primary-red);
  color: var(--primary-yellow);
  padding: var(--spacing-md) var(--spacing-lg);
  margin-bottom: var(--spacing-md);
  font-family: 'Bebas Neue', sans-serif;
  letter-spacing: 1.5px;
  border-radius: 0;
  box-shadow: 5px 5px 0 rgba(0, 0, 0, 0.15);
  position: relative;
  
  &::before {
    content: 'Laikmatis';
    position: absolute;
    top: -10px;
    left: 15px;
    background-color: var(--primary-yellow);
    color: var(--primary-red);
    padding: 0 10px;
    font-size: 0.9rem;
    letter-spacing: 1px;
  }
  
  .timer-display {
    font-size: 3rem;
    margin-right: auto;
    text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.2);
  }
  
  .timer-controls {
    display: flex;
    gap: 12px;
  }
  
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
    
    .timer-display {
      text-align: center;
      margin-right: 0;
      margin-bottom: 15px;
    }
    
    .timer-controls {
      justify-content: center;
    }
  }
`;

const TimerButton = styled.button`
  background-color: var(--primary-yellow);
  color: var(--text-color);
  border: none;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  cursor: pointer;
  border-radius: 0;
  transition: all 0.2s ease;
  box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.2);
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.25);
  }
  
  &:active {
    transform: scale(0.95);
    box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.15);
  }
  
  &.stop {
    background-color: #ff3b30;
    color: white;
  }
  
  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
    font-size: 1.3rem;
  }
`;

const SubtaskList = styled.div`
  margin-top: var(--spacing-lg);
  
  h3 {
    font-family: 'Bebas Neue', sans-serif;
    color: var(--primary-yellow);
    margin-bottom: 20px;
    font-size: 1.5rem;
    letter-spacing: 1.2px;
    display: flex;
    align-items: center;
    gap: 12px;
    
    svg {
      color: var(--primary-red);
      font-size: 1.3rem;
    }
  }
`;

const SubtaskItem = styled.div`
  display: flex;
  align-items: center;
  padding: var(--spacing-md);
  background-color: ${props => props.$completed ? 'rgba(0, 200, 0, 0.1)' : 'rgba(0, 0, 0, 0.05)'};
  margin-bottom: var(--spacing-sm);
  border-left: 5px solid ${props => props.$completed ? 'var(--completed-color)' : 'var(--primary-yellow)'};
  transition: all 0.3s ease;
  position: relative;
  box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: translateX(3px);
    background-color: ${props => props.$completed ? 'rgba(0, 200, 0, 0.15)' : 'rgba(0, 0, 0, 0.08)'};
  }
  
  .subtask-checkbox {
    color: ${props => props.$completed ? 'var(--completed-color)' : 'var(--primary-yellow)'};
    font-size: 1.6rem;
    margin-right: 15px;
    cursor: pointer;
    min-width: 24px;
    transition: all 0.3s ease;
    
    &:hover {
      transform: scale(1.2);
    }
  }
  
  .subtask-text {
    flex: 1;
    text-decoration: ${props => props.$completed ? 'line-through' : 'none'};
    color: ${props => props.$completed ? 'var(--subtask-text-color)' : 'var(--text-color)'};
    transition: all 0.3s ease;
    font-family: 'Oswald', sans-serif;
    font-size: 1.1rem;
    line-height: 1.3;
  }
  
  .subtask-time {
    background-color: var(--primary-yellow);
    color: var(--text-color);
    padding: 5px 10px;
    font-size: 0.95rem;
    font-family: 'Bebas Neue', sans-serif;
    display: flex;
    align-items: center;
    gap: 8px;
    letter-spacing: 0.8px;
    box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
    
    svg {
      font-size: 0.9rem;
    }
  }
  
  @media (max-width: 480px) {
    padding: var(--spacing-sm);
    
    .subtask-checkbox {
      font-size: 1.4rem;
      margin-right: 10px;
    }
    
    .subtask-time {
      font-size: 0.85rem;
      padding: 4px 8px;
    }
  }
`;

const CompletionSection = styled.div`
  margin-top: var(--spacing-lg);
  padding: var(--spacing-md);
  background-color: rgba(0, 0, 0, 0.03);
  border-radius: 0;
  box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.1);
  border-left: 5px solid var(--primary-yellow);
  
  .completion-title {
    font-family: 'Bebas Neue', sans-serif;
    color: var(--primary-yellow);
    font-size: 1.6rem;
    margin-bottom: var(--spacing-sm);
    letter-spacing: 1px;
    text-align: center;
    
    svg {
      margin-right: 10px;
      color: var(--primary-red);
    }
  }
  
  .progress-container {
    background-color: rgba(0, 0, 0, 0.1);
    height: 18px;
    margin: var(--spacing-md) 0;
    position: relative;
    overflow: hidden;
    border-radius: 0;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2);
  }
  
  .progress-bar {
    height: 100%;
    background-color: var(--primary-yellow);
    transition: width 0.8s ease;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
        45deg,
        transparent 25%,
        rgba(255, 255, 255, 0.2) 25%,
        rgba(255, 255, 255, 0.2) 50%,
        transparent 50%,
        transparent 75%,
        rgba(255, 255, 255, 0.2) 75%
      );
      background-size: 30px 30px;
      animation: move 2s linear infinite;
      
      @keyframes move {
        0% {
          background-position: 0 0;
        }
        100% {
          background-position: 60px 0;
        }
      }
    }
  }
  
  .completion-stats {
    display: flex;
    justify-content: space-between;
    font-family: 'Bebas Neue', sans-serif;
    color: var(--primary-yellow);
    font-size: 1.1rem;
    margin-bottom: var(--spacing-md);
    letter-spacing: 0.8px;
    
    span {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }
`;

const CompleteButton = styled(motion.button)`
  background-color: var(--completed-color);
  color: white;
  border: none;
  padding: var(--spacing-md) var(--spacing-lg);
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.5rem;
  letter-spacing: 1.5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin: var(--spacing-lg) auto;
  box-shadow: 5px 5px 0 rgba(0, 0, 0, 0.2);
  border-radius: 0;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.2);
  
  svg {
    font-size: 1.4rem;
    filter: drop-shadow(1px 1px 0 rgba(0, 0, 0, 0.2));
  }
  
  &:disabled {
    background-color: #999;
    cursor: not-allowed;
    opacity: 0.7;
  }
  
  @media (max-width: 480px) {
    font-size: 1.3rem;
    padding: var(--spacing-sm) var(--spacing-md);
  }
`;

const formatTime = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

const TaskStartModal = ({ task, isOpen, onClose, onTaskComplete, toggleSubtask }) => {
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const timerRef = useRef(null);
  const [completedSubtasks, setCompletedSubtasks] = useState(task?.subtasksCompleted || []);
  const [showCompletionMessage, setShowCompletionMessage] = useState(false);
  
  useEffect(() => {
    // Inicializuojame completedSubtasks, kai task pasikeičia
    if (task) {
      setCompletedSubtasks(task.subtasksCompleted || Array(task.subtasks?.length || 0).fill(false));
      setTimeElapsed(0);
      setIsTimerRunning(false);
      clearInterval(timerRef.current);
    }
  }, [task]);
  
  useEffect(() => {
    // Timer funkcionalumas
    if (isTimerRunning) {
      timerRef.current = setInterval(() => {
        setTimeElapsed(prev => prev + 1);
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }
    
    return () => clearInterval(timerRef.current);
  }, [isTimerRunning]);
  
  const handleToggleTimer = () => {
    setIsTimerRunning(prev => !prev);
  };
  
  const handleResetTimer = () => {
    setIsTimerRunning(false);
    clearInterval(timerRef.current);
    setTimeElapsed(0);
  };
  
  const handleSubtaskToggle = (index) => {
    const newCompletedSubtasks = [...completedSubtasks];
    newCompletedSubtasks[index] = !newCompletedSubtasks[index];
    setCompletedSubtasks(newCompletedSubtasks);
    
    if (toggleSubtask) {
      toggleSubtask(task.id, index);
      
      // Jei viskas pažymėta, rodome completion message
      if (newCompletedSubtasks.every(Boolean)) {
        setShowCompletionMessage(true);
      }
    }
  };
  
  const handleTaskComplete = () => {
    // Sustabdome laikmatį
    setIsTimerRunning(false);
    clearInterval(timerRef.current);
    
    // Atnaujiname task su subtasksCompleted ir timeSpent
    const updatedTask = {
      ...task,
      subtasksCompleted: completedSubtasks,
      timeSpent: Math.max(timeElapsed / 60, 1), // Konvertuojame sekundes į minutes
      completed: true
    };
    
    // Iškviečiame onTaskComplete callback
    if (onTaskComplete) {
      onTaskComplete(updatedTask);
    }
    
    // Uždarome modalinį langą
    onClose();
  };
  
  const calculateProgress = () => {
    if (!task?.subtasks || task.subtasks.length === 0) {
      return completedSubtasks[0] ? 100 : 0;
    }
    
    const completedCount = completedSubtasks.filter(Boolean).length;
    return Math.round((completedCount / task.subtasks.length) * 100);
  };
  
  const modalVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };
  
  const contentVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 400, damping: 30 } },
    exit: { y: 50, opacity: 0 }
  };
  
  if (!task || !isOpen) return null;
  
  const progress = calculateProgress();
  const allCompleted = task.subtasks && task.subtasks.length > 0 
    ? completedSubtasks.every(Boolean)
    : completedSubtasks[0];
  
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <ModalOverlay
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={modalVariants}
          onClick={onClose}
        >
          <ModalContent
            variants={contentVariants}
            onClick={e => e.stopPropagation()}
          >
            <ModalHeader>
              <h2>
                <FontAwesomeIcon icon={faPlay} />
                {task.text}
              </h2>
              <CloseButton onClick={onClose}>
                <FontAwesomeIcon icon={faTimes} />
              </CloseButton>
            </ModalHeader>
            
            <ModalBody>
              <Timer>
                <div className="timer-display">
                  <FontAwesomeIcon icon={faClock} style={{ marginRight: '15px' }} />
                  {formatTime(timeElapsed)}
                </div>
                <div className="timer-controls">
                  <TimerButton onClick={handleToggleTimer}>
                    <FontAwesomeIcon icon={isTimerRunning ? faPause : faPlay} />
                  </TimerButton>
                  <TimerButton onClick={handleResetTimer} className="stop">
                    <FontAwesomeIcon icon={faStop} />
                  </TimerButton>
                </div>
              </Timer>
              
              <SubtaskList>
                <h3>
                  <FontAwesomeIcon icon={faCheckCircle} />
                  Užduoties žingsniai:
                </h3>
                
                {task.subtasks && task.subtasks.map((subtask, index) => (
                  <SubtaskItem 
                    key={index} 
                    $completed={completedSubtasks[index]}
                    as={motion.div}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <FontAwesomeIcon 
                      icon={completedSubtasks[index] ? faCheckCircle : faCircle} 
                      className="subtask-checkbox"
                      onClick={() => handleSubtaskToggle(index)}
                    />
                    <span className="subtask-text">
                      {typeof subtask === 'string' ? subtask : subtask.text}
                    </span>
                    <span className="subtask-time">
                      <FontAwesomeIcon icon={faClock} />
                      {typeof subtask === 'string' ? '10' : subtask.timeEstimate} min
                    </span>
                  </SubtaskItem>
                ))}
              </SubtaskList>
              
              <CompletionSection>
                <div className="completion-title">
                  <FontAwesomeIcon icon={faTrophy} />
                  Užduoties progresas
                </div>
                
                <div className="completion-stats">
                  <span>
                    <FontAwesomeIcon icon={faCheckCircle} />
                    {task.subtasks ? completedSubtasks.filter(Boolean).length : (completedSubtasks[0] ? 1 : 0)} iš {task.subtasks ? task.subtasks.length : 1} žingsnių
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faStopwatch} />
                    {formatTime(timeElapsed)} laikas
                  </span>
                </div>
                
                <div className="progress-container">
                  <div 
                    className="progress-bar" 
                    style={{ width: `${progress}%` }}
                  />
                </div>
                
                <AnimatePresence>
                  {showCompletionMessage && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      style={{
                        backgroundColor: 'rgba(0, 200, 0, 0.1)',
                        padding: '15px',
                        marginTop: '15px',
                        borderLeft: '5px solid var(--completed-color)',
                        color: 'var(--completed-color)',
                        fontFamily: "'Bebas Neue', sans-serif",
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        fontSize: '1.2rem',
                        letterSpacing: '0.8px',
                        boxShadow: '3px 3px 0 rgba(0, 0, 0, 0.1)'
                      }}
                    >
                      <FontAwesomeIcon icon={faCalendarCheck} size="lg" />
                      <span>Puiku! Visi žingsniai užbaigti. Galite pažymėti užduotį kaip atliktą.</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CompletionSection>
              
              <CompleteButton
                onClick={handleTaskComplete}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={!allCompleted}
              >
                <FontAwesomeIcon icon={faCheck} />
                Užbaigti užduotį
              </CompleteButton>
            </ModalBody>
          </ModalContent>
        </ModalOverlay>
      )}
    </AnimatePresence>
  );
};

export default TaskStartModal;
