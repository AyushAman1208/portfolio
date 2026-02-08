"use client";

import { useState } from "react";
import { FiChevronDown, FiChevronUp, FiExternalLink } from "react-icons/fi";
import contentData from "@/data/content.json";
import MarkdownRenderer from "../components/MarkdownRenderer";

interface ContentItem {
  topic: string;
  description: string;
  tags: string[];
  link: string;
  thumbnail: string;
}

export default function ContentPage() {
  const [expandedIndices, setExpandedIndices] = useState<number[]>([]);

  const toggleExpand = (index: number) => {
    setExpandedIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  const handleCardClick = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-400 dark:to-blue-300 bg-clip-text text-transparent mb-3">
            Content & Publications
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Explore my blog posts, tutorials, and educational content
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {(contentData as ContentItem[]).map((item, index) => (
            <div key={index}>
              <div className="group">
                <div
                  className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden border border-gray-200 dark:border-slate-700 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col cursor-pointer"
                  onClick={() => handleCardClick(item.link)}
                >
                  {/* Image Container */}
                  <div className="relative w-full h-64 md:h-80 overflow-hidden bg-gray-200 dark:bg-slate-700">
                    <img
                      src={item.thumbnail}
                      alt={item.topic}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <FiExternalLink className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-3xl" />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div
                    className="flex-1 p-6 flex flex-col"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* Title */}
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                      {item.topic}
                    </h2>

                    {/* Tags Preview */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                      {item.tags.length > 2 && (
                        <span className="px-3 py-1 bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 rounded-full text-xs font-medium">
                          +{item.tags.length - 2} more
                        </span>
                      )}
                    </div>

                    {/* Expandable Dropdown */}
                    <div className="mt-auto">
                      <button
                        onClick={() => {
                          toggleExpand(index);
                        }}
                        className="w-full flex items-center justify-between py-3 px-4 bg-gray-50 dark:bg-slate-700/50 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition-colors duration-200 group/btn"
                      >
                        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                          {expandedIndices.includes(index) ? "Hide" : "Show"}{" "}
                          Details
                        </span>
                        {expandedIndices.includes(index) ? (
                          <FiChevronUp className="text-gray-600 dark:text-gray-400" />
                        ) : (
                          <FiChevronDown className="text-gray-600 dark:text-gray-400" />
                        )}
                      </button>

                      {/* Expandable Content */}
                      {expandedIndices.includes(index) && (
                        <div className="mt-3 p-4 bg-gray-50 dark:bg-slate-700/30 rounded-lg border border-gray-200 dark:border-slate-600 animate-in fade-in duration-200">
                          <div className="space-y-3">
                            {/* Description */}
                            <div>
                              <h4 className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-2">
                                Description
                              </h4>
                              <div className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                                <MarkdownRenderer content={item.description} />
                              </div>
                            </div>

                            {/* All Tags */}
                            {item.tags.length > 2 && (
                              <div>
                                <h4 className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-2">
                                  All Tags
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                  {item.tags.map((tag, tagIndex) => (
                                    <span
                                      key={tagIndex}
                                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded text-xs font-medium"
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Visit Button */}
                            <div className="pt-2">
                              <button
                                onClick={() => {
                                  window.open(item.link, "_blank");
                                }}
                                className="w-full py-2 px-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white rounded-lg font-medium text-sm transition-colors duration-200 flex items-center justify-center gap-2"
                              >
                                Visit Link
                                <FiExternalLink size={14} />
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
