import { useState, useEffect } from "react";
import { Prompt } from "@/lib/types";
import { samplePrompts } from "@/lib/sample-data";

const STORAGE_KEY = "prompt-filler-prompts";

export function usePrompts() {
  const [prompts, setPrompts] = useState<Prompt[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize prompts from local storage or sample data
  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const storedPrompts = localStorage.getItem(STORAGE_KEY);
      if (storedPrompts) {
        const parsedPrompts = JSON.parse(storedPrompts);
        // Convert string dates back to Date objects
        const promptsWithDates = parsedPrompts.map(
          (
            prompt: Omit<Prompt, "createdAt" | "updatedAt"> & {
              createdAt: string;
              updatedAt: string;
            }
          ) => ({
            ...prompt,
            createdAt: new Date(prompt.createdAt),
            updatedAt: new Date(prompt.updatedAt),
          })
        );
        setPrompts(promptsWithDates);
      } else {
        // Save sample prompts to local storage if none exist
        localStorage.setItem(STORAGE_KEY, JSON.stringify(samplePrompts));
        setPrompts(samplePrompts);
      }
    } catch (error) {
      console.error("Error initializing prompts:", error);
      setPrompts(samplePrompts);
    } finally {
      setIsInitialized(true);
    }
  }, []);

  // Update local storage when prompts change
  useEffect(() => {
    if (!isInitialized) return;

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(prompts));
    } catch (error) {
      console.error("Error saving prompts to local storage:", error);
    }
  }, [prompts, isInitialized]);

  return [prompts, setPrompts] as const;
}
