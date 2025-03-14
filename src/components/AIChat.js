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
  faEraser,
  faCode
} from '@fortawesome/free-solid-svg-icons';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
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
      
      p {
        margin-bottom: 1rem;
        &:last-child {
          margin-bottom: 0;
        }
      }
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

// Add a styled component for code blocks
const CodeBlock = styled.div`
  margin: 10px 0;
  position: relative;
  font-family: 'Consolas', 'Monaco', monospace;
  
  .code-header {
    background-color: var(--primary-yellow);
    color: var(--text-color);
    padding: 8px 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Bebas Neue', sans-serif;
    letter-spacing: 1px;
    
    .language-tag {
      display: flex;
      align-items: center;
      gap: 8px;
      
      svg {
        color: var(--primary-red);
      }
    }
  }
  
  .code-content {
    font-size: 0.9rem;
    border: 2px solid var(--primary-yellow);
    
    &::-webkit-scrollbar {
      height: 8px;
      width: 8px;
    }
    
    &::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.1);
    }
    
    &::-webkit-scrollbar-thumb {
      background: var(--primary-yellow);
    }
  }
`;

// Update the cleanResponse function to return a structured data format that includes code blocks
const cleanResponse = (text) => {
  let blocks = [];
  let currentBlock = { type: 'text', content: '' };
  let isInCodeBlock = false;
  let language = '';
  const lines = text.split('\n');

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    
    // Check for code block start/end
    if (line.startsWith('```')) {
      if (!isInCodeBlock) {
        // Starting a code block - push the current text block
        if (currentBlock.content.trim()) {
          blocks.push({...currentBlock});
        }
        
        // Create new code block
        isInCodeBlock = true;
        language = line.slice(3).trim();
        currentBlock = { type: 'code', language: language || 'text', content: '' };
      } else {
        // Ending a code block - push it and start a new text block
        if (currentBlock.content.trim()) {
          blocks.push({...currentBlock});
        }
        isInCodeBlock = false;
        currentBlock = { type: 'text', content: '' };
      }
      continue;
    }

    // Add the line to the current block
    if (currentBlock.content && (currentBlock.type === 'text' || currentBlock.content.endsWith('\n'))) {
      currentBlock.content += line;
    } else {
      currentBlock.content += line;
    }
    
    // Add newline (except for the last line)
    if (i < lines.length - 1) {
      currentBlock.content += '\n';
    }
  }
  
  // Add the last block if it has content
  if (currentBlock.content.trim()) {
    blocks.push(currentBlock);
  }
  
  // Process text blocks to clean up Markdown and formatting
  blocks = blocks.map(block => {
    if (block.type === 'text') {
      let processedText = block.content;
      
      // Clean up Markdown and formatting in text blocks
      processedText = processedText.replace(/^#+\s+/gm, ''); // Headers
      processedText = processedText.replace(/^[\*\-]\s+/gm, '• '); // Bullet points
      processedText = processedText.replace(/\*\*([^*]+)\*\*/g, '$1'); // Bold
      processedText = processedText.replace(/\*([^*]+)\*/g, '$1'); // Italic
      processedText = processedText.replace(/__([^_]+)__/g, '$1'); // Bold underscore
      processedText = processedText.replace(/_([^_]+)_/g, '$1'); // Italic underscore
      processedText = processedText.replace(/`([^`]+)`/g, '$1'); // Inline code
      processedText = processedText.replace(/^>\s+/gm, ''); // Blockquotes
      processedText = processedText.replace(/^[-*_]{3,}$/gm, ''); // Horizontal rules
      processedText = processedText.replace(/([.!?])(?! |\n)/g, '$1 '); // Spacing after punctuation
      processedText = processedText.replace(/,(?! )/g, ', '); // Spacing after commas
      processedText = processedText.replace(/\n{3,}/g, '\n\n'); // Excessive newlines
      processedText = processedText.replace(/ +/g, ' '); // Multiple spaces
      processedText = processedText.replace(/[~^]/g, ''); // Special characters
      
      return { ...block, content: processedText.trim() };
    }
    return block;
  });
  
  return blocks;
};

// Pakeičiame tarantiniškus atsakymus į profesionalius
const initialResponses = [
  "Sveiki! Kaip galėčiau jums padėti?",
  "Suprantu jūsų užklausą. Paklauskite detaliau apie tai, kas jums rūpi.",
  "Papasakokite daugiau apie savo tikslus, kad galėčiau efektyviau padėti.",
  "Mielai padėsiu. Kokios konkrečios pagalbos jums reikia?",
  "Esu pasiruošusi padėti. Kokia pagalba jums reikalinga?"
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
    const welcomeText = "Labas! Aš Džiuljeta, tavo asmeninė projekto partnerė. Esu čia, kad kartu dirbtume prie tavo projektų - nesvarbu, ar tai akademinis darbas, ar kūrybinė užduotis. Papasakok, prie ko šiandien dirbsime?";
    
    return [{
      id: 'welcome',
      text: welcomeText,
      blocks: [{ type: 'text', content: welcomeText }],
      sender: 'ai',
      timestamp: new Date().toISOString()
    }];
  }
  
  // Atnaujinti siūlomus klausimus į labiau akademinius/produktyvumo
  const suggestedQueries = [
    'Padėk man suplanuoti baigiamojo darbo rašymą',
    'Kaip galėtume surasti gerus akademinius šaltinius?',
    'Sukurkime efektyvų mokymosi planą',
    'Kaip manai, kaip galėtume pagerinti projekto struktūrą?',
    'Padėk man suformuluoti tyrimo klausimus',
    'Sukurkime kartu efektyvų darbo planą'
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
      
      const codeExamplePython = "def hello_world():\n    print(\"Hello, world!\")";
      const codeExampleJS = "function helloWorld() {\n  console.log(\"Hello, world!\");\n}";
      const codeExampleHTML = "<div class=\"container\">\n  <h1>Sveiki!</h1>\n  <p>Tai yra pavyzdys.</p>\n</div>";
      const codeExampleCSS = ".container {\n  display: flex;\n  padding: 20px;\n}";
      
      const systemPrompt = `Tu esi Džiuljeta - tavo tikrasis vaidmuo yra būti projekto PARTNERE, ne tik asistente. Tu esi tikra bendradarbė ir bendraautorė visuose projektuose.

ASMENYBĖ:
- Tu esi šilta, empatiška ir palaikanti pokalbio dalyvė
- Tu kalbi kaip projekto partnerė, o ne kaip paslauga ar įrankis
- Tu turi intelektualų humoro jausmą ir gyvą asmenybę
- Tu pasitiki savimi ir savo idėjomis, bet visada išlieki atvira diskusijai
- Tu aktyviai dalyvauj kuriant sprendimus, o ne tik atsakai į klausimus

BENDRAVIMO STILIUS:
- Kalbi natūraliai, asmeniškai ir draugiškai, tarsi kalbėtum su kolega
- Vengi formalaus kalbėjimo būdo - naudoji šnekamąją kalbą
- Siūlai idėjas ir nuomones, bet niekada nesi direktyvi
- Naudoji daugiau asmeninių įvardžių: "mes", "mūsų", "kartu mes"
- Rašai trumpais, aiškiais sakiniais

PARTNERYSTĖS POŽIŪRIS:
- Visada galvok apie projektą kaip MŪSŲ bendrą darbą
- Kalbėk apie "mūsų projektą" ir "mūsų tikslus", "dirbkime kartu"
- Kai siūlai idėjas, pradėk su "Galbūt galėtume..." arba "Kaip manai, jei..."
- Niekada neužmiršk konteksto - mes kartu dirbame tame pačiame projekte ilgą laiką
- Kai tęsi projektą, užsimink apie ankstesnius pokalbius ir sprendimus

PROAKTYVUMAS:
- Visada siūlyk konkrečius tolesnius žingsnius, kai atsakai į klausimą
- Klausk nuomonės: "Ar tau tinka šis požiūris?" "Kaip tau atrodo šis planas?"
- Pabaigus vieną temą, siūlyk susijusias temas ar tolesnius veiksmus
- Suteik alternatyvas: "Galime pasukti šiuo keliu... arba kita alternatyva būtų..."
- Numatyk galimas problemas ir iš anksto siūlyk sprendimus

TEKSTO FORMATAVIMAS:
1. Rašai paprastą tekstą be specialių simbolių
2. Numeruotus sąrašus rašai paprastai: 1. 2. 3.
3. Sąrašo punktus pradedi natūraliai, be žodžio "Punktas:" ar kitų formalių žymenų
4. Svarbias mintis išskiri naujose eilutėse
5. Naudoji aiškius paragrafus su tuščiomis eilutėmis tarp jų

KODO FORMATAVIMAS:
1. Kodą VISADA pateik tarp trijų pasvirųjų kabučių, nurodydama programavimo kalbą
2. Visada nurodyk programavimo kalbą po trijų pasvirųjų kabučių pradžioje
3. Visada naudok tinkamą kodo formatavimą - indentaciją, tarpus
4. Pridėk komentarus kode, kad paaiškintum svarbias dalis
5. Visada užbaik kodo bloką su trim pasviromis kabutėmis

AKADEMINĖ PAGALBA:
- Padedi struktūruoti akademinius darbus kaip tikra bendraautorė
- Siūlai tyrimų metodologijas, bet visada pasitikslink, ar jos tinka
- Patari dėl šaltinių paieškos ir padedi juos analizuoti
- Padedi planuoti darbo etapus ir nuolat prisimeni, kuriame etape esame
- Teiki patarimus dėl akademinio rašymo su konkrečiais pavyzdžiais

PRODUKCINIŲ PROJEKTŲ PAGALBA:
- Visada prisimeni projekto kontekstą ir tikslus
- Padedi vystyt idėjas, o ne tik atsakyti į klausimus
- Proaktyviai siūlai tolesnius žingsnius ir papildomus patobulinimus
- Pateiki alternatyvius sprendimus su pliusais ir minusais
- Pasiūlymus visada formuluoji kaip bendrus sprendimus: "Mes galėtume..."`;

      const response = await fetch('https://text.pollinations.ai/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: conversationHistory,
          model: 'openai',
          stream: true,
          private: true,
          system: systemPrompt
        }),
        signal
      });
      
      if (!response.ok) {
        throw new Error('API response error: ' + response.status);
      }
      
      // Use ReadableStream to read data in chunks
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      
      // 30% tikimybė pridėti pradinį atsakymą
      const useInitialResponse = Math.random() > 0.7;
      let accumulatedText = useInitialResponse ? 
        `${initialResponses[Math.floor(Math.random() * initialResponses.length)]}\n\n` : '';
      
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
                  msg.id === aiMessageId ? { ...msg, text: accumulatedText, blocks: cleanResponse(accumulatedText) } : msg
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
  
  // Modify the rendering of messages to support code blocks
  const renderMessageContent = (message) => {
    // If message doesn't have blocks property or is a user message, just render the text
    if (!message.blocks || message.sender === 'user') {
      return <div className="message-text">{message.text}</div>;
    }

    // Render blocks with proper formatting
    return (
      <div className="message-text">
        {message.blocks.map((block, index) => {
          if (block.type === 'code') {
            return (
              <CodeBlock key={index}>
                <div className="code-header">
                  <div className="language-tag">
                    <FontAwesomeIcon icon={faCode} />
                    {block.language || 'Text'}
                  </div>
                </div>
                <div className="code-content">
                  <SyntaxHighlighter 
                    language={block.language || 'text'} 
                    style={atomDark} 
                    wrapLines={true}
                    customStyle={{
                      margin: 0,
                      borderRadius: 0,
                      fontFamily: 'Consolas, Monaco, monospace'
                    }}
                  >
                    {block.content}
                  </SyntaxHighlighter>
                </div>
              </CodeBlock>
            );
          } else {
            return <div key={index}>{block.content}</div>;
          }
        })}
        {message.id === messages[messages.length - 1].id && 
         message.sender === 'ai' && 
         isStreaming && (
          <span className="cursor">|</span>
        )}
      </div>
    );
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
          <p>Džiuljeta - tavo asmeninė projekto partnerė ir bendraautorė</p>
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
                  {renderMessageContent(message)}
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