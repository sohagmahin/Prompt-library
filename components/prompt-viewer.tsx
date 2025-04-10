"use client";

import { Prompt } from "@/lib/types";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Copy, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const extractPlaceholders = (content: string) => {
  const regex = /\[([^\]]+)\]/g;
  const matches = [...content.matchAll(regex)];
  return matches.map((match) => ({
    name: match[1],
    description: `Enter ${match[1]}`,
  }));
};

interface PromptViewerProps {
  prompt: Prompt;
  trigger: React.ReactNode;
  onSendToAI?: (prompt: string) => void;
}

export function PromptViewer({
  prompt,
  trigger,
  onSendToAI,
}: PromptViewerProps) {
  const placeholders = extractPlaceholders(prompt.content);

  const [values, setValues] = useState<Record<string, string>>(
    placeholders.reduce(
      (acc, placeholder) => ({
        ...acc,
        [placeholder.name]: "",
      }),
      {}
    )
  );

  const getCustomizedPrompt = () => {
    let customizedPrompt = prompt.content;
    Object.entries(values).forEach(([key, value]) => {
      customizedPrompt = customizedPrompt.replace(`[${key}]`, value);
    });
    return customizedPrompt;
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(getCustomizedPrompt());
      toast.success("Prompt copied to clipboard!");
    } catch {
      toast.error("Failed to copy prompt");
    }
  };

  const handleSendToAI = () => {
    if (onSendToAI) {
      onSendToAI(getCustomizedPrompt());
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>{prompt.title}</DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <div>
            <p className="text-sm text-muted-foreground mb-4">
              {prompt.description}
            </p>
            {placeholders.map((placeholder) => (
              <div key={placeholder.name} className="space-y-2 mb-4">
                <Label htmlFor={placeholder.name}>
                  {placeholder.description}
                </Label>
                <Input
                  id={placeholder.name}
                  value={values[placeholder.name] || ""}
                  onChange={(e) =>
                    setValues((prev) => ({
                      ...prev,
                      [placeholder.name]: e.target.value,
                    }))
                  }
                  placeholder={`Enter ${placeholder.name}`}
                />
              </div>
            ))}
          </div>

          <div className="space-y-2">
            <Label>Preview</Label>
            <div className="p-4 rounded-md bg-muted">
              <pre className="whitespace-pre-wrap">{getCustomizedPrompt()}</pre>
            </div>
          </div>

          <div className="flex gap-2">
            <Button onClick={handleCopy} className="flex-1">
              <Copy className="h-4 w-4 mr-2" />
              Copy Prompt
            </Button>
            {onSendToAI && (
              <Button onClick={handleSendToAI} className="flex-1">
                <Send className="h-4 w-4 mr-2" />
                Send to AI
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
