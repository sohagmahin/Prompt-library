import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { PromptPlaceholder } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Extracts placeholders from content using square brackets
 * @param content The content string containing placeholders in square brackets
 * @returns An array of PromptPlaceholder objects
 */
export function extractPlaceholders(content: string): PromptPlaceholder[] {
  const placeholderRegex = /\[([^\]]+)\]/g;
  const matches = Array.from(content.matchAll(placeholderRegex));
  const uniquePlaceholders = new Set(matches.map((match) => match[1]));

  return Array.from(uniquePlaceholders).map((name) => {
    const defaultValue = getDefaultValue(name);
    return {
      name,
      description: `Value for ${name}`,
      defaultValue,
    };
  });
}

function getDefaultValue(name: string): string {
  const defaultValues: Record<string, string> = {
    task: "Complete project documentation",
    meeting_type: "Team sync",
    duration: "30 minutes",
    date: new Date().toISOString().split("T")[0],
    time: new Date().toLocaleTimeString("en-US", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
    }),
    location: "Conference Room A",
    attendees: "John, Jane, Mike",
    priority: "High",
    status: "In Progress",
    deadline: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
      .toISOString()
      .split("T")[0],
  };

  return defaultValues[name.toLowerCase()] || "";
}
