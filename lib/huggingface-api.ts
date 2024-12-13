import { HfInference } from '@huggingface/inference';
import { WritingSuggestion } from '@/types/writing';
import { WritingAnalytics } from '@/types/writing';

export class WritingAssistantService {
  private hf: HfInference;

  constructor(apiToken: string) {
    this.hf = new HfInference(apiToken);
  }

  async generateWritingSuggestions(text: string): Promise<WritingSuggestion[]> {
    try {
      const response = await this.hf.textGeneration({
        model: 'google/flan-t5-large',
        inputs:
          `Analyze this text and provide professional writing suggestions. \n` +
          `Identify grammar issues, style improvements, and clarity enhancements. \n` +
          `Text: ${text}`,
        parameters: {
          max_new_tokens: 250,
          temperature: 0.7,
          return_full_text: false,
        },
      });

      return this.parseAISuggestions(response.generated_text || '');
    } catch (error) {
      console.error('AI Suggestion Generation Failed:', error);
      throw new Error(
        'Failed to generate suggestions. Please try again later.'
      );
    }
  }

  private parseAISuggestions(aiResponse: string): WritingSuggestion[] {
    // Implement detailed parsing logic for structured AI responses
    return aiResponse.split('\n').map((line) => {
      const [type, original, suggestion, explanation] = line.split('|');
      return {
        type: type as WritingSuggestion['type'],
        original: original.trim(),
        suggestion: suggestion.trim(),
        explanation: explanation.trim(),
        confidence: Math.random(), // Placeholder for confidence score
      };
    });
  }

  calculateWritingAnalytics(text: string): WritingAnalytics {
    const wordCount = text.trim().split(/\s+/).length;
    return {
      wordCount,
      readingTime: Math.ceil(wordCount / 200),
      suggestionsCount: 0,
    };
  }
}

export const writingAssistant = new WritingAssistantService(
  process.env.HUGGINGFACE_API_TOKEN || ''
);