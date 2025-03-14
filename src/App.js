import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyle';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import ProfileHeader from './components/ProfileHeader';
import { lightTheme, darkTheme } from './themes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMoon, faSun, faPlus, faListUl, faChartLine, faTrophy, 
  faChartBar, faMedal, faCheckCircle, faClipboardList, faTimes, faRobot, faFilm
} from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';
import './styles/App.css';
import TaskStartModal from './components/TaskStartModal';
import AIHelpModal from './components/AIHelpModal';
import TaskManager from './components/TaskManager';
import RewardModal from './components/RewardModal';
import AIChat from './components/AIChat';
import { completeTask, completeSubtask } from './utils/rewards';

const ThemeToggle = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: var(--primary-red);
  color: var(--primary-yellow);
  border: 2px solid var(--primary-yellow);
  border-radius: 0;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  z-index: 100;
  box-shadow: 3px 3px 0px rgba(0, 0, 0, 0.3);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 5px 5px 0px rgba(0, 0, 0, 0.3);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.3);
  }
  
  @media (max-width: 768px) {
    top: 15px;
    right: 15px;
    width: 40px;
    height: 40px;
    font-size: 1.1rem;
  }
  
  @media (max-width: 480px) {
    top: 10px;
    right: 10px;
    width: 35px;
    height: 35px;
    font-size: 1rem;
    border-width: 1px;
  }
`;

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--background-color);
  transition: all 0.3s ease;
`;

const Content = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: var(--spacing-xl);
  flex: 1;
  position: relative;
  
  @media (max-width: 768px) {
    padding: var(--spacing-lg);
  }
  
  @media (max-width: 480px) {
    padding: var(--spacing-md);
  }
`;

const TarantinoTitle = styled.h1`
  text-align: center;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 3.5rem;
  margin: var(--spacing-md) 0 var(--spacing-lg);
  color: var(--primary-yellow);
  text-shadow: 4px 4px 0px var(--primary-red);
  letter-spacing: 3px;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(to right, var(--primary-yellow), var(--primary-red), var(--primary-yellow));
  }
  
  @media (max-width: 768px) {
    font-size: 2.8rem;
    margin: var(--spacing-sm) 0 var(--spacing-md);
    letter-spacing: 2px;
    
    &::after {
      height: 3px;
      bottom: -8px;
    }
  }
  
  @media (max-width: 480px) {
    font-size: 2.2rem;
    letter-spacing: 1.5px;
    
    &::after {
      height: 2px;
      bottom: -6px;
    }
  }
`;

const NavigationButtons = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: var(--spacing-md);
  gap: var(--spacing-md);
  
  @media (max-width: 480px) {
    flex-wrap: wrap;
    gap: var(--spacing-sm);
  }
`;

const NavButton = styled.button.withConfig({
  shouldForwardProp: prop => prop !== '$active'
})`
  background-color: ${props => props.$active ? 'var(--primary-red)' : 'var(--primary-yellow)'};
  color: ${props => props.$active ? 'var(--primary-yellow)' : 'var(--text-color)'};
  border: none;
  padding: 10px 20px;
  border-radius: 0;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.1rem;
  letter-spacing: 1.5px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 3px 3px 0px rgba(0, 0, 0, 0.2);
  border-left: ${props => props.$active ? '5px solid var(--primary-yellow)' : '3px solid var(--primary-red)'};
  position: relative;
  overflow: hidden;
  
  &:hover {
    background-color: ${props => props.$active ? 'var(--primary-red)' : 'var(--primary-red)'};
    color: ${props => props.$active ? 'var(--primary-yellow)' : 'var(--primary-yellow)'};
    transform: translateY(-3px);
    box-shadow: 5px 5px 0px rgba(0, 0, 0, 0.3);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 1px 1px 0px rgba(0, 0, 0, 0.2);
  }
  
  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 6px 12px;
    font-size: 0.9rem;
    flex: 1;
    text-align: center;
    min-width: 120px;
  }
`;

const AppInfo = styled.div`
  margin: var(--spacing-xl) 0;
  padding: var(--spacing-lg);
  background-color: rgba(0, 0, 0, 0.05);
  border: 2px solid var(--primary-yellow);
  border-left: 6px solid var(--primary-red);
  
  h2 {
    color: var(--primary-yellow);
    font-family: 'Bebas Neue', sans-serif;
    font-size: 1.8rem;
    margin-bottom: var(--spacing-md);
    text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.3);
  }
  
  p {
    color: var(--subtask-text-color);
    margin-bottom: var(--spacing-md);
    font-family: 'Oswald', sans-serif;
    line-height: 1.6;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
    
    li {
      padding: var(--spacing-sm) 0;
      border-bottom: 1px dashed var(--border-color);
      display: flex;
      align-items: center;
      
      &:last-child {
        border-bottom: none;
      }
      
      svg {
        color: var(--primary-yellow);
        margin-right: var(--spacing-sm);
      }
    }
  }
  
  @media (max-width: 768px) {
    margin: var(--spacing-lg) 0;
    padding: var(--spacing-md);
    
    h2 {
      font-size: 1.6rem;
    }
  }
  
  @media (max-width: 480px) {
    margin: var(--spacing-md) 0;
    padding: var(--spacing-sm);
    
    h2 {
      font-size: 1.4rem;
    }
  }
`;

const PageTransition = styled(motion.div)`
  width: 100%;
`;

// Naujas komponentas užduočių valdymo centrams
const TasksView = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TasksTabsContainer = styled.div`
  display: flex;
  margin-bottom: var(--spacing-md);
  border-bottom: 2px solid var(--primary-yellow);
`;

const TaskTab = styled.button.withConfig({
  shouldForwardProp: prop => prop !== '$active'
})`
  background-color: ${props => props.$active ? 'var(--primary-yellow)' : 'transparent'};
  color: ${props => props.$active ? 'var(--text-color)' : 'var(--subtask-text-color)'};
  border: none;
  padding: 10px 20px;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  border-bottom: 3px solid transparent;
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &:hover {
    background-color: rgba(247, 208, 44, 0.1);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: ${props => props.$active ? 'var(--primary-red)' : 'transparent'};
  }
  
  .badge {
    background-color: var(--primary-red);
    color: var(--primary-yellow);
    font-size: 0.8rem;
    padding: 2px 6px;
    border-radius: 0;
    margin-left: 4px;
  }
`;

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'light' ? 'light' : 'dark';
  });
  
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  
  const [activeView, setActiveView] = useState('create'); // 'create', 'tasks', 'stats', 'rewards', 'chat'
  const [activeTaskTab, setActiveTaskTab] = useState('list'); // 'list' or 'chat'
  const [lastAddedTask, setLastAddedTask] = useState(null);
  const [selectedTask, setSelectedTask] = useState(null);
  const [newRewards, setNewRewards] = useState([]);
  const [rewardModalOpen, setRewardModalOpen] = useState(false);
  
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
  
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };
  
  // Funkcija užduočių valdymo centro atidarymui
  const handleTasksViewOpen = () => {
    setActiveView('tasks');
    // Jei pirmą kartą atidarome, nustatome užduočių sąrašo kortelę
    if (activeTaskTab !== 'list' && activeTaskTab !== 'chat') {
      setActiveTaskTab('list');
    }
  };
  
  const addTask = (newTask) => {
    setLastAddedTask(newTask);
    setTasks(prevTasks => [...prevTasks, newTask]);
    
    // Automatiškai perjungti į užduočių sąrašo puslapį po užduoties pridėjimo
    setTimeout(() => {
      setActiveView('tasks');
      setActiveTaskTab('list');
    }, 500);
  };
  
  const deleteTask = (taskId) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };
  
  const toggleComplete = (taskId) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        const updatedTask = { ...task, completed: !task.completed };
        
        // Update XP and stats when completing a task
        if (!task.completed) {
          const result = completeTask(updatedTask);
          if (result && result.newRewards && result.newRewards.length > 0) {
            setNewRewards(result.newRewards);
            setRewardModalOpen(true);
          }
        }
        
        return updatedTask;
      }
      return task;
    });
    
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };
  
  const handleToggleSubtask = (taskId, subtaskIndex) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        // Initialize subtasksCompleted array if it doesn't exist
        const subtasksCompleted = task.subtasksCompleted || 
          Array(task.subtasks.length).fill(false);
        
        // Create a new array with toggled value
        const updatedSubtasksCompleted = [...subtasksCompleted];
        updatedSubtasksCompleted[subtaskIndex] = !updatedSubtasksCompleted[subtaskIndex];
        
        // Update XP and stats when completing a subtask
        if (!subtasksCompleted[subtaskIndex]) {
          const subtaskText = typeof task.subtasks[subtaskIndex] === 'string' ? 
            task.subtasks[subtaskIndex] : task.subtasks[subtaskIndex].text;
            
          const result = completeSubtask(taskId, subtaskIndex, subtaskText);
          if (result && result.newRewards && result.newRewards.length > 0) {
            setNewRewards(result.newRewards);
            setRewardModalOpen(true);
          }
        }
        
        // If all subtasks are completed, mark the task as completed as well
        const allCompleted = updatedSubtasksCompleted.every(Boolean);
        let completed = task.completed;
        
        if (allCompleted && !task.completed) {
          completed = true;
          const result = completeTask({...task, completed: true});
          if (result && result.newRewards && result.newRewards.length > 0) {
            setNewRewards(result.newRewards);
            setRewardModalOpen(true);
          }
        }
        
        return { 
          ...task, 
          subtasksCompleted: updatedSubtasksCompleted,
          completed: completed
        };
      }
      return task;
    });
    
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  const handleTaskComplete = (updatedTask) => {
    const result = completeTask(updatedTask);
    
    const updatedTasks = tasks.map(task => 
      task.id === updatedTask.id ? updatedTask : task
    );
    
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
    
    if (result && result.newRewards && result.newRewards.length > 0) {
      setNewRewards(result.newRewards);
      setRewardModalOpen(true);
    }
  };

  const handleTaskEdit = (task) => {
    setSelectedTask(task);
    // ... existing code ...
  };

  // Animacijos variantai puslapių perėjimui
  const pageVariants = {
    initial: {
      opacity: 0,
      x: '-100%',
    },
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: '100%',
    }
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.5
  };
  
  const renderTaskList = () => {
    return (
      <TaskList
        tasks={tasks}
        onTaskComplete={handleTaskComplete}
        onTaskDelete={deleteTask}
        onTaskEdit={handleTaskEdit}
        onToggleSubtask={handleToggleSubtask}
      />
    );
  };
  
  // Function to save tasks to localStorage
  const saveTasks = (updatedTasks) => {
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };
  
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <AppContainer>
        <ThemeToggle onClick={toggleTheme}>
          <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} />
        </ThemeToggle>
        
        <Content>
          <div style={{ textAlign: 'center' }}>
            <TarantinoTitle>Produktyvumo Įrankis</TarantinoTitle>
          </div>
          
          <NavigationButtons>
            <NavButton 
              $active={activeView === 'create'} 
              onClick={() => setActiveView('create')}
            >
              <FontAwesomeIcon icon={faPlus} style={{ marginRight: '8px' }} />
              Sukurti užduotį
            </NavButton>
            <NavButton 
              $active={activeView === 'tasks'} 
              onClick={handleTasksViewOpen}
            >
              <FontAwesomeIcon icon={faListUl} style={{ marginRight: '8px' }} />
              Užduočių valdymas {tasks.length > 0 && `(${tasks.length})`}
            </NavButton>
            <NavButton 
              $active={activeView === 'stats'} 
              onClick={() => setActiveView('stats')}
            >
              <FontAwesomeIcon icon={faChartLine} style={{ marginRight: '8px' }} />
              Statistika
            </NavButton>
            <NavButton 
              $active={activeView === 'rewards'} 
              onClick={() => setActiveView('rewards')}
            >
              <FontAwesomeIcon icon={faTrophy} style={{ marginRight: '8px' }} />
              Apdovanojimai
            </NavButton>
          </NavigationButtons>
          
          <ProfileHeader />
          
          <AnimatePresence mode="wait">
            {activeView === 'create' && (
              <PageTransition
                key="create"
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <TaskForm 
                  addTask={addTask} 
                  onTaskAdded={() => setActiveView('tasks')}
                />
                
                <AppInfo>
                  <h2>Apie Produktyvumo Įrankį</h2>
                  <p>
                    Šis įrankis sukurtas padėti jums įveikti atidėliojimą ir tapti produktyvesniu. 
                    Naudodami šį įrankį, jūs galite:
                  </p>
                  <ul>
                    <li>
                      <FontAwesomeIcon icon={faCheckCircle} />
                      Skaidyti kompleksines užduotis į mažesnius, lengviau įveikiamus žingsnius
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faCheckCircle} />
                      Sekti savo pažangą ir matyti savo produktyvumo statistiką
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faCheckCircle} />
                      Gauti apdovanojimus už užbaigtas užduotis ir pasiekimus
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faCheckCircle} />
                      Atrakinti naujus lygius ir funkcijas didėjant jūsų produktyvumui
                    </li>
                  </ul>
                  <p>
                    Pradėkite įvesdami naują užduotį viršuje ir leiskite mūsų dirbtiniam intelektui 
                    pasiūlyti konkrečius žingsnius bei laiko estimacijas kiekvienai užduočiai.
                  </p>
                </AppInfo>
              </PageTransition>
            )}
            
            {activeView === 'tasks' && (
              <PageTransition
                key="tasks"
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <TasksView>
                  <TasksTabsContainer>
                    <TaskTab 
                      $active={activeTaskTab === 'list'} 
                      onClick={() => setActiveTaskTab('list')}
                    >
                      <FontAwesomeIcon icon={faListUl} />
                      Užduočių sąrašas
                      {tasks.length > 0 && <span className="badge">{tasks.length}</span>}
                    </TaskTab>
                    <TaskTab 
                      $active={activeTaskTab === 'chat'} 
                      onClick={() => setActiveTaskTab('chat')}
                    >
                      <FontAwesomeIcon icon={faFilm} />
                      Džiuljeta AI
                    </TaskTab>
                  </TasksTabsContainer>
                  
                  {activeTaskTab === 'list' && renderTaskList()}
                  {activeTaskTab === 'chat' && <AIChat />}
                </TasksView>
              </PageTransition>
            )}
            
            {activeView === 'stats' && (
              <PageTransition
                key="stats"
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <div>
                  <h2 style={{ 
                    color: 'var(--primary-yellow)', 
                    textAlign: 'center',
                    margin: '2rem 0',
                    fontFamily: "'Bebas Neue', sans-serif",
                    textShadow: '2px 2px 0px var(--primary-red)'
                  }}>
                    Išsami statistika
                  </h2>
                  {/* Čia galima pridėti išsamesnę statistikos peržiūrą */}
                  <div style={{ 
                    textAlign: 'center', 
                    padding: '2rem', 
                    backgroundColor: 'rgba(0, 0, 0, 0.05)',
                    border: '2px dashed var(--primary-yellow)',
                  }}>
                    <FontAwesomeIcon 
                      icon={faChartBar} 
                      style={{ 
                        fontSize: '3rem', 
                        color: 'var(--primary-yellow)', 
                        marginBottom: '1rem' 
                      }} 
                    />
                    <p style={{ color: 'var(--subtask-text-color)' }}>
                      Išsamios statistikos funkcija bus prieinama netrukus!
                    </p>
                  </div>
                </div>
              </PageTransition>
            )}
            
            {activeView === 'rewards' && (
              <PageTransition
                key="rewards"
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <div>
                  <h2 style={{ 
                    color: 'var(--primary-yellow)', 
                    textAlign: 'center',
                    margin: '2rem 0',
                    fontFamily: "'Bebas Neue', sans-serif",
                    textShadow: '2px 2px 0px var(--primary-red)'
                  }}>
                    Visi apdovanojimai
                  </h2>
                  {/* Čia galima pridėti visų apdovanojimų peržiūrą */}
                  <div style={{ 
                    textAlign: 'center', 
                    padding: '2rem', 
                    backgroundColor: 'rgba(0, 0, 0, 0.05)',
                    border: '2px dashed var(--primary-yellow)',
                  }}>
                    <FontAwesomeIcon 
                      icon={faMedal} 
                      style={{ 
                        fontSize: '3rem', 
                        color: 'var(--primary-yellow)', 
                        marginBottom: '1rem' 
                      }} 
                    />
                    <p style={{ color: 'var(--subtask-text-color)' }}>
                      Išsami apdovanojimų peržiūra bus prieinama netrukus!
                    </p>
                  </div>
                </div>
              </PageTransition>
            )}
          </AnimatePresence>
        </Content>
        {rewardModalOpen && newRewards.length > 0 && (
          <RewardModal
            rewards={newRewards}
            onClose={() => setRewardModalOpen(false)}
          />
        )}
      </AppContainer>
      
      {/* Modals */}
      <AnimatePresence>
        {selectedTask && selectedTask.showTaskStartModal && (
          <TaskStartModal
            task={selectedTask}
            isOpen={true}
            onClose={() => {
              const updatedTasks = tasks.map(t => 
                t.id === selectedTask.id 
                  ? { ...t, showTaskStartModal: false } 
                  : t
              );
              setTasks(updatedTasks);
              setSelectedTask(null);
            }}
            onTaskComplete={handleTaskComplete}
            toggleSubtask={handleToggleSubtask}
          />
        )}
      </AnimatePresence>
      
      <AnimatePresence>
        {selectedTask && selectedTask.showAIHelpModal && (
          <AIHelpModal
            task={selectedTask}
            subtaskIndex={selectedTask.currentSubtaskIndex || 0}
            isOpen={true}
            onClose={() => {
              const updatedTasks = tasks.map(t => 
                t.id === selectedTask.id 
                  ? { ...t, showAIHelpModal: false } 
                  : t
              );
              setTasks(updatedTasks);
              setSelectedTask(null);
            }}
          />
        )}
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;