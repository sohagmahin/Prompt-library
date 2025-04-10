"use client";

import { PromptCategory } from "@/lib/types";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { categories } from "@/lib/sample-data";
import { Search } from "lucide-react";

interface SearchBarProps {
  onSearch: (query: string) => void;
  onCategoryChange: (category: PromptCategory | "all") => void;
  selectedCategory?: PromptCategory | "all";
}

export function SearchBar({
  onSearch,
  onCategoryChange,
  selectedCategory = "all",
}: SearchBarProps) {
  return (
    <div className="flex flex-col md:flex-row gap-4 w-full">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search prompts..."
          className="pl-10"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
      <Select
        value={selectedCategory}
        onValueChange={(value) =>
          onCategoryChange(value as PromptCategory | "all")
        }
      >
        <SelectTrigger className="w-full md:w-[200px]">
          <SelectValue placeholder="Select category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Categories</SelectItem>
          {categories.map((category) => (
            <SelectItem key={category.id} value={category.id}>
              {category.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
