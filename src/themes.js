// themes.js - Quentin Tarantino įkvėptos temos
const lightTheme = {
  primaryColor: '#B22222', // Ryškiai raudona - Tarantino stilius
  secondaryColor: '#D9A404', // Tamsi geltona - geresnis kontrastas
  textColor: '#111', // Tamsiai pilka
  backgroundColor: '#F5F5DC', // Šviesiai kreminė
  cardBackground: '#FFFEFA', // Baltas su kreminiu atspalviu
  borderColor: '#D9A404', // Tamsi geltona
  inputBackground: '#FAFAFA', // Labai šviesiai pilka
  completedColor: '#4CAF50', // Žalia spalva užbaigtoms užduotims
  buttonText: '#F5F5DC', // Šviesiai kreminis tekstas mygtukuose
  subtaskTextColor: '#666', // Vidutiniškai pilka subtaskų tekstui
  lightTextColor: '#666', // Vidutiniškai pilka mažiau svarbiems elementams
  
  // Animacijų spalvos
  successColor: '#4CAF50', // Žalia spalva sėkmingo veiksmo atveju
  errorColor: '#B22222', // Raudona spalva klaidos atveju
  loadingColor: '#D9A404', // Geltona spalva krovimo metu
  
  // Papildomos spalvos
  highlightColor: '#FFE066', // Geltona spalva paryškinimui
  notificationColor: '#B22222', // Raudona pranešimams
  
  // Naujai pridėtų užduočių spalvos
  newTaskHighlight: 'rgba(217, 164, 4, 0.15)', // Šviesi geltona naujoms užduotims
  
  // Lygio progreso spalvos
  progressColor: {
    low: '#B22222', // Raudona žemam progresui
    medium: '#D9A404', // Geltona vidutiniam progresui
    high: '#4CAF50', // Žalia aukštam progresui
  },
  
  // Overlay/backdrop spalvos
  overlayBackground: 'rgba(0, 0, 0, 0.7)',
  modalBackground: '#FFFEFA',
  levelColors: {
    bronze: '#cd7f32',
    silver: '#c0c0c0',
    gold: '#d4af37', // Tamesnė auksinė
    platinum: '#e5e4e2',
    diamond: '#b9f2ff'
  },
};

const darkTheme = {
  primaryColor: '#B22222', // Ryškiai raudona - Tarantino stilius
  secondaryColor: '#F7D02C', // Šviesiai geltona - geriau matoma tamsiame fone
  textColor: '#F5F5F5', // Beveik baltas tekstas
  backgroundColor: '#121212', // Labai tamsus pilkas
  cardBackground: '#1E1E1E', // Tamsiai pilka kortelėms
  borderColor: '#F7D02C', // Šviesiai geltona
  inputBackground: '#2D2D2D', // Šiek tiek šviesiau nei cardBackground
  completedColor: '#4CAF50', // Žalia spalva užbaigtoms užduotims
  buttonText: '#F5F5F5', // Beveik baltas tekstas mygtukuose
  subtaskTextColor: '#B0B0B0', // Šviesiai pilka subtaskų tekstui
  lightTextColor: '#A0A0A0', // Šviesiai pilka mažiau svarbiems elementams
  
  // Animacijų spalvos
  successColor: '#4CAF50', // Žalia spalva sėkmingo veiksmo atveju
  errorColor: '#B22222', // Raudona spalva klaidos atveju
  loadingColor: '#F7D02C', // Geltona spalva krovimo metu
  
  // Papildomos spalvos
  highlightColor: '#FFE066', // Geltona spalva paryškinimui
  notificationColor: '#B22222', // Raudona pranešimams
  
  // Naujai pridėtų užduočių spalvos
  newTaskHighlight: 'rgba(247, 208, 44, 0.15)', // Šviesi geltona naujoms užduotims
  
  // Lygio progreso spalvos
  progressColor: {
    low: '#B22222', // Raudona žemam progresui
    medium: '#F7D02C', // Geltona vidutiniam progresui
    high: '#4CAF50', // Žalia aukštam progresui
  },
  
  // Overlay/backdrop spalvos
  overlayBackground: 'rgba(0, 0, 0, 0.85)',
  modalBackground: '#1E1E1E',
  levelColors: {
    bronze: '#cd7f32',
    silver: '#c0c0c0',
    gold: '#d4af37', // Tamesnė auksinė
    platinum: '#e5e4e2',
    diamond: '#b9f2ff'
  },
};

export { lightTheme, darkTheme }; 