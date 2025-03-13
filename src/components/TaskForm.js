import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faPlus, faSpinner, faMagic, faExclamationTriangle, faSync } from '@fortawesome/free-solid-svg-icons';
import { generateTaskBreakdown, estimateTaskTime } from '../hooks/usePollinationsAPI';

const FormContainer = styled.div`
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const InputContainer = styled.div`
  position: relative;
  
  input {
    width: 100%;
    padding: 1rem 3rem 1rem 1rem;
    font-size: var(--text-medium);
    background-color: rgba(255, 253, 208, 0.1);
    border: 2px solid var(--primary-yellow);
    color: var(--secondary-cream);
    border-radius: 2px;
    
    &:focus {
      outline: none;
      border-color: var(--primary-red);
      box-shadow: 0 0 10px rgba(247, 208, 44, 0.3);
    }
    
    &::placeholder {
      color: rgba(255, 253, 208, 0.5);
    }
  }

  .magic-button {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    background: transparent;
    border: none;
    color: var(--primary-yellow);
    cursor: pointer;
    padding: 5px;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 0.9rem;

    &:hover {
      color: var(--primary-red);
      transform: translateY(-50%) scale(1.05);
    }
    
    .icon-text {
      font-family: 'Bebas Neue', sans-serif;
      letter-spacing: 0.5px;
    }
  }
`;

const AddButton = styled(motion.button)`
  background-color: var(--primary-yellow);
  color: var(--secondary-black);
  padding: 1rem;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.2rem;
  letter-spacing: 1px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 5px 5px 0px rgba(178, 34, 34, 0.7);
  align-self: flex-end;
  
  &:hover {
    background-color: var(--primary-red);
    color: var(--secondary-cream);
    box-shadow: 7px 7px 0px rgba(178, 34, 34, 0.9);
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(2px);
    box-shadow: 3px 3px 0px rgba(178, 34, 34, 0.7);
  }
  
  &:disabled {
    background-color: #666;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const TimeEstimate = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
  color: var(--primary-yellow);
  font-family: 'Oswald', sans-serif;
  
  svg {
    font-size: 1.2rem;
  }
`;

const SubtaskList = styled.ul`
  list-style-type: none;
  padding: 0.5rem;
  margin: 1rem 0;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  border: 1px solid rgba(255, 253, 208, 0.1);
`;

const SubtaskItem = styled.li`
  padding: 0.75rem 1rem;
  background-color: rgba(255, 253, 208, 0.07);
  margin-bottom: 0.75rem;
  border-left: 3px solid var(--primary-yellow);
  color: var(--secondary-cream);
  font-family: 'Roboto', sans-serif;
  display: flex;
  align-items: baseline;
  border-radius: 2px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  position: relative;
  
  span:first-child {
    color: var(--primary-yellow);
    font-weight: bold;
    margin-right: 0.75rem;
    font-family: 'Bebas Neue', sans-serif;
    font-size: 1.1rem;
    min-width: 1.5rem;
  }
  
  &:last-child {
    margin-bottom: 0;
  }
  
  &:hover {
    background-color: rgba(255, 253, 208, 0.12);
    transform: translateX(3px);
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.15);
  }
`;

const SubtaskTimeEstimate = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(178, 34, 34, 0.25);
  color: var(--primary-yellow);
  padding: 0.25rem 0.5rem;
  font-size: 0.8rem;
  border-radius: 2px;
  font-family: 'Bebas Neue', sans-serif;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
  gap: 4px;
  
  svg {
    font-size: 0.75rem;
  }
`;

const LoadingContainer = styled.div`
  text-align: center;
  padding: 1rem;
  color: var(--primary-yellow);
`;

const LoadingSpinner = styled(FontAwesomeIcon)`
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const ErrorMessage = styled.div`
  background-color: rgba(178, 34, 34, 0.2);
  border-left: 3px solid var(--primary-red);
  padding: 0.75rem;
  margin: 0.5rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--secondary-cream);
  
  svg {
    color: var(--primary-red);
  }
  
  button {
    margin-left: auto;
    background: transparent;
    border: none;
    color: var(--primary-yellow);
    cursor: pointer;
    
    &:hover {
      color: var(--secondary-cream);
    }
  }
`;

const HintText = styled.div`
  color: var(--primary-yellow);
  font-size: var(--text-small);
  margin-top: 0.5rem;
  opacity: 0.8;
  font-style: italic;
`;

const AIBadge = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: var(--primary-yellow);
  color: var(--secondary-black);
  font-size: 0.65rem;
  padding: 3px 6px;
  border-radius: 2px;
  font-weight: bold;
  font-family: 'Bebas Neue', sans-serif;
  letter-spacing: 0.5px;
  box-shadow: 2px 2px 0px rgba(0,0,0,0.2);
  transform: rotate(3deg);
  z-index: 5;
`;

const EnhancedHintText = styled(HintText)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
  
  svg {
    color: var(--primary-yellow);
    font-size: 0.9rem;
    animation: pulse 1.5s infinite alternate;
    
    @keyframes pulse {
      from {
        transform: scale(1);
        opacity: 0.8;
      }
      to {
        transform: scale(1.1);
        opacity: 1;
      }
    }
  }
`;

const SubtaskHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(255, 253, 208, 0.2);
  
  h4 {
    font-family: 'Bebas Neue', sans-serif;
    color: var(--primary-yellow);
    font-size: 1.1rem;
    letter-spacing: 1px;
    margin: 0;
    text-shadow: 1px 1px 0px rgba(0,0,0,0.5);
  }
  
  .regenerate {
    background: transparent;
    border: 1px solid rgba(255, 253, 208, 0.2);
    color: var(--primary-yellow);
    cursor: pointer;
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 4px 8px;
    border-radius: 2px;
    transition: all 0.2s ease;
    
    &:hover {
      color: var(--primary-red);
      background-color: rgba(255, 253, 208, 0.05);
      border-color: var(--primary-red);
    }
  }
`;

const TaskForm = ({ addTask }) => {
  const [taskInput, setTaskInput] = useState('');
  const [subtasks, setSubtasks] = useState([]);
  const [estimatedTime, setEstimatedTime] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [aiTriggered, setAiTriggered] = useState(false);

  // Effect to reset states when input changes
  useEffect(() => {
    if (taskInput.trim() === '') {
      setSubtasks([]);
      setEstimatedTime(null);
      setError(null);
      setAiTriggered(false);
    }
  }, [taskInput]);

  const handleInputChange = (e) => {
    setTaskInput(e.target.value);
  };

  const handleKeyDown = async (e) => {
    // Generate subtasks and time estimate when Tab is pressed
    if (e.key === 'Tab' && taskInput.trim() !== '') {
      e.preventDefault();
      await generateSubtasksAndTime();
    }
  };

  const generateSubtasksAndTime = async () => {
    if (taskInput.trim() === '') return;
    
    setIsLoading(true);
    setError(null);
    setAiTriggered(true);
    
    try {
      // Fetch subtasks and time estimate in parallel
      const [subtasksResult, timeResult] = await Promise.all([
        generateTaskBreakdown(taskInput),
        estimateTaskTime(taskInput)
      ]);
      
      console.log("Received subtasks:", subtasksResult);
      console.log("Received time estimate:", timeResult);
      
      if (!subtasksResult || subtasksResult.length === 0) {
        throw new Error("Couldn't generate subtasks from the API response");
      }
      
      // Ensure subtasks are in object format with timeEstimate property
      const formattedSubtasks = subtasksResult.map(subtask => {
        if (typeof subtask === 'string') {
          return { text: subtask, timeEstimate: estimateSubtaskTime(subtask) };
        }
        return subtask;
      });
      
      setSubtasks(formattedSubtasks);
      setEstimatedTime(timeResult);
    } catch (error) {
      console.error('Error generating task info:', error);
      setError(error.message || "Failed to generate task breakdown. Try a more specific description.");
    } finally {
      setIsLoading(false);
    }
  };

  const retryGeneration = async () => {
    await generateSubtasksAndTime();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (taskInput.trim() === '') return;
    
    // If AI breakdown hasn't been triggered yet, generate default subtasks
    let finalSubtasks = subtasks;
    if (!aiTriggered || subtasks.length === 0) {
      const taskLower = taskInput.toLowerCase();
      
      // Check if this is a homework or study-related task
      if (taskLower.includes('homework') || taskLower.includes('assignment') || 
          taskLower.includes('study') || taskLower.includes('learn') ||
          taskLower.includes('read') || taskLower.includes('write') ||
          taskLower.includes('project') || taskLower.includes('essay')) {
        finalSubtasks = [
          { text: "Set up a distraction-free workspace with all necessary materials", timeEstimate: 10 },
          { text: `Break ${taskInput} into small chunks and set a 25-minute timer for the first part`, timeEstimate: 25 },
          { text: "Take a 5-minute break, then continue with the next chunk", timeEstimate: 30 }, 
          { text: "Review your work and mark any areas that need more attention", timeEstimate: 15 },
          { text: "Reward yourself when completed", timeEstimate: 5 }
        ];
      } else {
        // Default subtasks for other types of tasks
        finalSubtasks = [
          { text: "Prepare your environment and gather all needed materials", timeEstimate: 10 },
          { text: `Break ${taskInput} into smaller steps and start with the easiest one`, timeEstimate: 15 },
          { text: "Set a timer for 25 minutes of focused work without distractions", timeEstimate: 25 }, 
          { text: "Take a short break, then continue with the next step", timeEstimate: 30 },
          { text: "Review your progress and celebrate completing the task", timeEstimate: 15 }
        ];
      }
    } else {
      // Ensure all subtasks are in object format
      finalSubtasks = subtasks.map(subtask => {
        if (typeof subtask === 'string') {
          return { text: subtask, timeEstimate: estimateSubtaskTime(subtask) };
        }
        return subtask;
      });
    }
    
    const newTask = {
      id: uuidv4(),
      text: taskInput,
      completed: false,
      timeCreated: new Date(),
      estimatedMinutes: estimatedTime || calculateTotalTime(finalSubtasks),
      subtasks: finalSubtasks,
      subtasksCompleted: new Array(finalSubtasks.length).fill(false)
    };
    
    addTask(newTask);
    
    // Reset form
    setTaskInput('');
    setSubtasks([]);
    setEstimatedTime(null);
    setError(null);
    setAiTriggered(false);
  };

  // Estimate time for a subtask based on its text
  const estimateSubtaskTime = (subtaskText) => {
    // Simple estimation based on text length
    const words = subtaskText.split(/\s+/).length;
    return Math.max(10, Math.min(30, words * 2));
  };

  // Calculate total time from subtask time estimates
  const calculateTotalTime = (subtasks) => {
    return subtasks.reduce((total, subtask) => total + (subtask.timeEstimate || 0), 0);
  };

  const buttonVariants = {
    hover: { 
      scale: 1.05,
      boxShadow: "7px 7px 0px rgba(178, 34, 34, 0.9)"
    },
    tap: { 
      scale: 0.95,
      boxShadow: "3px 3px 0px rgba(178, 34, 34, 0.7)"
    }
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <InputContainer>
          <input
            type="text"
            placeholder="Ką reikia padaryti? Paspauskite Tab arba AI mygtuką"
            value={taskInput}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          {taskInput.trim() !== '' && !isLoading && (
            <button 
              type="button" 
              className="magic-button"
              onClick={generateSubtasksAndTime}
              title="Generuoti DI užduoties išskaidymą"
            >
              <FontAwesomeIcon icon={faMagic} pulse={!aiTriggered} />
              <span className="icon-text">DI IŠSKAIDYMAS</span>
            </button>
          )}
        </InputContainer>
        
        {!aiTriggered && taskInput.trim() !== '' && !isLoading && (
          <EnhancedHintText>
            <FontAwesomeIcon icon={faMagic} />
            <span>Leiskite mūsų dirbtiniam intelektui išskaidyti užduotį į MAŽUS, konkrečius žingsnius, kurie padės jums NUSTOTI atidėlioti!</span>
          </EnhancedHintText>
        )}
        
        <AnimatePresence>
          {isLoading && (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <LoadingContainer>
                <LoadingSpinner icon={faSpinner} size="2x" />
                <p>Kuriamas atidėliojimą įveikiantis planas su konkrečiais žingsniais, kuriuos galite pradėti DABAR PAT...</p>
              </LoadingContainer>
            </motion.div>
          )}
          
          {error && (
            <motion.div
              key="error"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
            >
              <ErrorMessage>
                <FontAwesomeIcon icon={faExclamationTriangle} />
                <span>{error}</span>
                <button type="button" onClick={retryGeneration} title="Bandyti dar kartą">
                  <FontAwesomeIcon icon={faSync} />
                </button>
              </ErrorMessage>
            </motion.div>
          )}
          
          {!isLoading && subtasks.length > 0 && (
            <motion.div
              key="subtasks"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              style={{ position: 'relative' }}
            >
              <SubtaskHeader>
                <h4>ANTI-ATIDĖLIOJIMO ŽINGSNIAI</h4>
                <button type="button" className="regenerate" onClick={retryGeneration} title="Generuoti naują išskaidymą">
                  <FontAwesomeIcon icon={faSync} />
                  <span>Pergeneruoti</span>
                </button>
              </SubtaskHeader>
              <SubtaskList>
                {subtasks.map((subtask, index) => (
                  <motion.div
                    key={`subtask-${index}`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <SubtaskItem>
                      <span>{index + 1}.</span> {typeof subtask === 'string' ? subtask : subtask.text}
                      {subtask.timeEstimate && (
                        <SubtaskTimeEstimate>
                          <FontAwesomeIcon icon={faClock} />
                          {subtask.timeEstimate} min
                        </SubtaskTimeEstimate>
                      )}
                    </SubtaskItem>
                  </motion.div>
                ))}
              </SubtaskList>
              {!estimatedTime && subtasks.length > 0 && (
                <motion.div
                  key="total-time"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                >
                  <TimeEstimate>
                    <FontAwesomeIcon icon={faClock} />
                    <span>Bendras numatomas laikas: <strong>{calculateTotalTime(subtasks)} minučių</strong></span>
                  </TimeEstimate>
                </motion.div>
              )}
            </motion.div>
          )}
          
          {!isLoading && estimatedTime && (
            <motion.div
              key="estimated-time"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              <TimeEstimate>
                <FontAwesomeIcon icon={faClock} />
                <span>Numatomas laikas: <strong>{estimatedTime} minučių</strong></span>
              </TimeEstimate>
            </motion.div>
          )}
        </AnimatePresence>
        
        <AddButton
          type="submit"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          disabled={taskInput.trim() === ''}
        >
          <FontAwesomeIcon icon={faPlus} /> PRIDĖTI UŽDUOTĮ
        </AddButton>
      </Form>
    </FormContainer>
  );
};

export default TaskForm; 