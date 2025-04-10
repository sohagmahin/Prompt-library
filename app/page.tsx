"use client";

import { Prompt, PromptCategory } from "@/lib/types";
import { PromptGrid } from "@/components/prompt-grid";
import { SearchBar } from "@/components/search-bar";
import { PromptDialog } from "@/components/prompt-dialog";
import { Toaster } from "sonner";
import { useState, useMemo } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { PromptForm } from "@/components/prompt-form";
import { Bookmark, Trash2 } from "lucide-react";
import { useLocalStorage } from "@/lib/hooks/use-local-storage";
import { usePrompts } from "@/lib/hooks/use-prompts";
import { toast } from "sonner";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<
    PromptCategory | "all"
  >("all");
  const [bookmarks, setBookmarks] = useLocalStorage<string[]>(
    "prompt-bookmarks",
    []
  );
  const [prompts, setPrompts] = usePrompts();
  const [isAIDialogOpen, setIsAIDialogOpen] = useState(false);
  const [currentPrompt, setCurrentPrompt] = useState<string>("");
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [promptToEdit, setPromptToEdit] = useState<Prompt | null>(null);

  const bookmarkedPrompts = useMemo(() => {
    return prompts.filter((prompt) => bookmarks.includes(prompt.id));
  }, [prompts, bookmarks]);

  const filteredPrompts = useMemo(() => {
    return prompts
      .filter((prompt) => !bookmarks.includes(prompt.id))
      .filter((prompt) => {
        const matchesSearch =
          prompt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          prompt.description
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          prompt.tags.some((tag) =>
            tag.toLowerCase().includes(searchQuery.toLowerCase())
          );

        const matchesCategory =
          selectedCategory === "all" || prompt.category === selectedCategory;

        return matchesSearch && matchesCategory;
      });
  }, [searchQuery, selectedCategory, prompts, bookmarks]);

  const handleBookmark = (promptId: string) => {
    setBookmarks((prev) => {
      if (prev.includes(promptId)) {
        return prev.filter((id) => id !== promptId);
      }
      return [...prev, promptId];
    });
  };

  const handleCreatePrompt = (
    newPrompt: Omit<Prompt, "id" | "createdAt" | "updatedAt" | "popularity">
  ) => {
    const prompt: Prompt = {
      ...newPrompt,
      id: Date.now().toString(),
      createdAt: new Date(),
      updatedAt: new Date(),
      popularity: 0,
    };
    setPrompts((prev) => [...prev, prompt]);
  };

  const handleSendToAI = (prompt: string) => {
    setCurrentPrompt(prompt);
    setIsAIDialogOpen(true);
  };

  const handleAISubmit = () => {
    const gptUrl = `https://chat.openai.com/?q=${encodeURIComponent(
      currentPrompt
    )}`;
    window.open(gptUrl, "_blank");

    toast.success("Prompt sent to Claude!");
    setIsAIDialogOpen(false);
  };

  const handleEditPrompt = (prompt: Prompt) => {
    setPromptToEdit(prompt);
    setIsEditDialogOpen(true);
  };

  const handleUpdatePrompt = (
    updatedPrompt: Omit<Prompt, "id" | "createdAt" | "updatedAt" | "popularity">
  ) => {
    if (!promptToEdit) return;

    const prompt: Prompt = {
      ...updatedPrompt,
      id: promptToEdit.id,
      createdAt: promptToEdit.createdAt,
      updatedAt: new Date(),
      popularity: promptToEdit.popularity,
    };

    setPrompts((prev) => prev.map((p) => (p.id === prompt.id ? prompt : p)));
    setIsEditDialogOpen(false);
    setPromptToEdit(null);
  };

  const handleDeletePrompt = (promptId: string) => {
    setPrompts((prev) => prev.filter((p) => p.id !== promptId));
    setBookmarks((prev) => prev.filter((id) => id !== promptId));
    toast.success("Prompt deleted successfully");
  };

  const handleClearBookmarks = () => {
    setBookmarks([]);
    toast.success("All bookmarks cleared");
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">AI Prompt Library</h1>
            <p className="text-muted-foreground">
              Discover and use pre-made prompts for ChatGPT and other AI models
            </p>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <PromptDialog onSubmit={handleCreatePrompt} />
          </div>
        </div>

        <div className="mb-8">
          <SearchBar
            onSearch={setSearchQuery}
            onCategoryChange={setSelectedCategory}
            selectedCategory={selectedCategory}
          />
        </div>

        {bookmarkedPrompts.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <h2 className="text-2xl font-semibold">Bookmarked Prompts</h2>
                <div className="flex items-center gap-2">
                  <Bookmark className="h-5 w-5 text-yellow-500" />
                  <span className="text-sm text-muted-foreground">
                    {bookmarkedPrompts.length} bookmarked
                  </span>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handleClearBookmarks}
                className="flex items-center gap-2"
              >
                <Trash2 className="h-4 w-4" />
                Clear All
              </Button>
            </div>
            <PromptGrid
              prompts={bookmarkedPrompts}
              onSendToAI={handleSendToAI}
              onEdit={handleEditPrompt}
              onDelete={handleDeletePrompt}
              onBookmark={handleBookmark}
              bookmarks={bookmarks}
            />
          </div>
        )}

        <div>
          <h2 className="text-2xl font-semibold mb-4">All Prompts</h2>
          <PromptGrid
            prompts={filteredPrompts}
            onSendToAI={handleSendToAI}
            onEdit={handleEditPrompt}
            onDelete={handleDeletePrompt}
            onBookmark={handleBookmark}
            bookmarks={bookmarks}
          />
        </div>
      </div>
      <Toaster />

      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Edit Prompt</DialogTitle>
          </DialogHeader>
          {promptToEdit && (
            <PromptForm
              onSubmit={handleUpdatePrompt}
              initialPrompt={promptToEdit}
            />
          )}
        </DialogContent>
      </Dialog>

      <Dialog open={isAIDialogOpen} onOpenChange={setIsAIDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Send to AI</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="p-4 rounded-md bg-muted">
              <pre className="whitespace-pre-wrap">{currentPrompt}</pre>
            </div>
            <div className="flex justify-end gap-2">
              <Button
                variant="outline"
                onClick={() => setIsAIDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button onClick={handleAISubmit}>Ask GPT</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </main>
  );
}
