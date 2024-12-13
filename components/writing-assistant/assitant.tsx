'use client';

import { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { AiButton } from '../ui/aiButton';
import { useWritingStore } from '@/lib/store';
import { writingAssistant } from '@/lib/huggingface-api';

export function WritingAssistant() {
  const { text, setText, setSuggestions, analytics } = useWritingStore();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const minInputText: number = 5;

  const handleGenerateSuggestions = async () => {
    if (text.trim().length < minInputText) {
      setError(`$Please provide at least {minInputText} characters of input.`);
      return;
    }
    setError('');
    setIsLoading(true);
    try {
      const suggestions = await writingAssistant.generateWritingSuggestions(
        text
      );
      setSuggestions(suggestions);
    } catch (err) {
      setError(err.message || 'An error occurred.');
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className='space-y-4'>
      <Textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder='Start writing... Get AI-powered suggestions'
        className='min-h-[200px]'
      />
      {error && <div className='text-red-500 text-sm'>{error}</div>}
      <div className='flex justify-between items-center'>
        <div className='text-sm text-muted-foreground'>
          Words: {analytics.wordCount} | Reading Time: {analytics.readingTime}{' '}
          min
        </div>
        <AiButton
          onClick={handleGenerateSuggestions}
          disabled={isLoading || text.length < minInputText}
        >
          {isLoading ? 'Generating...' : 'Get Suggestions'}
        </AiButton>
      </div>
    </div>
  );
}
