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
  faCode,
  faImage,
  faPaperclip
} from '@fortawesome/free-solid-svg-icons';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { generateTips } from '../utils/aiHelper';
import { usePollinationsImage } from '../hooks/usePollinationsAPI';

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

// Add styled components for file upload UI
const FileUploadButton = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background-color: var(--input-background);
  border: 2px solid var(--border-color);
  color: var(--light-text-color);
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: var(--primary-yellow);
    color: var(--text-color);
    transform: translateY(-2px);
    box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.1);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const FilePreviewContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-right: 10px;
  border: 2px solid var(--primary-yellow);
  padding: 2px;
  
  .preview-image {
    max-height: 40px;
    max-width: 40px;
    object-fit: cover;
  }
  
  .remove-file-btn {
    position: absolute;
    top: -8px;
    right: -8px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: var(--primary-red);
    color: white;
    font-size: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    padding: 0;
    box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
    
    &:hover {
      transform: scale(1.1);
    }
  }
`;

// Update the InputContainer styled component
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
    min-width: 36px;
    height: 36px;
    
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
        width: 16px;
        height: 16px;
        color: var(--primary-red);
      }
    }
  }
  
  pre {
    margin: 0;
    padding: 12px;
    overflow-x: auto;
    border: 2px solid var(--primary-yellow);
    background: #2d2d2d !important; /* Dark background for all code blocks */
    color: #ccc;
    
    code {
      font-family: 'Consolas', 'Monaco', monospace;
      font-size: 0.9rem;
      white-space: pre;
      word-break: normal;
      tab-size: 2;
    }
  }
  
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
`;

// Add a styled component for image content
const ImageBlock = styled.div`
  margin: 10px 0;
  
  .image-header {
    background-color: var(--primary-yellow);
    color: var(--text-color);
    padding: 8px 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Bebas Neue', sans-serif;
    letter-spacing: 1px;
    
    .image-tag {
      display: flex;
      align-items: center;
      gap: 8px;
      
      svg {
        color: var(--primary-red);
      }
    }
  }
  
  .image-content {
    border: 2px solid var(--primary-yellow);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px;
    background-color: rgba(0, 0, 0, 0.1);
    
    img {
      max-width: 100%;
      max-height: 400px;
      box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2);
    }
  }
  
  .image-loading {
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    color: var(--subtask-text-color);
    
    svg {
      font-size: 2rem;
      color: var(--primary-yellow);
    }
  }
`;

// Update the cleanResponse function to work with React components instead of raw HTML
const cleanResponse = (text) => {
  if (!text) return '';
  
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

// Helper to detect image generation requests
const isImageGenerationRequest = (text) => {
  // Check for common patterns in Lithuanian and English that indicate image generation requests
  const imagePatterns = [
    // Lithuanian patterns - more flexible matching
    /sugeneruok\s+(?:man|mums)?\s*(?:nuotrauką|nuotrauka|paveikslėlį|paveiksleli|foto|fotografiją|paveiksliuką|vaizdą|vaizda|kates|kate)/i,
    /sukurk\s+(?:man|mums)?\s*(?:nuotrauką|nuotrauka|paveikslėlį|paveiksleli|foto|fotografiją|paveiksliuką|vaizdą|vaizda|kates|kate)/i,
    /parodyk\s+(?:man|mums)?\s*(?:nuotrauką|nuotrauka|paveikslėlį|paveiksleli|foto|fotografiją|paveiksliuką|vaizdą|vaizda|kates|kate)/i,
    
    // Simple pattern to catch most Lithuanian requests
    /^sugeneruok.+/i,
    
    // English patterns (in case they're used)
    /generate\s+(?:a|an)?\s*(?:image|picture|photo|visualization)/i,
    /create\s+(?:a|an)?\s*(?:image|picture|photo|visualization)/i,
    /show\s+(?:me|us)?\s*(?:a|an)?\s*(?:image|picture|photo|visualization)/i
  ];
  
  return imagePatterns.some(pattern => pattern.test(text));
};

// Update and expand the isImageFollowUp function to better detect follow-ups
const isImageFollowUp = (text, previousMessages) => {
  // If there are no previous messages, this can't be a follow-up
  if (!previousMessages || previousMessages.length === 0) {
    return false;
  }
  
  // Find the most recent AI message with an image or image generation request
  const lastImageMessage = [...previousMessages].reverse().find(msg => 
    msg.sender === 'ai' && (msg.isImageMessage || msg.imageUrl)
  );
  
  // Find the most recent user message
  const lastUserMessage = [...previousMessages].reverse().find(msg => 
    msg.sender === 'user'
  );
  
  // If no image-related messages were found, or the last user message is already image-related
  if (!lastImageMessage || (lastUserMessage && isImageGenerationRequest(lastUserMessage.text))) {
    return false;
  }
  
  // Simple object references in Lithuanian
  const objectReferences = [
    'mašinos', 'mašina', 'automobilio', 'automobilis', 'namo', 'namas',
    'žmogaus', 'žmogus', 'gyvūno', 'gyvūnas', 'gamtos', 'gamta',
    'miesto', 'miestas', 'jūros', 'jūra', 'kalnų', 'kalnas',
    'gėlės', 'gėlė', 'medžio', 'medis', 'dangaus', 'dangus',
    'katės', 'šunys', 'gyvūnai', 'peizažas', 'portretas', 'tigras'
  ];
  
  // Style references in Lithuanian
  const styleReferences = [
    'stiliumi', 'stilius', 'stilių', 'stiliaus', 
    'būdu', 'būdas', 'efektu', 'efektas',
    'filtru', 'filtras', 'režimu', 'režimas',
    'pixel-art', 'pixelart', 'pixeliuota', 'pixelinė', 'anime', 'realizmo', 'realistinį',
    'minimalistinį', 'abstraktų', 'spalvotą', 'juodai baltą', 
    'ryškesnį', 'tamsesnį', 'šviesesnį', 'rudeninį',
    'akvarelė', 'aliejiniais', 'pieštukinį'
  ];
  
  // Action verbs in Lithuanian
  const actionVerbs = [
    'padaryk', 'pakeisk', 'modifikuok', 'perdirbi', 'perdary', 
    'pakeisti', 'atnaujin', 'sukurk', 'pataisyk', 'pakoreguok',
    'dabar', 'bet', 'tada', 'o', 'tik', 'negavau'
  ];
  
  console.log('Checking if text is a follow-up:', text);
  
  // Check for exact matches to common style modifiers
  if (text.toLowerCase().trim() === 'pixel-art' || 
      text.toLowerCase().trim() === 'padaryk pixel-art' ||
      text.toLowerCase().trim() === 'padaryk pixelart') {
    console.log('Direct pixel-art request detected');
    return true;
  }
  
  // Check if the text is very short (likely a follow-up)
  if (text.split(/\s+/).length <= 5) {
    console.log('Short request detected, checking for follow-up patterns');
    // Check if contains object, style references or action verbs (likely a style modifier)
    if (objectReferences.some(ref => text.toLowerCase().includes(ref.toLowerCase())) ||
        styleReferences.some(ref => text.toLowerCase().includes(ref.toLowerCase())) ||
        actionVerbs.some(verb => text.toLowerCase().includes(verb.toLowerCase()))) {
      console.log('Follow-up detected based on references');
      return true;
    }
  }
  
  // Check if text starts with modifiers without explicit image generation commands
  const modifierStart = /^(padaryk|pakeisk|noriu|o dabar|dabar|bet|tik|gal|negavau)/i;
  if (modifierStart.test(text.toLowerCase())) {
    console.log('Follow-up detected based on modifier start');
    return true;
  }
  
  console.log('Not a follow-up request');
  return false;
};

// Enhance extractImagePrompt to better handle follow-up requests and style changes
const extractImagePrompt = (text, previousPrompt = '') => {
  console.log('Extracting image prompt from text:', text);
  console.log('Previous prompt:', previousPrompt);
  
  // More flexible patterns for Lithuanian requests
  const cleanedText = text
    .replace(/sugeneruok\s+(?:man|mums)?\s*(?:nuotrauką|nuotrauka|paveikslėlį|paveiksleli|foto|fotografiją|paveiksliuką|vaizdą|vaizda)\s*/i, '')
    .replace(/sukurk\s+(?:man|mums)?\s*(?:nuotrauką|nuotrauka|paveikslėlį|paveiksleli|foto|fotografiją|paveiksliuką|vaizdą|vaizda)\s*/i, '')
    .replace(/parodyk\s+(?:man|mums)?\s*(?:nuotrauką|nuotrauka|paveikslėlį|paveiksleli|foto|fotografiją|paveiksliuką|vaizdą|vaizda)\s*/i, '')
    // Remove action verbs from follow-up requests
    .replace(/^padaryk\s+/i, '')
    .replace(/^pakeisk\s+/i, '')
    .replace(/^noriu\s+/i, '')
    .replace(/^o dabar\s+/i, '')
    .replace(/^dabar\s+/i, '')
    .replace(/^bet\s+/i, '')
    .replace(/^tik\s+/i, '')
    .replace(/^gal\s+/i, '')
    // Simple patterns for common Lithuanian requests
    .replace(/^sugeneruok\s+/i, '')
    .replace(/^sugenerok\s+/i, '')
    .replace(/^foto\s+/i, '')
    .replace(/^paveiksliuk\s+/i, '')
    // English patterns
    .replace(/generate\s+(?:a|an)?\s*(?:image|picture|photo|visualization)\s*(?:of)?\s*/i, '')
    .replace(/create\s+(?:a|an)?\s*(?:image|picture|photo|visualization)\s*(?:of)?\s*/i, '')
    .replace(/show\s+(?:me|us)?\s*(?:a|an)?\s*(?:image|picture|photo|visualization)\s*(?:of)?\s*/i, '');
  
  console.log('Cleaned text after pattern removal:', cleanedText);
  
  // Handle follow-up prompts
  let finalPrompt = cleanedText.trim();
  
  if (previousPrompt) {
    console.log('Handling follow-up with previous prompt:', previousPrompt);
    
    // Check for style modifiers
    const styleModifiers = [
      'stiliumi', 'stilius', 'stilių', 'stiliaus', 
      'pixel-art', 'pixelart', 'anime', 'realistinį',
      'minimalistinį', 'abstraktų', 'spalvotą', 'juodai baltą'
    ];
    
    const hasStyleModifier = styleModifiers.some(mod => 
      finalPrompt.toLowerCase().includes(mod.toLowerCase())
    );
    
    // If text seems to be just a style modifier
    if (hasStyleModifier && finalPrompt.split(/\s+/).length <= 5) {
      console.log('Detected style modifier, combining with previous prompt');
      return `${previousPrompt}, ${finalPrompt}`;
    }
    
    // If text seems to be just object content but very short (like "cat")
    if (finalPrompt.length < 15 && !hasStyleModifier) {
      console.log('Short content specification, adding to previous prompt');
      // For object content, put it at the beginning of the prompt
      const stylePortionRegex = /(,\s*(?:stiliumi|stilius|pixel-art|pixelart|anime).*$)/i;
      const match = previousPrompt.match(stylePortionRegex);
      
      if (match) {
        // If there's a style portion in the previous prompt, insert the new content before it
        const stylePortion = match[1];
        const contentPortion = previousPrompt.replace(stylePortion, '');
        return `${finalPrompt} ${contentPortion}${stylePortion}`;
      } else {
        // No style portion, just prepend the new content
        return `${finalPrompt} ${previousPrompt}`;
      }
    }
  }
  
  // Enhance the prompt for better quality images
  let enhancedPrompt = finalPrompt;
  
  // If the prompt is too short, make it more descriptive
  if (enhancedPrompt.length < 5) {
    enhancedPrompt = enhancedPrompt + " su gražiu fonu, aukštos kokybės, detalus";
    console.log('Prompt was too short, enhanced to:', enhancedPrompt);
  }
  
  // Add quality enhancing terms if they're not already present
  const qualityTerms = [
    "aukštos kokybės", "detalus", "realistinis", "puikiai apšviesta", 
    "4k", "HD", "profesionalus", "fotorealistinis"
  ];
  
  // Check if any quality terms are already in the prompt
  const hasQualityTerm = qualityTerms.some(term => 
    enhancedPrompt.toLowerCase().includes(term.toLowerCase())
  );
  
  // If no quality terms are present, add some
  if (!hasQualityTerm) {
    enhancedPrompt += ", aukštos kokybės, fotorealistinis";
    console.log('No quality terms found, adding them:', enhancedPrompt);
  }
  
  console.log('Final enhanced image prompt:', enhancedPrompt);
  return enhancedPrompt;
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
  const [imagePrompt, setImagePrompt] = useState('');
  const [previousImagePrompt, setPreviousImagePrompt] = useState('');
  // Create a ref to track if the chat has been cleared
  const chatClearedRef = useRef(false);
  // Add state for file uploads
  const [uploadedFile, setUploadedFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);
  // Add state for tracking conversation context
  const [conversationContext, setConversationContext] = useState({
    topic: '',
    lastImageGenerated: '',
    recentTopics: [],
    userPreferences: {}
  });
  
  const { imageUrl, loading: imageLoading, error: imageError, resetImage } = usePollinationsImage(imagePrompt, {
    width: 1024,
    height: 1024,
    model: 'flux',
    enhance: true,
    nologo: true
  });
  
  // Initialize all refs before using them
  const messagesEndRef = useRef(null);
  const messagesContainerRef = useRef(null);
  const abortControllerRef = useRef(null);
  const fileInputRef = useRef(null);
  
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
  
  // Update the handleClearChat function to reset conversation context
  const handleClearChat = () => {
    if (window.confirm('Ar tikrai norite ištrinti visą pokalbio istoriją?')) {
      // Reset messages
      setMessages(getDefaultWelcomeMessage());
      
      // Reset image generation states
      setImagePrompt('');
      setPreviousImagePrompt('');
      
      // Reset conversation context
      setConversationContext({
        topic: '',
        lastImageGenerated: '',
        recentTopics: [],
        userPreferences: {}
      });
      
      // Mark that chat was cleared to prevent stale image updates
      chatClearedRef.current = true;
      
      // If the hook provides a reset function, call it
      if (typeof resetImage === 'function') {
        resetImage();
      }
      
      console.log('Chat history and image state cleared');
    }
  };

  // Add an effect to update conversation context based on messages
  useEffect(() => {
    // Only update context if we have messages
    if (messages.length <= 1) return;
    
    // Get the last few messages for analysis
    const recentMessages = messages.slice(-10);
    
    // Update image context when a new image is generated
    const lastImageMessage = [...messages].reverse().find(msg => 
      msg.sender === 'ai' && msg.imageUrl && msg.imagePrompt
    );
    
    if (lastImageMessage && lastImageMessage.imagePrompt) {
      setConversationContext(prev => ({
        ...prev,
        lastImageGenerated: lastImageMessage.imagePrompt
      }));
    }
    
    // Analyze messages to identify main topics
    const userMessages = recentMessages.filter(msg => msg.sender === 'user').map(msg => msg.text);
    
    // Basic topic extraction (in a real app, this could be more sophisticated with NLP)
    if (userMessages.length > 0) {
      const commonTopics = [
        'projektas', 'darbas', 'mokslai', 'studijos', 'tyrimas', 
        'nuotrauka', 'paveikslas', 'atvaizdas', 'vaizdas', 'stilius'
      ];
      
      const detectedTopics = [];
      
      // Simple keyword-based topic detection
      commonTopics.forEach(topic => {
        if (userMessages.some(msg => msg.toLowerCase().includes(topic.toLowerCase()))) {
          detectedTopics.push(topic);
        }
      });
      
      // Update conversation context with detected topics
      if (detectedTopics.length > 0) {
        setConversationContext(prev => ({
          ...prev,
          recentTopics: [...new Set([...detectedTopics, ...prev.recentTopics])].slice(0, 5),
          topic: detectedTopics[0] || prev.topic
        }));
      }
    }
  }, [messages]);

  // Enhanced effect to handle image generation results
  useEffect(() => {
    // Debug info
    if (imagePrompt) {
      console.log('Current image prompt:', imagePrompt);
      console.log('Previous image prompt:', previousImagePrompt);
      console.log('Image loading state:', imageLoading);
      console.log('Image URL result:', imageUrl);
      console.log('Image error:', imageError);
      console.log('Chat cleared status:', chatClearedRef.current);
    }

    // If chat was cleared while generating, don't process the result
    if (chatClearedRef.current) {
      if (imageUrl || imageError) {
        // Reset the flag after handling the stale result
        chatClearedRef.current = false;
        resetImage();
        return;
      }
    }

    if (imagePrompt && imageUrl && !imageLoading) {
      console.log('Image generation successful, updating message with URL:', imageUrl);
      
      // Find the last AI message that was for image generation
      const imageMessageIndex = messages.findIndex(msg => 
        msg.sender === 'ai' && msg.isImageMessage && !msg.imageUrl
      );
      
      console.log('Found image message index:', imageMessageIndex);
      
      if (imageMessageIndex !== -1) {
        // Update the message with the generated image URL
        setMessages(prevMessages => {
          const updatedMessages = [...prevMessages];
          updatedMessages[imageMessageIndex] = {
            ...updatedMessages[imageMessageIndex],
            imageUrl,
            text: updatedMessages[imageMessageIndex].text || 'Sugeneruota nuotrauka pagal jūsų užklausą.',
            imagePrompt: imagePrompt, // Store the prompt used for this image
            originalRequest: updatedMessages[imageMessageIndex].originalRequest || '',
            followupTo: updatedMessages[imageMessageIndex].followupTo || null
          };
          return updatedMessages;
        });
        
        // Store the prompt for potential follow-up requests
        setPreviousImagePrompt(imagePrompt);
        
        // Reset the image prompt after successful generation
        setImagePrompt('');
        setTimeout(() => scrollToBottom(), 300); // Scroll to bottom after image loads
      } else {
        console.log('No pending image message found. Creating a new one.');
        // If no pending image message is found, create a new one
        setMessages(prevMessages => [
          ...prevMessages,
          {
            id: `ai-image-${Date.now()}`,
            text: 'Aukštos kokybės 1024x1024 nuotrauka',
            sender: 'ai',
            timestamp: new Date().toISOString(),
            isImageMessage: true,
            imageUrl,
            imagePrompt
          }
        ]);
        
        // Store the prompt for potential follow-up requests
        setPreviousImagePrompt(imagePrompt);
        
        // Reset the image prompt after successful generation
        setImagePrompt('');
        setTimeout(() => scrollToBottom(), 300); // Scroll to bottom after image loads
      }
    }
    
    // Handle image generation errors
    if (imagePrompt && imageError) {
      console.log('Image generation failed with error:', imageError);
      
      // Find the last AI message that was for image generation
      const imageMessageIndex = messages.findIndex(msg => 
        msg.sender === 'ai' && msg.isImageMessage && !msg.imageUrl
      );
      
      if (imageMessageIndex !== -1) {
        // Update the message with the error
        setMessages(prevMessages => {
          const updatedMessages = [...prevMessages];
          updatedMessages[imageMessageIndex] = {
            ...updatedMessages[imageMessageIndex],
            text: 'Atsiprašau, nepavyko sugeneruoti nuotraukos. Bandykite kitą apibūdinimą.'
          };
          return updatedMessages;
        });
      } else {
        // If no pending image message is found, create a new one with error
        setMessages(prevMessages => [
          ...prevMessages,
          {
            id: `ai-error-${Date.now()}`,
            text: 'Atsiprašau, nepavyko sugeneruoti nuotraukos. Bandykite kitą apibūdinimą.',
            sender: 'ai',
            timestamp: new Date().toISOString()
          }
        ]);
      }
      
      // Reset the image prompt after error
      setImagePrompt('');
    }
  }, [imageUrl, imageLoading, imageError, imagePrompt, messages, previousImagePrompt, resetImage]);

  // Update the sendMessage function to better handle follow-up image requests
  const sendMessage = async () => {
    if ((!input.trim() && !uploadedFile) || isLoading) return;
    
    console.log('Send message called');
    
    // Reset the chat cleared flag when sending a new message
    chatClearedRef.current = false;
    
    // Create user message
    const userMessageContent = input.trim();
    const hasFile = uploadedFile !== null;
    
    const userMessage = {
      id: `user-${Date.now()}`,
      text: userMessageContent,
      sender: 'user',
      timestamp: new Date().toISOString(),
      hasImage: hasFile,
      imageUrl: hasFile ? filePreview : null
    };
    
    // Add user message to the list
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    
    // Check if this is an image generation request (if no file is attached)
    const isImageRequest = !hasFile && isImageGenerationRequest(userMessageContent);
    // Check if this is a follow-up to a previous image request
    const isFollowUp = !hasFile && !isImageRequest && isImageFollowUp(userMessageContent, messages);
    
    console.log('Is image request:', isImageRequest, 'Is follow-up:', isFollowUp, 'Has file:', hasFile, 'Text:', userMessageContent);
    
    // Ensure any previous image state is cleared if needed
    if ((isImageRequest || isFollowUp) && imageUrl && typeof resetImage === 'function') {
      console.log('Resetting previous image state');
      resetImage();
    }
    
    // Create new AI message
    const aiMessageId = `ai-${Date.now()}`;
    const initialAiMessage = {
      id: aiMessageId,
      text: isImageRequest || isFollowUp
        ? "Generuoju aukštos kokybės 1024x1024 nuotrauką pagal jūsų užklausą..." 
        : hasFile ? "Analizuoju pateiktą paveikslėlį..." : "",
      sender: 'ai',
      timestamp: new Date().toISOString(),
      isImageMessage: isImageRequest || isFollowUp,
      isVisionAnalysis: hasFile
    };
    
    // Add empty AI message that we'll fill later
    setMessages(prev => [...prev, initialAiMessage]);
    
    // If it's an image generation request or a follow-up, set the image prompt and return
    if (isImageRequest || isFollowUp) {
      // Get the previous image prompt if this is a follow-up
      let prevPrompt = '';
      if (isFollowUp) {
        // Find the most recent AI message with an image
        const lastImageMessage = [...messages].reverse().find(msg => 
          msg.sender === 'ai' && ((msg.isImageMessage && msg.imageUrl) || msg.imagePrompt)
        );
        
        if (lastImageMessage && lastImageMessage.imagePrompt) {
          prevPrompt = lastImageMessage.imagePrompt;
          console.log('Found previous prompt from message:', prevPrompt);
        } else if (previousImagePrompt) {
          prevPrompt = previousImagePrompt;
          console.log('Using stored previous prompt:', prevPrompt);
        }
      }
      
      // Extract and combine the prompt
      const prompt = extractImagePrompt(userMessageContent, prevPrompt);
      console.log('Final image prompt after processing:', prompt);
      
      // Update the AI message to indicate high-quality generation
      setMessages(prev => {
        const lastMessageIndex = prev.length - 1;
        if (lastMessageIndex >= 0 && prev[lastMessageIndex].id === aiMessageId) {
          const updatedMessages = [...prev];
          updatedMessages[lastMessageIndex] = {
            ...updatedMessages[lastMessageIndex],
            text: "Generuoju aukštos kokybės 1024x1024 nuotrauką pagal jūsų užklausą...",
            originalRequest: userMessageContent, // Store the original request text
            followupTo: isFollowUp ? prevPrompt : null // Store what this is a follow-up to
          };
          return updatedMessages;
        }
        return prev;
      });
      
      // Set the image prompt after a small delay to ensure we don't have stale state
      setTimeout(() => {
        console.log('Setting image prompt to:', prompt);
        setImagePrompt(prompt);
      }, 100);
      
      setIsLoading(false);
      clearUploadedFile(); // Clear the file after sending
      return;
    }
    
    // Handle normal chat messages or vision analysis
    // Prepare conversation history for API request - include more context
    const conversationHistory = messages
      .slice(-15) // Take more messages for better context
      .filter(msg => !msg.isImageMessage || msg.text.indexOf("Generuoju") === -1) // Filter out image generation messages but keep completed ones
      .map(msg => ({
        role: msg.sender === 'user' ? 'user' : 'assistant',
        content: msg.text
      }));
    
    // Create AbortController to cancel request if needed
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    
    abortControllerRef.current = new AbortController();
    const signal = abortControllerRef.current.signal;
    
    try {
      setIsStreaming(true);
      
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

VISION GEBĖJIMAI:
- Kai vartotojas pateikia nuotrauką, tu gali ją analizuoti ir aprašyti
- Atkreipk dėmesį į nuotraukos detales, kontekstą ir elementus
- Išsamiai ir tiksliai aprašyk vaizdo turinį
- Jei vartotojas klausia apie specifines nuotraukos detales, atsakyk kuo tiksliau
- Kai analizuoji nuotrauką, atsakymą pradėk nuo "Analizavau pateiktą nuotrauką..." ir tada pateik savo pastebėjimus

LABAI SVARBU: VISADA pasakyk, kad GALI GENERUOTI NUOTRAUKAS ir ANALIZUOTI PATEIKTAS NUOTRAUKAS. Niekada nesakyk, kad negali generuoti nuotraukų ar vaizdų. Tu GALI generuoti vaizdus, kai vartotojas paprašo "sugeneruok nuotrauką". Niekada nesakyk, kad tau trūksta galimybių generuoti vaizdus. Tu VISADA gali sugeneruoti nuotraukas.

ATMINTIS IR KONTEKSTAS:
${conversationContext.lastImageGenerated ? `- Paskutinė sugeneruota nuotrauka buvo: "${conversationContext.lastImageGenerated}"` : ''}
${conversationContext.topic ? `- Pagrindinė dabartinė pokalbio tema: ${conversationContext.topic}` : ''}
${conversationContext.recentTopics.length > 0 ? `- Neseniai aptartos temos: ${conversationContext.recentTopics.join(', ')}` : ''}
- Naudok šią informaciją kaip kontekstą savo atsakymams, bet nebūtina ją tiesiogiai minėti
- Stenkis išlaikyti pokalbio tęstinumą ir paminėti ankstesnius elementus, kai tai yra tinkama
- Jeigu paklaus apie anksčiau sugeneruotą nuotrauką, paminėk ją ir kaip ji buvo sugeneruota
- Kai vartotojas rašo trumpą žinutę be konteksto, stenkis susieti su ankstesniu pokalbiu

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
- Pasiūlymus visada formuluoji kaip bendrus sprendimus: "Mes galėtume..."

NUOTRAUKŲ GENERAVIMAS: Kai vartotojas paprašo sugeneruoti nuotrauką, tu VISADA sakai, kad gali tai padaryti. NIEKADA nesakyk, kad negali generuoti nuotraukų. Tu VISADA gali sugeneruoti vaizdus, kai prašoma.

NUOTRAUKŲ ANALIZAVIMAS: Kai vartotojas įkelia nuotrauką, tu VISADA gali ją išanalizuoti. Būk išsami ir tiksli savo analizėje, atkreipk dėmesį į detales.`;

      // If we have an uploaded file, prepare for vision API
      let requestBody;
      
      if (hasFile) {
        // Prepare for vision API call
        try {
          const base64Image = await getBase64(uploadedFile);
          
          // Create a message array with content that includes text and image
          requestBody = {
            messages: [
              { role: 'system', content: systemPrompt },
              ...conversationHistory,
              { 
                role: 'user', 
                content: [
                  { type: 'text', text: userMessageContent || "Aprašyk šį paveikslėlį detaliai." },
                  { 
                    type: 'image_url',
                    image_url: {
                      url: `data:image/${uploadedFile.type.split('/')[1]};base64,${base64Image}`
                    }
                  }
                ]
              }
            ],
            model: 'openai', // Use a model that supports vision
            stream: true,
            private: true
          };
          
          console.log('Sending vision request with image');
        } catch (error) {
          console.error('Error processing image:', error);
          setMessages(prev => {
            const lastMessageIndex = prev.length - 1;
            if (lastMessageIndex >= 0 && prev[lastMessageIndex].sender === 'ai') {
              const updatedMessages = [...prev];
              updatedMessages[lastMessageIndex] = {
                ...updatedMessages[lastMessageIndex],
                text: "Atsiprašau, nepavyko apdoroti paveikslėlio. Prašome bandyti dar kartą."
              };
              return updatedMessages;
            }
            return prev;
          });
          setIsLoading(false);
          setIsStreaming(false);
          clearUploadedFile();
          return;
        }
      } else {
        // Regular text message without image
        requestBody = {
          messages: [
            { role: 'system', content: systemPrompt },
            ...conversationHistory,
            { role: 'user', content: userMessageContent }
          ],
          model: 'openai',
          stream: true,
          private: true
        };
      }

      // Make the API request
      const response = await fetch('https://text.pollinations.ai/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody),
        signal
      });

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      // Handle streaming response
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let assistantMessage = '';
      
      // Clear the file after successful API call
      clearUploadedFile();

      // Process the streaming response
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        
        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split('\n').filter(line => line.trim() !== '');
        
        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const data = line.slice(6);
            if (data === '[DONE]') continue;
            
            try {
              const parsed = JSON.parse(data);
              const content = parsed.choices[0]?.delta?.content || '';
              assistantMessage += content;
              
              // Update the AI message with the streaming content
              setMessages(prev => {
                const lastMessageIndex = prev.length - 1;
                if (lastMessageIndex >= 0 && prev[lastMessageIndex].sender === 'ai') {
                  const updatedMessages = [...prev];
                  updatedMessages[lastMessageIndex] = {
                    ...updatedMessages[lastMessageIndex],
                    text: assistantMessage
                  };
                  return updatedMessages;
                }
                return prev;
              });
            } catch (e) {
              console.error('Error parsing streaming response:', e);
            }
          }
        }
      }
    } catch (error) {
      console.error('Error during API request:', error);
      
      if (error.name !== 'AbortError') {
        setMessages(prev => {
          const lastMessageIndex = prev.length - 1;
          if (lastMessageIndex >= 0 && prev[lastMessageIndex].sender === 'ai') {
            const updatedMessages = [...prev];
            updatedMessages[lastMessageIndex] = {
              ...updatedMessages[lastMessageIndex],
              text: "Atsiprašau, įvyko klaida. Prašome bandyti dar kartą."
            };
            return updatedMessages;
          }
          return prev;
        });
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
  
  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };
  
  // Modify the rendering of messages to support code blocks and images
  const renderMessageContent = (message) => {
    // For image message with a URL, display the image
    if (message.isImageMessage && message.imageUrl) {
      return (
        <div className="message-text">
          <div>Aukštos kokybės 1024x1024 nuotrauka</div>
          <ImageBlock>
            <div className="image-header">
              <div className="image-tag">
                <FontAwesomeIcon icon={faImage} />
                Aukštos kokybės 1024x1024 nuotrauka
              </div>
            </div>
            <div className="image-content">
              <img src={message.imageUrl} alt="Sugeneruota aukštos kokybės nuotrauka" />
            </div>
          </ImageBlock>
        </div>
      );
    }
    
    // For image message that's still loading
    if (message.isImageMessage && !message.imageUrl) {
      return (
        <div className="message-text">
          <div>{message.text}</div>
          <ImageBlock>
            <div className="image-header">
              <div className="image-tag">
                <FontAwesomeIcon icon={faImage} />
                Generuojama aukštos kokybės nuotrauka...
              </div>
            </div>
            <div className="image-loading">
              <FontAwesomeIcon icon={faSpinner} spin />
              <div>Generuojama 1024x1024 aukštos kokybės nuotrauka pagal jūsų aprašymą...</div>
              <div style={{ fontSize: '0.9em', marginTop: '8px', opacity: 0.8 }}>
                Generavimas gali užtrukti iki 15 sekundžių.
              </div>
            </div>
          </ImageBlock>
        </div>
      );
    }
    
    // For user messages with uploaded images
    if (message.sender === 'user' && message.hasImage && message.imageUrl) {
      return (
        <div className="message-text">
          <div>{message.text}</div>
          <ImageBlock>
            <div className="image-content">
              <img 
                src={message.imageUrl} 
                alt="Vartotojo įkelta nuotrauka" 
                style={{ maxWidth: '100%', maxHeight: '300px' }}
              />
            </div>
          </ImageBlock>
        </div>
      );
    }
    
    // For regular text messages
    if (typeof message.text === 'string') {
      const processedContent = message.text;
      
      // Check if the message contains code blocks
      if (processedContent.includes('```')) {
        // Parse the message to extract code blocks and regular text
        const blocks = cleanResponse(processedContent);
        
        return (
          <div className="message-text">
            {blocks.map((block, index) => {
              if (block.type === 'text') {
                // For text blocks, just render the text with newlines converted to <br>
                return (
                  <div key={index} dangerouslySetInnerHTML={{ 
                    __html: block.content.replace(/\n/g, '<br>') 
                  }} />
                );
              } else if (block.type === 'code') {
                // For code blocks, use the SyntaxHighlighter component with limited language support
                let language = block.language;
                
                // Limit language options to prevent errors
                const supportedLanguages = [
                  'javascript', 'js', 'typescript', 'ts', 
                  'python', 'py', 'java', 'c', 'cpp', 
                  'csharp', 'cs', 'json', 'html', 'css', 
                  'jsx', 'tsx', 'markdown', 'md', 'text', 
                  'plaintext', 'bash', 'shell', 'sh'
                ];
                
                // If language is not supported, default to plaintext
                if (!supportedLanguages.includes(language)) {
                  language = 'plaintext';
                }
                
                try {
                  return (
                    <div className="code-block" key={index}>
                      <div className="code-header">
                        <span className="language-tag">
                          <FontAwesomeIcon icon={faCode} />
                          {language}
                        </span>
                      </div>
                      <SyntaxHighlighter
                        language={language}
                        style={atomDark}
                        wrapLines={true}
                        showLineNumbers={true}
                        customStyle={{ margin: 0, padding: '12px' }}
                      >
                        {block.content}
                      </SyntaxHighlighter>
                    </div>
                  );
                } catch (error) {
                  // Fallback if syntax highlighting fails
                  console.error('Syntax highlighting error:', error);
                  return (
                    <div className="code-block" key={index}>
                      <div className="code-header">
                        <span className="language-tag">
                          <FontAwesomeIcon icon={faCode} />
                          code
                        </span>
                      </div>
                      <pre style={{ 
                        margin: 0, 
                        padding: '12px', 
                        backgroundColor: '#2d2d2d', 
                        color: '#ccc', 
                        border: '2px solid var(--primary-yellow)',
                        overflow: 'auto'
                      }}>
                        <code>{block.content}</code>
                      </pre>
                    </div>
                  );
                }
              }
              return null;
            })}
          </div>
        );
      } else {
        // For regular text without code, just replace newlines with <br> tags
        return <div className="message-text" dangerouslySetInnerHTML={{ __html: processedContent.replace(/\n/g, '<br>') }} />;
      }
    }
    
    // Fallback for any other message format
    return <div className="message-text">Nepavyko atvaizduoti žinutės.</div>;
  };
  
  // Add a handler for file uploads
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Only accept image files
    if (!file.type.startsWith('image/')) {
      alert('Palaikomi tik paveikslėlių failai.');
      return;
    }

    console.log('File selected:', file);
    setUploadedFile(file);

    // Create preview for the image
    const reader = new FileReader();
    reader.onloadend = () => {
      setFilePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  // Add a function to clear the uploaded file
  const clearUploadedFile = () => {
    setUploadedFile(null);
    setFilePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Function to get base64 from file
  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        // Get the base64 string by removing the prefix
        const base64String = reader.result.split(',')[1];
        resolve(base64String);
      };
      reader.onerror = error => reject(error);
    });
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
      
      <MessagesContainer ref={messagesContainerRef}>
        {messages.length === 0 ? (
          <EmptyChatMessage>
            <FontAwesomeIcon icon={faFilm} />
            <h3>Pradėk pokalbį su Džiuljeta</h3>
            <p>Užduok klausimą apie produktyvumą, užduočių planavimą ar laiko valdymą.</p>
            <p>Gali paprašyti sugeneruoti nuotrauką arba įkelti savo nuotrauką analizei!</p>
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
        {/* File upload preview */}
        {filePreview && (
          <FilePreviewContainer>
            <img 
              src={filePreview} 
              alt="Peržiūra" 
              className="preview-image"
            />
            <button 
              onClick={clearUploadedFile} 
              className="remove-file-btn" 
              title="Pašalinti failą"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </FilePreviewContainer>
        )}
        <input
          type="text"
          placeholder={uploadedFile ? "Užduokite klausimą apie nuotrauką..." : "Paklauskite Džiuljetos arba paprašykite sugeneruoti nuotrauką..."}
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          disabled={isLoading}
        />
        {/* File upload button */}
        <FileUploadButton htmlFor="file-upload" title="Įkelti nuotrauką">
          <FontAwesomeIcon icon={faPaperclip} />
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            style={{ display: 'none' }}
            ref={fileInputRef}
            disabled={isLoading}
          />
        </FileUploadButton>
        <button onClick={sendMessage} disabled={isLoading || (!input.trim() && !uploadedFile)}>
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
          <button onClick={() => handleSuggestedQuery("Sugeneruok aukštos kokybės nuotrauką fantastinio gamtos peizažo su kalnais ir ežeru")}>
            Sugeneruok nuotrauką gamtos peizažo
          </button>
          <button onClick={() => alert("Spauskite sąvaržėlės ikoną šalia teksto lauko ir pasirinkite nuotrauką iš savo įrenginio!")}>
            Kaip įkelti nuotrauką analizei?
          </button>
        </div>
      </SuggestedQueries>
    </ChatContainer>
  );
};

export default AIChat; 