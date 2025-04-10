"use client";

import { Prompt } from "@/lib/types";
import { PromptCard } from "./prompt-card";
import { useCallback, useState } from "react";

interface PromptGridProps {
  prompts: Prompt[];
  onSendToAI?: (prompt: string) => void;
  onEdit?: (prompt: Prompt) => void;
  onDelete?: (promptId: string) => void;
  onBookmark?: (promptId: string) => void;
  bookmarks?: string[];
}

export function PromptGrid({
  prompts,
  onSendToAI,
  onEdit,
  onDelete,
  onBookmark,
  bookmarks = [],
}: PromptGridProps) {
  const [bookmarkedPrompts, setBookmarkedPrompts] =
    useState<string[]>(bookmarks);

  const handleBookmark = useCallback(
    (promptId: string) => {
      if (onBookmark) {
        onBookmark(promptId);
      }
      setBookmarkedPrompts((prev) => {
        if (prev.includes(promptId)) {
          return prev.filter((id) => id !== promptId);
        }
        return [...prev, promptId];
      });
    },
    [onBookmark]
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {prompts.map((prompt) => (
        <PromptCard
          key={prompt.id}
          prompt={prompt}
          onSendToAI={onSendToAI}
          onEdit={onEdit}
          onDelete={onDelete}
          onBookmark={handleBookmark}
          isBookmarked={bookmarkedPrompts.includes(prompt.id)}
        />
      ))}
    </div>
  );
}
