import { useState, useEffect } from 'react';

// Hook for text generation
export const usePollinationsText = (prompt, options = {}) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { 
    seed = null, 
    model = 'openai', 
    systemPrompt = "Jūs esate labai efektyvus produktyvumo asistentas." 
  } = options;

  useEffect(() => {
    const generateText = async () => {
      if (!prompt) return;

      setLoading(true);
      setError(null);

      try {
        const requestBody = {
          messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: prompt }
          ],
          model,
          ...(seed && { seed })
        };

        const response = await fetch('https://text.pollinations.ai/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestBody)
        });

        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }

        // Get the response text first
        const rawText = await response.text();
        
        try {
          // Try to parse as JSON
          const data = JSON.parse(rawText);
          setResponse(data.choices?.[0]?.message?.content || data);
        } catch (jsonError) {
          // If JSON parsing fails, just use the raw text
          console.log('Response is not JSON, using raw text instead');
          setResponse(rawText);
        }
      } catch (err) {
        console.error('Error fetching from Pollinations API:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    generateText();
  }, [prompt, model, seed, systemPrompt]);

  return { response, loading, error };
};

// Hook for image generation
export const usePollinationsImage = (prompt, options = {}) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { 
    width = 512, 
    height = 512, 
    model = 'flux', 
    seed = null,
    nologo = true,
    enhance = true
  } = options;

  useEffect(() => {
    const generateImage = async () => {
      if (!prompt) return;

      setLoading(true);
      setError(null);

      try {
        let url = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=${width}&height=${height}&model=${model}`;
        
        if (seed) url += `&seed=${seed}`;
        if (nologo) url += '&nologo=true';
        if (enhance) url += '&enhance=true';

        setImageUrl(url);
      } catch (err) {
        console.error('Error with Pollinations Image API:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    generateImage();
  }, [prompt, width, height, model, seed, nologo, enhance]);

  return { imageUrl, loading, error };
};

// Helper function to generate task breakdown
export const generateTaskBreakdown = async (taskDescription) => {
  console.log("Generating subtasks for:", taskDescription);
  
  // Enhanced system prompt to create more personalized subtasks with anti-procrastination focus and time estimates
  const systemPrompt = `Jūs esate PAGRINDINIS produktyvumo ekspertas, specializuojantis užduočių suskaidyme į TOBULUS, įgyvendinamus žingsnius, kurie ĮVEIKIA ATIDĖLIOJIMĄ.

MISIJA: Bet kokiai užduočiai pateikti 3-5 aiškius, konkrečius žingsnius, kurie atspindi IDEALŲ būdą ją atlikti, įveikiant atidėliojimą. Kiekvienas žingsnis turėtų turėti tikslų laiko įvertinimą.

ANTI-ATIDĖLIOJIMO AKCENTAI:
- Suskaidykite užduotis į itin mažus, konkrečius žingsnius, kurių kiekvienas užtrunka 5-15 minučių
- Kiekvienas žingsnis turi būti toks aiškus ir konkretus, kad pašalintų sprendimo paralyžių
- Įtraukite aiškius pradinius taškus, mažinančius energiją, reikalingą pradėti
- Pridėkite motyvacijos elementų, pavyzdžiui, "Nustatykite 25 minučių laikmatį ir dirbkite be trukdžių"
- Namų darbams ir mokymosi užduotims būkite itin konkretūs: puslapių numeriai, klausimų intervalai ar konkretūs rezultatai
- Kiekvienam žingsniui nurodykite realų laiko įvertinimą (minutėmis)

ŽINGSNIŲ KŪRIMO TAISYKLĖS:
1. Kiekvienas žingsnis PRIVALO būti konkretus, specifinis ir nedelsiant įgyvendinamas (JOKIŲ neaiškiŲ žingsnių)
2. Naudokite tikslią, tiesioginę kalbą, sutelktą į TIKSLIAI tai, ką reikia daryti
3. Išdėstykite žingsnius logiškiausia nuoseklia tvarka maksimaliam efektyvumui
4. Pradėkite kiekvieną žingsnį stipriu veiksmo veiksmažodžiu (Sukurti, Parašyti, Išspręsti, Tyrinėti ir t.t.)
5. Pritaikykite žingsnius su ypatingu tikslumu specifinei užduočiai ir kontekstui
6. Sudėtingus žingsnius suskaidykite į paprastesnius - kiekvienas žingsnis turėtų būti VIENAS aiškus veiksmas
7. Įtraukite konkrečius įrankius, metodus ar išteklius, kai tai aktualu
8. Venkite pernelyg bendrų žingsnių - būkite kuo detalesni ir konkretesni
9. SVARBIAUSIA: Kiekvienam žingsniui nurodykite realų laiko įvertinimą minutėmis, atsižvelgiant į jo sudėtingumą

PATEIKITE ATSAKYMĄ KAIP JSON MASYVO FORMATO ŽINGSNIUS:
[
  {"text": "Pirmas žingsnis su konkrečiu veiksmu", "timeEstimate": 15},
  {"text": "Antras žingsnis su konkrečiu veiksmu", "timeEstimate": 25},
  {"text": "Trečias žingsnis su konkrečiu veiksmu", "timeEstimate": 20}
]

IŠSKIRTINIŲ UŽDUOČIŲ SKAIDYMO PAVYZDŽIAI SU LAIKO ĮVERTINIMAIS:

Užduotis: "Redaguoti vestuvių vaizdo įrašą"
Žingsniai: [
  {"text": "Importuoti ir organizuoti visą filmuotą medžiagą į aplankus (ceremonija, vakarėlis, kalbos ir t.t.)", "timeEstimate": 30},
  {"text": "Sukurti pagrindinių momentų chronologinį juodraštį", "timeEstimate": 45},
  {"text": "Redaguoti ceremonijos vaizdus, pasirenkant geriausius kadrus ir sklandžius perėjimus", "timeEstimate": 60},
  {"text": "Redaguoti vakarėlio akcentus ir sinchronizuoti su 2-3 muzikos takeliais", "timeEstimate": 90},
  {"text": "Atlikti spalvų korekciją ir pridėti galutinius teksto užrašus bei efektus", "timeEstimate": 45}
]

Užduotis: "Atlikti matematikos namų darbus"
Žingsniai: [
  {"text": "Surinkti visas reikalingas priemones (vadovėlį, sąsiuvinį, skaičiuotuvą) ir paruošti švarią darbo vietą su vandeniu ir užkandžiu šalia", "timeEstimate": 10},
  {"text": "Nustatyti 25 minučių laikmatį ir išspręsti 1-5 uždavinius, išrašant kiekvieną žingsnį pilnai", "timeEstimate": 25},
  {"text": "Padaryti 5 minučių pertrauką, tada išspręsti 6-10 uždavinius taikant tą patį koncentruotą metodą", "timeEstimate": 30},
  {"text": "Patikrinti visus atsakymus pagal vadovėlio galą arba perskaičiuojant kiekvieną uždavinį", "timeEstimate": 15},
  {"text": "Sudaryti sąrašą koncepcijų, su kuriomis turėjote sunkumų, kad galėtumėte peržiūrėti ar paklausti per kitą pamoką", "timeEstimate": 10}
]

Atkreipkite dėmesį, kad jūsų žingsniai turi būti konkretūs, veiksmingi ir tiesiogiai padėti įveikti atidėliojimą. Grąžinkite tik JSON masyvą su objektais.`;
  
  try {
    // Log request for debugging
    console.log("Sending task breakdown request for:", taskDescription);
    
    // First try with standard prompt
    const response = await fetch('https://text.pollinations.ai/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: `Suskaidykite šią užduotį į 3-5 konkrečius, įgyvendinamus žingsnius su laiko įvertinimais: "${taskDescription}"

Pateikite tik JSON masyvo formato atsakymą su objektais, kur "text" yra konkretus žingsnis, o "timeEstimate" yra jo laiko įvertinimas minutėmis. Pavyzdžiui:
[
  {"text": "Pirmas žingsnis", "timeEstimate": 15},
  {"text": "Antras žingsnis", "timeEstimate": 20}
]` }
        ],
        model: 'openai'
      })
    });

    if (!response.ok) {
      console.error(`API request failed with status ${response.status}`);
      throw new Error(`API request failed with status ${response.status}`);
    }

    // Parse the response
    const text = await response.text();
    console.log("Raw API response:", text);
    
    // Try to find JSON in the response
    const jsonRegex = /\[\s*{[\s\S]*}\s*\]/;
    const jsonMatch = text.match(jsonRegex);
    
    if (jsonMatch) {
      try {
        const parsedData = JSON.parse(jsonMatch[0]);
        console.log("Successfully parsed JSON:", parsedData);
        if (Array.isArray(parsedData) && parsedData.length > 0) {
          return parsedData;
        }
      } catch (jsonError) {
        console.error("Error parsing JSON from match:", jsonError);
      }
    }
    
    // Alternate approach - try to parse the whole response as JSON
    try {
      // Try to parse as JSON
      const data = JSON.parse(text);
      console.log("Parsed complete response as JSON:", data);
      
      // Handle case where API returns {subtasks: [...]} format
      if (data && data.subtasks && Array.isArray(data.subtasks)) {
        return data.subtasks;
      }
      
      if (Array.isArray(data)) {
        // Check if we have objects with text and timeEstimate properties
        if (data.length > 0 && (data[0].text || data[0].timeEstimate)) {
          return data;
        } else {
          // Convert simple strings to objects with default time estimates
          return data.map(item => {
            if (typeof item === 'string') {
              return { text: item, timeEstimate: estimateSubtaskTime(item) };
            }
            return item;
          });
        }
      }
    } catch (parseError) {
      console.error("Error parsing as direct JSON:", parseError);
    }
    
    // If we couldn't parse any JSON, try to extract subtasks from text
    console.log("Fallback to text processing");
    
    // Split text by numbered items or bullet points
    const lines = text.split(/\n/).filter(line => line.trim().length > 0);
    const subtaskRegex = /^(\d+[\.\)]\s*|\*\s+|[-•]\s+)(.+)/;
    
    const subtasks = [];
    
    for (const line of lines) {
      const match = line.match(subtaskRegex);
      if (match) {
        const subtaskText = match[2].trim();
        // Try to find time estimates in the text (e.g., "... (15 min)")
        const timeMatch = subtaskText.match(/\((\d+)\s*min(utes)?\)/i);
        const timeEstimate = timeMatch ? parseInt(timeMatch[1]) : estimateSubtaskTime(subtaskText);
        
        subtasks.push({
          text: subtaskText.replace(/\s*\(\d+\s*min(utes)?\)/i, ''),
          timeEstimate
        });
      }
    }
    
    // If we found subtasks this way, return them
    if (subtasks.length > 0) {
      console.log("Found subtasks through text processing:", subtasks);
      return subtasks;
    }
    
    // Last resort: fall back to default subtasks
    console.log("Falling back to default subtasks");
    
    // Try one more time with a more explicit request
    try {
      console.log("Trying a second approach with a more structured prompt");
      
      const explicitResponse = await fetch('https://text.pollinations.ai/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [
            { 
              role: 'system', 
              content: `Jūs esate funkcija, kuri generuoja užduoties žingsnius.
  
INPUT FORMAT:
- task_description: užduoties aprašymas
  
OUTPUT FORMAT:
[
  {"text": "pirmas žingsnis", "timeEstimate": 15},
  {"text": "antras žingsnis", "timeEstimate": 20},
  {"text": "trečias žingsnis", "timeEstimate": 30}
]

RULES:
1. Sugeneruok 3-5 žingsnius užduočiai
2. Kiekvienas žingsnis turi turėti aiškų veiksmą
3. Priskirk realistiškus laiko įvertinimus minutėmis
4. Grąžink tik JSON masyvą be jokių papildomų paaiškinimų ar teksto
5. Užtikrink, kad JSON masyvas būtų teisingas` 
            },
            { 
              role: 'user', 
              content: `{"task_description": "${taskDescription}"}` 
            }
          ],
          model: 'openai'
        })
      });
      
      if (!explicitResponse.ok) {
        throw new Error("Second API request failed");
      }
      
      const explicitText = await explicitResponse.text();
      console.log("Second approach response:", explicitText);
      
      // Try to parse JSON directly
      try {
        const jsonData = JSON.parse(explicitText);
        if (Array.isArray(jsonData) && jsonData.length > 0) {
          return jsonData.map(item => {
            if (typeof item === "object" && item !== null) {
              // Ensure timeEstimate is a number
              const timeEstimate = typeof item.timeEstimate === "number" ? 
                item.timeEstimate : estimateSubtaskTime(item.text || "");
              
              return {
                text: item.text || `Žingsnis ${jsonData.indexOf(item) + 1}`,
                timeEstimate
              };
            }
            return { text: String(item), timeEstimate: 15 };
          });
        }
      } catch (jsonError) {
        console.error("Error parsing second approach JSON:", jsonError);
        
        // Try to extract JSON from text
        const jsonMatch = explicitText.match(/\[\s*{[\s\S]*}\s*\]/);
        if (jsonMatch) {
          try {
            const extractedJson = JSON.parse(jsonMatch[0]);
            if (Array.isArray(extractedJson) && extractedJson.length > 0) {
              return extractedJson;
            }
          } catch (e) {
            console.error("Failed to parse extracted JSON from second approach");
          }
        }
      }
    } catch (secondAttemptError) {
      console.error("Second attempt also failed:", secondAttemptError);
    }
    
    throw new Error("Could not parse task breakdown, using defaults");
    
  } catch (error) {
    console.error('Error generating task breakdown:', error);
    
    // More intelligent task-specific default subtasks with anti-procrastination focus and time estimates
    const taskLower = taskDescription.toLowerCase();
    
    // Check specifically for video editing tasks
    if ((taskLower.includes('edit') || taskLower.includes('redaguoti')) && 
        (taskLower.includes('video') || taskLower.includes('film') || taskLower.includes('footage') || 
         taskLower.includes('vaizdo') || taskLower.includes('filmas') || taskLower.includes('įrašą'))) {
      return [
        { text: `Importuoti ir sutvarkyti visą vaizdo medžiagą į aiškiai pažymėtus aplankus (pagal sceną/įvykį)`, timeEstimate: 30 },
        { text: `Peržiūrėti visą filmuotą medžiagą ir pasirinkti geriausius klipus, pažymint pradžios/pabaigos taškus`, timeEstimate: 45 },
        { text: `Sukurti pradinį pagrindinės sekos montažą su baziniais perėjimais`, timeEstimate: 60 },
        { text: `Pridėti muzikos takelius ir sinchronizuoti su pagrindiniais momentais vaizdo įraše`, timeEstimate: 40 },
        { text: `Pritaikyti spalvų korekciją, efektus ir eksportuoti galutinį vaizdo įrašą`, timeEstimate: 50 }
      ];
    }
    // Enhanced defaults for homework and study tasks
    else if (taskLower.includes('homework') || taskLower.includes('assignment') || 
             taskLower.includes('namų darbai') || taskLower.includes('užduotis')) {
      return [
        { text: `Paruošti darbo vietą: surinkti visas reikalingas priemones, pašalinti trukdžius, pasiruošti vandens/užkandį`, timeEstimate: 10 },
        { text: `Suskirstyti užduotį į mažas dalis (1-5 uždaviniai, 1-3 puslapiai ir t.t.)`, timeEstimate: 15 },
        { text: `Nustatyti 25 minučių laikmatį ir dirbti su pirma dalimi visiškoje koncentracijoje`, timeEstimate: 25 },
        { text: `Padaryti 5 minučių pertrauką, tada tęsti su kita dalimi`, timeEstimate: 30 },
        { text: `Atidžiai peržiūrėti savo darbą ir pažymėti vietas, kur reikia pagalbos`, timeEstimate: 20 }
      ];
    } else if (taskLower.includes('study') || taskLower.includes('exam') || taskLower.includes('test') ||
               taskLower.includes('mokytis') || taskLower.includes('egzaminas') || taskLower.includes('testas')) {
      return [
        { text: `Sukurti specifinį mokymosi planą, išvardijant visas temas pagal sudėtingumą`, timeEstimate: 20 },
        { text: `Paruošti aplinką be trukdžių su visomis reikalingomis priemonėmis`, timeEstimate: 15 },
        { text: `Mokytis vienos temos 25 minutes, naudojant aktyvius metodus (atminties korteles, praktines užduotis)`, timeEstimate: 25 },
        { text: `Padaryti 5 minučių pertrauką, tada patikrinti save, ką tik ką išmokote`, timeEstimate: 15 },
        { text: `Pereiti prie kitos temos ir pakartoti procesą, trumpai peržiūrint ankstesnes temas`, timeEstimate: 30 }
      ];
    } else if (taskLower.includes('write') || taskLower.includes('essay') || taskLower.includes('paper') ||
               taskLower.includes('rašyti') || taskLower.includes('rašinys') || taskLower.includes('darbas')) {
      return [
        { text: `Sukurti detalų planą su pagrindiniais punktais ir juos pagrindžiančiomis detalėmis`, timeEstimate: 25 },
        { text: `Nustatyti 20 minučių laikmatį ir parašyti tik įžanginę pastraipą`, timeEstimate: 20 },
        { text: `Rašyti kiekvieną pagrindinę pastraipą po vieną, darant trumpas pertraukas tarp jų`, timeEstimate: 40 },
        { text: `Užbaigti išvadą, sutelkiant dėmesį tik į pagrindinių punktų apibendrinimą`, timeEstimate: 15 },
        { text: `Redaguoti visą dokumentą dėl aiškumo, gramatikos ir rišlumo`, timeEstimate: 30 }
      ];
    } else if (taskLower.includes('clean') || taskLower.includes('organize') || taskLower.includes('tidy') ||
               taskLower.includes('valyti') || taskLower.includes('organizuoti') || taskLower.includes('tvarkyti')) {
      return [
        { text: `Nustatyti 10 minučių laikmatį ir greitai pašalinti visas akivaizdžias šiukšles ir nereikalingus daiktus`, timeEstimate: 10 },
        { text: `Susitelkti į vieną mažą vietą (stalą, lentyną, stalčių) vienu metu`, timeEstimate: 15 },
        { text: `Surūšiuoti daiktus į "pasilikti", "atiduoti" ir "išmesti" krūvas, per daug negalvojant`, timeEstimate: 20 },
        { text: `Kruopščiai nuvalyti paviršius, pradedant nuo viršaus iki apačios`, timeEstimate: 25 },
        { text: `Logiškai sutvarkyti likusius daiktus, dažniausiai naudojamus padedant lengviausiai prieinamose vietose`, timeEstimate: 15 }
      ];
    } else if (taskLower.includes('read') || taskLower.includes('book') || taskLower.includes('chapter') ||
               taskLower.includes('skaityti') || taskLower.includes('knyga') || taskLower.includes('skyrius')) {
      return [
        { text: `Rasti patogią, be trukdžių vietą su geru apšvietimu`, timeEstimate: 10 },
        { text: `Nustatyti 25 minučių laikmatį sutelktam skaitymui (be telefono ar socialinių tinklų)`, timeEstimate: 25 },
        { text: `Daryti užrašus apie pagrindinius punktus arba naudoti lipnias pastabas svarbių vietų žymėjimui`, timeEstimate: 20 },
        { text: `Po kiekvieno skyriaus parašyti 2-3 sakinių santrauką savo žodžiais`, timeEstimate: 15 },
        { text: `Padaryti 5 minučių pertrauką, tada tęsti su kitu skyriumi`, timeEstimate: 30 }
      ];
    } else if (taskLower.includes('present') || taskLower.includes('presentation') || taskLower.includes('speech') ||
               taskLower.includes('pristatyti') || taskLower.includes('pristatymas') || taskLower.includes('kalba')) {
      return [
        { text: `Sukurti detalų planą su pagrindiniais punktais ir juos pagrindžiančiais įrodymais`, timeEstimate: 30 },
        { text: `Parengti vizualinius elementus ar skaidres su minimaliu tekstu ir tinkamais paveikslėliais`, timeEstimate: 45 },
        { text: `Repetuoti pristatymą vieną kartą iki galo nesustojant`, timeEstimate: 15 },
        { text: `Įrašyti save ir pažymėti tobulintinas sritis (aiškumas, tempas, gestai)`, timeEstimate: 20 },
        { text: `Repetuoti dar 3 kartus, sutelkiant dėmesį į sklandžius perėjimus ir laiko valdymą`, timeEstimate: 30 }
      ];
    } else {
      // Generic defaults focused on anti-procrastination
      return [
        { text: `Suskaidyti "${taskDescription}" į 3-5 mažas, pasiekiamas dalis`, timeEstimate: 15 },
        { text: `Paruošti aplinką: pašalinti trukdžius ir surinkti visas reikalingas priemones`, timeEstimate: 10 },
        { text: `Nustatyti 25 minučių laikmatį ir dirbti su pirma dalimi visiškoje koncentracijoje`, timeEstimate: 25 },
        { text: `Padaryti 5 minučių pertrauką, tada tęsti su kita dalimi`, timeEstimate: 30 },
        { text: `Peržiūrėti savo progresą ir pakoreguoti planą, jei reikia`, timeEstimate: 15 }
      ];
    }
  }
};

// Helper function to estimate time for a subtask based on the text
const estimateSubtaskTime = (subtaskText) => {
  if (!subtaskText) return 15; // Ensure we have text
  
  const text = subtaskText.toLowerCase();
  
  // Check for explicitly mentioned time
  const timeMatch = text.match(/(\d+)[ -]*(minute|min|hour|hr|minut|val)/);
  if (timeMatch) {
    // Convert hours to minutes if needed
    if (timeMatch[2].startsWith('hour') || timeMatch[2].startsWith('hr') || 
        timeMatch[2].startsWith('val')) {
      return parseInt(timeMatch[1], 10) * 60;
    }
    return parseInt(timeMatch[1], 10);
  }
  
  // Count words for complexity assessment
  const wordCount = text.split(/\s+/).length;
  const complexity = wordCount * 0.5;
  
  // Domain-specific time estimates
  
  // Research activities
  if (text.includes('research') || text.includes('find') || text.includes('look up') || text.includes('search') ||
      text.includes('tyrinė') || text.includes('ieško') || text.includes('rasti') || text.includes('paieška')) {
    if (text.includes('in-depth') || text.includes('detailed') || text.includes('comprehensive') ||
        text.includes('išsam') || text.includes('detalų') || text.includes('nuodug')) {
      return Math.max(45, complexity);
    }
    return Math.max(20, Math.min(45, complexity));
  }
  
  // Writing activities
  if (text.includes('write') || text.includes('create') || text.includes('draft') || text.includes('compose') ||
      text.includes('rašy') || text.includes('kur') || text.includes('juodraš') || text.includes('komponuo')) {
    if (text.includes('outline') || text.includes('brief') || 
        text.includes('plan') || text.includes('trump')) {
      return Math.max(15, Math.min(30, complexity));
    }
    if (text.includes('essay') || text.includes('report') || text.includes('paper') ||
        text.includes('raši') || text.includes('ataska') || text.includes('darb')) {
      return Math.max(45, complexity * 1.5);
    }
    return Math.max(30, complexity);
  }
  
  // Timer-based activities
  if ((text.includes('timer') || text.includes('laikmat')) && text.match(/\d+/)) {
    // Extract the timer duration
    const duration = text.match(/(\d+)[ -]*(minute|min|hour|hr|minut|val)/);
    if (duration) {
      // Convert hours to minutes if needed
      if (duration[2].startsWith('hour') || duration[2].startsWith('hr') || 
          duration[2].startsWith('val')) {
        return parseInt(duration[1], 10) * 60;
      }
      return parseInt(duration[1], 10);
    }
  }
  
  // Quantity-based estimation (if the task mentions a specific number of items)
  const quantityMatch = text.match(/(\d+)\s*(items|questions|problems|pages|slides|sections|elementų|klausimų|uždavinių|puslapių|skaidrių|dalių)/);
  if (quantityMatch) {
    const quantity = parseInt(quantityMatch[1], 10);
    const itemType = quantityMatch[2].toLowerCase();
    
    switch (itemType) {
      case 'questions':
      case 'problems':
      case 'klausimų':
      case 'uždavinių':
        return Math.max(15, quantity * 3); // Approx 3 min per question/problem
      case 'pages':
      case 'puslapių':
        return Math.max(15, quantity * 4); // Approx 4 min per page
      case 'slides':
      case 'skaidrių':
        return Math.max(20, quantity * 5); // Approx 5 min per slide
      case 'sections':
      case 'dalių':
        return Math.max(30, quantity * 10); // Approx 10 min per section
      case 'items':
      case 'elementų':
      default:
        return Math.max(15, quantity * 2); // Approx 2 min per generic item
    }
  }
  
  // Default based on complexity of task description
  return Math.max(15, Math.min(45, wordCount * 1.5));
};

// Helper function to estimate task time
export const estimateTaskTime = async (taskDescription) => {
  console.log("Estimating time for:", taskDescription);
  
  const systemPrompt = `Jūs esate produktyvumo ekspertas, specializuojantis užduočių laiko įvertinime su akcentu į anti-atidėliojimą. 
  Bet kokiai užduočiai įvertinkite, kiek minučių užtruktų ją užbaigti.
  
  Svarbios gairės:
  1. Namų darbų ar mokymosi užduotims įskaičiuokite pasiruošimo laiką, pertraukų laiką ir peržiūros laiką
  2. Rašymo užduotims skirkite 30 minučių vienam puslapiui teksto
  3. Skaitymo užduotims numatykite 5 minutes vienam puslapiui bei papildomą laiką užrašams
  4. Pridėkite 15-20% laiko atsargą, atsižvelgiant į galimus trukdžius ir atidėliojimą
  5. Atsižvelkite į užduoties sudėtingumą ir apimtį
  
  Pateikite tik skaičių, nurodantį minutes.`;
  
  try {
    const response = await fetch('https://text.pollinations.ai/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: `Įvertinkite laiką minutėmis šiai užduočiai, atsižvelgiant į pertraukas, pasiruošimą ir galimą atidėliojimą: "${taskDescription}"` }
        ],
        model: 'openai'
      })
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const rawText = await response.text();
    console.log("Time estimation response:", rawText);
    
    try {
      // First try to parse as JSON
      const data = JSON.parse(rawText);
      
      // If it's JSON, extract the relevant data
      let extractedText = '';
      
      if (typeof data === 'string') {
        extractedText = data;
      } else if (data.choices && data.choices[0] && data.choices[0].message) {
        extractedText = data.choices[0].message.content;
      } else if (data.content) {
        extractedText = data.content;
      } else {
        extractedText = JSON.stringify(data);
      }
      
      // Extract number from the text
      const jsonTimeMatch = extractedText.match(/\d+/);
      if (jsonTimeMatch) {
        return Math.ceil(parseInt(jsonTimeMatch[0], 10) * 1.2); // Add 20% buffer
      }
    } catch (jsonError) {
      console.log('Time estimation response is not JSON, using raw text instead');
      // If JSON parsing fails, just use the raw text
    }
    
    // Try to extract a number directly from the raw text
    const timeMatch = rawText.match(/\d+/);
    
    // If no number found, use fallback estimation
    if (!timeMatch) {
      return fallbackTimeEstimation(taskDescription);
    }
    
    // Add 20% buffer to the estimated time to account for procrastination
    const estimatedMinutes = parseInt(timeMatch[0], 10);
    return Math.ceil(estimatedMinutes * 1.2);
  } catch (error) {
    console.error('Error estimating task time:', error);
    return fallbackTimeEstimation(taskDescription);
  }
};

// Helper function for fallback time estimation
const fallbackTimeEstimation = (taskDescription) => {
  // Better fallback estimation based on task type
  const taskLower = taskDescription.toLowerCase();
  const wordCount = taskDescription.split(/\s+/).length;
  
  // Detect task type for better estimation
  if (taskLower.includes('homework') || taskLower.includes('assignment') || 
      taskLower.includes('namų darb') || taskLower.includes('užduotis')) {
    return 60; // Default 1 hour for homework
  } else if (taskLower.includes('study') || taskLower.includes('learn') || 
             taskLower.includes('mokytis') || taskLower.includes('studijuoti')) {
    return 90; // Default 1.5 hours for studying 
  } else if (taskLower.includes('write') || taskLower.includes('essay') || 
             taskLower.includes('rašyti') || taskLower.includes('rašinys')) {
    return 120; // Default 2 hours for writing tasks
  } else if (taskLower.includes('read') || taskLower.includes('book') || 
             taskLower.includes('skaityti') || taskLower.includes('knyg')) {
    return 75; // Default 1.25 hours for reading tasks
  } else {
    // Generic complexity-based calculation with procrastination buffer
    const complexityFactor = taskLower.includes('research') || taskLower.includes('tyrinėti') || 
                           taskLower.includes('write') || taskLower.includes('rašyti') || 
                           taskLower.includes('create') || taskLower.includes('kurti') ? 1.5 : 1;
    
    // Add 20% buffer for procrastination
    return Math.ceil(Math.max(30, wordCount * 5 * complexityFactor * 1.2));
  }
};

// Specialized domain tips for common task types
export const getDomainTips = (taskDescription, subtask) => {
  const taskLower = taskDescription.toLowerCase();
  const subtaskLower = subtask.toLowerCase();
  
  // Research domain tips
  if (subtaskLower.includes('research') || subtaskLower.includes('find information') || subtaskLower.includes('gather data') || 
      subtaskLower.includes('tyrinėti') || subtaskLower.includes('rasti informaciją') || subtaskLower.includes('rinkti duomenis')) {
    return `
**Nustatykite aiškius tyrimo parametrus**: Prieš pradėdami tiksliai apibrėžkite, ko ieškote. Sukurkite specifinių klausimų ar duomenų, kuriuos reikia rasti, sąrašą, kad išvengtumėte betikslio naršymo.

**Naudokite Cornell užrašų sistemą**: Padalinkite savo užrašus į 3 dalis: pagrindinių užrašų sritį (dešinėje), užuominų stulpelį (kairėje) ir santraukos sritį (apačioje). Taip sutvarkyti tyrimų rezultatai padės geriau atkurti ir sintezuoti informaciją vėliau.

**Taikykite CRAAP šaltinių testą**: Įvertinkite kiekvieną šaltinį pagal: Aktualumą (kaip nauja?), Tinkamumą (kiek taikytina?), Autoritetą (kas sukūrė?), Tikslumą (ar patikima?) ir Tikslą (kodėl sukurta?). Tai užtikrina, kad naudosite kokybišką informaciją.

**Sukurkite tyrimų duomenų bazę**: Naudokite įrankį kaip Notion, Excel ar paprastą Google Docs lentelę svarbiausių išvadų stebėjimui su stulpeliais šaltiniui, pagrindiniams punktams ir kaip tai susiję su jūsų specifiniais poreikiais. Tai palengvins sintezę vėliau.

**Išvenkite "triušio urvo" tyrimuose**: Nustatykite 25-30 minučių laikmatį (Pomodoro technika) ir išlikite sutelkti į savo konkrečius tyrimo klausimus. Kai laikmatis baigiasi, skirkite 2 minutes įvertinti, ar esate teisingame kelyje, ar nukrypstate į šalutinę informaciją.
`;
  }
  
  // Writing domain tips
  else if (subtaskLower.includes('write') || subtaskLower.includes('draft') || subtaskLower.includes('compose') ||
           subtaskLower.includes('rašyti') || subtaskLower.includes('kurti tekstą') || subtaskLower.includes('parašyti')) {
    return `
**Naudokite "Prastos pirmosios versijos" techniką**: Leiskite sau iš pradžių rašyti prastai - tiesiog dėkite žodžius ant puslapio neredaguodami. Tyrimai rodo, kad tai sumažina perfekcionizmą ir pagerina bendrą rašymo kokybę, kai vėliau peržiūrite.

**Pirmiausia sukurkite teminius sakinius**: Prieš rašydami pilnas pastraipas, sukurkite po vieną aiškų teminį sakinį kiekvienam skyriui/pastraipai. Tai sukuria jūsų rašinio struktūrą ir užtikrina loginį srautą.

**Taikykite Hemingway metodą**: Rašykite stovėdami (prie prekystalio ar stovimo stalo), kad sukurtumėte skubos jausmą. Tada redaguokite sėdėdami, kad įsitrauktumėte į kritiškesnį mąstymą. Šis fizinės būsenos pakeitimas padeda atskirti kūrimą nuo vertinimo.

**Naudokite Pomodoro techniką**: Nustatykite 25 minučių laikmatį sutelktam rašymui be trukdžių. Kai laikmatis baigiasi, padarykite 5 minučių pertrauką. Tai sukuria psichologinį pagreitį ir apsaugo nuo perdegimo.

**Atlikite pastraipų lygio atvirkštinį planą**: Po juodraščio parašymo, paraštėje nurodykite pagrindinę kiekvienos pastraipos mintį. Tai padeda patikrinti, ar jūsų rašymas yra koncentruotas ir logiškai struktūruotas, ir palengvina skyrių pertvarkymą, jei reikia.
`;
  }
  
  // Design/creative domain tips
  else if (subtaskLower.includes('design') || subtaskLower.includes('create') || subtaskLower.includes('develop') || 
           subtaskLower.includes('prototype') || subtaskLower.includes('mockup') ||
           subtaskLower.includes('dizainas') || subtaskLower.includes('kurti') || subtaskLower.includes('vystyti') || 
           subtaskLower.includes('prototipas') || subtaskLower.includes('maketas')) {
    return `
**Taikykite 20 minučių eskizo taisyklę**: Pradėkite greitai generuodami 3-5 skirtingus grubius koncepcijų eskizus (kiekvienam skirkite daugiausiai 4-5 minutes). Tai neleidžia susitelkti ties vienu sprendimu ir išplečia jūsų kūrybines galimybes.

**Naudokite Dizaino studijos metodą**: Padalinkite savo dizaino procesą į: Supratimą (5 min.), Divergavimą (10 min.), Konvergavimą (10 min.) ir Tobulinimą (15 min.). Šis struktūruotas metodas užkerta kelią įprastoms dizaino klaidoms, pavyzdžiui, per ankstyvam įsipareigojimui.

**Taikykite apribojimais pagrįstą kūrybiškumą**: Sąmoningai uždėkite 2-3 apribojimus savo dizainui (pvz., "turi naudoti tik dvi spalvas" arba "turi veikti be vaizdų"). Tyrimai rodo, kad apribojimai paradoksaliai padidina kūrybiškumą, priversdami ieškoti naujų sprendimų.

**Paruoškite savo kūrybinę aplinką**: Prieš pradėdami, surinkite visus įrankius, išvalykite darbo vietą ir nustatykite tinkamą apšvietimą. Tyrimai rodo, kad fizinė aplinka reikšmingai veikia kūrybinį našumą.

**Atlikite mikro grįžtamojo ryšio sesijas**: Užbaigę dizaino iteraciją, nufotografuokite ją ir pažiūrėkite kitame įrenginyje arba iš kito kampo. Šis perspektyvos pakeitimas padeda pastebėti problemas ir galimybes, kurių kitu atveju nepastebėtumėte.
`;
  }
  
  // Programming domain tips
  else if (subtaskLower.includes('code') || subtaskLower.includes('program') || subtaskLower.includes('develop') || 
           subtaskLower.includes('debug') || subtaskLower.includes('fix bug') ||
           subtaskLower.includes('kodas') || subtaskLower.includes('programuoti') || subtaskLower.includes('vystyti') || 
           subtaskLower.includes('derinti') || subtaskLower.includes('taisyti klaidą')) {
    return `
**Taikykite "Guminės anties" derinimą**: Laikykite mažą objektą (tradiciškai guminę antį) ant savo stalo ir paaiškinkite jai savo kodą eilutė po eilutės, kai užstringate. Tai priverčia jus aiškiai išdėstyti savo logiką ir dažnai atskleidžia problemą be išorinės pagalbos.

**Naudokite 3 žingsnių testavimu pagrįstą metodą**: 1) Parašykite neveikiantį testą, kuris apibrėžia, ką norite, kad kodas darytų, 2) Parašykite minimalų kodą, kad testas praeitų, 3) Refaktorinkite kodą, išlaikydami testą praeinantį. Ši metodika sukuria švaresnį, patikimesnį kodą.

**Įgyvendinkite laiko ribojimą sudėtingoms problemoms**: Nustatykite 30 minučių laikmatį, kai sprendžiate sudėtingą problemą. Jei problema neišspręsta, kai laikmatis baigiasi, naudokite kitą metodą arba ieškokite pagalbos. Tyrimai rodo, kad efektyvumas ženkliai sumažėja po 30 minučių strigimo.

**Sukurkite sekimo lentelę**: Sudėtingoms loginėms operacijoms sukurkite lentelę, sekančią kiekvieno kintamojo reikšmę, kai ji keičiasi vykdymo metu. Šis vizualus metodas padaro logines klaidas daug lengviau pastebimas.

**Taikykite 80/20 taisyklę kodo kokybei**: Sutelkite 80% savo optimizavimo pastangų į 20% kodo, kuris vykdomas dažniausiai. Naudokite profiliavimo įrankius šioms kritinėms vietoms identifikuoti, o ne optimizuokite aklai.
`;
  }
  
  // Study/learning domain tips
  else if (subtaskLower.includes('study') || subtaskLower.includes('learn') || subtaskLower.includes('understand') ||
           subtaskLower.includes('review') || taskLower.includes('homework') ||
           subtaskLower.includes('mokytis') || subtaskLower.includes('studijuoti') || subtaskLower.includes('suprasti') ||
           subtaskLower.includes('peržiūrėti') || taskLower.includes('namų darbai')) {
    return `
**Taikykite intervalų kartojimą**: Užuot viską mokydamiesi iš karto, padalinkite mokymosi sesiją į trumpus periodus su didėjančiais intervalais tarp peržiūrų. Tyrimai rodo, kad tai pagerina įsiminimą iki 200% lyginant su tradiciniu mokymusi.

**Naudokite Feynman techniką**: Paaiškinkite koncepciją, kurią mokotės, paprastais žodžiais, tarsi mokytumėte ją kažkam, nepažįstančiam temos. Tai identifikuoja spragas jūsų supratime ir sustiprina neuroninius ryšius.

**Sukurkite aplinką be trukdžių**: Išjunkite pranešimus, naudokite programas kaip Freedom blokuoti atitraukiančias svetaines ir padėkite telefoną kitame kambaryje. Tyrimai rodo, kad dėmesys atsistato per 23 minutes po kiekvieno pertraukimo.

**Įgyvendinkite aktyvų atgaminimą**: Užuot pasyviai perskaitę medžiagą, aktyviai testuokite save dėl turinio. Sukurkite atminties korteles ar praktikos klausimus, kurie priverčia jus ištraukti informaciją iš atminties, tai sustiprina mokymosi kelius.

**Naudokite "Atminties rūmų" metodą**: Informacijai, kurią reikia įsiminti, asocijuokite pagrindinius konceptus su specifinėmis vietomis pažįstamoje aplinkoje (kaip jūsų namai). Ši erdvinės atminties technika pasirodė efektyvi nuo senovės laikų.
`;
  }
  
  // Presentation domain tips
  else if (subtaskLower.includes('present') || subtaskLower.includes('presentation') || subtaskLower.includes('speech') ||
           subtaskLower.includes('pristatyti') || subtaskLower.includes('pristatymas') || subtaskLower.includes('kalba')) {
    return `
**Taikykite 10/20/30 taisyklę**: Ribokite savo pristatymą iki 10 skaidrių, 20 minučių ir 30 taškų minimalaus šrifto dydžio. Tai priverčia aiškiai išdėstyti mintis ir apsaugo nuo informacijos perkrovos auditorijai.

**Naudokite "Žinios namo" struktūrą**: Sukurkite vieną visaapimančią žinutę (stogas) paremtą 3 pagrindiniais punktais (stulpai), kiekvienas su 2-3 įrodymų elementais (pamatas). Ši architektūra užtikrina, kad jūsų pristatymas turės darnią struktūrą.

**Įgyvendinkite 5 sekundžių skaidrių taisyklę**: Kurkite kiekvieną skaidrę taip, kad jos pagrindinis punktas būtų suprantamas per 5 sekundes. Tai užtikrina, kad jūsų auditorija neskaitys skaidrių vietoj to, kad klausytųsi jūsų.

**Taikykite 3 dalių praktikos metodą**: 1) Praktikuokitės skaitydami savo užrašus, 2) Praktikuokitės su minimaliais užrašais, žiūrėdami į pagrindinius punktus tik kai reikia, 3) Praktikuokitės be užrašų prieš veidrodį ar kamerą. Šis progresyvus metodas efektyviai ugdo pasitikėjimą.

**Atlikite ritualą prieš pristatymą**: 5 minutes prieš pristatymą, raskite privačią erdvę: 1) Stovėkite galios pozoje 2 minutes (tyrimai rodo, kad tai sumažina streso hormonus), 2) Giliai įkvėpkite 10 kartų, 3) Pakartokite asmeninį patvirtinimą. Šis ritualas sumažina nerimą ir pagerina pristatymą.
`;
  }
  
  // Planning/organization domain tips
  else if (subtaskLower.includes('plan') || subtaskLower.includes('organize') || subtaskLower.includes('schedule') ||
           subtaskLower.includes('planuoti') || subtaskLower.includes('organizuoti') || subtaskLower.includes('tvarkaraštis')) {
    return `
**Taikykite laiko blokų planavimo metodą**: Padalinkite savo turimą laiką į skirtingus blokus, skirtus konkrečioms užduotims. Tyrimai rodo, kad tai sumažina konteksto perjungimo sąnaudas ir padidina produktyvumą iki 25%.

**Naudokite SMART++ sistemą**: Kiekvienam suplanuotam veiksmui užtikrinkite, kad jis būtų: Specifinis, Matuojamas, Pasiekiamas, Aktualus, Terminuotas, plius Energijai efektyvus (suderintas su jūsų energijos lygiais) ir Įdomus (asmeniškai motyvuojantis). Šis SMART tikslų išplėtimas pagerina įvykdymą.

**Įgyvendinkite 3-2-1 planavimo struktūrą**: Identifikuokite 3 kritines misijos užduotis, 2 priežiūros užduotis ir 1 vystymo užduotį (asmeniniam/profesiniam augimui). Tai sukuria subalansuotą planą, kuris jus stumia į priekį, tuo pačiu išlaikydamas dabartines atsakomybes.

**Sukurkite planavimo užkardas**: Apibrėžkite specifines sąlygas, kurios iššauks plano peržiūrą (pvz., "Jei atsiliekate 20% nuo grafiko iki trečiadienio"). Tai numato problemas prieš joms tampant kritinėmis ir įtraukia prisitaikymą į jūsų planavimą.

**Atlikite 10 minučių dienos pabaigos peržiūrą**: Dienos pabaigoje skirkite 10 minučių įvertinti, kas buvo pasiekta, kas ne, ir kurti apytikslį planą rytojui. Tyrimai rodo, kad tai pagerina kitos dienos produktyvumą, suteikdamas užbaigimą ir sumažindamas kognityvinę naštą.
`;
  }
  
  // Meetings/communication domain tips
  else if (subtaskLower.includes('meet') || subtaskLower.includes('interview') || subtaskLower.includes('communicate') ||
           subtaskLower.includes('susitikimas') || subtaskLower.includes('pokalbis') || subtaskLower.includes('komunikuoti')) {
    return `
**Taikykite 3K1K susitikimo sistemą**: Pradėkite aiškiai apibrėždami Kodėl šis susitikimas yra svarbus, Ką tikitės pasiekti, Kas turi dalyvauti, ir Kiek laiko tai turėtų užtrukti. Ši struktūra neleidžia susitikimo apimčiai išsiplėsti.

**Naudokite 2 minučių taisyklę kalbėjimui**: Kai reiškiate mintį, stenkitės ją išreikšti per 2 minutes. Tyrimai rodo, kad dėmesys reikšmingai sumažėja po šio laiko. Tai sukuria dinamiškesnes, įtraukiančias diskusijas.

**Įgyvendinkite susitikimo vaidmenų rotaciją**: Paskirkite tris pagrindinius vaidmenis (moderatorius, laiko prižiūrėtojas, užrašų rašytojas) ir reguliariai juos keiskite. Tai padidina įsitraukimą ir neleidžia susitikimui būti dominuojamam vieno balso.

**Sukurkite sprendimų dokumentavimo sistemą**: Naudokite paprastą šabloną, kuris fiksuoja: priimtą sprendimą, svarstytas alternatyvas, kas atsakingas už įgyvendinimą ir tolesnius terminus. Tai apsaugo nuo sprendimų amnezijos ir pagerina atskaitomybę.

**Atlikite "Pliusas/Delta" užbaigimą**: Paskutinėse 3 minutėse paprašykite dalyvių pasidalinti vienu dalyku, kuris vyko gerai (pliusas), ir vienu dalyku, kurį reikia tobulinti (delta) apie patį susitikimą. Tai sukuria nuolatinį tobulėjimą jūsų susitikimų procesuose.
`;
  }
  
  // Default generic tips if no specialized domain is detected
  return null;
};

// Function to generate tips using the Pollinations API
export const generateTips = async (prompt, signal) => {
  if (!prompt) {
    throw new Error('Prompt is required');
  }

  try {
    const requestBody = {
      messages: [
        { 
          role: 'system', 
          content: "Jūs esate pasaulinio lygio produktyvumo treneris, teikiantis konkrečius, tikslius vykdymo patarimus lietuvių kalba."
        },
        { role: 'user', content: prompt }
      ],
      model: 'openai'
    };

    const response = await fetch('https://text.pollinations.ai/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
      signal
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API Error (${response.status}): ${errorText}`);
    }

    const data = await response.text();
    return data;
  } catch (error) {
    if (error.name === 'AbortError') {
      throw error;
    }
    console.error('Error generating tips:', error);
    throw new Error(`Failed to generate tips: ${error.message}`);
  }
}; 