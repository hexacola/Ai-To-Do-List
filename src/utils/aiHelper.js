// Pašaliname axios importą ir naudojame fetch API
// import axios from 'axios'; - Šio nebereikia

// Funkcija, kuri analizuoja užduotį ir siūlo subtaskų sprendimo būdus
export const getSubtaskSuggestions = async (task, subtaskIndex) => {
  try {
    // Jei nėra subtaskų, grąžiname bendrą patarimą
    if (!task.subtasks || task.subtasks.length === 0) {
      return {
        suggestion: "Šiai užduočiai nėra nustatytų žingsnių. Galite ją tiesiog pažymėti kaip atliktą.",
        resources: []
      };
    }

    // Gauname subtaską, kuriam reikia pagalbos
    const subtask = task.subtasks[subtaskIndex];
    const subtaskText = typeof subtask === 'string' ? subtask : subtask.text;
    
    // Sukuriame užklausą AI modeliui
    const prompt = `Padėk man atlikti šį užduoties žingsnį: "${subtaskText}". 
    Užduoties kontekstas: "${task.text}". 
    Prašau pateikti:
    1. Trumpą paaiškinimą, kaip atlikti šį žingsnį (ne daugiau 3 sakinių)
    2. Bent 2 konkrečius veiksmus, kuriuos galiu atlikti
    3. Jei įmanoma, nuorodą į naudingą šaltinį`;

    // Naudojame fetch API vietoj axios
    const response = await fetch(`https://text.pollinations.ai/${encodeURIComponent(prompt)}?model=openai&private=true`);
    
    if (!response.ok) {
      throw new Error('API atsakymo klaida: ' + response.status);
    }
    
    // Gauname atsakymą kaip tekstą
    const aiResponse = await response.text();
    
    // Paprastas būdas ištraukti resursus iš atsakymo - ieškome URL
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const foundUrls = aiResponse.match(urlRegex) || [];
    
    // Grąžiname struktūrizuotą atsakymą
    return {
      suggestion: aiResponse.replace(urlRegex, '').trim(),
      resources: foundUrls
    };
  } catch (error) {
    console.error('Klaida gaunant AI pasiūlymus:', error);
    return {
      suggestion: "Nepavyko gauti pasiūlymų. Bandykite vėliau arba atlikite žingsnį savarankiškai.",
      resources: []
    };
  }
};

// Funkcija, kuri analizuoja užduotį ir siūlo, kiek laiko skirti kiekvienam subtaskui
export const getTimeEstimates = async (task) => {
  try {
    if (!task.subtasks || task.subtasks.length === 0) {
      return {
        totalEstimate: 15, // Numatytasis laikas minutėmis
        subtaskEstimates: [15]
      };
    }

    // Gauname visus subtaskus
    const subtaskTexts = task.subtasks.map(st => 
      typeof st === 'string' ? st : st.text
    );
    
    // Sukuriame užklausą AI modeliui
    const prompt = `Analizuok šią užduotį: "${task.text}" su šiais žingsniais:
    ${subtaskTexts.map((st, i) => `${i+1}. ${st}`).join('\n')}
    
    Kiek minučių užtruktų kiekvienas žingsnis? Pateik tik skaičius, po vieną eilutėje.`;

    // Naudojame fetch API vietoj axios
    const response = await fetch(`https://text.pollinations.ai/${encodeURIComponent(prompt)}?model=openai&private=true`);
    
    if (!response.ok) {
      throw new Error('API atsakymo klaida: ' + response.status);
    }
    
    // Gauname atsakymą kaip tekstą
    const aiResponse = await response.text();
    
    // Apdorojame atsakymą - ištraukiame skaičius
    const numberRegex = /\d+/g;
    const numbers = aiResponse.match(numberRegex) || [];
    
    // Konvertuojame į skaičius ir užtikriname, kad turime pakankamai įverčių
    let subtaskEstimates = numbers.map(n => parseInt(n, 10));
    
    // Jei negavome pakankamai įverčių, užpildome numatytaisiais (10 min)
    while (subtaskEstimates.length < subtaskTexts.length) {
      subtaskEstimates.push(10);
    }
    
    // Jei gavome per daug, patrumpinkime
    subtaskEstimates = subtaskEstimates.slice(0, subtaskTexts.length);
    
    // Apskaičiuojame bendrą laiką
    const totalEstimate = subtaskEstimates.reduce((sum, time) => sum + time, 0);
    
    return {
      totalEstimate,
      subtaskEstimates
    };
  } catch (error) {
    console.error('Klaida gaunant laiko įverčius:', error);
    
    // Grąžiname numatytuosius įverčius
    const defaultEstimate = 10;
    const subtaskCount = task.subtasks ? task.subtasks.length : 1;
    
    return {
      totalEstimate: defaultEstimate * subtaskCount,
      subtaskEstimates: Array(subtaskCount).fill(defaultEstimate)
    };
  }
};

// Funkcija, kuri siūlo, kaip pagerinti užduoties atlikimą
export const getTaskCompletionTips = async (task) => {
  try {
    const prompt = `Analizuok šią užduotį: "${task.text}".
    
    Pateik 3 trumpus patarimus, kaip efektyviai atlikti šią užduotį. 
    Kiekvienas patarimas turi būti ne ilgesnis nei 15 žodžių.`;

    // Naudojame fetch API vietoj axios
    const response = await fetch(`https://text.pollinations.ai/${encodeURIComponent(prompt)}?model=openai&private=true`);
    
    if (!response.ok) {
      throw new Error('API atsakymo klaida: ' + response.status);
    }
    
    // Gauname atsakymą kaip tekstą
    const aiResponse = await response.text();
    
    // Apdorojame atsakymą - išskaidome į atskirus patarimus
    let tips = aiResponse.split(/\d+\.\s+|\n+/).filter(tip => tip.trim().length > 0);
    
    // Jei negavome bent vieno patarimo, grąžiname numatytąjį
    if (tips.length === 0) {
      tips = ["Suskirstyk užduotį į mažesnius žingsnius ir atlik juos po vieną."];
    }
    
    return tips;
  } catch (error) {
    console.error('Klaida gaunant užduoties patarimus:', error);
    return [
      "Suskirstyk užduotį į mažesnius žingsnius ir atlik juos po vieną.",
      "Nustatyk konkretų laiką užduočiai atlikti ir laikykis jo.",
      "Pašalink trukdžius ir susitelk į užduotį."
    ];
  }
};

// Funkcija, kuri siūlo, kaip spręsti užduoties atlikimo problemas
export const getTroubleshootingAdvice = async (task, problem) => {
  try {
    const prompt = `Man kyla problemų atliekant šią užduotį: "${task.text}".
    
    Konkreti problema: "${problem}".
    
    Pateik 2-3 konkrečius sprendimo būdus.`;

    // Naudojame fetch API vietoj axios
    const response = await fetch(`https://text.pollinations.ai/${encodeURIComponent(prompt)}?model=openai&private=true`);
    
    if (!response.ok) {
      throw new Error('API atsakymo klaida: ' + response.status);
    }
    
    // Gauname atsakymą kaip tekstą
    const aiResponse = await response.text();
    
    return aiResponse;
  } catch (error) {
    console.error('Klaida gaunant problemų sprendimo patarimus:', error);
    return "Bandykite užduotį suskaidyti į mažesnius žingsnius. Jei užstrigote, padarykite pertrauką ir grįžkite prie užduoties vėliau su šviežiu požiūriu.";
  }
};

/**
 * Funkcija teksto generavimui naudojant Pollinations API
 * @param {string} prompt Vartotojo įvestas tekstas
 * @param {AbortSignal} signal AbortSignal objektas užklausos nutraukimui
 * @returns {Promise<string>} Sugeneruotas tekstas
 */
export const generateTips = async (prompt, signal) => {
  // Pagerintas promptas, kad AI atsakytų kaip produktyvumo ekspertas
  const enhancedPrompt = `Produktyvumo ekspertas: ${prompt}`;
  
  try {
    const response = await fetch('https://text.pollinations.ai/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        messages: [{ role: 'user', content: enhancedPrompt }],
        model: 'openai',
        private: true,
        system: "Tu esi produktyvumo ekspertas, kuris duoda konkrečius, praktiškus, detalius atsakymus apie tai, kaip geriau atlikti užduotis ir efektyviau valdyti laiką. Tavo atsakymai yra trumpi, aiškūs ir nedviprasmiški."
      }),
      signal
    });
    
    if (!response.ok) {
      throw new Error(`API klaida: ${response.status}`);
    }
    
    const data = await response.json();
    if (data && data.message && data.message.content) {
      return data.message.content;
    } else {
      return "Atsiprašau, nepavyko gauti atsakymo. Prašome bandyti vėliau.";
    }
  } catch (error) {
    console.error("Klaida gaunant AI atsakymą:", error);
    if (error.name === 'AbortError') {
      throw error; // Perduodame AbortError aukščiau, kad galėtume tinkamai apdoroti
    }
    return "Atsiprašau, įvyko klaida. Prašome bandyti vėliau.";
  }
};

// Eksportuojame visas funkcijas
export default {
  getSubtaskSuggestions,
  getTimeEstimates,
  getTaskCompletionTips,
  getTroubleshootingAdvice,
  generateTips
}; 