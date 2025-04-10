"use client";

import { Prompt } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState, ChangeEvent } from "react";
import { toast } from "sonner";

interface PromptFormProps {
  onSubmit: (
    prompt: Omit<Prompt, "id" | "createdAt" | "updatedAt" | "popularity">
  ) => void;
  initialPrompt?: Prompt;
}

export function PromptForm({ onSubmit, initialPrompt }: PromptFormProps) {
  const [formData, setFormData] = useState({
    title: initialPrompt?.title || "",
    description: initialPrompt?.description || "",
    content: initialPrompt?.content || "",
    category: initialPrompt?.category || "productivity-business",
    tags: initialPrompt?.tags.join(", ") || "",
    author: initialPrompt?.author || "",
    placeholders: initialPrompt?.placeholders || [],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.title || !formData.content) {
      toast.error("Title and content are required");
      return;
    }

    onSubmit({
      ...formData,
      tags: formData.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean),
    });

    if (!initialPrompt) {
      setFormData({
        title: "",
        description: "",
        content: "",
        category: "productivity-business",
        tags: "",
        author: "",
        placeholders: [],
      });
    }
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          placeholder="Enter prompt title"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Input
          id="description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Enter prompt description"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="content">Prompt Content</Label>
        <Textarea
          id="content"
          name="content"
          value={formData.content}
          onChange={handleInputChange}
          placeholder="Enter your prompt content. Use [placeholder] for customizable parts."
          className="min-h-[150px]"
          required
        />
        <p className="text-sm text-muted-foreground">
          Use [placeholder] syntax for customizable parts of your prompt
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="category">Category</Label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleInputChange}
          className="w-full rounded-md border border-input bg-background px-3 py-2"
        >
          <option value="productivity-business">Productivity & Business</option>
          <option value="marketing-social-media">
            Marketing & Social Media
          </option>
          <option value="coding-development">Coding & Development</option>
          <option value="education-research">Education & Research</option>
          <option value="creative-writing">Creative Writing</option>
          <option value="personal-development">Personal Development</option>
          <option value="daily-life">Daily Life</option>
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="tags">Tags (comma-separated)</Label>
        <Input
          id="tags"
          name="tags"
          value={formData.tags}
          onChange={handleInputChange}
          placeholder="Enter tags separated by commas"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="author">Author</Label>
        <Input
          id="author"
          name="author"
          value={formData.author}
          onChange={handleInputChange}
          placeholder="Enter author name"
        />
      </div>

      <Button type="submit" className="w-full">
        {initialPrompt ? "Update Prompt" : "Create Prompt"}
      </Button>
    </form>
  );
}
