import { useState, useEffect } from 'react';

// Hook for text generation
export const usePollinationsText = (prompt, options = {}) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { 
    seed = null, 
    model = 'openai', 
    systemPrompt = "You are a highly efficient productivity assistant." 
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
  const systemPrompt = `You are THE DEFINITIVE productivity expert specializing in breaking tasks into PERFECT, actionable steps that DEFEAT PROCRASTINATION.

MISSION: For any task, provide 3-5 crystal-clear, extremely specific subtasks that represent the IDEAL way to accomplish it while overcoming procrastination. Each subtask should include a precise time estimate.

ANTI-PROCRASTINATION FOCUS:
- Break tasks down into extremely small, concrete steps that take 5-15 minutes each
- Make each step so clear and specific that it eliminates decision paralysis
- Include clear starting points that reduce the activation energy needed to begin
- Add motivation elements like "Set a 25-minute timer and focus without distractions"
- For homework and study tasks, be extra specific with page numbers, question ranges, or specific outputs
- Include a realistic time estimate for EACH subtask (in minutes)

RULES FOR CREATING SUBTASKS:
1. Each subtask MUST be concrete, specific, and immediately actionable (NO vague steps)
2. Use precise, direct language focused on EXACTLY what action to take
3. Arrange subtasks in the most logical sequential order for maximum efficiency
4. Start each subtask with a strong action verb (Create, Write, Solve, Research, etc.)
5. Tailor subtasks with remarkable precision to the specific domain and context of the task
6. Break complex steps into simpler ones - each subtask should be ONE clear action
7. Include specific tools, methods, or resources whenever relevant
8. Avoid overly general steps - be as detailed and specific as possible
9. MOST IMPORTANTLY: Include a realistic time estimate in minutes for EACH subtask based on its complexity

EXAMPLES OF EXCEPTIONAL SUBTASK BREAKDOWNS WITH TIME ESTIMATES:

Task: "Edit a wedding video"
Subtasks: [
  {"text": "Import and organize all footage into folders (ceremony, reception, speeches, etc.)", "timeEstimate": 30},
  {"text": "Create a rough assembly of the key moments in chronological order", "timeEstimate": 45},
  {"text": "Edit the ceremony footage with best shots and smooth transitions", "timeEstimate": 60},
  {"text": "Edit reception highlights and synchronize with 2-3 music tracks", "timeEstimate": 90},
  {"text": "Color grade the footage and add final text overlays and effects", "timeEstimate": 45}
]

Task: "Do math homework"
Subtasks: [
  {"text": "Gather all required materials (textbook, notebook, calculator) and set up a clean workspace with water and a snack nearby", "timeEstimate": 10},
  {"text": "Set a 25-minute timer and solve problems #1-5, writing out each step completely", "timeEstimate": 25},
  {"text": "Take a 5-minute break, then solve problems #6-10 with the same focused approach", "timeEstimate": 30},
  {"text": "Check all answers against the back of the book or by reworking each problem", "timeEstimate": 15},
  {"text": "Create a list of any concepts you struggled with to review or ask about next class", "timeEstimate": 10}
]

Task: "Write an essay"
Subtasks: [
  {"text": "Create a specific outline with exactly 3 main points and 2-3 supporting details for each", "timeEstimate": 20},
  {"text": "Set a timer for 20 minutes and write only the introduction paragraph without editing", "timeEstimate": 20},
  {"text": "Write the first body paragraph focusing on your strongest point (aim for 150-200 words)", "timeEstimate": 25},
  {"text": "Continue with remaining body paragraphs one at a time, taking short breaks between each", "timeEstimate": 45},
  {"text": "Write the conclusion, then edit the entire essay for grammar, clarity, and flow", "timeEstimate": 30}
]

Remember, your subtasks need to be TAILORED to the exact task at hand, considering its specific context, complexity, and domain. Focus especially on making steps SMALL and SPECIFIC to overcome procrastination, and provide ACCURATE time estimates for each subtask based on its complexity.`;
  
  try {
    // First try with jsonMode
    const response = await fetch('https://text.pollinations.ai/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: `Break down this task into specific, actionable subtasks with time estimates that will help me OVERCOME PROCRASTINATION and complete it efficiently: "${taskDescription}"
          
Your response should ONLY contain the list of subtasks with time estimates for each one. Format them as a clean JSON array of objects with "text" and "timeEstimate" (in minutes) properties.` }
        ],
        model: 'openai',
        jsonMode: true
      })
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    // Parse the response
    const text = await response.text();
    console.log("Raw API response:", text);
    
    try {
      // Try to parse as JSON
      const data = JSON.parse(text);
      
      // Handle case where API returns {subtasks: [...]} format
      if (data && data.subtasks && Array.isArray(data.subtasks)) {
        return data.subtasks;
      }
      
      if (Array.isArray(data)) {
        // Check if we have objects with text and timeEstimate properties
        if (data[0] && (data[0].text || data[0].timeEstimate)) {
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
      } else if (data.content) {
        // Try to extract JSON array from content
        const matches = data.content.match(/\[.*\]/s);
        if (matches) {
          const parsedArray = JSON.parse(matches[0]);
          // Check if we need to convert to objects
          if (typeof parsedArray[0] === 'string') {
            return parsedArray.map(item => ({ text: item, timeEstimate: estimateSubtaskTime(item) }));
          }
          return parsedArray;
        } else {
          // Split by newlines or commas if not JSON format
          const items = data.content.split(/[\n,]+/).map(item => 
            item.replace(/^["'\s\d\-•.]+|["'\s]+$/g, '')
          ).filter(Boolean);
          return items.map(text => ({ text, timeEstimate: estimateSubtaskTime(text) }));
        }
      }
      return Array.isArray(data) ? data : [data];
    } catch (parseError) {
      console.error("Error parsing JSON response:", parseError);
      
      // Fall back to text processing
      // Look for array patterns in the text
      const arrayMatch = text.match(/\[(.*)\]/s);
      if (arrayMatch) {
        try {
          const parsedArray = JSON.parse(`[${arrayMatch[1]}]`);
          if (typeof parsedArray[0] === 'string') {
            return parsedArray.map(item => ({ text: item, timeEstimate: estimateSubtaskTime(item) }));
          }
          return parsedArray;
        } catch (e) {
          // If still fails, split by quotes or line breaks
          const items = arrayMatch[1]
            .split(/["',\n]+/)
            .map(item => item.trim())
            .filter(Boolean);
          return items.map(text => ({ text, timeEstimate: estimateSubtaskTime(text) }));
        }
      }
      
      // Check for numbered list format (1. First step, 2. Second step)
      const numberedList = text.match(/\d+\.\s+[^\n]+/g);
      if (numberedList) {
        return numberedList.map(item => {
          const text = item.replace(/^\d+\.\s+/, '').trim();
          return { text, timeEstimate: estimateSubtaskTime(text) };
        });
      }
      
      // Last resort: split by line breaks or numbered items
      const items = text
        .split(/[\n,]+/)
        .map(item => item.replace(/^\s*\d+[\.\)]\s*|["'\s•-]+/g, '').trim())
        .filter(Boolean)
        .slice(0, 5);
      return items.map(text => ({ text, timeEstimate: estimateSubtaskTime(text) }));
    }
  } catch (error) {
    console.error('Error generating task breakdown:', error);
    
    // More intelligent task-specific default subtasks with anti-procrastination focus and time estimates
    const taskLower = taskDescription.toLowerCase();
    
    // Check specifically for video editing tasks
    if (taskLower.includes('edit') && (taskLower.includes('video') || taskLower.includes('film') || taskLower.includes('footage'))) {
      return [
        { text: `Import and organize all footage into clearly labeled folders (by scene/event)`, timeEstimate: 30 },
        { text: `Review all footage and select the best clips, marking in/out points`, timeEstimate: 45 },
        { text: `Create a rough cut assembly of the main sequence with basic transitions`, timeEstimate: 60 },
        { text: `Add music tracks and synchronize with key moments in the footage`, timeEstimate: 40 },
        { text: `Apply color correction, effects, and export the final video`, timeEstimate: 50 }
      ];
    }
    // Enhanced defaults for homework and study tasks
    else if (taskLower.includes('homework') || taskLower.includes('assignment')) {
      return [
        { text: `Prepare your workspace: gather all materials, remove distractions, and get water/snack`, timeEstimate: 10 },
        { text: `Break the assignment into small chunks (problems 1-5, pages 1-3, etc.)`, timeEstimate: 15 },
        { text: `Set a 25-minute timer and work on the first chunk with complete focus`, timeEstimate: 25 },
        { text: `Take a 5-minute break, then continue with the next chunk`, timeEstimate: 30 },
        { text: `Review your work carefully and mark anything you need help with`, timeEstimate: 20 }
      ];
    } else if (taskLower.includes('study') || taskLower.includes('exam') || taskLower.includes('test')) {
      return [
        { text: `Create a specific study plan listing all topics to cover in order of difficulty`, timeEstimate: 20 },
        { text: `Set up a distraction-free environment with all needed materials`, timeEstimate: 15 },
        { text: `Study one topic for 25 minutes using active methods (flashcards, practice problems)`, timeEstimate: 25 },
        { text: `Take a 5-minute break, then quiz yourself on what you just studied`, timeEstimate: 15 },
        { text: `Move to the next topic and repeat the process, reviewing previous topics briefly`, timeEstimate: 30 }
      ];
    } else if (taskLower.includes('write') || taskLower.includes('essay') || taskLower.includes('paper')) {
      return [
        { text: `Create a detailed outline with main points and supporting details`, timeEstimate: 25 },
        { text: `Set a timer for 20 minutes and write only the introduction paragraph`, timeEstimate: 20 },
        { text: `Write each body paragraph one at a time with short breaks between`, timeEstimate: 40 },
        { text: `Complete the conclusion, focusing only on summarizing main points`, timeEstimate: 15 },
        { text: `Edit the entire document for clarity, grammar, and coherence`, timeEstimate: 30 }
      ];
    } else if (taskLower.includes('clean') || taskLower.includes('organize') || taskLower.includes('tidy')) {
      return [
        { text: `Set a 10-minute timer and quickly clear all obvious trash and clutter`, timeEstimate: 10 },
        { text: `Focus on one small area (desk, shelf, drawer) at a time completely`, timeEstimate: 15 },
        { text: `Sort items into keep, donate, and trash piles without overthinking`, timeEstimate: 20 },
        { text: `Clean surfaces thoroughly starting from top to bottom`, timeEstimate: 25 },
        { text: `Organize remaining items logically, placing frequent-use items most accessibly`, timeEstimate: 15 }
      ];
    } else if (taskLower.includes('read') || taskLower.includes('book') || taskLower.includes('chapter')) {
      return [
        { text: `Find a comfortable, distraction-free spot with good lighting`, timeEstimate: 10 },
        { text: `Set a timer for 25 minutes of focused reading (no phone or social media)`, timeEstimate: 25 },
        { text: `Take notes on key points or use sticky notes to mark important sections`, timeEstimate: 20 },
        { text: `After each chapter, write a 2-3 sentence summary in your own words`, timeEstimate: 15 },
        { text: `Take a 5-minute break, then continue with the next section`, timeEstimate: 30 }
      ];
    } else if (taskLower.includes('present') || taskLower.includes('presentation') || taskLower.includes('speech')) {
      return [
        { text: `Create a detailed outline with your main points and supporting evidence`, timeEstimate: 30 },
        { text: `Develop visual aids or slides with minimal text and relevant images`, timeEstimate: 45 },
        { text: `Practice your presentation once through without stopping`, timeEstimate: 15 },
        { text: `Record yourself and note areas to improve (clarity, pace, gestures)`, timeEstimate: 20 },
        { text: `Practice 3 more times, focusing on smooth transitions and timing`, timeEstimate: 30 }
      ];
    } else {
      // Generic defaults focused on anti-procrastination
      return [
        { text: `Break "${taskDescription}" into 3-5 small, achievable parts`, timeEstimate: 15 },
        { text: `Set up your environment: remove distractions and gather all needed materials`, timeEstimate: 10 },
        { text: `Set a 25-minute timer and work on the first part with complete focus`, timeEstimate: 25 },
        { text: `Take a 5-minute break, then continue with the next part`, timeEstimate: 30 },
        { text: `Review your progress and adjust your plan if needed`, timeEstimate: 15 }
      ];
    }
  }
};

// Helper function to estimate time for a subtask based on the text
const estimateSubtaskTime = (subtaskText) => {
  const text = subtaskText.toLowerCase();
  
  // Check for explicitly mentioned time
  const timeMatch = text.match(/(\d+)[ -]*(minute|min|hour|hr)/);
  if (timeMatch) {
    // Convert hours to minutes if needed
    if (timeMatch[2].startsWith('hour') || timeMatch[2].startsWith('hr')) {
      return parseInt(timeMatch[1], 10) * 60;
    }
    return parseInt(timeMatch[1], 10);
  }
  
  // Count words for complexity assessment
  const wordCount = text.split(/\s+/).length;
  const complexity = wordCount * 0.5;
  
  // Domain-specific time estimates
  
  // Research activities
  if (text.includes('research') || text.includes('find') || text.includes('look up') || text.includes('search')) {
    if (text.includes('in-depth') || text.includes('detailed') || text.includes('comprehensive')) {
      return Math.max(45, complexity);
    }
    return Math.max(20, Math.min(45, complexity));
  }
  
  // Writing activities
  if (text.includes('write') || text.includes('create') || text.includes('draft') || text.includes('compose')) {
    if (text.includes('outline') || text.includes('brief')) {
      return Math.max(15, Math.min(30, complexity));
    }
    if (text.includes('essay') || text.includes('report') || text.includes('paper')) {
      return Math.max(45, complexity * 1.5);
    }
    return Math.max(30, complexity);
  }
  
  // Design/creative activities
  if (text.includes('design') || text.includes('draw') || text.includes('sketch') || text.includes('create')) {
    if (text.includes('mockup') || text.includes('prototype') || text.includes('wireframe')) {
      return Math.max(30, complexity * 1.2);
    }
    return Math.max(30, complexity);
  }
  
  // Reading activities
  if (text.includes('read') || text.includes('review') || text.includes('study')) {
    if (text.includes('chapter') || text.includes('book')) {
      return Math.max(45, complexity * 1.3);
    }
    return Math.max(20, complexity);
  }
  
  // Meeting/communication activities
  if (text.includes('meet') || text.includes('call') || text.includes('email') || text.includes('message')) {
    if (text.includes('prepare') || text.includes('plan')) {
      return Math.max(15, complexity * 0.8);
    }
    if (text.includes('follow') && text.includes('up')) {
      return Math.max(10, complexity * 0.7);
    }
    return Math.max(15, complexity * 0.9);
  }
  
  // Planning activities
  if (text.includes('plan') || text.includes('organize') || text.includes('schedule') || text.includes('outline')) {
    return Math.max(15, complexity * 0.8);
  }
  
  // Setup activities
  if (text.includes('set up') || text.includes('prepare') || text.includes('organize') || text.includes('gather')) {
    return Math.max(10, complexity * 0.6);
  }
  
  // Review/edit activities
  if (text.includes('review') || text.includes('check') || text.includes('edit') || text.includes('revise')) {
    return Math.max(15, Math.min(45, complexity * 0.7));
  }

  // Programming activities
  if (text.includes('code') || text.includes('program') || text.includes('develop') || text.includes('implement') || text.includes('debug')) {
    if (text.includes('debug') || text.includes('fix') || text.includes('troubleshoot')) {
      return Math.max(30, complexity * 1.4); // Debugging often takes longer
    }
    if (text.includes('feature') || text.includes('function')) {
      return Math.max(45, complexity * 1.5);
    }
    return Math.max(25, complexity * 1.2);
  }
  
  // Analysis activities
  if (text.includes('analyze') || text.includes('evaluate') || text.includes('assess')) {
    return Math.max(20, complexity * 1.1);
  }
  
  // Presentation activities
  if (text.includes('present') || text.includes('pitch') || text.includes('demonstration')) {
    if (text.includes('prepare') || text.includes('create')) {
      return Math.max(30, complexity * 1.2);
    }
    return Math.max(15, complexity * 0.8);
  }
  
  // Timer-based activities
  if (text.includes('timer') && text.match(/\d+/)) {
    // Extract the timer duration
    const duration = text.match(/(\d+)[ -]*(minute|min|hour|hr)/);
    if (duration) {
      // Convert hours to minutes if needed
      if (duration[2].startsWith('hour') || duration[2].startsWith('hr')) {
        return parseInt(duration[1], 10) * 60;
      }
      return parseInt(duration[1], 10);
    }
  }
  
  // Quantity-based estimation (if the task mentions a specific number of items)
  const quantityMatch = text.match(/(\d+)\s*(items|questions|problems|pages|slides|sections)/);
  if (quantityMatch) {
    const quantity = parseInt(quantityMatch[1], 10);
    const itemType = quantityMatch[2];
    
    switch (itemType) {
      case 'questions':
      case 'problems':
        return Math.max(15, quantity * 3); // Approx 3 min per question/problem
      case 'pages':
        return Math.max(15, quantity * 4); // Approx 4 min per page
      case 'slides':
        return Math.max(20, quantity * 5); // Approx 5 min per slide
      case 'sections':
        return Math.max(30, quantity * 10); // Approx 10 min per section
      case 'items':
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
  
  const systemPrompt = `You are a productivity expert specializing in time estimation with a focus on anti-procrastination. 
  For any given task, estimate how long it would take to complete in minutes.
  
  Important guidelines:
  1. For homework or study tasks, account for setup time, break time, and review time
  2. For writing tasks, allow 30 minutes per page of output
  3. For reading tasks, estimate 5 minutes per page plus note-taking time
  4. Add a 15-20% buffer to your estimate to account for distractions and procrastination
  5. Consider the complexity and scope of the task
  
  Provide just a number representing minutes.`;
  
  try {
    const response = await fetch('https://text.pollinations.ai/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: `Estimate time in minutes for this task, accounting for breaks, setup, and potential procrastination: "${taskDescription}"` }
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
  if (taskLower.includes('homework') || taskLower.includes('assignment')) {
    return 60; // Default 1 hour for homework
  } else if (taskLower.includes('study') || taskLower.includes('learn')) {
    return 90; // Default 1.5 hours for studying 
  } else if (taskLower.includes('write') || taskLower.includes('essay')) {
    return 120; // Default 2 hours for writing tasks
  } else if (taskLower.includes('read') || taskLower.includes('book')) {
    return 75; // Default 1.25 hours for reading tasks
  } else {
    // Generic complexity-based calculation with procrastination buffer
    const complexityFactor = taskLower.includes('research') || 
                           taskLower.includes('write') || 
                           taskLower.includes('create') ? 1.5 : 1;
    
    // Add 20% buffer for procrastination
    return Math.ceil(Math.max(30, wordCount * 5 * complexityFactor * 1.2));
  }
};

// Specialized domain tips for common task types
export const getDomainTips = (taskDescription, subtask) => {
  const taskLower = taskDescription.toLowerCase();
  const subtaskLower = subtask.toLowerCase();
  
  // Research domain tips
  if (subtaskLower.includes('research') || subtaskLower.includes('find information') || subtaskLower.includes('gather data')) {
    return `
**Set Clear Research Parameters**: Define exactly what you're looking for before starting. Create a list of specific questions to answer or data points to find rather than browsing aimlessly.

**Use the Cornell Note-Taking System**: Divide your notes into 3 sections: main notes area (right), cue column (left), and summary area (bottom). This organizes your research findings for better recall and synthesis later.

**Apply the CRAAP Test to Sources**: Evaluate each source using: Currency (how recent?), Relevance (how applicable?), Authority (who created it?), Accuracy (is it reliable?), and Purpose (why was it created?). This ensures you're using high-quality information.

**Create a Research Database**: Use a tool like Notion, Excel, or even a simple Google Doc table to track key findings with columns for source, main points, and how it relates to your specific needs. This makes synthesis much easier later.

**Prevent Rabbit-Hole Research**: Set a timer for 25-30 minutes (Pomodoro technique) and stay focused on your specific research questions. When the timer goes off, take 2 minutes to evaluate if you're still on track or getting lost in tangential information.
`;
  }
  
  // Writing domain tips
  else if (subtaskLower.includes('write') || subtaskLower.includes('draft') || subtaskLower.includes('compose')) {
    return `
**Use the "Shitty First Draft" Technique**: Give yourself permission to write poorly at first - just get words on the page without editing. Research shows this reduces perfectionism and increases overall writing quality when you revise later.

**Implement Topic Sentences First**: Before writing full paragraphs, create one clear topic sentence for each section/paragraph. This creates a scaffold for your writing and ensures logical flow.

**Apply the Hemingway Method**: Write while standing up (at a counter or standing desk) to create a sense of urgency. Then edit while sitting down to engage a more critical mindset. This physical state change helps separate creation from evaluation.

**Use the Pomodoro Technique**: Set a timer for 25 minutes of focused writing without distractions. When the timer ends, take a 5-minute break. This creates psychological momentum and prevents burnout.

**Execute a Paragraph-Level Reverse Outline**: After drafting, identify the main point of each paragraph in the margin. This helps you check if your writing is focused and logically structured, and makes it easier to rearrange sections if needed.
`;
  }
  
  // Design/creative domain tips
  else if (subtaskLower.includes('design') || subtaskLower.includes('create') || subtaskLower.includes('develop') || 
           subtaskLower.includes('prototype') || subtaskLower.includes('mockup')) {
    return `
**Apply the 20-Minute Sketch Rule**: Start with rapidly generating 3-5 different rough concept sketches (spend max 4-5 minutes on each). This prevents fixation on a single solution and expands your creative options.

**Use the Design Studio Method**: Divide your design process into: Understand (5 min), Diverge (10 min), Converge (10 min), and Refine (15 min). This structured approach prevents common design pitfalls like premature commitment.

**Apply Constraint-Based Creativity**: Deliberately impose 2-3 constraints on your design (e.g., "must use only two colors" or "must work without images"). Research shows constraints paradoxically increase creativity by forcing novel solutions.

**Set Up Your Creative Environment**: Before starting, gather all tools, clear your workspace, and set up with proper lighting. Research shows physical environment significantly impacts creative performance.

**Execute Micro-Feedback Sessions**: After completing a design iteration, take a photo of it and look at it on a different device or from a different angle. This perspective shift helps you notice issues and opportunities you'd otherwise miss.
`;
  }
  
  // Programming domain tips
  else if (subtaskLower.includes('code') || subtaskLower.includes('program') || subtaskLower.includes('develop') || 
           subtaskLower.includes('debug') || subtaskLower.includes('fix bug')) {
    return `
**Apply Rubber Duck Debugging**: Keep a small object (traditionally a rubber duck) on your desk and explain your code to it line-by-line when stuck. This forces you to articulate your logic and often reveals the issue without outside help.

**Use the 3-Step Test-Driven Approach**: 1) Write a failing test that defines what you want the code to do, 2) Write the minimum code to make the test pass, 3) Refactor the code while keeping the test passing. This methodology creates cleaner, more reliable code.

**Implement Timeboxing for Difficult Problems**: Set a 30-minute timer when tackling a challenging issue. If not resolved when the timer ends, take a different approach or seek help. Research shows effectiveness drops significantly after 30 minutes of being stuck.

**Create a Trace Table**: For complex logical operations, create a table tracking the value of each variable as it changes throughout execution. This visual approach makes logical errors much easier to spot.

**Apply the 80/20 Rule to Code Quality**: Focus 80% of your optimization efforts on the 20% of code that runs most frequently. Use profiling tools to identify these critical paths rather than optimizing blindly.
`;
  }
  
  // Study/learning domain tips
  else if (subtaskLower.includes('study') || subtaskLower.includes('learn') || subtaskLower.includes('understand') ||
           subtaskLower.includes('review') || taskLower.includes('homework')) {
    return `
**Apply Spaced Repetition**: Rather than cramming all at once, break your study session into short periods with increasing intervals between reviews. Research shows this improves retention by up to 200% compared to traditional studying.

**Use the Feynman Technique**: Explain the concept you're learning in simple language as if teaching it to someone unfamiliar with the subject. This identifies gaps in your understanding and strengthens neural connections.

**Create a Distraction-Free Environment**: Turn off notifications, use apps like Freedom to block distracting websites, and put your phone in another room. Research shows attention takes 23 minutes to recover after each interruption.

**Implement Active Recall**: Instead of passively re-reading materials, actively quiz yourself on the content. Create flashcards or practice questions that force you to retrieve information from memory, which strengthens learning pathways.

**Use the "Memory Palace" Method**: For information that must be memorized, associate key concepts with specific locations in a familiar place (like your home). This spatial memory technique has been proven effective since ancient times.
`;
  }
  
  // Presentation domain tips
  else if (subtaskLower.includes('present') || subtaskLower.includes('presentation') || subtaskLower.includes('speech')) {
    return `
**Apply the 10/20/30 Rule**: Limit your presentation to 10 slides, 20 minutes, and 30-point minimum font size. This forces clarity and prevents information overload for your audience.

**Use the "Message House" Structure**: Create one overarching message (the roof) supported by 3 key points (the pillars), each with 2-3 pieces of evidence (the foundation). This architecture ensures your presentation has a coherent structure.

**Implement the 5-Second Rule for Slides**: Design each slide so its main point can be understood within 5 seconds. This ensures your audience isn't reading slides instead of listening to you.

**Apply the 3-Part Practice Method**: 1) Practice while reading your notes, 2) Practice with minimal notes, looking at key points only when needed, 3) Practice without notes in front of a mirror or camera. This progressive approach builds confidence effectively.

**Execute a Pre-Presentation Ritual**: 5 minutes before presenting, find a private space to: 1) Stand in a power pose for 2 minutes (research shows this decreases stress hormones), 2) Take 10 deep breaths, 3) Repeat a personal affirmation. This routine reduces anxiety and improves delivery.
`;
  }
  
  // Planning/organization domain tips
  else if (subtaskLower.includes('plan') || subtaskLower.includes('organize') || subtaskLower.includes('schedule')) {
    return `
**Apply the Time-Block Planning Method**: Divide your available time into distinct blocks dedicated to specific tasks. Research shows this reduces context-switching costs and increases productivity by up to 25%.

**Use the SMART++ Framework**: For each planned action, ensure it's: Specific, Measurable, Achievable, Relevant, Time-bound, plus Energy-efficient (aligned with your energy levels) and Exciting (personally motivating). This expansion of SMART goals improves follow-through.

**Implement the 3-2-1 Planning Structure**: Identify 3 mission-critical tasks, 2 maintenance tasks, and 1 development task (for personal/professional growth). This creates a balanced plan that moves you forward while keeping current responsibilities on track.

**Create Planning Tripwires**: Define specific conditions that will trigger a plan review (e.g., "If I'm 20% behind schedule by Wednesday"). This anticipates problems before they become critical and builds adaptability into your planning.

**Execute the 10-Minute End-of-Day Review**: At day's end, spend 10 minutes evaluating what was accomplished, what wasn't, and creating a rough plan for tomorrow. Research shows this improves next-day productivity by providing closure and reducing cognitive load.
`;
  }
  
  // Meetings/communication domain tips
  else if (subtaskLower.includes('meet') || subtaskLower.includes('interview') || subtaskLower.includes('communicate')) {
    return `
**Apply the 3W1H Meeting Framework**: Start by clearly defining Why this meeting matters, What specific outcomes are expected, Who needs to be involved, and How long it should take. This structure prevents meeting scope creep.

**Use the 2-Minute Rule for Speaking**: When making a point, aim to express it within 2 minutes. Research shows attention drops significantly after this timeframe. This creates more dynamic, engaging discussions.

**Implement a Meeting Role Rotation**: Assign three key roles (facilitator, timekeeper, note-taker) and rotate them regularly. This increases engagement and prevents the meeting from being dominated by a single voice.

**Create a Decision-Documentation System**: Use a simple template that records: the decision made, alternatives considered, who's responsible for implementation, and follow-up timeline. This prevents decision amnesia and improves accountability.

**Execute the "Plus/Delta" Ending**: In the final 3 minutes, ask participants to share one thing that went well (plus) and one thing to improve (delta) about the meeting itself. This creates continuous improvement in your meeting processes.
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
          content: "You are a world-class productivity coach providing specific, actionable execution tips."
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