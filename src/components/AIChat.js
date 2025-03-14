import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPaperPlane, 
  faRobot, 
  faUser, 
  faTimes, 
  faSpinner, 
  faLightbulb, 
  faCoins,
  faFilm,
  faClock,
  faCheckCircle,
  faTrash,
  faEraser
} from '@fortawesome/free-solid-svg-icons';
import { generateTips } from '../utils/aiHelper';

// Konstanta pokalbių istorijos išsaugojimui localStorage
const CHAT_HISTORY_KEY = 'aichat_history';

const ChatContainer = styled(motion.div)`
  background-color: var(--card-background);
  border-radius: 0;
  box-shadow: var(--shadow-md);
  padding: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
  border-left: 6px solid var(--primary-red);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(to right, var(--primary-yellow), var(--primary-red), var(--primary-yellow));
  }
  
  @media (max-width: 768px) {
    padding: var(--spacing-md);
  }
`;

const ChatHeader = styled.div`
  margin-bottom: var(--spacing-md);
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  .title-section {
    h2 {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 1.8rem;
      color: var(--primary-yellow);
      text-shadow: 2px 2px 0 var(--primary-red);
      margin: 0;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    
    p {
      color: var(--subtask-text-color);
      font-family: 'Oswald', sans-serif;
      margin-top: var(--spacing-xs);
    }
  }
  
  .action-buttons {
    display: flex;
    gap: 10px;
  }
`;

const ActionButton = styled.button.withConfig({
  shouldForwardProp: prop => prop !== '$danger'
})`
  background-color: ${props => props.$danger ? 'var(--primary-red)' : 'rgba(0, 0, 0, 0.1)'};
  color: ${props => props.$danger ? 'var(--primary-yellow)' : 'var(--subtask-text-color)'};
  border: 1px solid ${props => props.$danger ? 'var(--primary-red)' : 'var(--border-color)'};
  padding: 8px;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.$danger ? 'var(--primary-red)' : 'var(--primary-yellow)'};
    color: var(--text-color);
    transform: translateY(-2px);
  }
`;

const MessagesContainer = styled.div`
  max-height: 400px;
  overflow-y: auto;
  margin-bottom: var(--spacing-md);
  padding: var(--spacing-md);
  background-color: rgba(0, 0, 0, 0.05);
  border: 1px solid var(--border-color);
  
  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
  }
  
  &::-webkit-scrollbar-thumb {
    background: var(--primary-yellow);
  }
`;

const Message = styled(motion.div).withConfig({
  shouldForwardProp: prop => prop !== '$isUser'
})`
  padding: var(--spacing-md);
  margin-bottom: var(--spacing-md);
  border-radius: 0;
  display: flex;
  gap: var(--spacing-md);
  
  &:last-child {
    margin-bottom: 0;
  }
  
  .message-icon {
    width: 36px;
    height: 36px;
    border-radius: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    background-color: ${props => props.$isUser ? 'var(--primary-red)' : 'var(--primary-yellow)'};
    color: ${props => props.$isUser ? 'var(--primary-yellow)' : 'var(--text-color)'};
    box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.1);
  }
  
  .message-content {
    flex: 1;
    
    .message-text {
      background-color: ${props => props.$isUser ? 'rgba(178, 34, 34, 0.05)' : 'rgba(247, 208, 44, 0.05)'};
      padding: var(--spacing-md);
      border-left: 3px solid ${props => props.$isUser ? 'var(--primary-red)' : 'var(--primary-yellow)'};
      white-space: pre-line;
    }
    
    .message-meta {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin-top: 4px;
      font-size: var(--font-size-xs);
      color: var(--light-text-color);
      
      .message-time {
        text-align: right;
      }
    }
  }
`;

const InputContainer = styled.div`
  display: flex;
  gap: var(--spacing-sm);
  
  input {
    flex: 1;
    padding: 12px var(--spacing-md);
    border: 2px solid var(--border-color);
    background-color: var(--input-background);
    color: var(--text-color);
    font-family: 'Oswald', sans-serif;
    
    &:focus {
      outline: none;
      border-color: var(--primary-yellow);
    }
  }
  
  button {
    background-color: var(--primary-yellow);
    color: var(--text-color);
    border: none;
    padding: 0 var(--spacing-md);
    font-family: 'Bebas Neue', sans-serif;
    font-size: var(--font-size-md);
    cursor: pointer;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.1);
    
    &:hover {
      background-color: var(--primary-red);
      color: var(--primary-yellow);
      transform: translateY(-2px);
      box-shadow: 5px 5px 0 rgba(0, 0, 0, 0.15);
    }
    
    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      transform: none;
      box-shadow: none;
    }
  }
`;

const SuggestedQueries = styled.div`
  margin-top: var(--spacing-md);
  
  h3 {
    font-family: 'Bebas Neue', sans-serif;
    font-size: var(--font-size-md);
    color: var(--primary-yellow);
    margin-bottom: var(--spacing-sm);
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  .queries {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-sm);
  }
  
  button {
    background-color: rgba(247, 208, 44, 0.1);
    border: 1px solid var(--primary-yellow);
    color: var(--text-color);
    padding: 8px var(--spacing-md);
    font-family: 'Oswald', sans-serif;
    font-size: var(--font-size-sm);
    cursor: pointer;
    transition: all 0.2s ease;
    
    &:hover {
      background-color: var(--primary-yellow);
      color: var(--text-color);
    }
  }
`;

const EmptyChatMessage = styled.div`
  text-align: center;
  padding: var(--spacing-xl);
  color: var(--subtask-text-color);
  
  svg {
    font-size: 3rem;
    color: var(--primary-yellow);
    margin-bottom: var(--spacing-md);
    opacity: 0.6;
  }
  
  h3 {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 1.4rem;
    color: var(--primary-yellow);
    margin-bottom: var(--spacing-md);
  }
  
  p {
    margin-bottom: var(--spacing-md);
  }
`;

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
};

const messageVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.2 } }
};

// Clean the AI response to remove special characters like # and formatting
const cleanResponse = (text) => {
  // Remove markdown headers (# Header)
  text = text.replace(/^#+ (.+)$/gm, '$1');
  
  // Remove markdown list markers (* item or - item)
  text = text.replace(/^[\*\-] (.+)$/gm, '• $1');
  
  // Remove code blocks and inline code
  text = text.replace(/```[a-z]*\n([\s\S]*?)\n```/g, '$1');
  text = text.replace(/`([^`]+)`/g, '$1');
  
  // Remove bold and italic formatting
  text = text.replace(/\*\*([^*]+)\*\*/g, '$1');
  text = text.replace(/\*([^*]+)\*/g, '$1');
  text = text.replace(/__([^_]+)__/g, '$1');
  text = text.replace(/_([^_]+)_/g, '$1');
  
  // Remove blockquotes
  text = text.replace(/^> (.+)$/gm, '$1');
  
  // Remove links but keep the text
  text = text.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
  
  // Remove horizontal rules
  text = text.replace(/^[-*_]{3,}$/gm, '');
  
  // Remove duplicate line breaks
  text = text.replace(/\n{3,}/g, '\n\n');
  
  // Remove any remaining special characters
  text = text.replace(/[`~^]/g, '');
  
  return text.trim();
};

// Tarantino-inspired AI personality phrases
const tarantinoResponses = [
  "Gerai, klausyk. Štai ką tau pasakysiu...",
  "Tiesiai šviesiai, be jokio šūdo...",
  "Matai, problema yra tokia...",
  "Leisk man išsiaiškinti šitą reikalą...",
  "Klausyk atidžiai, nes tai svarbu...",
  "Yra du būdai į tai pažiūrėti...",
  "Štai kaip aš tai matau...",
  "Tai ne šiaip atsakymas, tai planas...",
  "Turi suprasti vieną dalyką..."
];

// Main component
const AIChat = () => {
  const [messages, setMessages] = useState(() => {
    const savedMessages = localStorage.getItem(CHAT_HISTORY_KEY);
    if (savedMessages) {
      try {
        return JSON.parse(savedMessages);
      } catch (e) {
        console.error("Klaida nuskaitant pokalbių istoriją:", e);
        return getDefaultWelcomeMessage();
      }
    } else {
      return getDefaultWelcomeMessage();
    }
  });
  
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);
  const messagesEndRef = useRef(null);
  const abortControllerRef = useRef(null);
  
  // Numatytasis pasisveikinimo pranešimas
  function getDefaultWelcomeMessage() {
    return [{
      id: 'welcome',
      text: "Sveiki, čia Džiuljeta - tavo produktyvumo konsultantė su tarantiniška energija. Esu čia, kad padėčiau tau susitvarkyti su užduotimis taip efektyviai, kad tai atrodytų kaip veiksmo filmas! Sakyk, kuo galiu padėti?",
      sender: 'ai',
      timestamp: new Date().toISOString()
    }];
  }
  
  const suggestedQueries = [
    'Kaip efektyviai suskirstyti didelę užduotį?',
    'Patarimai darbui iš namų',
    'Kaip kovoti su prokrastinacija?',
    'Fokusavimo technikos',
    'Kaip planuoti darbo dieną?',
    'Pomodoro metodo pritaikymas'
  ];
  
  // Išsaugoti pranešimus į localStorage
  useEffect(() => {
    localStorage.setItem(CHAT_HISTORY_KEY, JSON.stringify(messages));
  }, [messages]);
  
  // Automatiškai slinkti į apačią, kai atsiranda nauji pranešimai
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  // Išvalyti AbortController, kai komponentas pasišalina
  useEffect(() => {
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };
  
  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;
    
    // Create user message
    const userMessage = {
      id: `user-${Date.now()}`,
      text: input.trim(),
      sender: 'user',
      timestamp: new Date().toISOString()
    };
    
    // Add user message to the list
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    
    // Create new AI message
    const aiMessageId = `ai-${Date.now()}`;
    const initialAiMessage = {
      id: aiMessageId,
      text: "",
      sender: 'ai',
      timestamp: new Date().toISOString()
    };
    
    // Add empty AI message that we'll fill later
    setMessages(prev => [...prev, initialAiMessage]);
    
    // Prepare conversation history for API request
    const conversationHistory = messages
      .slice(-10) // Take last 10 messages for context
      .map(msg => ({
        role: msg.sender === 'user' ? 'user' : 'assistant',
        content: msg.text
      }));
    
    // Add current user message
    conversationHistory.push({
      role: 'user',
      content: userMessage.text
    });
    
    // Create AbortController to cancel request if needed
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    
    abortControllerRef.current = new AbortController();
    const signal = abortControllerRef.current.signal;
    
    try {
      setIsStreaming(true);
      
      // Use stream capability of Pollinations API
      const response = await fetch('https://text.pollinations.ai/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: conversationHistory,
          model: 'openai-large',
          stream: true,
          private: true,
          system: "Tu esi Džiuljeta, asistentė, kuri kalba tarantiniškuoju stilium - drąsiai, tiesiai šviesiai, kartais su įdomiais posakiais. Tu esi produktyvumo ekspertė, kuri mėgsta kino filmus ir padedi žmonėms efektyviai atlikti užduotis. Vengk ilgų įžangų, eik tiesiai prie esmės. Būk draugiška, bet užtikrinta. Venkite pilkų, nuobodžių atsakymų - būk asmenybė! Kai klientas užduoda klausimą, atsakyk tiksliai, aiškiai. Nekalbėk abstrakčiai - duok konkrečių pavyzdžių ir metodų."
        }),
        signal
      });
      
      if (!response.ok) {
        throw new Error('API response error: ' + response.status);
      }
      
      // Use ReadableStream to read data in chunks
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      
      // Sometimes API adds a Tarantino phrase, but we already have our own system
      // So we'll check if response already started with a Tarantino phrase
      let hasIntroPhrase = false;
      let randomIntro = '';
      
      // 60% chance to add a Tarantino phrase
      const useIntroPhrase = Math.random() > 0.4;
      if (useIntroPhrase) {
        randomIntro = tarantinoResponses[Math.floor(Math.random() * tarantinoResponses.length)];
        hasIntroPhrase = true;
      }
      
      let accumulatedText = useIntroPhrase ? `${randomIntro}\n\n` : '';
      
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        
        // Decode the received chunk of text
        const chunk = decoder.decode(value, { stream: true });
        
        // Split the chunk by newlines to handle multiple data objects
        const lines = chunk.split('\n');
        
        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const jsonStr = line.slice(6); // Remove 'data: ' prefix
            if (jsonStr === '[DONE]') continue;
            
            try {
              const data = JSON.parse(jsonStr);
              if (data.choices && data.choices[0] && data.choices[0].delta && data.choices[0].delta.content) {
                const content = data.choices[0].delta.content;
                accumulatedText += content;
                
                // Update message with latest text
                setMessages(prev => prev.map(msg => 
                  msg.id === aiMessageId ? { ...msg, text: accumulatedText } : msg
                ));
                
                // Scroll to bottom to see latest messages
                scrollToBottom();
              }
            } catch (e) {
              console.error('Error parsing JSON:', e);
            }
          }
        }
      }
    } catch (error) {
      // Check if error is from user cancellation
      if (error.name !== 'AbortError') {
        console.error('Error getting AI response:', error);
        
        // Update message with error message
        setMessages(prev => prev.map(msg => 
          msg.id === aiMessageId ? { 
            ...msg, 
            text: "Atsiprašau, įvyko klaida bandant gauti atsakymą. Prašome bandyti vėliau."
          } : msg
        ));
      }
    } finally {
      setIsLoading(false);
      setIsStreaming(false);
      abortControllerRef.current = null;
    }
  };
  
  const handleSuggestedQuery = (query) => {
    setInput(query);
  };
  
  const handleClearChat = () => {
    if (window.confirm('Ar tikrai norite ištrinti visą pokalbio istoriją?')) {
      setMessages(getDefaultWelcomeMessage());
    }
  };
  
  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };
  
  return (
    <ChatContainer
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <ChatHeader>
        <div className="title-section">
          <h2>
            <FontAwesomeIcon icon={faFilm} /> Produktyvo AI Chatas
          </h2>
          <p>Džiuljeta - tavo asmeninė tarantiniško stiliaus produktyvumo konsultantė</p>
        </div>
        <div className="action-buttons">
          <ActionButton title="Išvalyti pokalbį" $danger onClick={handleClearChat}>
            <FontAwesomeIcon icon={faTrash} />
          </ActionButton>
        </div>
      </ChatHeader>
      
      <MessagesContainer>
        {messages.length === 0 ? (
          <EmptyChatMessage>
            <FontAwesomeIcon icon={faFilm} />
            <h3>Pradėk pokalbį su Džiuljeta</h3>
            <p>Užduok klausimą apie produktyvumą, užduočių planavimą ar laiko valdymą.</p>
          </EmptyChatMessage>
        ) : (
          <AnimatePresence>
            {messages.map((message) => (
              <Message
                key={message.id}
                $isUser={message.sender === 'user'}
                variants={messageVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="message-icon">
                  <FontAwesomeIcon icon={message.sender === 'user' ? faUser : faFilm} />
                </div>
                <div className="message-content">
                  <div className="message-text">
                    {message.text}
                    {message.id === messages[messages.length - 1].id && 
                     message.sender === 'ai' && 
                     isStreaming && (
                      <span className="cursor">|</span>
                    )}
                  </div>
                  <div className="message-meta">
                    <div className="message-time">{formatTimestamp(message.timestamp)}</div>
                  </div>
                </div>
              </Message>
            ))}
          </AnimatePresence>
        )}
        <div ref={messagesEndRef} />
      </MessagesContainer>
      
      <InputContainer>
        <input
          type="text"
          placeholder="Paklauskite Džiuljetos apie produktyvumą..."
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          disabled={isLoading}
        />
        <button onClick={sendMessage} disabled={isLoading || !input.trim()}>
          {isLoading ? <FontAwesomeIcon icon={faSpinner} spin /> : <FontAwesomeIcon icon={faPaperPlane} />}
        </button>
      </InputContainer>
      
      <SuggestedQueries>
        <h3><FontAwesomeIcon icon={faLightbulb} /> Siūlomi klausimai:</h3>
        <div className="queries">
          {suggestedQueries.map((query, index) => (
            <button key={index} onClick={() => handleSuggestedQuery(query)}>
              {query}
            </button>
          ))}
        </div>
      </SuggestedQueries>
    </ChatContainer>
  );
};

export default AIChat; 