export const AIConfig = {
  writingAssistantAI: {
    model: process.env.AI_DEFAULT_MODEL || 'google/flan-t5-large',
    maxNewTokens: parseInt(process.env.AI_DEFAULT_MAX_NEW_TOKENS || '250', 10),
    temperature: parseFloat(process.env.AI_DEFAULT_TEMPERATURE || '0.7'),
  },
};
