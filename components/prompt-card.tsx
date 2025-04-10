"use client";

import { Prompt } from "@/lib/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, Eye, Pencil, Bookmark } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { PromptViewer } from "./prompt-viewer";

interface PromptCardProps {
  prompt: Prompt;
  onSendToAI?: (prompt: string) => void;
  onEdit?: (prompt: Prompt) => void;
  onBookmark?: (promptId: string) => void;
  isBookmarked?: boolean;
}

export function PromptCard({
  prompt,
  onSendToAI,
  onEdit,
  onBookmark,
  isBookmarked = false,
}: PromptCardProps) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt.content);
      setIsCopied(true);
      toast.success("Prompt copied to clipboard!");
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      toast.error("Failed to copy prompt");
    }
  };

  const handleBookmark = () => {
    if (onBookmark) {
      onBookmark(prompt.id);
    }
  };

  return (
    <Card className="w-full hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">{prompt.title}</CardTitle>
          <div className="flex items-center gap-2">
            {onBookmark && (
              <Button
                variant="ghost"
                size="icon"
                onClick={handleBookmark}
                className={isBookmarked ? "text-yellow-500" : ""}
              >
                <Bookmark
                  className="h-4 w-4"
                  fill={isBookmarked ? "currentColor" : "none"}
                />
              </Button>
            )}
            {onEdit && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onEdit(prompt)}
              >
                <Pencil className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
        <CardDescription>{prompt.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {prompt.placeholders?.map((placeholder) => (
            <div
              key={placeholder.name}
              className="text-sm text-muted-foreground"
            >
              <span className="font-medium">[{placeholder.name}]</span>:{" "}
              {placeholder.description}
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex flex-col gap-2 w-full">
          <div className="flex gap-2">
            {prompt.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-2">
            <PromptViewer
              prompt={prompt}
              trigger={
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2 hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Eye className="h-4 w-4" />
                  <span>View</span>
                </Button>
              }
              onSendToAI={onSendToAI}
            />

            <Button
              variant="outline"
              size="sm"
              onClick={handleCopy}
              className={`flex items-center gap-2 ${
                isCopied ? "bg-green-100" : ""
              }`}
            >
              <Copy className="h-4 w-4" />
              <span>{isCopied ? "Copied!" : "Copy"}</span>
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
