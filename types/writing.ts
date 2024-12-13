export interface WritingSuggestion {
  type: 'grammar' | 'style' | 'clarity' | 'creativity';
  original: string;
  suggestion: string;
  explanation: string;
  confidence: number;
}

export interface WritingAnalytics {
  wordCount: number;
  readingTime: number;
  suggestionsCount: number;
}
