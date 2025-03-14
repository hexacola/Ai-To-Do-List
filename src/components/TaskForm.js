import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faClock, faPlus, faSpinner, faMagic, faExclamationTriangle, 
  faSync, faRobot, faCheck, faArrowRight, faStopwatch, faLightbulb,
  faTimes, faPen, faListUl
} from '@fortawesome/free-solid-svg-icons';
import { generateTaskBreakdown, estimateTaskTime } from '../hooks/usePollinationsAPI';

const FormContainer = styled.div`
  margin-top: var(--spacing-xl);
  margin-bottom: var(--spacing-xl);
  padding: var(--spacing-xl);
  background-color: var(--card-background);
  border-radius: 0;
  border: 2px solid var(--primary-yellow);
  box-shadow: 5px 5px 0px rgba(0, 0, 0, 0.2);
  
  @media (max-width: 768px) {
    margin-top: var(--spacing-lg);
    margin-bottom: var(--spacing-lg);
    padding: var(--spacing-lg);
  }
  
  @media (max-width: 480px) {
    margin-top: var(--spacing-md);
    margin-bottom: var(--spacing-md);
    padding: var(--spacing-md);
    border-width: 1px;
  }
`;

const FormTitle = styled.h2`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 2.2rem;
  color: var(--primary-yellow);
  margin-bottom: var(--spacing-lg);
  text-align: center;
  text-shadow: 2px 2px 0px var(--primary-red);
  letter-spacing: 1px;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: var(--spacing-md);
  }
  
  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: var(--spacing-sm);
  }
`;

const InputGroup = styled.div`
  margin-bottom: var(--spacing-lg);
  
  label {
    display: block;
    font-family: 'Bebas Neue', sans-serif;
    font-size: 1.2rem;
    margin-bottom: var(--spacing-sm);
    color: var(--primary-yellow);
    letter-spacing: 1px;
  }
  
  @media (max-width: 768px) {
    margin-bottom: var(--spacing-md);
    
    label {
      font-size: 1.1rem;
    }
  }
  
  @media (max-width: 480px) {
    margin-bottom: var(--spacing-sm);
    
    label {
      font-size: 1rem;
    }
  }
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 2px solid var(--primary-yellow);
  border-radius: 0;
  background-color: var(--input-background);
  color: var(--text-color);
  font-family: 'Oswald', sans-serif;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 3px 3px 0px rgba(0, 0, 0, 0.1);
  
  &:focus {
    outline: none;
    border-color: var(--primary-red);
    box-shadow: 4px 4px 0px rgba(0, 0, 0, 0.2);
  }
  
  &::placeholder {
    color: var(--subtask-text-color);
    opacity: 0.7;
  }
  
  @media (max-width: 768px) {
    padding: 0.7rem;
    font-size: 0.95rem;
    border-width: 1px;
    box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 480px) {
    padding: 0.6rem;
    font-size: 0.9rem;
  }
`;

const TimeInputGroup = styled.div`
  display: flex;
  gap: var(--spacing-md);
  
  @media (max-width: 480px) {
    flex-direction: column;
    gap: var(--spacing-sm);
  }
`;

const TimeInput = styled.div`
  flex: 1;
  
  label {
    display: block;
    font-family: 'Bebas Neue', sans-serif;
    font-size: 1.2rem;
    margin-bottom: var(--spacing-sm);
    color: var(--primary-yellow);
    letter-spacing: 1px;
  }
  
  input {
    width: 100%;
    padding: 0.8rem;
    border: 2px solid var(--primary-yellow);
    border-radius: 0;
    background-color: var(--input-background);
    color: var(--text-color);
    font-family: 'Oswald', sans-serif;
    font-size: 1rem;
    transition: all 0.3s ease;
    box-shadow: 3px 3px 0px rgba(0, 0, 0, 0.1);
    
    &:focus {
      outline: none;
      border-color: var(--primary-red);
      box-shadow: 4px 4px 0px rgba(0, 0, 0, 0.2);
    }
    
    &::-webkit-inner-spin-button, 
    &::-webkit-outer-spin-button { 
      -webkit-appearance: none;
      margin: 0;
    }
  }
  
  @media (max-width: 768px) {
    label {
      font-size: 1.1rem;
    }
    
    input {
      padding: 0.7rem;
      font-size: 0.95rem;
      border-width: 1px;
      box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.1);
    }
  }
  
  @media (max-width: 480px) {
    label {
      font-size: 1rem;
    }
    
    input {
      padding: 0.6rem;
      font-size: 0.9rem;
    }
  }
`;

const SubmitButton = styled(motion.button)`
  width: 100%;
  padding: 1rem;
  background-color: var(--primary-yellow);
  color: var(--text-color);
  border: none;
  border-radius: 0;
  cursor: pointer;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.3rem;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  box-shadow: 5px 5px 0px rgba(0, 0, 0, 0.2);
  border-left: 5px solid var(--primary-red);
  margin-top: var(--spacing-lg);
  
  &:hover {
    background-color: var(--primary-red);
    color: white;
    transform: translateY(-3px);
    box-shadow: 7px 7px 0px rgba(0, 0, 0, 0.2);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.2);
  }
  
  @media (max-width: 768px) {
    padding: 0.8rem;
    font-size: 1.2rem;
    margin-top: var(--spacing-md);
    box-shadow: 4px 4px 0px rgba(0, 0, 0, 0.2);
    border-left-width: 4px;
  }
  
  @media (max-width: 480px) {
    padding: 0.7rem;
    font-size: 1.1rem;
    margin-top: var(--spacing-sm);
    box-shadow: 3px 3px 0px rgba(0, 0, 0, 0.2);
    border-left-width: 3px;
  }
`;

const HintText = styled.div`
  margin-top: var(--spacing-sm);
  font-size: 0.85rem;
  color: var(--subtask-text-color);
  font-style: italic;
  
  strong {
    color: var(--primary-yellow);
    font-weight: normal;
  }
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InputContainer = styled.div`
  position: relative;
  
  input {
    width: 100%;
    padding: 1.2rem 9rem 1.2rem 1.2rem;
    font-size: 1.2rem;
    font-family: 'Oswald', sans-serif;
    background-color: var(--card-background);
    border: 3px solid var(--primary-yellow);
    color: var(--text-color);
    border-radius: 0;
    
    &:focus {
      outline: none;
      border-color: var(--primary-red);
      box-shadow: 5px 5px 0px rgba(178, 34, 34, 0.3);
    }
    
    &::placeholder {
      color: rgba(255, 253, 208, 0.5);
      font-family: 'Oswald', sans-serif;
      letter-spacing: 0.5px;
    }
  }

  .magic-button {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    background: var(--primary-red);
    border: 2px solid var(--primary-yellow);
    color: var(--primary-yellow);
    cursor: pointer;
    padding: 8px 10px;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.9rem;
    border-radius: 0;
    box-shadow: 3px 3px 0px rgba(0, 0, 0, 0.3);

    &:hover {
      background-color: var(--primary-yellow);
      color: var(--primary-red);
      border-color: var(--primary-red);
      transform: translateY(-50%) scale(1.05);
      box-shadow: 4px 4px 0px rgba(0, 0, 0, 0.3);
    }
    
    &:active {
      transform: translateY(-50%) scale(1);
      box-shadow: 1px 1px 0px rgba(0, 0, 0, 0.3);
    }
    
    .icon-text {
      font-family: 'Bebas Neue', sans-serif;
      letter-spacing: 1px;
    }
  }
`;

const AddButton = styled(motion.button)`
  background-color: var(--primary-red);
  color: var(--primary-yellow);
  padding: 1rem 2rem;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.3rem;
  letter-spacing: 2px;
  border: 2px solid var(--primary-yellow);
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 5px 5px 0px rgba(0, 0, 0, 0.3);
  align-self: flex-end;
  border-radius: 0;
  
  &:hover {
    background-color: var(--primary-yellow);
    color: var(--primary-red);
    border-color: var(--primary-red);
    box-shadow: 7px 7px 0px rgba(0, 0, 0, 0.3);
    transform: translateY(-3px);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 3px 3px 0px rgba(0, 0, 0, 0.3);
  }
  
  &:disabled {
    background-color: #666;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
    opacity: 0.5;
  }
`;

const TimeEstimate = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
  color: var(--primary-yellow);
  font-family: 'Bebas Neue', sans-serif;
  background-color: rgba(178, 34, 34, 0.2);
  padding: 0.5rem 1rem;
  border-left: 4px solid var(--primary-yellow);
  letter-spacing: 1px;
  
  svg {
    font-size: 1.2rem;
  }
`;

const SubtaskList = styled.ul`
  list-style-type: none;
  padding: 1rem;
  margin: 1rem 0;
  background-color: rgba(0, 0, 0, 0.1);
  border: 2px solid var(--primary-yellow);
  border-radius: 0;
  box-shadow: 5px 5px 0px rgba(0, 0, 0, 0.2);
`;

const SubtaskItem = styled.li`
  padding: 1rem;
  background-color: var(--card-background);
  margin-bottom: 1rem;
  border-left: 4px solid var(--primary-red);
  color: var(--text-color);
  font-family: 'Oswald', sans-serif;
  display: flex;
  align-items: baseline;
  border-radius: 0;
  box-shadow: 3px 3px 0px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease;
  position: relative;
  
  span:first-child {
    color: var(--primary-yellow);
    font-weight: bold;
    margin-right: 0.75rem;
    font-family: 'Bebas Neue', sans-serif;
    font-size: 1.3rem;
    min-width: 1.5rem;
    text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.5);
  }
  
  &:last-child {
    margin-bottom: 0;
  }
  
  &:hover {
    transform: translateX(5px);
    box-shadow: 5px 5px 0px rgba(0, 0, 0, 0.25);
  }
`;

const SubtaskTimeEstimate = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background-color: var(--primary-yellow);
  color: black;
  padding: 0.25rem 0.75rem;
  font-size: 0.8rem;
  border-radius: 0;
  font-family: 'Bebas Neue', sans-serif;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  gap: 6px;
  
  svg {
    font-size: 0.75rem;
  }
`;

const LoadingContainer = styled(motion.div)`
  text-align: center;
  padding: 2rem;
  color: var(--primary-yellow);
  background-color: rgba(0, 0, 0, 0.1);
  border: 2px solid var(--primary-yellow);
  font-family: 'Bebas Neue', sans-serif;
  letter-spacing: 1px;
  margin: 1.5rem 0;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(to right, var(--primary-red), var(--primary-yellow), var(--primary-red));
    animation: loadingBar 2s linear infinite;
  }
  
  @keyframes loadingBar {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
  
  p {
    margin-top: 1rem;
    font-size: 1.1rem;
  }
`;

const LoadingSteps = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
  
  .step {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 10px;
    opacity: 0.5;
    transition: opacity 0.3s ease;
    
    &.active {
      opacity: 1;
    }
    
    .step-icon {
      background: var(--primary-red);
      color: var(--primary-yellow);
      width: 40px;
      height: 40px;
      border-radius: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 8px;
      border: 2px solid var(--primary-yellow);
      
      svg {
        font-size: 1.2rem;
      }
    }
    
    .step-text {
      font-size: 0.9rem;
      white-space: nowrap;
    }
  }
  
  .connector {
    width: 30px;
    height: 2px;
    background-color: var(--primary-yellow);
    margin-top: 20px;
  }
`;

const SuccessAnimation = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  pointer-events: none;
  
  .success-content {
    background-color: var(--primary-red);
    color: var(--primary-yellow);
    padding: 2rem;
    border: 3px solid var(--primary-yellow);
    box-shadow: 10px 10px 0 rgba(0, 0, 0, 0.2);
    text-align: center;
    
    .icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }
    
    h3 {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 2rem;
      margin-bottom: 0.5rem;
      letter-spacing: 2px;
    }
    
    p {
      font-family: 'Oswald', sans-serif;
    }
  }
`;

// Nauji styled komponentai rankiniam subtaskų pridėjimui
const ManualAddSection = styled(motion.div)`
  margin-top: var(--spacing-md);
  padding: var(--spacing-md);
  background-color: rgba(0, 0, 0, 0.05);
  border: 2px solid var(--primary-yellow);
  border-left: 6px solid var(--primary-red);
`;

const ManualAddForm = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: var(--spacing-md);
  
  input {
    flex: 1;
    padding: 0.8rem;
    border: 2px solid var(--primary-yellow);
    border-radius: 0;
    background-color: var(--input-background);
    color: var(--text-color);
    font-family: 'Oswald', sans-serif;
    font-size: 1rem;
  }
  
  button {
    background-color: var(--primary-yellow);
    color: var(--text-color);
    border: none;
    padding: 0.5rem 1rem;
    font-family: 'Bebas Neue', sans-serif;
    font-size: 1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 6px;
    
    &:hover {
      background-color: var(--primary-red);
      color: white;
    }
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    
    button {
      align-self: flex-end;
    }
  }
`;

const ManualTimeInput = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: 10px;
  
  label {
    color: var(--primary-yellow);
    font-family: 'Bebas Neue', sans-serif;
  }
  
  input {
    width: 60px;
    padding: 0.4rem;
    text-align: center;
  }
  
  @media (max-width: 480px) {
    margin-left: 0;
    margin-top: 5px;
  }
`;

const AIToggle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: var(--spacing-md);
  background-color: rgba(0, 0, 0, 0.1);
  padding: var(--spacing-md);
  border-left: 4px solid var(--primary-yellow);
  
  label {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    font-family: 'Bebas Neue', sans-serif;
    color: var(--primary-yellow);
    font-size: 1.1rem;
    letter-spacing: 1px;
    user-select: none;
  }
  
  .ai-icon {
    color: var(--primary-red);
    font-size: 1.3rem;
  }
  
  input[type="checkbox"] {
    width: 18px;
    height: 18px;
    cursor: pointer;
  }
  
  .ai-description {
    margin-left: 28px;
    margin-top: 5px;
    font-size: 0.85rem;
    color: var(--subtask-text-color);
    font-style: italic;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: var(--spacing-md);
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const ActionButton = styled(motion.button)`
  padding: 0.75rem 1.5rem;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.1rem;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  border-radius: 0;
  box-shadow: 3px 3px 0px rgba(0, 0, 0, 0.2);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 5px 5px 0px rgba(0, 0, 0, 0.25);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 1px 1px 0px rgba(0, 0, 0, 0.2);
  }
  
  &.primary {
    background-color: var(--primary-yellow);
    color: var(--text-color);
    border: none;
    border-left: 4px solid var(--primary-red);
  }
  
  &.secondary {
    background-color: transparent;
    color: var(--primary-yellow);
    border: 2px solid var(--primary-yellow);
  }
`;

const RemoveButton = styled.button`
  background: var(--primary-red);
  color: white;
  border: none;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: 10px;
  
  &:hover {
    background: darkred;
  }
`;

const TaskForm = ({ addTask, onTaskAdded }) => {
  const [taskInput, setTaskInput] = useState('');
  const [subtasks, setSubtasks] = useState([]);
  const [estimatedTime, setEstimatedTime] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [aiTriggered, setAiTriggered] = useState(false);
  const [useAI, setUseAI] = useState(true);
  const [loadingStep, setLoadingStep] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('Kuriami užduoties žingsniai...');
  
  // Nauji state kintamieji rankiniam subtaskų pridėjimui
  const [manualSubtaskInput, setManualSubtaskInput] = useState('');
  const [manualTimeInput, setManualTimeInput] = useState(10);
  const [showManualAdd, setShowManualAdd] = useState(false);

  // Effect to reset states when input changes
  useEffect(() => {
    if (taskInput.trim() === '') {
      setSubtasks([]);
      setEstimatedTime(null);
      setError(null);
      setAiTriggered(false);
      setShowManualAdd(false);
    }
  }, [taskInput]);

  // Effect to cycle through loading steps
  useEffect(() => {
    if (!isLoading) return;
    
    const messages = [
      'Analizuojama užduotis...',
      'Kuriami optimalūs žingsniai...',
      'Skaičiuojamas laikas užduočiai...',
      'Baigiama formuoti...'
    ];
    
    let step = 0;
    const interval = setInterval(() => {
      step = (step + 1) % messages.length;
      setLoadingStep(step);
      setLoadingMessage(messages[step]);
    }, 2000);
    
    return () => clearInterval(interval);
  }, [isLoading]);

  const handleInputChange = (e) => {
    setTaskInput(e.target.value);
  };

  const handleKeyDown = async (e) => {
    // Generate subtasks and time estimate when Tab is pressed
    if (e.key === 'Tab' && taskInput.trim() !== '' && useAI) {
      e.preventDefault();
      await generateSubtasksAndTime();
    }
  };

  const generateSubtasksAndTime = async () => {
    if (taskInput.trim() === '') return;
    
    setIsLoading(true);
    setError(null);
    setAiTriggered(true);
    setLoadingStep(0);
    
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
  
  // Naujas metodas rankiniam subtasko pridėjimui
  const handleAddManualSubtask = () => {
    if (manualSubtaskInput.trim() === '') return;
    
    const newSubtask = {
      text: manualSubtaskInput.trim(),
      timeEstimate: parseInt(manualTimeInput) || 10
    };
    
    setSubtasks([...subtasks, newSubtask]);
    setManualSubtaskInput('');
    
    // Atnaujinti bendrą estimatedTime, jei jis jau nustatytas
    if (estimatedTime !== null) {
      setEstimatedTime(estimatedTime + newSubtask.timeEstimate);
    } else {
      setEstimatedTime(newSubtask.timeEstimate);
    }
  };
  
  // Metodas subtasko pašalinimui
  const handleRemoveSubtask = (index) => {
    const removedSubtask = subtasks[index];
    const newSubtasks = subtasks.filter((_, i) => i !== index);
    
    setSubtasks(newSubtasks);
    
    // Atnaujinti bendrą estimatedTime, jei jis nustatytas
    if (estimatedTime !== null && removedSubtask.timeEstimate) {
      setEstimatedTime(Math.max(0, estimatedTime - removedSubtask.timeEstimate));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!taskInput.trim()) return;
    
    let finalSubtasks = subtasks;
    let finalTime = estimatedTime;
    
    // Jei naudojame AI, bet dar negeneruoti subtaskai, generuojame juos
    if (useAI && subtasks.length === 0 && !isLoading) {
      if (!aiTriggered) {
        await generateSubtasksAndTime();
        return; // Grįžtame iš funkcijos, nes generavimo procesas dar vyksta
      }
    }
    
    // Jei vis dar nėra subtaskų (nepriklausomai nuo AI naudojimo), sukuriame default subtaską
    if (subtasks.length === 0) {
      finalSubtasks = [{ text: `Atlikti: ${taskInput}`, timeEstimate: 30 }];
      finalTime = 30;
    }
    
    // Sukuriame naują užduotį
    const newTask = {
      id: uuidv4(),
      text: taskInput,
      subtasks: finalSubtasks,
      subtasksCompleted: Array(finalSubtasks.length).fill(false),
      estimatedMinutes: finalTime > 0 ? finalTime : 30,
      completed: false,
      createdAt: new Date().toISOString()
    };
    
    // Pridedame naują užduotį
    addTask(newTask);
    
    // Rodome sėkmės animaciją
    setShowSuccess(true);
    
    // Po animacijos išvalome formą
    setTimeout(() => {
      setShowSuccess(false);
      setTaskInput('');
      setSubtasks([]);
      setEstimatedTime(0);
      setUseAI(true);
      setShowManualAdd(false);
      
      // Jei yra onTaskAdded callback funkcija, ją iškviečiame
      if (onTaskAdded) {
        onTaskAdded();
      }
    }, 1500);
  };

  // Estimate time for a subtask based on its text
  const estimateSubtaskTime = (subtaskText) => {
    // Simple estimation based on text length
    const words = subtaskText.split(/\s+/).length;
    return Math.max(10, Math.min(30, words * 2));
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };
  
  const successVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 15 }
    },
    exit: { 
      scale: 1.2, 
      opacity: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <FormContainer as={motion.div} 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <FormTitle as={motion.h2} variants={itemVariants}>
        Pridėti naują užduotį
      </FormTitle>
      
      <motion.div variants={itemVariants}>
        <InputGroup>
          <label htmlFor="taskInput">Užduoties aprašymas:</label>
          <StyledInput
            id="taskInput"
            type="text"
            placeholder="Įveskite užduoties pavadinimą ar detalesnį aprašymą..."
            value={taskInput}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <HintText>
            Įveskite užduoties pavadinimą. Galite pridėti užduotį su arba be žingsnių.
          </HintText>
        </InputGroup>
      </motion.div>
      
      {/* AI Toggle */}
      <motion.div variants={itemVariants}>
        <AIToggle>
          <label htmlFor="useAI">
            <input
              id="useAI"
              type="checkbox"
              checked={useAI}
              onChange={(e) => setUseAI(e.target.checked)}
            />
            <FontAwesomeIcon icon={faRobot} className="ai-icon" />
            Naudoti DI žingsnių ir laiko generavimui
          </label>
          <div className="ai-description">
            DI automatiškai sukurs žingsnius jūsų užduočiai ir apskaičiuos laiką, reikalingą jai atlikti
          </div>
        </AIToggle>
      </motion.div>
      
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingContainer
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FontAwesomeIcon icon={faSpinner} spin size="2x" />
            <p>{loadingMessage}</p>
            
            <LoadingSteps>
              <div className={`step ${loadingStep >= 0 ? 'active' : ''}`}>
                <div className="step-icon">
                  <FontAwesomeIcon icon={loadingStep > 0 ? faCheck : faMagic} />
                </div>
                <div className="step-text">Analizė</div>
              </div>
              
              <div className="connector"></div>
              
              <div className={`step ${loadingStep >= 1 ? 'active' : ''}`}>
                <div className="step-icon">
                  <FontAwesomeIcon icon={loadingStep > 1 ? faCheck : faLightbulb} />
                </div>
                <div className="step-text">Žingsniai</div>
              </div>
              
              <div className="connector"></div>
              
              <div className={`step ${loadingStep >= 2 ? 'active' : ''}`}>
                <div className="step-icon">
                  <FontAwesomeIcon icon={loadingStep > 2 ? faCheck : faStopwatch} />
                </div>
                <div className="step-text">Laikas</div>
              </div>
              
              <div className="connector"></div>
              
              <div className={`step ${loadingStep >= 3 ? 'active' : ''}`}>
                <div className="step-icon">
                  <FontAwesomeIcon icon={faArrowRight} />
                </div>
                <div className="step-text">Užduotis</div>
              </div>
            </LoadingSteps>
          </LoadingContainer>
        )}
        
        {error && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              backgroundColor: 'rgba(255, 0, 0, 0.1)',
              padding: '15px',
              marginTop: '20px',
              marginBottom: '20px',
              borderLeft: '5px solid #ff0000',
              display: 'flex',
              alignItems: 'center',
              gap: '15px'
            }}
          >
            <FontAwesomeIcon icon={faExclamationTriangle} style={{ color: '#ff0000', fontSize: '1.5rem' }} />
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>Klaida generuojant žingsnius</div>
              <div>{error}</div>
            </div>
            <button
              onClick={retryGeneration}
              style={{
                backgroundColor: 'var(--primary-yellow)',
                color: 'var(--text-color)',
                border: 'none',
                padding: '8px 15px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                cursor: 'pointer'
              }}
            >
              <FontAwesomeIcon icon={faSync} />
              <span>Bandyti dar kartą</span>
            </button>
          </motion.div>
        )}
        
        {!isLoading && !error && subtasks.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 style={{ 
              color: 'var(--primary-yellow)', 
              marginBottom: '15px', 
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: '1.5rem',
              borderBottom: '2px solid var(--primary-red)',
              paddingBottom: '10px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <FontAwesomeIcon icon={faListUl} />
              Užduoties žingsniai:
            </h3>
            
            <div style={{ 
              backgroundColor: 'rgba(0, 0, 0, 0.05)', 
              padding: '15px',
              marginBottom: '20px',
              border: '1px solid var(--primary-yellow)'
            }}>
              <AnimatePresence>
                {subtasks.map((subtask, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ delay: index * 0.1 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginBottom: '10px',
                      padding: '10px',
                      backgroundColor: 'rgba(217, 164, 4, 0.1)',
                      borderLeft: '3px solid var(--primary-yellow)',
                      position: 'relative'
                    }}
                  >
                    <div style={{ 
                      marginRight: '15px', 
                      color: 'var(--primary-yellow)',
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: '1.2rem',
                      minWidth: '25px',
                      textAlign: 'center'
                    }}>
                      {index + 1}.
                    </div>
                    <div style={{ flex: 1 }}>
                      {typeof subtask === 'string' ? subtask : subtask.text}
                    </div>
                    <div style={{ 
                      backgroundColor: 'var(--primary-yellow)',
                      color: 'var(--text-color)',
                      padding: '5px 10px',
                      fontSize: '0.9rem',
                      fontFamily: "'Bebas Neue', sans-serif",
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px'
                    }}>
                      <FontAwesomeIcon icon={faClock} />
                      {typeof subtask === 'string' 
                        ? estimateSubtaskTime(subtask)
                        : subtask.timeEstimate} min
                    </div>
                    <RemoveButton onClick={() => handleRemoveSubtask(index)} title="Pašalinti žingsnį">
                      <FontAwesomeIcon icon={faTimes} />
                    </RemoveButton>
                  </motion.div>
                ))}
              </AnimatePresence>
              
              {/* Bendras laikas */}
              {estimatedTime > 0 && (
                <div style={{ 
                  marginTop: '20px',
                  padding: '10px',
                  backgroundColor: 'rgba(0, 0, 0, 0.1)',
                  borderLeft: '3px solid var(--primary-red)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  color: 'var(--primary-yellow)',
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: '1.1rem'
                }}>
                  <FontAwesomeIcon icon={faClock} />
                  Bendras užduoties laikas: {estimatedTime} min
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Rankinis subtaskų pridėjimas */}
      {!isLoading && taskInput && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {!showManualAdd ? (
            <ActionButton 
              className="secondary"
              onClick={() => setShowManualAdd(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FontAwesomeIcon icon={faPlus} />
              Pridėti savo žingsnį
            </ActionButton>
          ) : (
            <ManualAddSection
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <h4 style={{ 
                color: 'var(--primary-yellow)', 
                marginBottom: '10px',
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: '1.2rem',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <FontAwesomeIcon icon={faPen} />
                Pridėti savo žingsnį
              </h4>
              
              <ManualAddForm>
                <input
                  type="text"
                  placeholder="Įveskite žingsnio aprašymą..."
                  value={manualSubtaskInput}
                  onChange={(e) => setManualSubtaskInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleAddManualSubtask();
                  }}
                />
                
                <ManualTimeInput>
                  <label htmlFor="timeInput">Laikas (min):</label>
                  <input
                    id="timeInput"
                    type="number"
                    min="1"
                    max="120"
                    value={manualTimeInput}
                    onChange={(e) => setManualTimeInput(parseInt(e.target.value) || 10)}
                  />
                </ManualTimeInput>
                
                <button onClick={handleAddManualSubtask}>
                  <FontAwesomeIcon icon={faPlus} />
                  <span>Pridėti</span>
                </button>
              </ManualAddForm>
            </ManualAddSection>
          )}
        </motion.div>
      )}
      
      {/* Submit Button */}
      <AnimatePresence mode="wait">
        {showSuccess ? (
          <motion.div
            variants={successVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="success-animation"
          >
            <h3>Užduotis sėkmingai pridėta!</h3>
            <p>Dabar galite ją matyti savo užduočių sąraše.</p>
          </motion.div>
        ) : (
          <SubmitButton
            onClick={handleSubmit}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isLoading || !taskInput.trim()}
          >
            {useAI && subtasks.length === 0 && !error ? (
              <>
                <FontAwesomeIcon icon={faMagic} style={{ marginRight: '10px' }} />
                Generuoti užduotį su žingsniais
              </>
            ) : (
              <>
                <FontAwesomeIcon icon={faPlus} style={{ marginRight: '10px' }} />
                {subtasks.length > 0 ? 'Pridėti užduotį su žingsniais' : 'Pridėti paprastą užduotį'}
              </>
            )}
          </SubmitButton>
        )}
      </AnimatePresence>
    </FormContainer>
  );
};

export default TaskForm; 