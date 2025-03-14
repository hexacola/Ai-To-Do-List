import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oswald:wght@300;400;500;600&display=swap');
  
  :root {
    /* Spalvos */
    --primary-red: ${props => props.theme.primaryColor};
    --primary-yellow: ${props => props.theme.secondaryColor};
    --text-color: ${props => props.theme.textColor};
    --background-color: ${props => props.theme.backgroundColor};
    --card-background: ${props => props.theme.cardBackground};
    --border-color: ${props => props.theme.borderColor};
    --input-background: ${props => props.theme.inputBackground};
    --completed-color: ${props => props.theme.completedColor};
    --button-text: ${props => props.theme.buttonText};
    --subtask-text-color: ${props => props.theme.subtaskTextColor};
    --light-text-color: ${props => props.theme.lightTextColor};
    
    /* Atstumai */
    --spacing-xs: 0.25rem;
    --spacing-sm: 0.5rem;
    --spacing-md: 1rem;
    --spacing-lg: 1.5rem;
    --spacing-xl: 2rem;
    
    /* Šriftų dydžiai */
    --font-size-xs: 0.75rem;
    --font-size-sm: 0.875rem;
    --font-size-md: 1rem;
    --font-size-lg: 1.25rem;
    --font-size-xl: 1.5rem;
    --font-size-xxl: 2rem;
    
    /* Konteinerio dydžiai */
    --container-sm: 576px;
    --container-md: 768px;
    --container-lg: 992px;
    --container-xl: 1200px;
    
    /* Animacijos */
    --animation-speed-slow: 0.5s;
    --animation-speed-normal: 0.3s;
    --animation-speed-fast: 0.15s;
    
    /* Šešėliai */
    --shadow-sm: 3px 3px 0px rgba(0, 0, 0, 0.2);
    --shadow-md: 5px 5px 0px rgba(0, 0, 0, 0.25);
    --shadow-lg: 8px 8px 0px rgba(0, 0, 0, 0.3);
    
    /* Perėjimai */
    --transition-bounce: cubic-bezier(0.68, -0.55, 0.27, 1.55);
    --transition-smooth: cubic-bezier(0.25, 0.46, 0.45, 0.94);
    --transition-sharp: cubic-bezier(0.19, 1, 0.22, 1);
    
    /* Mobilieji dydžiai */
    @media (max-width: 768px) {
      --spacing-xl: 1.75rem;
      --spacing-lg: 1.25rem;
      --spacing-md: 0.75rem;
      
      --font-size-xxl: 1.75rem;
      --font-size-xl: 1.25rem;
      --font-size-lg: 1.1rem;
    }
    
    @media (max-width: 480px) {
      --spacing-xl: 1.5rem;
      --spacing-lg: 1rem;
      --spacing-md: 0.5rem;
      
      --font-size-xxl: 1.5rem;
      --font-size-xl: 1.1rem;
      --font-size-lg: 1rem;
      
      /* Mažiau intensyvios animacijos mobiliajame */
      --animation-speed-slow: 0.4s;
      --animation-speed-normal: 0.25s;
      --animation-speed-fast: 0.1s;
    }
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Oswald', sans-serif;
    background-color: var(--background-color);
    color: var(--text-color);
    transition: background-color 0.3s ease, color 0.3s ease;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.6;
    overflow-x: hidden;
  }
  
  /* Animacijos apibrėžimai */
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes slideInFromBottom {
    from { transform: translateY(30px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
  
  @keyframes slideInFromLeft {
    from { transform: translateX(-30px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  
  @keyframes slideInFromRight {
    from { transform: translateX(30px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
  
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  
  /* Animacijos klasės */
  .animate-fade-in {
    animation: fadeIn var(--animation-speed-normal) var(--transition-smooth) forwards;
  }
  
  .animate-slide-up {
    animation: slideInFromBottom var(--animation-speed-normal) var(--transition-smooth) forwards;
  }
  
  .animate-slide-left {
    animation: slideInFromLeft var(--animation-speed-normal) var(--transition-smooth) forwards;
  }
  
  .animate-slide-right {
    animation: slideInFromRight var(--animation-speed-normal) var(--transition-smooth) forwards;
  }
  
  .animate-pulse {
    animation: pulse 2s var(--transition-bounce) infinite;
  }
  
  .animate-spin {
    animation: spin 1s linear infinite;
  }
  
  /* Staggered animacija vaikams */
  .stagger-children > * {
    opacity: 0;
  }
  
  .stagger-children > *:nth-child(1) { animation-delay: 0.1s; }
  .stagger-children > *:nth-child(2) { animation-delay: 0.2s; }
  .stagger-children > *:nth-child(3) { animation-delay: 0.3s; }
  .stagger-children > *:nth-child(4) { animation-delay: 0.4s; }
  .stagger-children > *:nth-child(5) { animation-delay: 0.5s; }
  
  /* Scrollbar stilius */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background: var(--background-color);
  }
  
  ::-webkit-scrollbar-thumb {
    background: var(--primary-yellow);
    border-radius: 0;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: var(--primary-red);
  }
  
  /* Padidinta pritaikytas animacijoms */
  button, a {
    transition: all var(--animation-speed-fast) var(--transition-smooth);
  }
  
  input, textarea, select {
    transition: border-color var(--animation-speed-fast) var(--transition-smooth), 
                box-shadow var(--animation-speed-fast) var(--transition-smooth);
  }
  
  /* Paslėpti užrašai nuo ekrano skaitytuvų, bet matomi vizualiai */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
  
  /* React transition group papildomi stiliai */
  .page-transition-enter {
    opacity: 0;
    transform: translateX(-100%);
  }
  
  .page-transition-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity var(--animation-speed-normal), 
                transform var(--animation-speed-normal) var(--transition-smooth);
  }
  
  .page-transition-exit {
    opacity: 1;
    transform: translateX(0);
  }
  
  .page-transition-exit-active {
    opacity: 0;
    transform: translateX(100%);
    transition: opacity var(--animation-speed-normal), 
                transform var(--animation-speed-normal) var(--transition-smooth);
  }
  
  /* Sumažinti animacijas, jei vartotojas pasirinko sumažinti judėjimą */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
    
    .animate-fade-in,
    .animate-slide-up,
    .animate-slide-left,
    .animate-slide-right,
    .animate-pulse,
    .animate-spin,
    .stagger-children > * {
      animation: none !important;
      opacity: 1 !important;
      transform: none !important;
    }
    
    .page-transition-enter,
    .page-transition-enter-active,
    .page-transition-exit,
    .page-transition-exit-active {
      transform: none !important;
      transition: none !important;
    }
  }
`;

export default GlobalStyle; 