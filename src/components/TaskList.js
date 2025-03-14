import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTrash, faCheckCircle, faCircle, 
  faChevronDown, faChevronUp, faClock, 
  faExclamationCircle, faListAlt, faCheck,
  faTrophy, faStar, faAward, faInfoCircle,
  faPlay, faRobot, faEdit, faList, faSpinner
} from '@fortawesome/free-solid-svg-icons';
import TaskStartModal from './TaskStartModal';
import RewardModal from './RewardModal';
import AIHelpModal from './AIHelpModal';
import { 
  completeTask, 
  completeSubtask, 
  isTaskAlreadyCompleted,
  isSubtaskAlreadyCompleted
} from '../utils/rewards';
import TaskManager from './TaskManager';

const ListContainer = styled.div`
  margin-top: var(--spacing-lg);
`;

const EmptyState = styled.div`
  text-align: center;
  margin: 3rem 0;
  padding: 2rem;
  background-color: rgba(0, 0, 0, 0.05);
  border: 2px dashed var(--primary-yellow);
  
  .icon {
    font-size: 3rem;
    color: var(--primary-yellow);
    opacity: 0.5;
    margin-bottom: 1rem;
  }
  
  h3 {
    color: var(--primary-yellow);
    margin-bottom: 1rem;
    font-family: 'Bebas Neue', sans-serif;
    font-size: 1.8rem;
  }
  
  p {
    color: var(--subtask-text-color);
    font-family: 'Oswald', sans-serif;
  }
`;

const ListTitle = styled.h2`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 2.2rem;
  color: var(--primary-yellow);
  margin-bottom: var(--spacing-md);
  text-align: center;
  text-shadow: 2px 2px 0px var(--primary-red);
  letter-spacing: 1px;
  border-bottom: 2px solid var(--primary-red);
  padding-bottom: var(--spacing-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  
  .task-count {
    background-color: var(--primary-red);
    color: var(--primary-yellow);
    padding: 0.25rem 0.75rem;
    font-size: 1.2rem;
    border-radius: 0;
    box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.2);
  }
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
    
    .task-count {
      font-size: 1rem;
    }
  }
  
  @media (max-width: 480px) {
    font-size: 1.5rem;
    
    .task-count {
      font-size: 0.9rem;
    }
  }
`;

const TaskCard = styled(motion.div)`
  background-color: var(--card-background);
  margin-bottom: var(--spacing-md);
  border-radius: 0;
  padding: var(--spacing-md);
  box-shadow: 5px 5px 0px rgba(0, 0, 0, 0.2);
  border: 2px solid var(--primary-yellow);
  border-left: 6px solid var(--primary-red);
  transition: all 0.3s ease;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 20px 20px 0;
    border-color: transparent var(--primary-yellow) transparent transparent;
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 8px 8px 0px rgba(0, 0, 0, 0.25);
  }
  
  &.completed {
    border-color: var(--completed-color);
    border-left-color: var(--completed-color);
    
    &::after {
      border-color: transparent var(--completed-color) transparent transparent;
    }
  }
  
  &.new-task {
    animation: highlight 2s ease-in-out;
    
    @keyframes highlight {
      0%, 100% {
        background-color: var(--card-background);
      }
      50% {
        background-color: var(--newTaskHighlight);
      }
    }
  }
  
  @media (max-width: 768px) {
    padding: var(--spacing-sm);
    margin-bottom: var(--spacing-sm);
    
    &::after {
      border-width: 0 15px 15px 0;
    }
  }
  
  @media (max-width: 480px) {
    padding: 12px;
    margin-bottom: 12px;
    border-width: 1px;
    border-left-width: 4px;
    
    &::after {
      border-width: 0 12px 12px 0;
    }
  }
`;

const TaskHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-sm);
  
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
`;

const TaskTitle = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  font-family: 'Bebas Neue', sans-serif;
  color: var(--text-color);
  display: flex;
  align-items: center;
  gap: 12px;
  
  .completed-icon {
    color: var(--completed-color);
  }
  
  .incomplete-icon {
    color: var(--primary-yellow);
  }
  
  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

const TaskInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const TaskTime = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-family: 'Bebas Neue', sans-serif;
  color: var(--primary-yellow);
  font-size: 0.9rem;
`;

const ExpandIcon = styled.div`
  color: var(--primary-yellow);
  cursor: pointer;
  font-size: 0.9rem;
  transition: transform 0.3s ease;
`;

const TaskActions = styled.div`
  display: flex;
  gap: 10px;
  
  @media (max-width: 480px) {
    width: 100%;
    justify-content: flex-end;
  }
`;

const TaskActionButtons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: var(--spacing-sm);
`;

const ActionButton = styled.button`
  background-color: ${props => props.$primary ? 'var(--primary-red)' : 'var(--primary-blue)'};
  color: white;
  border: none;
  padding: 8px 15px;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 0.9rem;
  letter-spacing: 1px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.2);
  border-radius: 0;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.2);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.2);
  }
  
  svg {
    font-size: 0.9rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 6px 10px;
  }
`;

const TaskExpandButton = styled.button`
  background: transparent;
  border: none;
  color: var(--primary-yellow);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  font-family: 'Bebas Neue', sans-serif;
  padding: 5px 0;
  font-size: 0.9rem;
  letter-spacing: 1px;
  transition: all 0.2s ease;
  
  &:hover {
    color: var(--primary-red);
  }
  
  svg {
    transition: transform 0.3s ease;
    transform: ${props => props.$expanded ? 'rotate(180deg)' : 'rotate(0)'};
  }
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const TaskDetails = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.05);
  margin-top: var(--spacing-sm);
  padding: var(--spacing-sm);
  border-left: 3px solid var(--primary-yellow);
  overflow: hidden;
`;

const SubtaskList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const SubtaskItem = styled.li`
  display: flex;
  align-items: flex-start;
  padding: 8px 0;
  border-bottom: 1px dashed rgba(255, 255, 255, 0.1);
  
  &:last-child {
    border-bottom: none;
  }
  
  .subtask-checkbox {
    margin-right: 10px;
    font-size: 1.1rem;
    color: ${props => props.$completed ? 'var(--completed-color)' : 'var(--primary-yellow)'};
    cursor: pointer;
    transition: all 0.2s ease;
    flex-shrink: 0;
    margin-top: 2px;
    
    &:hover {
      transform: scale(1.2);
    }
  }
  
  .subtask-text {
    flex: 1;
    font-size: 0.95rem;
    color: ${props => props.$completed ? 'var(--subtask-text-color)' : 'var(--text-color)'};
    text-decoration: ${props => props.$completed ? 'line-through' : 'none'};
    opacity: ${props => props.$completed ? 0.7 : 1};
    transition: all 0.3s ease;
  }
  
  .subtask-time {
    font-size: 0.85rem;
    color: var(--primary-yellow);
    padding: 2px 6px;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 0;
    margin-left: 10px;
    font-family: 'Bebas Neue', sans-serif;
    letter-spacing: 0.5px;
    display: flex;
    align-items: center;
    gap: 5px;
    
    svg {
      font-size: 0.8rem;
    }
  }
  
  @media (max-width: 480px) {
    padding: 6px 0;
    
    .subtask-checkbox {
      font-size: 1rem;
    }
    
    .subtask-text {
      font-size: 0.85rem;
    }
    
    .subtask-time {
      font-size: 0.75rem;
    }
  }
`;

const TaskTimeInfo = styled.div`
  margin-top: var(--spacing-sm);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: var(--spacing-sm);
  border-top: 1px dashed rgba(255, 255, 255, 0.1);
  
  .time-info {
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--primary-yellow);
    font-family: 'Bebas Neue', sans-serif;
    font-size: 1rem;
    letter-spacing: 0.5px;
  }
  
  .progress-info {
    font-size: 0.9rem;
    color: var(--subtask-text-color);
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    
    .time-info {
      font-size: 0.9rem;
    }
    
    .progress-info {
      font-size: 0.8rem;
    }
  }
`;

const XPNotification = styled(motion.div)`
  background-color: var(--primary-yellow);
  color: var(--text-color);
  padding: var(--spacing-md);
  border-radius: 0;
  margin-bottom: var(--spacing-md);
  display: flex;
  align-items: center;
  box-shadow: 5px 5px 0px rgba(0, 0, 0, 0.2);
  border-left: 6px solid var(--primary-red);
  max-width: 100%;
  
  .xp-icon {
    font-size: 1.8rem;
    color: var(--primary-red);
    margin-right: var(--spacing-md);
    animation: pulse 1.5s infinite;
  }
  
  .xp-content {
    flex: 1;
  }
  
  .xp-value {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 1.4rem;
    font-weight: bold;
    color: var(--primary-red);
    margin-bottom: 5px;
  }
  
  .xp-task {
    font-size: 0.9rem;
  }
  
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
  
  @media (max-width: 768px) {
    padding: var(--spacing-sm);
    
    .xp-icon {
      font-size: 1.5rem;
      margin-right: var(--spacing-sm);
    }
    
    .xp-value {
      font-size: 1.2rem;
    }
    
    .xp-task {
      font-size: 0.8rem;
    }
  }
  
  @media (max-width: 480px) {
    .xp-icon {
      font-size: 1.3rem;
    }
    
    .xp-value {
      font-size: 1.1rem;
    }
  }
`;

const CompletedBadge = styled.span`
  background-color: var(--completed-color);
  color: white;
  font-size: 0.8rem;
  padding: 3px 8px;
  border-radius: 0;
  margin-left: 10px;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-family: 'Bebas Neue', sans-serif;
  letter-spacing: 0.5px;
  
  svg {
    font-size: 0.7rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.7rem;
    padding: 2px 6px;
    
    svg {
      font-size: 0.6rem;
    }
  }
`;

const InfoNotification = styled(motion.div)`
  background-color: var(--grey-light);
  color: var(--text-color);
  padding: var(--spacing-md);
  border-radius: 0;
  margin-bottom: var(--spacing-md);
  display: flex;
  align-items: center;
  box-shadow: 5px 5px 0px rgba(0, 0, 0, 0.2);
  border-left: 6px solid var(--grey-dark);
  max-width: 100%;
  
  .info-icon {
    font-size: 1.8rem;
    color: var(--grey-dark);
    margin-right: var(--spacing-md);
  }
  
  .info-content {
    flex: 1;
  }
  
  .info-title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 1.2rem;
    font-weight: bold;
    color: var(--grey-dark);
    margin-bottom: 5px;
  }
  
  .info-message {
    font-size: 0.9rem;
  }
  
  @media (max-width: 768px) {
    padding: var(--spacing-sm);
    
    .info-icon {
      font-size: 1.5rem;
      margin-right: var(--spacing-sm);
    }
    
    .info-title {
      font-size: 1.1rem;
    }
    
    .info-message {
      font-size: 0.8rem;
    }
  }
  
  @media (max-width: 480px) {
    .info-icon {
      font-size: 1.3rem;
    }
    
    .info-title {
      font-size: 1rem;
    }
  }
`;

const CompletedBeforeBadge = styled.span`
  background-color: var(--grey-light);
  color: var(--grey-dark);
  font-size: 0.8rem;
  padding: 3px 8px;
  border-radius: 0;
  margin-left: 10px;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-family: 'Bebas Neue', sans-serif;
  letter-spacing: 0.5px;
  
  svg {
    font-size: 0.7rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.7rem;
    padding: 2px 6px;
    
    svg {
      font-size: 0.6rem;
    }
  }
`;

const PreviouslyCompletedTag = styled.span`
  background-color: var(--grey-light);
  color: var(--grey-dark);
  font-size: 0.7rem;
  padding: 2px 5px;
  margin-left: 8px;
  font-family: 'Bebas Neue', sans-serif;
  letter-spacing: 0.5px;
  
  @media (max-width: 480px) {
    font-size: 0.6rem;
    padding: 1px 4px;
  }
`;

const TaskList = ({ 
  tasks, 
  onTaskComplete, 
  onTaskDelete, 
  onTaskEdit,
  onToggleSubtask
}) => {
  const [expandedTasks, setExpandedTasks] = useState({});
  const [activeTaskId, setActiveTaskId] = useState(null);
  const [showRewardModal, setShowRewardModal] = useState(false);
  const [earnedRewards, setEarnedRewards] = useState([]);
  const [completedTask, setCompletedTask] = useState(null);
  const [xpNotification, setXpNotification] = useState(null);
  const [infoNotification, setInfoNotification] = useState(null);
  const [startModalOpen, setStartModalOpen] = useState(false);
  const [aiHelpModalOpen, setAiHelpModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [selectedSubtaskIndex, setSelectedSubtaskIndex] = useState(0);
  
  useEffect(() => {
    if (xpNotification) {
      const timer = setTimeout(() => {
        setXpNotification(null);
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [xpNotification]);
  
  useEffect(() => {
    if (infoNotification) {
      const timer = setTimeout(() => {
        setInfoNotification(null);
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [infoNotification]);
  
  const toggleExpand = (taskId) => {
    setExpandedTasks(prev => ({
      ...prev,
      [taskId]: !prev[taskId]
    }));
  };
  
  const calculateProgress = (task) => {
    if (!task.subtasks || task.subtasks.length === 0) {
      return task.completed ? 100 : 0;
    }
    
    const completedCount = task.subtasksCompleted?.filter(Boolean).length || 0;
    return Math.round((completedCount / task.subtasks.length) * 100);
  };

  const handleTaskComplete = (task) => {
    if (task.completed) {
      onToggleSubtask(task.id);
      return;
    }
    
    onToggleSubtask(task.id);
    
    const result = completeTask(task);
    
    if (result.alreadyCompleted) {
      setInfoNotification({
        message: "Jūs jau buvote užbaigę šią užduotį anksčiau. XP negaunami pakartotinai.",
        timestamp: new Date(),
        taskName: task.text
      });
      return;
    }
    
    setXpNotification({
      xp: result.xpEarned,
      taskName: task.text,
      timestamp: new Date()
    });
    
    if (result.newRewards && result.newRewards.length > 0) {
      setEarnedRewards(result.newRewards);
      setShowRewardModal(true);
    }
    
    setCompletedTask(task);
    
    setTimeout(() => {
      setCompletedTask(null);
    }, 1500);
  };

  const handleSubtaskComplete = (taskId, subtaskIndex, subtaskText) => {
    onToggleSubtask(taskId, subtaskIndex);
    
    const result = completeSubtask(taskId, subtaskIndex);
    
    if (result.alreadyCompleted) {
      setInfoNotification({
        message: "Jūs jau buvote užbaigę šį žingsnį anksčiau. XP negaunami pakartotinai.",
        timestamp: new Date(),
        taskName: subtaskText,
        isSubtask: true
      });
      return;
    }
    
    setXpNotification({
      xp: result.xpEarned,
      taskName: subtaskText,
      timestamp: new Date(),
      isSubtask: true
    });
    
    if (result.newRewards && result.newRewards.length > 0) {
      setEarnedRewards(result.newRewards);
      setShowRewardModal(true);
    }
  };
  
  const sortedTasks = [...tasks].sort((a, b) => {
    if (a.completed && !b.completed) return 1;
    if (!a.completed && b.completed) return -1;
    return new Date(b.createdAt) - new Date(a.createdAt);
  });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  const expandVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: 'auto', opacity: 1, transition: { duration: 0.3 } }
  };

  const handleStartTask = (task) => {
    setSelectedTask(task);
    setStartModalOpen(true);
  };
  
  const handleAIHelp = (task, subtaskIndex = 0) => {
    setSelectedTask(task);
    setSelectedSubtaskIndex(subtaskIndex);
    setAiHelpModalOpen(true);
  };
  
  const handleTaskCompleted = (updatedTask) => {
    if (onToggleSubtask) {
      onToggleSubtask(updatedTask.id);
    }
  };
  
  const handleToggleSubtask = (taskId, subtaskIndex) => {
    console.log(`Toggled subtask ${subtaskIndex} for task ${taskId}`);
  };

  const renderTaskCard = (task) => {
    return (
      <TaskCard
        key={task.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        layout
      >
        <TaskHeader onClick={() => toggleExpand(task.id)}>
          <TaskTitle>
            {task.completed ? (
              <FontAwesomeIcon icon={faCheckCircle} className="completed-icon" />
            ) : (
              <FontAwesomeIcon icon={faCircle} className="incomplete-icon" />
            )}
            {task.text}
          </TaskTitle>
          <TaskInfo>
            {task.estimatedTime && (
              <TaskTime>
                <FontAwesomeIcon icon={faClock} />
                {task.estimatedTime} min
              </TaskTime>
            )}
            <ExpandIcon>
              <FontAwesomeIcon
                icon={expandedTasks[task.id] ? faChevronUp : faChevronDown}
              />
            </ExpandIcon>
          </TaskInfo>
        </TaskHeader>
        
        <AnimatePresence mode="wait">
          {expandedTasks[task.id] && (
            <TaskDetails
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <TaskManager 
                task={task}
                onTaskComplete={onTaskComplete}
                onTaskEdit={onTaskEdit}
                onTaskDelete={onTaskDelete}
                onToggleSubtask={onToggleSubtask}
              />
            </TaskDetails>
          )}
        </AnimatePresence>
      </TaskCard>
    );
  };

  if (tasks.length === 0) {
    return (
      <EmptyState>
        <FontAwesomeIcon icon={faListAlt} className="icon" />
        <h3>Dar neturite užduočių</h3>
        <p>Pridėkite naują užduotį, kad galėtumėte pradėti sekti savo produktyvumą</p>
      </EmptyState>
    );
  }

  return (
    <ListContainer as={motion.div} 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <ListTitle>
        <FontAwesomeIcon icon={faListAlt} />
        Užduočių sąrašas
        <span className="task-count">{tasks.length}</span>
      </ListTitle>
      
      <AnimatePresence mode="wait">
        {infoNotification && (
          <InfoNotification
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <div className="info-icon">
              <FontAwesomeIcon icon={faInfoCircle} />
            </div>
            <div className="info-content">
              <div className="info-title">
                {infoNotification.isSubtask ? "Žingsnis jau buvo užbaigtas:" : "Užduotis jau buvo užbaigta:"} {infoNotification.taskName}
              </div>
              <div className="info-message">
                {infoNotification.message}
              </div>
            </div>
          </InfoNotification>
        )}
      </AnimatePresence>
      
      <AnimatePresence mode="wait">
        {xpNotification && (
          <XPNotification
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <div className="xp-icon">
              <FontAwesomeIcon icon={faStar} />
            </div>
            <div className="xp-content">
              <div className="xp-value">+{xpNotification.xp} XP</div>
              <div className="xp-task">
                {xpNotification.isSubtask ? "Žingsnis užbaigtas:" : "Užduotis užbaigta:"} {xpNotification.taskName}
              </div>
            </div>
          </XPNotification>
        )}
      </AnimatePresence>
      
      <AnimatePresence mode="wait">
        {sortedTasks.map(task => renderTaskCard(task))}
      </AnimatePresence>
      
      {showRewardModal && (
        <RewardModal 
          rewards={earnedRewards} 
          onClose={() => {
            setShowRewardModal(false);
            setEarnedRewards([]);
          }} 
        />
      )}
      
      <TaskStartModal
        task={selectedTask}
        isOpen={startModalOpen}
        onClose={() => setStartModalOpen(false)}
        onTaskComplete={handleTaskCompleted}
        toggleSubtask={handleToggleSubtask}
      />
      
      <AIHelpModal
        task={selectedTask}
        subtaskIndex={selectedSubtaskIndex}
        isOpen={aiHelpModalOpen}
        onClose={() => setAiHelpModalOpen(false)}
      />
    </ListContainer>
  );
};

export default TaskList; 