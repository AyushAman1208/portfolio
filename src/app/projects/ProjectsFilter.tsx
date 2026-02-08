"use client";

import { useState, useMemo } from "react";
import Card, { MetadataDict } from "../components/Card";
import { FiX, FiChevronDown, FiChevronUp } from "react-icons/fi";

interface Project extends MetadataDict {
  title: string;
  description?: string;
  TechStack?: string[];
  tags?: string[];
  url?: string;
}

interface ProjectsFilterProps {
  projects: Project[];
  allTags: string[];
  allTechStacks: string[];
}

export default function ProjectsFilter({
  projects,
  allTags,
  allTechStacks,
}: ProjectsFilterProps) {
  const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set());
  const [selectedTechStacks, setSelectedTechStacks] = useState<Set<string>>(
    new Set(),
  );
  const [isExpanded, setIsExpanded] = useState(true);
  // Filter projects based on selected filters
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const hasMatchingTag =
        selectedTags.size === 0 ||
        (project.tags || []).some((tag) => selectedTags.has(tag));

      const hasMatchingTech =
        selectedTechStacks.size === 0 ||
        (project.TechStack || []).some((tech) =>
          selectedTechStacks.has(tech.trim()),
        );

      return hasMatchingTag && hasMatchingTech;
    });
  }, [projects, selectedTags, selectedTechStacks]);

  const toggleTag = (tag: string) => {
    const newTags = new Set(selectedTags);
    if (newTags.has(tag)) {
      newTags.delete(tag);
    } else {
      newTags.add(tag);
    }
    setSelectedTags(newTags);
  };

  const toggleTechStack = (tech: string) => {
    const newTechs = new Set(selectedTechStacks);
    if (newTechs.has(tech)) {
      newTechs.delete(tech);
    } else {
      newTechs.add(tech);
    }
    setSelectedTechStacks(newTechs);
  };

  const clearFilters = () => {
    setSelectedTags(new Set());
    setSelectedTechStacks(new Set());
  };

  const hasActiveFilters = selectedTags.size > 0 || selectedTechStacks.size > 0;

  return (
    <div>
      {/* Filter Section */}
      <div className="mb-8 border border-gray-200 dark:border-slate-700 rounded-xl overflow-hidden">
        {/* Filter Header - Always Visible */}
        <div
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-6 bg-white dark:bg-slate-800 cursor-pointer hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
        >
          <div className="flex justify-between items-center">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  Filters
                </h2>
                {isExpanded ? (
                  <FiChevronUp className="text-gray-600 dark:text-gray-400" />
                ) : (
                  <FiChevronDown className="text-gray-600 dark:text-gray-400" />
                )}
              </div>

              {/* Show Selected Filters Preview */}
              {!isExpanded &&
                (selectedTags.size > 0 || selectedTechStacks.size > 0) && (
                  <div className="flex flex-wrap gap-2">
                    {Array.from(selectedTags).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                    {Array.from(selectedTechStacks).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
            </div>

            {hasActiveFilters && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  clearFilters();
                }}
                className="ml-4 flex items-center gap-2 px-3 py-1 text-sm bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 rounded-lg hover:bg-red-200 dark:hover:bg-red-800 transition-colors"
              >
                <FiX size={16} /> Clear All
              </button>
            )}
          </div>
        </div>

        {/* Filter Content - Visible When Expanded */}
        {isExpanded && (
          <div className="p-6 bg-gray-50 dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700">
            {/* Tags Filter */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                Categories
              </h3>
              <div className="flex flex-wrap gap-2">
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedTags.has(tag)
                        ? "bg-blue-600 text-white shadow-lg"
                        : "bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-slate-700 hover:border-blue-600 dark:hover:border-blue-400"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Tech Stack Filter */}
            <div>
              <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {allTechStacks.map((tech) => (
                  <button
                    key={tech}
                    onClick={() => toggleTechStack(tech)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedTechStacks.has(tech)
                        ? "bg-indigo-600 text-white shadow-lg"
                        : "bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-slate-700 hover:border-indigo-600 dark:hover:border-indigo-400"
                    }`}
                  >
                    {tech}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Results */}
      <div className="mb-6">
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          Showing{" "}
          <span className="font-semibold">{filteredProjects.length}</span> of{" "}
          <span className="font-semibold">{projects.length}</span> projects
        </p>
      </div>

      {/* Projects List */}
      {filteredProjects.length > 0 ? (
        <div className="space-y-4">
          {filteredProjects.map((p, i) => (
            <Card
              key={i}
              title={p.title}
              description={p.description}
              metadataDict={p}
              url={p.url}
              footer={p.tags?.length ? p.tags.join(", ") : ""}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            No projects match your filters.
          </p>
        </div>
      )}
    </div>
  );
}
