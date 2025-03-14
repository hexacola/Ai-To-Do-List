// Rewards sistema
// Šis modulis tvarko XP, statistiką ir apdovanojimus

// Konstantos
const POINTS_PER_TASK = 50;
const POINTS_PER_SUBTASK = 10;
const STREAK_BONUS = 20;
const LEVEL_THRESHOLD = 100;  // kiek XP reikia vienam lygiui

// Inicializuojame numatytuosius duomenis, jei jų dar nėra localStorage
const initializeUserData = () => {
  if (!localStorage.getItem('userData')) {
    const defaultUserData = {
      level: 1,
      experience: 0,
      tasksCompleted: 0,
      subtasksCompleted: 0,
      timeSpentMinutes: 0,
      streak: 0,
      lastTaskDate: null,
      rewards: [],
      completedTaskIds: [], // Saugome užbaigtų užduočių ID
      completedSubtaskIds: [] // Saugome užbaigtų žingsnių ID
    };
    localStorage.setItem('userData', JSON.stringify(defaultUserData));
  }
  
  // Patikrinkime ir atnaujinkime esamus duomenis
  const existingData = JSON.parse(localStorage.getItem('userData'));
  if (!existingData.completedTaskIds) {
    existingData.completedTaskIds = [];
  }
  if (!existingData.completedSubtaskIds) {
    existingData.completedSubtaskIds = [];
  }
  if (!existingData.rewards) {
    existingData.rewards = [];
  }
  localStorage.setItem('userData', JSON.stringify(existingData));
};

// Gauname vartotojo duomenis
export const getUserData = () => {
  initializeUserData();
  return JSON.parse(localStorage.getItem('userData'));
};

// Išsaugome vartotojo duomenis
const saveUserData = (userData) => {
  localStorage.setItem('userData', JSON.stringify(userData));
};

// Gauname vartotojo statistiką
export const getUserStats = () => {
  const userData = getUserData();
  return {
    level: userData.level,
    experience: userData.experience,
    tasksCompleted: userData.tasksCompleted,
    subtasksCompleted: userData.subtasksCompleted,
    timeSpentMinutes: userData.timeSpentMinutes,
    streak: userData.streak,
    lastActivity: userData.lastTaskDate
  };
};

// Utility to save user stats
export const saveUserStats = (stats) => {
  const userData = getUserData();
  userData.level = stats.level;
  userData.experience = stats.experience;
  userData.tasksCompleted = stats.tasksCompleted;
  userData.subtasksCompleted = stats.subtasksCompleted;
  userData.timeSpentMinutes = stats.timeSpentMinutes;
  userData.streak = stats.streak;
  userData.lastTaskDate = stats.lastActivity;
  saveUserData(userData);
};

// Gauname vartotojo lygį
export const getLevelProgress = () => {
  const stats = getUserStats();
  const xpForCurrentLevel = getExperienceToNextLevel(stats.level - 1) || 0;
  const xpForNextLevel = getExperienceToNextLevel(stats.level);
  
  const xpInCurrentLevel = stats.experience - xpForCurrentLevel;
  const xpRequiredForNextLevel = xpForNextLevel - xpForCurrentLevel;
  
  return Math.min(100, Math.floor((xpInCurrentLevel / xpRequiredForNextLevel) * 100));
};

// Gauname, kiek XP reikia iki kito lygio
export const getExperienceToNextLevel = (currentLevel = null) => {
  const level = currentLevel || getUserStats().level;
  return Math.floor(LEVEL_THRESHOLD * Math.pow(1.5, level - 1));
};

// Tikriname, ar užduotis jau buvo užbaigta
export const isTaskAlreadyCompleted = (taskId) => {
  const userData = getUserData();
  return userData.completedTaskIds.includes(taskId);
};

// Tikriname, ar žingsnis jau buvo užbaigtas
export const isSubtaskAlreadyCompleted = (taskId, subtaskIndex) => {
  const userData = getUserData();
  const subtaskKey = `${taskId}_${subtaskIndex}`;
  return userData.completedSubtaskIds.includes(subtaskKey);
};

// Apdovanojimų apibrėžimai
const REWARD_DEFINITIONS = [
  {
    id: 'first_task',
    name: 'Pirmasis žingsnis',
    description: 'Užbaigėte savo pirmąją užduotį!',
    icon: '🏆',
    condition: (userData) => userData.tasksCompleted === 1
  },
  {
    id: 'five_tasks',
    name: 'Produktyvumo meistras',
    description: 'Užbaigėte 5 užduotis. Puiku!',
    icon: '⭐',
    condition: (userData) => userData.tasksCompleted === 5
  },
  {
    id: 'ten_tasks',
    name: 'Užduočių specialistas',
    description: 'Užbaigėte 10 užduočių. Įspūdinga!',
    icon: '🌟',
    condition: (userData) => userData.tasksCompleted === 10
  },
  {
    id: 'level_5',
    name: 'Aukštasis lygis',
    description: 'Pasiekėte 5 lygį. Toliau tik geriau!',
    icon: '🎖️',
    condition: (userData) => userData.level === 5
  },
  {
    id: 'level_10',
    name: 'Produktyvumo čempionas',
    description: 'Pasiekėte 10 lygį. Esate tikras profesionalas!',
    icon: '👑',
    condition: (userData) => userData.level === 10
  },
  {
    id: 'streak_3',
    name: 'Ritmo palaikytojas',
    description: 'Išlaikėte 3 dienų užduočių atlikimo seriją. Taip laikykite!',
    icon: '🔥',
    condition: (userData) => userData.streak === 3
  },
  {
    id: 'streak_7',
    name: 'Savaitės žvaigždė',
    description: 'Išlaikėte 7 dienų užduočių atlikimo seriją!',
    icon: '🌈',
    condition: (userData) => userData.streak === 7
  },
  {
    id: 'subtasks_50',
    name: 'Žingsnių meistras',
    description: 'Užbaigėte 50 žingsnių. Smulkūs žingsniai veda į didžius pasiekimus!',
    icon: '🚶',
    condition: (userData) => userData.subtasksCompleted >= 50
  }
];

// Tikriname, ar yra naujų apdovanojimų
const checkForNewRewards = (userData) => {
  const newRewards = [];
  
  REWARD_DEFINITIONS.forEach(reward => {
    if (!userData.rewards.includes(reward.id) && reward.condition(userData)) {
      userData.rewards.push(reward.id);
      newRewards.push(reward);
    }
  });
  
  return newRewards;
};

// Gauname vartotojo apdovanojimus
export const getUserRewards = () => {
  const userData = getUserData();
  return userData.rewards.map(id => {
    const rewardDefinition = REWARD_DEFINITIONS.find(r => r.id === id);
    return rewardDefinition || { id, name: 'Nežinomas apdovanojimas', description: '', icon: '❓' };
  });
};

// Atliekama užduotis, gaunamas XP ir apdovanojimai
export const completeTask = (task) => {
  const userData = getUserData();
  
  // Jei užduotis jau buvo užbaigta, grąžiname null
  if (userData.completedTaskIds.includes(task.id)) {
    return null;
  }
  
  // Bazinis XP už užduoties užbaigimą
  let xpGain = POINTS_PER_TASK;
  
  // Papildomas XP už užduoties sudėtingumą (žingsnių skaičių)
  const subtaskCount = task.subtasks ? task.subtasks.length : 1;
  xpGain += subtaskCount * 5;
  
  // Papildomas XP už sugaištą laiką
  if (task.timeSpent) {
    xpGain += Math.round(task.timeSpent / 5) * 2;
  }
  
  // Atnaujinti statistiką
  userData.experience += xpGain;
  userData.tasksCompleted += 1;
  userData.lastTaskDate = new Date().toISOString();
  
  // Pridėti užbaigtą laiką
  if (task.timeSpent) {
    userData.timeSpentMinutes += Math.round(task.timeSpent);
  }
  
  // Atnaujinti žingsnių statistiką
  if (task.subtasks && task.subtasksCompleted) {
    const completedSubtasks = task.subtasksCompleted.filter(Boolean).length;
    userData.subtasksCompleted += completedSubtasks;
  }
  
  // Atnaujinti seriją
  updateStreak(userData);
  
  // Patikrinti lygio pakilimą
  const oldLevel = userData.level;
  checkForLevelUp(userData);
  
  // Pridėti užduotį prie užbaigtų sąrašo
  userData.completedTaskIds.push(task.id);
  
  // Patikrinti naujus apdovanojimus
  const newRewards = checkForNewRewards(userData);
  
  // Išsaugoti atnaujintus duomenis
  saveUserData(userData);
  
  return {
    xpGained: xpGain,
    newLevel: userData.level,
    levelUp: userData.level > oldLevel,
    newRewards: newRewards
  };
};

// Atliekamas žingsnis, gaunamas XP
export const completeSubtask = (taskId, subtaskIndex, subtaskText) => {
  const userData = getUserData();
  const subtaskKey = `${taskId}_${subtaskIndex}`;
  
  // Jei žingsnis jau buvo užbaigtas, grąžiname null
  if (userData.completedSubtaskIds.includes(subtaskKey)) {
    return null;
  }
  
  // Bazinis XP už žingsnio užbaigimą
  let xpGain = POINTS_PER_SUBTASK;
  
  // Papildomas XP už žingsnio sudėtingumą (pagal teksto ilgį)
  xpGain += Math.min(10, Math.floor(subtaskText.length / 50));
  
  // Atnaujinti statistiką
  userData.experience += xpGain;
  userData.subtasksCompleted += 1;
  userData.lastTaskDate = new Date().toISOString();
  
  // Pridėti žingsnį prie užbaigtų sąrašo
  userData.completedSubtaskIds.push(subtaskKey);
  
  // Patikrinti lygio pakilimą
  const oldLevel = userData.level;
  checkForLevelUp(userData);
  
  // Patikrinti naujus apdovanojimus
  const newRewards = checkForNewRewards(userData);
  
  // Išsaugoti atnaujintus duomenis
  saveUserData(userData);
  
  return {
    xpGained: xpGain,
    newLevel: userData.level,
    levelUp: userData.level > oldLevel,
    newRewards: newRewards
  };
};

// Gauname užbaigtų užduočių sąrašą
export const getCompletedTasks = () => {
  const userData = getUserData();
  return userData.completedTaskIds || [];
};

// Pridedame užduotį prie užbaigtų sąrašo
export const addCompletedTask = (taskId) => {
  const userData = getUserData();
  if (!userData.completedTaskIds.includes(taskId)) {
    userData.completedTaskIds.push(taskId);
    saveUserData(userData);
  }
};

// Atnaujiname užduočių seriją
export const updateStreak = (userData) => {
  const now = new Date();
  const lastDate = userData.lastTaskDate ? new Date(userData.lastTaskDate) : null;
  
  if (!lastDate) {
    userData.streak = 1;
  } else {
    const daysSinceLastTask = Math.floor((now - lastDate) / (1000 * 60 * 60 * 24));
    
    if (daysSinceLastTask === 0) {
      // Tas pats diena, serija nesikeičia
    } else if (daysSinceLastTask === 1) {
      // Sekanti diena, serija didėja
      userData.streak += 1;
      userData.experience += STREAK_BONUS; // Bonus XP už serijos palaikymą
    } else {
      // Serija nutrūko
      userData.streak = 1;
    }
  }
};

// Tikriname lygio pakilimą
export const checkForLevelUp = (userData) => {
  while (userData.experience >= getExperienceToNextLevel(userData.level)) {
    userData.level += 1;
  }
};

// Išsaugome apdovanojimus
export const saveUserRewards = (rewards) => {
  const userData = getUserData();
  userData.rewards = rewards;
  saveUserData(userData);
};
