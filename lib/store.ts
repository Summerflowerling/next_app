import { create } from 'zustand';
import { WritingSuggestion, WritingAnalytics } from '@/types/writing';
import { writingAssistant } from '@/lib/huggingface-api';

interface WritingStore {
  text: string;
  suggestions: WritingSuggestion[];
  analytics: WritingAnalytics;
  setText: (text: string) => void;
  setSuggestions: (suggestions: WritingSuggestion[]) => void;
}

export const useWritingStore = create<WritingStore>((set) => ({
  text: '',
  suggestions: [],
  analytics: {
    wordCount: 0,
    readingTime: 0,
    suggestionsCount: 0,
  },
  setText: (text) => {
    set({
      text,
      analytics: writingAssistant.calculateWritingAnalytics(text),
    });
  },
  setSuggestions: (suggestions) => {
    set((state) => ({
      suggestions,
      analytics: { ...state.analytics, suggestionsCount: suggestions.length },
    }));
  },
}));
