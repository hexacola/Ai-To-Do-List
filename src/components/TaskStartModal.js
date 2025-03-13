import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTimes, 
  faClock, 
  faPlay,
  faPause,
  faLightbulb,
  faSpinner,
  faCheck,
  faSync,
  faListUl,
  faInfoCircle
} from '@fortawesome/free-solid-svg-icons';
import { usePollinationsText, getDomainTips, generateTips } from '../hooks/usePollinationsAPI';

// Modal background - covers entire screen
const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
  backdrop-filter: blur(4px);
`;

// Modal content container
const ModalContent = styled(motion.div)`
  background-color: var(--secondary-black);
  border: 2px solid var(--primary-yellow);
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  padding: 2rem;
  position: relative;
  border-radius: 4px;
  box-shadow: 0 0 40px rgba(247, 208, 44, 0.2);
  
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(255, 253, 208, 0.05);
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: var(--primary-yellow);
    border-radius: 4px;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  
  h2 {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 2rem;
    color: var(--primary-yellow);
    margin: 0;
    line-height: 1.2;
    max-width: 80%;
    text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.3);
  }
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: var(--primary-yellow);
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    color: var(--primary-red);
    transform: scale(1.1);
  }
`;

const TimerSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  border: 1px solid rgba(255, 253, 208, 0.1);
`;

const TimerDisplay = styled.div`
  font-family: 'Oswald', sans-serif;
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--primary-yellow);
  text-shadow: 3px 3px 0px rgba(0, 0, 0, 0.3);
  letter-spacing: 2px;
  margin-bottom: 1rem;
`;

const TimerControls = styled.div`
  display: flex;
  gap: 1rem;
`;

const TimerButton = styled.button`
  background-color: ${props => props.$isPrimary ? 'var(--primary-yellow)' : 'transparent'};
  color: ${props => props.$isPrimary ? 'var(--secondary-black)' : 'var(--primary-yellow)'};
  border: 2px solid var(--primary-yellow);
  padding: 0.75rem 1.5rem;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.2rem;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  border-radius: 3px;
  
  &:hover {
    background-color: ${props => props.$isPrimary ? 'var(--primary-red)' : 'rgba(255, 253, 208, 0.1)'};
    border-color: ${props => props.$isPrimary ? 'var(--primary-red)' : 'var(--primary-yellow)'};
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SubtasksSection = styled.div`
  h3 {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 1.5rem;
    color: var(--primary-yellow);
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

const SubtaskList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const SubtaskItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.05);
  margin-bottom: 0.75rem;
  border-left: 3px solid var(--primary-yellow);
  color: var(--secondary-cream);
  position: relative;
  
  .subtask-number {
    background-color: var(--primary-yellow);
    color: var(--secondary-black);
    font-family: 'Bebas Neue', sans-serif;
    font-size: 1rem;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    flex-shrink: 0;
  }
  
  .subtask-content {
    flex-grow: 1;
  }
  
  .subtask-time {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    color: var(--primary-yellow);
    font-size: 0.8rem;
    margin-top: 0.5rem;
    
    svg {
      font-size: 0.8rem;
    }
  }
  
  &.active {
    border-left-color: var(--primary-red);
    background-color: rgba(178, 34, 34, 0.1);
    box-shadow: 0 0 15px rgba(178, 34, 34, 0.2);
  }
  
  &.completed {
    opacity: 0.6;
    text-decoration: line-through;
    
    .subtask-number {
      background-color: var(--accent-green);
    }
  }
`;

const CurrentSubtaskHighlight = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: var(--primary-red);
  color: var(--secondary-cream);
  font-size: 0.7rem;
  padding: 0.25rem 0.5rem;
  border-radius: 2px;
  font-family: 'Bebas Neue', sans-serif;
  letter-spacing: 0.5px;
  transform: rotate(3deg);
`;

const TipsSection = styled.div`
  h3 {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 1.5rem;
    color: var(--primary-yellow);
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

const TipsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 0.5rem;
`;

const TipCard = styled.div`
  background: rgba(255, 253, 208, 0.05);
  border-left: 3px solid var(--primary-yellow);
  padding: 0.85rem 1.1rem;
  border-radius: 4px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
  transition: all 0.25s ease;
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateX(2px) translateY(-1px);
    background: rgba(255, 253, 208, 0.08);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, var(--primary-yellow), transparent);
    opacity: 0.5;
  }
  
  & + & {
    margin-top: 0.5rem;
  }
`;

const TipHeader = styled.div`
  font-weight: 700;
  color: var(--primary-yellow);
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.05rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  letter-spacing: 0.5px;
  
  svg {
    filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3));
  }
`;

const TipContent = styled.div`
  font-size: 0.95rem;
  color: var(--primary-white);
  opacity: 0.92;
  line-height: 1.5;
  
  strong, b {
    color: var(--secondary-cream);
    font-weight: 600;
  }
  
  em, i {
    font-style: italic;
    opacity: 0.85;
  }
  
  code {
    font-family: 'Courier New', monospace;
    background-color: rgba(0, 0, 0, 0.25);
    padding: 0.1rem 0.3rem;
    border-radius: 3px;
    font-size: 0.9em;
    color: var(--primary-yellow);
    letter-spacing: 0.5px;
  }
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 10px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  overflow: hidden;
  margin-top: 1.5rem;
  
  .progress {
    height: 100%;
    background-color: var(--primary-yellow);
    width: ${props => props.$progress}%;
    transition: width 0.3s ease;
  }
`;

const RefreshButton = styled.button`
  background: none;
  border: none;
  color: var(--primary-yellow);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 0.9rem;
  letter-spacing: 1px;
  cursor: pointer;
  padding: 0.5rem;
  margin-top: 1rem;
  opacity: 0.7;
  transition: all 0.2s ease;
  
  &:hover {
    opacity: 1;
    transform: translateY(-2px);
  }
`;

// Component to format and display tips
const Tips = ({ tips, loading, error, onRefresh, isFromDomainCache }) => {
  if (loading) {
    return (
      <TipsList>
        <TipCard>
          <TipContent style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '1.5rem 0' }}>
            <FontAwesomeIcon icon={faSpinner} spin size="lg" />
          </TipContent>
        </TipCard>
      </TipsList>
    );
  }
  
  if (error) {
    return (
      <TipsList>
        <TipCard>
          <TipContent>
            <div style={{ marginBottom: '0.75rem' }}>
              Klaida įkelti patarimus: {error}
            </div>
            {onRefresh && (
              <div style={{ marginTop: '0.75rem' }}>
                <RefreshButton onClick={onRefresh}>
                  <FontAwesomeIcon icon={faSync} />
                  PABANDYKITE KITAI
                </RefreshButton>
              </div>
            )}
          </TipContent>
        </TipCard>
      </TipsList>
    );
  }
  
  if (!tips) {
    return (
      <TipsList>
        <TipCard>
          <TipContent>Susitelkite į šį užduoties žingsnį, suskaidydami jį į įveikiamas dalis.</TipContent>
        </TipCard>
      </TipsList>
    );
  }
  
  // Source badge styling
  const SourceBadge = styled.div`
    display: inline-block;
    background-color: ${props => props.$domain ? 'var(--accent-green)' : 'var(--primary-yellow)'};
    color: var(--secondary-black);
    font-size: 0.65rem;
    padding: 2px 6px;
    border-radius: 2px;
    font-weight: bold;
    font-family: 'Bebas Neue', sans-serif;
    letter-spacing: 0.5px;
    margin-left: 0.5rem;
    vertical-align: middle;
  `;
  
  // Process tips to handle different formats
  const processTips = () => {
    try {
      // If tips is a string, process and clean it
      if (typeof tips === 'string') {
        // Handle empty or invalid strings
        if (!tips.trim()) {
          return [(
            <TipCard key="empty">
              <TipContent>Nėra konkrečių patarimų. Pabandykite atnaujinti.</TipContent>
            </TipCard>
          )];
        }
        
        // First, clean the text of unwanted formatting symbols and section numbers
        let cleanedText = tips
          // Remove section markers like ###, ##, etc.
          .replace(/#{1,6}\s*/g, '')
          // Remove numbered sections like "1." or "Step 1:" at the beginning of lines
          .replace(/^\d+\.\s*|^Step\s*\d+:?\s*/gmi, '')
          // Clean up any excessive whitespace
          .trim();
        
        // Split by common bullet point patterns
        const tipItems = cleanedText.split(/\n-|\n•|\n\*|\n\d+\.|^\d+\.|^\*\*\d+\.\s*/).filter(Boolean).map((tip, index) => {
          try {
            // Try to extract bold header if it exists
            const boldHeaderMatch = tip.match(/\*\*(.*?)\*\*|<strong>(.*?)<\/strong>/);
            let header = boldHeaderMatch ? (boldHeaderMatch[1] || boldHeaderMatch[2]) : '';
            let content = tip;
            
            if (boldHeaderMatch) {
              // Remove the header part from the content
              content = content.replace(boldHeaderMatch[0], '').trim();
              
              // If the header was at the start and followed by punctuation, remove that too
              content = content.replace(/^[:.,-]\s*/, '');
            } else {
              // If no explicit header, try to use the first sentence as a header
              const firstSentenceMatch = content.match(/^([^.!?]+[.!?]+)\s*/);
              if (firstSentenceMatch) {
                header = firstSentenceMatch[1].trim();
                content = content.replace(firstSentenceMatch[0], '').trim();
              }
            }
            
            // Clean any content prefixes like "Tip:" or similar
            content = content.replace(/^(Tip|Advice|Strategy|Technique):\s*/i, '');
            
            // Process content with React-safe HTML
            const processContent = (text) => {
              try {
                // First, escape any potential HTML
                let processed = text
                  // Clean up any excessive whitespace
                  .replace(/\s{2,}/g, ' ')
                  .trim();
                
                // Replace markdown with React components or HTML
                const segments = [];
                
                // Split the text by markdown patterns
                const parts = processed.split(/(\*\*.*?\*\*|\*.*?\*|_.*?_|`.*?`)/g);
                
                parts.forEach((part, i) => {
                  // Bold text
                  if (part && part.startsWith('**') && part.endsWith('**')) {
                    const inner = part.slice(2, -2);
                    segments.push(<strong key={i}>{inner}</strong>);
                  }
                  // Italic text
                  else if (part && ((part.startsWith('*') && part.endsWith('*')) || 
                          (part.startsWith('_') && part.endsWith('_')))) {
                    const inner = part.slice(1, -1);
                    segments.push(<em key={i}>{inner}</em>);
                  }
                  // Code/monospace text
                  else if (part && part.startsWith('`') && part.endsWith('`')) {
                    const inner = part.slice(1, -1);
                    segments.push(<code key={i}>{inner}</code>);
                  }
                  // Regular text
                  else if (part && part.trim()) {
                    segments.push(part);
                  }
                });
                
                return segments.length > 0 ? segments : text;
              } catch (err) {
                console.warn('Error processing content formatting:', err);
                return text;
              }
            };
            
            // Clean header of any remaining markdown for display
            const cleanHeader = header
              .replace(/\*\*/g, '')
              .replace(/\*/g, '')
              .replace(/`/g, '')
              .replace(/_/g, '');
            
            return (
              <TipCard key={index}>
                {cleanHeader && <TipHeader><FontAwesomeIcon icon={faLightbulb} size="sm" /> {cleanHeader}</TipHeader>}
                <TipContent>{processContent(content)}</TipContent>
              </TipCard>
            );
          } catch (tipError) {
            console.warn('Error processing individual tip:', tipError);
            return (
              <TipCard key={index}>
                <TipContent>{tip}</TipContent>
              </TipCard>
            );
          }
        });
        
        return tipItems.length > 0 ? tipItems : [(
          <TipCard key="fallback">
            <TipContent>Susitelkite į šį užduoties žingsnį, suskaidydami jį į įveikiamas dalis.</TipContent>
          </TipCard>
        )];
      }
      
      // Handle non-string formats
      if (tips && typeof tips === 'object') {
        try {
          return (
            <TipCard key="object">
              <TipContent>{JSON.stringify(tips)}</TipContent>
            </TipCard>
          );
        } catch (jsonError) {
          console.warn('Error stringifying tips object:', jsonError);
          return (
            <TipCard key="error">
              <TipContent>Patarimai yra, bet jų negalima rodyti. Pabandykite atnaujinti.</TipContent>
            </TipCard>
          );
        }
      }
      
      // Default fallback
      return (
        <TipCard key="unknown">
          <TipContent>Nėra atpažįstamo formato patarimų. Pabandykite atnaujinti.</TipContent>
        </TipCard>
      );
    } catch (error) {
      console.error('Error processing tips:', error);
      return (
        <TipCard key="error">
          <TipContent>Klaida apdorojant patarimus. Pabandykite atnaujinti, kad gautumėte naujus vykdymo patarimus.</TipContent>
        </TipCard>
      );
    }
  };
  
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
        <div style={{ fontSize: '0.8rem', color: 'var(--primary-yellow)', opacity: 0.8 }}>
          <FontAwesomeIcon icon={faInfoCircle} size="sm" /> 
          <span style={{ marginLeft: '0.25rem' }}>Šaltinis:</span> 
          <SourceBadge $domain={isFromDomainCache}>
            {isFromDomainCache ? 'SRITIES EKSPERTAS' : 'DI TRENERIS'}
          </SourceBadge>
        </div>
      </div>
      <TipsList>{processTips()}</TipsList>
      {onRefresh && (
        <RefreshButton onClick={onRefresh}>
          <FontAwesomeIcon icon={faSync} />
          ATNAUJINTI PATARIMUS
        </RefreshButton>
      )}
    </>
  );
};

const TaskStartModal = ({ task, isOpen, onClose, onCompleteSubtask }) => {
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [currentSubtaskIndex, setCurrentSubtaskIndex] = useState(0);
  const [tipPrompt, setTipPrompt] = useState('');
  const [tips, setTips] = useState(null);
  const [tipsLoading, setTipsLoading] = useState(true);
  const [tipsError, setTipsError] = useState(null);
  const [isFromDomainCache, setIsFromDomainCache] = useState(false);
  
  // Get current subtask
  const currentSubtask = task?.subtasks?.[currentSubtaskIndex] || null;
  
  // Timer interval ref
  const timerRef = useRef(null);
  
  // Reset currentSubtaskIndex when task changes
  useEffect(() => {
    if (task) {
      setCurrentSubtaskIndex(0);
      setTimeElapsed(0);
    }
  }, [task?.id]);
  
  // Create user prompt for tips generation
  useEffect(() => {
    try {
      // Only proceed if we have a valid task and subtask
      if (!task || !currentSubtask) {
        // If we're showing the modal but don't have task/subtask data yet, 
        // just show loading state without error
        if (isOpen) {
          setTipsLoading(true);
          setTipsError(null);
        }
        return;
      }
      
      // Safe extraction of subtask text with null checks
      const subtaskText = typeof currentSubtask === 'string' 
        ? currentSubtask 
        : (currentSubtask?.text || '');
      
      // Reset tips state
      setTips(null);
      setTipsLoading(true);
      setTipsError(null);
      
      // Generate a unique identifier for this specific task/subtask combination
      const uniqueId = `${task.id || 'unknown'}-${currentSubtaskIndex}-${Date.now()}`;
      
      // Safely check for domain-specific tips
      const taskText = task.text || '';
      const domainTips = taskText ? getDomainTips(taskText, subtaskText) : null;
      
      // If we have pre-cached domain tips, use them immediately 
      if (domainTips) {
        setTips(domainTips);
        setTipsLoading(false);
        setIsFromDomainCache(true);
      } else {
        // Otherwise, generate tips via API
        setIsFromDomainCache(false);
        
        // Create a unique prompt that forces a new API request
        setTipPrompt(
          `Dirbu su šia užduotimi: "${taskText}" ir konkrečiai šiuo žingsniu: "${subtaskText}". ` +
          `Prašau pateikti 4-6 konkrečius, įgyvendinamus patarimus, kaip efektyviai atlikti šį žingsnį, remiantis moksliniais metodais ir geriausia praktika. Įtraukite srities specifinius patarimus, tikslias vykdymo taktikas, galimas kliūtis ir kaip žinosiu, kada šis žingsnis bus sėkmingai atliktas. (uid:${uniqueId})`
        );
      }
    } catch (error) {
      console.error('Error generating tips:', error);
      setTipsError('Error preparing tips. Please try refreshing.');
      setTipsLoading(false);
    }
  }, [task, currentSubtask, currentSubtaskIndex, isOpen]);
  
  // Only set up the API hook if we're actually going to use it
  const { response: apiTips, loading: apiTipsLoading, error: apiTipsError } = usePollinationsText(
    tipPrompt ? tipPrompt : null,
    {
      systemPrompt: "You are a world-class productivity coach and domain expert with deep knowledge in various fields. Your specialty is turning abstract tasks into concrete, executable actions with precision and clarity. " +
                   "Your task is to provide 4-6 extremely specific, immediately actionable tips that will help the user execute their current task step with maximum efficiency and quality. " +
                   
                   "Follow these guidelines when creating your tips:" +
                   
                   "1. DOMAIN SPECIFICITY: Analyze what domain the task belongs to (programming, writing, research, design, etc.) and provide domain-specific advice using appropriate terminology and best practices from that field." +
                   
                   "2. EXECUTION TACTICS: Focus on HOW to perform the task, not just what to do. Include exact methods, recommended tools, shortcuts, or templates." +
                   
                   "3. IMPLEMENTATION SCIENCE: Incorporate evidence-based productivity techniques like:"+
                   "   - Pomodoro Technique (25 min work/5 min break)"+
                   "   - Implementation intentions ('When X happens, I will do Y')"+
                   "   - Parkinson's Law (set artificial deadlines)"+
                   "   - Pareto Principle (focus on the 20% of work that yields 80% of results)"+
                   "   - Time blocking and deep work principles"+
                   "   - Starting rituals to overcome resistance"+
                   
                   "4. OVERCOME OBSTACLES: Anticipate 1-2 common obstacles for this specific step and provide preventative strategies." +
                   
                   "5. FORMAT CLEARLY: Each tip should start with a bold header summarizing the tip, followed by a concise explanation with specific details, examples or templates when relevant." +
                   
                   "6. MEASURABLE COMPLETION: Include how the user will know they've successfully completed this step and how to validate quality." +
                   
                   "Format your response with bullet points and bold headers for readability. Make every tip concrete, tactical, and immediately applicable to the SPECIFIC subtask they're working on."
    }
  );
  
  // Sync API tips to our state when they arrive
  useEffect(() => {
    if (tipPrompt && apiTips) {
      setTips(apiTips);
    }
  }, [apiTips, tipPrompt]);
  
  // Update loading state based on API
  useEffect(() => {
    if (tipPrompt) {
      setTipsLoading(apiTipsLoading);
    }
  }, [apiTipsLoading, tipPrompt]);
  
  // Update error state based on API
  useEffect(() => {
    if (tipPrompt && apiTipsError) {
      setTipsError(apiTipsError);
      setTipsLoading(false);
    }
  }, [apiTipsError, tipPrompt]);
  
  // Reset tips when the modal is closed
  useEffect(() => {
    if (!isOpen) {
      setTips(null);
      setTipsLoading(true);
      setTipsError(null);
      setTipPrompt('');
    }
  }, [isOpen]);
  
  // Timer functionality
  useEffect(() => {
    if (isOpen && isTimerRunning) {
      timerRef.current = setInterval(() => {
        setTimeElapsed(prev => prev + 1);
      }, 1000);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isOpen, isTimerRunning]);
  
  // Format time for display (HH:MM:SS)
  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    return [
      hours.toString().padStart(2, '0'),
      minutes.toString().padStart(2, '0'),
      secs.toString().padStart(2, '0')
    ].join(':');
  };
  
  // Calculate progress percentage
  const calculateProgress = () => {
    if (!task || !task.subtasks) return 0;
    const completedSubtasks = task.subtasksCompleted.filter(Boolean).length;
    return (completedSubtasks / task.subtasks.length) * 100;
  };
  
  // Handle play/pause
  const toggleTimer = () => {
    setIsTimerRunning(!isTimerRunning);
  };
  
  // Move to next subtask with improved robustness
  const completeCurrentSubtask = () => {
    if (!task) {
      console.warn('Cannot complete subtask: task is null');
      return;
    }

    if (task.subtasks && currentSubtaskIndex < task.subtasks.length - 1) {
      try {
        // First, mark the current subtask as complete
        onCompleteSubtask(task.id, currentSubtaskIndex);
        
        // Capture the next subtask index
        const nextSubtaskIndex = currentSubtaskIndex + 1;
        
        // Get the next subtask and text (with null safety)
        const nextSubtask = task.subtasks[nextSubtaskIndex];
        if (!nextSubtask) {
          console.warn('Next subtask is null, but should exist');
          return;
        }
        
        const nextSubtaskText = typeof nextSubtask === 'string' 
          ? nextSubtask 
          : (nextSubtask?.text || '');
        
        // More aggressive clearing of state
        setTips(null);
        setTipPrompt('');
        setTipsLoading(true);
        setTipsError(null);
        
        // Force a state update and then proceed with the next subtask tips generation
        // This helps ensure React properly notices the state changes
        setTimeout(() => {
          try {
            // Check for domain-specific tips for the next subtask
            const domainTips = task.text ? getDomainTips(task.text, nextSubtaskText) : null;
            
            if (domainTips) {
              // If we have domain tips, use them immediately
              setIsFromDomainCache(true);
              setTips(domainTips);
              setTipsLoading(false);
            } else {
              // Otherwise, prepare for API generation
              setIsFromDomainCache(false);
              
              // Create a unique prompt for the next subtask with multiple uniqueness markers
              const uniqueTimestamp = Date.now();
              const randomStr = Math.random().toString(36).substring(2, 10);
              const taskText = task.text || 'current task';
              
              // Completely unique prompt with multiple markers to prevent API caching
              const newPrompt = `Dirbu su šia užduotimi: "${taskText}" ir konkrečiai šiuo žingsniu: "${nextSubtaskText}". ` +
                `Prašau pateikti 4-6 konkrečius, įgyvendinamus patarimus, kaip efektyviai atlikti šį žingsnį, remiantis moksliniais metodais ir geriausia praktika. Įtraukite srities specifinius patarimus, tikslias vykdymo taktikas, galimas kliūtis ir kaip žinosiu, kada šis žingsnis bus sėkmingai atliktas. (Unique:${uniqueTimestamp}-${nextSubtaskIndex}-${randomStr})`;
              
              // Set the new prompt which will trigger the API request
              setTipPrompt(newPrompt);
            }
            
            // Then update the subtask index
            setCurrentSubtaskIndex(nextSubtaskIndex);
          } catch (error) {
            console.error('Error while generating tips for next subtask:', error);
            // Still update the subtask index even if there was an error
            setCurrentSubtaskIndex(nextSubtaskIndex);
            setTipsError('Error generating tips. Please try refreshing.');
            setTipsLoading(false);
          }
        }, 50); // Small delay to ensure state updates are processed
      } catch (error) {
        console.error('Error in completeCurrentSubtask:', error);
        // Handle errors gracefully
        onCompleteSubtask(task.id, currentSubtaskIndex);
        setCurrentSubtaskIndex(prev => prev + 1);
        setTipsError('An error occurred. Try refreshing the tips.');
        setTipsLoading(false);
      }
    } else if (task.id !== undefined && currentSubtaskIndex !== undefined) {
      onCompleteSubtask(task.id, currentSubtaskIndex);
      // All subtasks completed
      onClose();
    } else {
      console.warn('Cannot complete subtask: task.id or currentSubtaskIndex is undefined');
      onClose();
    }
  };
  
  // Format time estimate for display
  const formatTimeEstimate = (minutes) => {
    if (!minutes) return "0 min";
    if (minutes < 60) return `${minutes} min`;
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`;
  };
  
  // Function to refresh tips
  const refreshTips = () => {
    // Check if we have a valid task and subtask
    if (!task || !currentSubtask) {
      console.warn('Cannot refresh tips: task or subtask is null');
      return;
    }

    // Safe extraction of subtask text
    const subtaskText = typeof currentSubtask === 'string' 
      ? currentSubtask 
      : (currentSubtask?.text || '');
    
    // Clear existing tips and try domain-specific first
    setTips(null);
    setTipsLoading(true);
    setTipsError(null);
    
    // Force tip prompt to change to trigger a new request
    const timestamp = Date.now();
    
    // Safely get domain tips
    const domainTips = task?.text ? getDomainTips(task.text, subtaskText) : null;
    
    if (domainTips) {
      // Use domain tips if available
      setTips(domainTips);
      setTipsLoading(false);
      setIsFromDomainCache(true);
    } else {
      // Otherwise generate via API by setting new prompt
      setIsFromDomainCache(false);
      
      // Safe task text
      const taskText = task?.text || 'current task';
      
      setTipPrompt(
        `Dirbu su šia užduotimi: "${taskText}" ir konkrečiai šiuo žingsniu: "${subtaskText}". ` +
        `Prašau pateikti 4-6 konkrečius, įgyvendinamus patarimus, kaip efektyviai atlikti šį žingsnį, remiantis moksliniais metodais ir geriausia praktika. Įtraukite srities specifinius patarimus, tikslias vykdymo taktikas, galimas kliūtis ir kaip žinosiu, kada šis žingsnis bus sėkmingai atliktas. (refresh: ${timestamp})`
      );
    }
  };
  
  // Modal animations
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.3 } }
  };
  
  const contentVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { 
        type: "spring", 
        damping: 25, 
        stiffness: 300 
      } 
    },
    exit: { 
      opacity: 0, 
      y: 20, 
      scale: 0.95, 
      transition: { duration: 0.2 } 
    }
  };
  
  // Effect to generate tips when prompt changes
  useEffect(() => {
    if (!tipPrompt || tipPrompt.trim() === '') {
      return;
    }
    
    setTipsLoading(true);
    
    const controller = new AbortController();
    const signal = controller.signal;
    
    generateTips(tipPrompt, signal)
      .then(newTips => {
        setTips(newTips);
        setTipsLoading(false);
      })
      .catch(err => {
        if (err.name !== 'AbortError') {
          console.error('Error generating tips:', err);
          setTipsError('Failed to generate tips. Please try again.');
          setTipsLoading(false);
        }
      });
    
    return () => {
      controller.abort();
    };
  }, [tipPrompt]);
  
  // Effect to generate tips when prompt changes - with improved robustness
  useEffect(() => {
    // Only proceed if we have a valid prompt
    if (!tipPrompt || tipPrompt.trim() === '') {
      return;
    }
    
    // Clear any previous errors before starting a new request
    setTipsError(null);
    setTipsLoading(true);
    
    // Reset tips to ensure we don't show stale data
    setTips(null);
    
    // Create a unique ID for this specific request for debugging
    const requestId = Date.now();
    console.log(`[${requestId}] Starting tip generation for prompt: ${tipPrompt.substring(0, 50)}...`);
    
    const controller = new AbortController();
    const signal = controller.signal;
    
    // Use a small timeout to ensure the UI updates before the API call
    const timeoutId = setTimeout(() => {
      generateTips(tipPrompt, signal)
        .then(newTips => {
          console.log(`[${requestId}] Successfully generated tips`);
          
          // Double-check we're still on the same prompt (race condition protection)
          if (tipPrompt) {
            setTips(newTips);
            setTipsLoading(false);
          }
        })
        .catch(err => {
          if (err.name !== 'AbortError') {
            console.error(`[${requestId}] Error generating tips:`, err);
            setTipsError('Failed to generate tips. Please try again.');
            setTipsLoading(false);
          } else {
            console.log(`[${requestId}] Tip generation was aborted`);
          }
        });
    }, 100);
    
    return () => {
      console.log(`[${requestId}] Cleaning up tip generation effect`);
      clearTimeout(timeoutId);
      controller.abort();
    };
  }, [tipPrompt]);
  
  return (
    <AnimatePresence>
      {isOpen && task && (
        <ModalOverlay
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={overlayVariants}
          onClick={onClose}
        >
          <ModalContent
            variants={contentVariants}
            onClick={e => e.stopPropagation()}
          >
            <ModalHeader>
              <h2>{task.text}</h2>
              <CloseButton onClick={onClose}>
                <FontAwesomeIcon icon={faTimes} />
              </CloseButton>
            </ModalHeader>
            
            <TimerSection>
              <TimerDisplay>{formatTime(timeElapsed)}</TimerDisplay>
              <TimerControls>
                <TimerButton 
                  $isPrimary 
                  onClick={toggleTimer}
                >
                  <FontAwesomeIcon icon={isTimerRunning ? faPause : faPlay} />
                  {isTimerRunning ? 'PAUZĖ' : 'PRADĖTI'}
                </TimerButton>
                <TimerButton 
                  onClick={completeCurrentSubtask}
                >
                  <FontAwesomeIcon icon={faCheck} />
                  UŽBAIGTI ŽINGSNĮ
                </TimerButton>
              </TimerControls>
              
              <ProgressBar $progress={calculateProgress()}>
                <div className="progress"></div>
              </ProgressBar>
            </TimerSection>
            
            <ContentGrid>
              <SubtasksSection>
                <h3>
                  <FontAwesomeIcon icon={faListUl} />
                  UŽDUOTIES IŠSKAIDYMAS
                </h3>
                <SubtaskList>
                  {task.subtasks && task.subtasks.map((subtask, index) => {
                    const subtaskText = typeof subtask === 'string' ? subtask : (subtask.text || '');
                    const isActive = index === currentSubtaskIndex;
                    const isCompleted = task.subtasksCompleted && task.subtasksCompleted[index];
                    
                    return (
                      <SubtaskItem 
                        key={`modal-subtask-${index}`}
                        className={`${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}
                      >
                        <div className="subtask-number">{index + 1}</div>
                        <div className="subtask-content">
                          {subtaskText}
                          {subtask.timeEstimate && (
                            <div className="subtask-time">
                              <FontAwesomeIcon icon={faClock} />
                              {formatTimeEstimate(subtask.timeEstimate)}
                            </div>
                          )}
                        </div>
                        {isActive && <CurrentSubtaskHighlight>DABARTINIS</CurrentSubtaskHighlight>}
                      </SubtaskItem>
                    );
                  })}
                </SubtaskList>
              </SubtasksSection>
              
              <TipsSection>
                <h3>
                  <FontAwesomeIcon icon={faLightbulb} />
                  VYKDYMO PATARIMAI
                </h3>
                <Tips 
                  key={`tips-${task?.id}-${currentSubtaskIndex}`}
                  tips={tips} 
                  loading={tipsLoading} 
                  error={tipsError} 
                  onRefresh={refreshTips}
                  isFromDomainCache={isFromDomainCache}
                />
              </TipsSection>
            </ContentGrid>
          </ModalContent>
        </ModalOverlay>
      )}
    </AnimatePresence>
  );
};

export default TaskStartModal; 