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
import { PromptForm } from "./prompt-form";
import { Plus } from "lucide-react";

interface PromptDialogProps {
  onSubmit: (
    prompt: Omit<Prompt, "id" | "createdAt" | "updatedAt" | "popularity">
  ) => void;
  initialPrompt?: Prompt;
  trigger?: React.ReactNode;
}

export function PromptDialog({
  onSubmit,
  initialPrompt,
  trigger,
}: PromptDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger || (
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add New Prompt
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>
            {initialPrompt ? "Edit Prompt" : "Create New Prompt"}
          </DialogTitle>
        </DialogHeader>
        <PromptForm onSubmit={onSubmit} initialPrompt={initialPrompt} />
      </DialogContent>
    </Dialog>
  );
}
