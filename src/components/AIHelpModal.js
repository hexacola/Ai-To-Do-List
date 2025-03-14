import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTimes, faLightbulb, faSpinner, 
  faExternalLinkAlt, faClock, faRobot, 
  faExclamationTriangle, faQuestionCircle,
  faLink, faSearch, faInfoCircle,
  faEdit, faSave, faTimesCircle,
  faCheckCircle
} from '@fortawesome/free-solid-svg-icons';
import { getSubtaskSuggestions, getTaskCompletionTips } from '../utils/aiHelper';

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
  max-width: 600px;
  width: 90%;
  border-radius: 0;
  box-shadow: 10px 10px 0px rgba(0, 0, 0, 0.3);
  border: 3px solid var(--primary-blue);
  border-left: 10px solid var(--primary-blue);
  overflow: auto;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
`;

const ModalHeader = styled.div`
  background-color: var(--primary-blue);
  padding: var(--spacing-md);
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  h2 {
    color: white;
    font-family: 'Bebas Neue', sans-serif;
    margin: 0;
    font-size: 2rem;
    letter-spacing: 1.5px;
    text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    gap: 15px;
    
    svg {
      color: var(--primary-yellow);
      font-size: 1.6rem;
      filter: drop-shadow(1px 1px 0 rgba(0, 0, 0, 0.3));
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
  background-color: var(--primary-red);
  border: 2px solid white;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 8px 16px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Bebas Neue', sans-serif;
  letter-spacing: 1px;
  box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.2);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.25);
    background-color: #ff3b30;
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.15);
  }
  
  svg {
    font-size: 1.1rem;
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

const SubtaskInfo = styled.div`
  background-color: rgba(0, 0, 0, 0.05);
  padding: var(--spacing-md);
  margin-bottom: var(--spacing-md);
  border-left: 5px solid var(--primary-yellow);
  box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.1);
  position: relative;
  
  &::before {
    content: 'Dabartinis žingsnis';
    position: absolute;
    top: -10px;
    left: 15px;
    background-color: var(--primary-yellow);
    color: var(--text-color);
    padding: 2px 10px;
    font-size: 1rem;
    letter-spacing: 1px;
    font-family: 'Bebas Neue', sans-serif;
    box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
  }
  
  p {
    margin: 0;
    font-family: 'Oswald', sans-serif;
    color: var(--text-color);
    font-size: 1.2rem;
    line-height: 1.5;
    padding: 15px;
    background-color: rgba(255, 255, 255, 0.05);
    border-left: 3px solid var(--primary-blue);
  }
`;

const SuggestionSection = styled.div`
  margin-top: var(--spacing-lg);
`;

const SuggestionTitle = styled.h3`
  font-family: 'Bebas Neue', sans-serif;
  color: var(--primary-blue);
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.5rem;
  letter-spacing: 1.2px;
  margin-bottom: 15px;
  
  svg {
    color: var(--primary-yellow);
    font-size: 1.3rem;
    filter: drop-shadow(1px 1px 0 rgba(0, 0, 0, 0.1));
  }
`;

const SuggestionContent = styled.div`
  background-color: rgba(0, 0, 0, 0.05);
  padding: var(--spacing-md);
  border-left: 5px solid var(--primary-yellow);
  margin-bottom: var(--spacing-md);
  font-family: 'Oswald', sans-serif;
  box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.1);
  
  p {
    margin: 0 0 var(--spacing-sm) 0;
    line-height: 1.6;
    font-size: 1.05rem;
  }
  
  p:last-child {
    margin-bottom: 0;
  }
`;

const ResourceList = styled.div`
  margin-top: var(--spacing-md);
`;

const ResourceItem = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: var(--spacing-md);
  background-color: rgba(0, 0, 0, 0.05);
  margin-bottom: var(--spacing-sm);
  color: var(--primary-blue);
  text-decoration: none;
  font-family: 'Oswald', sans-serif;
  transition: all 0.3s ease;
  border-left: 3px solid var(--primary-yellow);
  box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
  font-size: 1.05rem;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    transform: translateX(3px);
    border-left: 5px solid var(--primary-yellow);
  }
  
  svg {
    color: var(--primary-yellow);
    font-size: 1.1rem;
    flex-shrink: 0;
  }
  
  .resource-title {
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  .resource-domain {
    color: #555;
    font-size: 0.9rem;
    background-color: rgba(0, 0, 0, 0.05);
    padding: 2px 6px;
    border-radius: 3px;
  }
`;

const TipsList = styled.div`
  margin-top: var(--spacing-lg);
`;

const TipItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: var(--spacing-md);
  background-color: rgba(0, 0, 0, 0.05);
  margin-bottom: var(--spacing-sm);
  font-family: 'Oswald', sans-serif;
  border-left: 3px solid var(--primary-yellow);
  box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    transform: translateX(3px);
  }
  
  svg {
    color: var(--primary-yellow);
    margin-top: 3px;
    font-size: 1.1rem;
    filter: drop-shadow(1px 1px 0 rgba(0, 0, 0, 0.1));
    flex-shrink: 0;
  }
  
  p {
    margin: 0;
    font-size: 1.05rem;
    line-height: 1.5;
  }
`;

const LoadingSpinner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-lg);
  
  svg {
    color: var(--primary-blue);
    font-size: 3rem;
    animation: spin 1s linear infinite;
    filter: drop-shadow(2px 2px 0 rgba(0, 0, 0, 0.1));
  }
  
  p {
    margin-top: var(--spacing-md);
    font-family: 'Bebas Neue', sans-serif;
    color: var(--primary-blue);
    font-size: 1.4rem;
    letter-spacing: 1px;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const ErrorMessage = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: var(--spacing-md);
  background-color: rgba(255, 0, 0, 0.1);
  border-left: 5px solid #ff3b30;
  margin-bottom: var(--spacing-md);
  font-family: 'Oswald', sans-serif;
  box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.1);
  
  svg {
    color: #ff3b30;
    font-size: 1.3rem;
    filter: drop-shadow(1px 1px 0 rgba(0, 0, 0, 0.1));
    flex-shrink: 0;
  }
  
  p {
    margin: 0;
    font-size: 1.05rem;
    line-height: 1.5;
  }
`;

const AskButton = styled.button`
  background-color: var(--primary-blue);
  color: white;
  border: none;
  padding: var(--spacing-md) var(--spacing-lg);
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.2rem;
  letter-spacing: 1.5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-top: var(--spacing-md);
  box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.2);
  border-radius: 0;
  transition: all 0.3s ease;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.2);
  
  &:hover {
    background-color: var(--primary-blue-dark);
    transform: translateY(-3px);
    box-shadow: 5px 5px 0 rgba(0, 0, 0, 0.25);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.2);
  }
  
  &:disabled {
    background-color: #999;
    cursor: not-allowed;
    opacity: 0.7;
    transform: none;
    box-shadow: none;
  }
  
  svg {
    font-size: 1.2rem;
    filter: drop-shadow(1px 1px 0 rgba(0, 0, 0, 0.2));
  }
`;

const QuestionInput = styled.textarea`
  width: 100%;
  padding: var(--spacing-md);
  border: 2px solid var(--primary-blue);
  border-radius: 0;
  font-family: 'Oswald', sans-serif;
  margin-top: var(--spacing-sm);
  resize: vertical;
  min-height: 120px;
  font-size: 1.05rem;
  line-height: 1.5;
  box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--primary-yellow);
    box-shadow: 0 0 0 2px rgba(255, 193, 7, 0.2);
  }
  
  &::placeholder {
    color: rgba(0, 0, 0, 0.4);
  }
`;

const QuestionInfoBadge = styled.div`
  background-color: rgba(0, 100, 255, 0.1);
  padding: 10px 15px;
  border-left: 3px solid var(--primary-blue);
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
  font-family: 'Oswald', sans-serif;
  font-size: 0.95rem;
  color: #555;
  
  svg {
    color: var(--primary-blue);
  }
`;

const EditableSubtask = styled.div`
  position: relative;
  margin-bottom: var(--spacing-md);
  
  textarea {
    width: 100%;
    padding: var(--spacing-md);
    font-family: 'Oswald', sans-serif;
    font-size: 1.1rem;
    line-height: 1.4;
    border: 2px solid var(--primary-blue);
    background-color: rgba(255, 255, 255, 0.05);
    color: var(--text-color);
    resize: vertical;
    min-height: 100px;
    
    &:focus {
      outline: none;
      border-color: var(--primary-yellow);
    }
  }
  
  .edit-controls {
    display: flex;
    gap: 10px;
    margin-top: 10px;
  }
`;

const EditButton = styled.button`
  background-color: var(--primary-blue);
  color: white;
  border: none;
  padding: 8px 16px;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1rem;
  letter-spacing: 1px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.25);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.15);
  }
  
  &.save {
    background-color: var(--accent-green);
  }
  
  &.cancel {
    background-color: var(--primary-red);
  }
`;

const ResourceError = styled.div`
  background-color: rgba(255, 59, 48, 0.1);
  padding: var(--spacing-sm);
  margin-top: 5px;
  font-size: 0.9rem;
  color: #ff3b30;
  display: flex;
  align-items: center;
  gap: 8px;
  
  svg {
    color: #ff3b30;
  }
`;

// Funkcija URL validacijai
const isValidUrl = (string) => {
  try {
    new URL(string);
    return true;
  } catch (_) {
    return false;
  }
};

// Funkcija domeno ištraukimui iš URL
const extractDomain = (url) => {
  try {
    const parsedUrl = new URL(url);
    return parsedUrl.hostname;
  } catch (_) {
    return url;
  }
};

const AIHelpModal = ({ task, subtaskIndex, isOpen, onClose }) => {
  const [loading, setLoading] = useState(true);
  const [suggestion, setSuggestion] = useState('');
  const [resources, setResources] = useState([]);
  const [tips, setTips] = useState([]);
  const [error, setError] = useState('');
  const [customQuestion, setCustomQuestion] = useState('');
  const [askingCustom, setAskingCustom] = useState(false);
  const [questionFocus, setQuestionFocus] = useState(false);
  const [resourceErrors, setResourceErrors] = useState({});
  
  useEffect(() => {
    if (isOpen && task && task.subtasks && task.subtasks[subtaskIndex]) {
      loadSuggestions();
      setError('');
      setResourceErrors({});
    }
  }, [isOpen, task, subtaskIndex]);
  
  const loadSuggestions = async () => {
    setLoading(true);
    setError('');
    
    try {
      // Gauname pasiūlymus subtaskui
      const suggestionData = await getSubtaskSuggestions(task, subtaskIndex);
      setSuggestion(suggestionData.suggestion);
      
      // Validuojame ir tvarkome URL sąrašą
      const validatedResources = (suggestionData.resources || [])
        .filter(url => typeof url === 'string')
        .map(url => {
          // Jei URL neturi protokolo, pridedame https://
          if (!url.startsWith('http://') && !url.startsWith('https://')) {
            return `https://${url}`;
          }
          return url;
        })
        .filter(url => isValidUrl(url)); // Tikriname, ar URL teisingas
        
      setResources(validatedResources);
      
      // Gauname bendrus patarimus užduočiai
      const tipsData = await getTaskCompletionTips(task);
      setTips(Array.isArray(tipsData) ? tipsData : []);
      
      setLoading(false);
    } catch (error) {
      console.error('Klaida gaunant AI pagalbą:', error);
      setError('Nepavyko gauti AI pagalbos. Bandykite vėliau.');
      setLoading(false);
    }
  };
  
  const handleResourceClick = async (url, index) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        setResourceErrors(prev => ({
          ...prev,
          [index]: `Šis šaltinis nepasiekiamas (${response.status}). Bandykite vėliau arba ieškokite alternatyvių šaltinių.`
        }));
      }
    } catch (error) {
      setResourceErrors(prev => ({
        ...prev,
        [index]: 'Nepavyko pasiekti šaltinio. Patikrinkite savo interneto ryšį arba bandykite vėliau.'
      }));
    }
  };
  
  const handleAskCustomQuestion = async () => {
    if (!customQuestion.trim()) return;
    
    setAskingCustom(true);
    setError('');
    
    try {
      const subtaskText = typeof task.subtasks[subtaskIndex] === 'string' 
        ? task.subtasks[subtaskIndex] 
        : task.subtasks[subtaskIndex].text;
        
      const formattedQuestion = `Task: "${task.text}". Current subtask: "${subtaskText}". Question: ${customQuestion}`;
      
      // First try with the OpenAI-compatible endpoint which is more reliable
      let response;
      let data;
      
      try {
        response = await fetch('https://text.pollinations.ai/openai', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            messages: [
              {
                role: 'system',
                content: 'You are a helpful AI assistant specializing in task management and productivity.'
              },
              {
                role: 'user',
                content: formattedQuestion
              }
            ],
            model: 'openai',
            temperature: 0.7,
            stream: false
          })
        });
        
        if (response.ok) {
          data = await response.json();
          setSuggestion(data.choices[0].message.content);
        } else {
          throw new Error(`API error: ${response.status}`);
        }
      } catch (error) {
        // Fallback to simpler API if OpenAI-compatible endpoint fails
        console.warn("OpenAI endpoint failed, trying fallback API:", error);
        
        response = await fetch('https://text.pollinations.ai/generate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            prompt: formattedQuestion,
            model: 'mistral',
            private: true
          })
        });
        
        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }
        
        data = await response.text();
        setSuggestion(data);
      }
      
      // Extract URLs from response text
      const responseText = typeof data === 'string' ? data : 
        (data.choices && data.choices[0].message ? data.choices[0].message.content : JSON.stringify(data));
      
      const urlRegex = /(https?:\/\/[^\s]+)/g;
      const extractedUrls = responseText.match(urlRegex) || [];
      
      // Validate URLs
      const validUrls = extractedUrls
        .filter(url => isValidUrl(url))
        .map(url => url.replace(/[.,;:!?)]$/, ''))
        .filter(url => {
          try {
            new URL(url);
            return true;
          } catch {
            return false;
          }
        })
        .map(url => {
          // Ensure URL has protocol
          if (!url.startsWith('http://') && !url.startsWith('https://')) {
            return 'https://' + url;
          }
          return url;
        });
      
      setResources(validUrls);
      setAskingCustom(false);
      setCustomQuestion('');
      
    } catch (error) {
      console.error('Error asking question:', error);
      setError(`Nepavyko gauti atsakymo: ${error.message}. Bandykite vėliau arba užduokite kitą klausimą.`);
      setAskingCustom(false);
    }
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
  
  if (!isOpen) return null;
  
  const subtask = task?.subtasks?.[subtaskIndex];
  const subtaskText = subtask ? (typeof subtask === 'string' ? subtask : subtask.text) : 'Nėra žingsnio';
  
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
                <FontAwesomeIcon icon={faRobot} />
                AI Pagalbininkas
              </h2>
              <CloseButton onClick={onClose}>
                <FontAwesomeIcon icon={faTimes} />
                Uždaryti
              </CloseButton>
            </ModalHeader>
            
            <ModalBody>
              {task && task.subtasks && task.subtasks[subtaskIndex] ? (
                <SubtaskInfo>
                  <p>
                    {typeof task.subtasks[subtaskIndex] === 'string' 
                      ? task.subtasks[subtaskIndex] 
                      : task.subtasks[subtaskIndex].text}
                  </p>
                </SubtaskInfo>
              ) : (
                <ErrorMessage>
                  <FontAwesomeIcon icon={faExclamationTriangle} />
                  <p>Nepavyko rasti žingsnio informacijos.</p>
                </ErrorMessage>
              )}
              
              {error && (
                <ErrorMessage>
                  <FontAwesomeIcon icon={faExclamationTriangle} />
                  <p>{error}</p>
                </ErrorMessage>
              )}
              
              {loading ? (
                <LoadingSpinner>
                  <FontAwesomeIcon icon={faSpinner} />
                  <p>Generuojami pasiūlymai...</p>
                </LoadingSpinner>
              ) : (
                <>
                  <SuggestionSection>
                    <SuggestionTitle>
                      <FontAwesomeIcon icon={faLightbulb} />
                      AI pasiūlymai
                    </SuggestionTitle>
                    <SuggestionContent>
                      {suggestion.split('\n').filter(line => line.trim() !== '').map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </SuggestionContent>
                  </SuggestionSection>
                  
                  {resources.length > 0 && (
                    <ResourceList>
                      <SuggestionTitle>
                        <FontAwesomeIcon icon={faLink} />
                        Naudingi šaltiniai
                      </SuggestionTitle>
                      {resources.map((url, index) => (
                        <div key={index}>
                          <ResourceItem 
                            href={url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            onClick={(e) => {
                              e.preventDefault();
                              handleResourceClick(url, index);
                              window.open(url, '_blank');
                            }}
                          >
                            <FontAwesomeIcon icon={faExternalLinkAlt} />
                            <span className="resource-title">
                              {url.length > 40 ? url.substring(0, 40) + '...' : url}
                            </span>
                            <span className="resource-domain">
                              {extractDomain(url)}
                            </span>
                          </ResourceItem>
                          {resourceErrors[index] && (
                            <ResourceError>
                              <FontAwesomeIcon icon={faExclamationTriangle} />
                              {resourceErrors[index]}
                            </ResourceError>
                          )}
                        </div>
                      ))}
                    </ResourceList>
                  )}
                  
                  {tips.length > 0 && (
                    <TipsList>
                      <SuggestionTitle>
                        <FontAwesomeIcon icon={faLightbulb} />
                        Patarimai
                      </SuggestionTitle>
                      {tips.map((tip, index) => (
                        <TipItem key={index}>
                          <FontAwesomeIcon icon={faLightbulb} />
                          <p>{tip}</p>
                        </TipItem>
                      ))}
                    </TipsList>
                  )}
                  
                  <div style={{ 
                    marginTop: 'var(--spacing-lg)',
                    backgroundColor: 'rgba(0, 0, 0, 0.03)',
                    padding: 'var(--spacing-md)',
                    borderLeft: '5px solid var(--primary-blue)',
                    boxShadow: '3px 3px 0 rgba(0, 0, 0, 0.1)'
                  }}>
                    <SuggestionTitle>
                      <FontAwesomeIcon icon={faQuestionCircle} />
                      Turite klausimų?
                    </SuggestionTitle>
                    <QuestionInput
                      placeholder="Užduokite klausimą apie šį žingsnį..."
                      value={customQuestion}
                      onChange={(e) => setCustomQuestion(e.target.value)}
                      onFocus={() => setQuestionFocus(true)}
                      onBlur={() => setQuestionFocus(false)}
                    />
                    
                    <AnimatePresence>
                      {questionFocus && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                        >
                          <QuestionInfoBadge>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Užduokite konkretų klausimą apie šį žingsnį. Kuo aiškesnis klausimas, tuo tikslesnis atsakymas.
                          </QuestionInfoBadge>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    
                    <AskButton 
                      onClick={handleAskCustomQuestion}
                      disabled={askingCustom || !customQuestion.trim()}
                    >
                      {askingCustom ? (
                        <>
                          <FontAwesomeIcon icon={faSpinner} className="fa-spin" />
                          Siunčiama...
                        </>
                      ) : (
                        <>
                          <FontAwesomeIcon icon={faSearch} />
                          Klausti AI
                        </>
                      )}
                    </AskButton>
                  </div>
                </>
              )}
            </ModalBody>
          </ModalContent>
        </ModalOverlay>
      )}
    </AnimatePresence>
  );
};

export default AIHelpModal; 