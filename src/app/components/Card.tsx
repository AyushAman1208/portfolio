"use client";
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { FiExternalLink } from "react-icons/fi";
import MarkdownRenderer from "./MarkdownRenderer";

// A flexible dictionary type for metadata
export interface MetadataDict {
  [key: string]: string | string[] | undefined;
}

export interface CardProps {
  title: string;
  description?: string;
  footer?: string;
  metadataDict?: MetadataDict;
  url?: string;
  institution?: string;
}

const isUrl = (str: string): boolean => {
  try {
    new URL(str);
    return true;
  } catch {
    return false;
  }
};

const renderValue = (value: string | string[]): React.ReactNode => {
  if (Array.isArray(value)) {
    return (
      <div className="flex flex-wrap gap-2">
        {value.map((item, idx) => {
          if (isUrl(item)) {
            return (
              <a
                key={idx}
                href={item}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors inline-flex items-center gap-1"
              >
                {item} <FiExternalLink size={12} />
              </a>
            );
          }
          return (
            <span
              key={idx}
              className="px-3 py-1 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
            >
              {/* {item} */}
              <MarkdownRenderer content={item} />
            </span>
          );
        })}
      </div>
    );
  }

  if (isUrl(value)) {
    return (
      <a
        href={value}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline inline-flex items-center gap-1 break-words"
      >
        {value} <FiExternalLink size={14} />
      </a>
    );
  }

  return (
    <span className="text-gray-600 dark:text-gray-400 break-words text-sm">
      <MarkdownRenderer content={value} />
    </span>
  );
};

export default function Card({
  title,
  footer,
  metadataDict,
  url,
  institution,
}: CardProps) {
  const [open, setOpen] = useState(false);

  // Convert metadataDict into a uniform list for rendering, excluding title, description, and url
  const metadata = metadataDict
    ? Object.entries(metadataDict)
        .filter(
          ([key]) =>
            !["title", "institution", "url", "logo"].includes(
              key.toLowerCase(),
            ),
        )
        .map(([key, value]) => ({
          label: key,
          value: Array.isArray(value) ? value : value,
        }))
    : [];

  return (
    <div className="bg-white dark:bg-slate-800 shadow-md dark:shadow-lg rounded-xl p-6 mb-6 hover:shadow-xl dark:hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-200 dark:border-slate-700">
      {/* Header Row */}
      <div
        className="flex justify-between items-start cursor-pointer select-none"
        onClick={() => setOpen((prev) => !prev)}
      >
        <div className="flex-1">
          <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-400 dark:to-blue-300 bg-clip-text text-transparent">
            {title}
          </h3>
          {institution && (
            <div className="flex items-start gap-3 mt-2">
              {metadataDict?.logo && (
                <img
                  src={metadataDict.logo as string}
                  alt={``}
                  className="w-8 h-8 object-contain rounded-md flex-shrink-0"
                />
              )}
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {institution}
              </p>
            </div>
          )}
        </div>
        <div className="text-blue-600 dark:text-blue-400 transition-transform duration-300 ml-4 flex-shrink-0">
          {open ? <FiChevronUp size={22} /> : <FiChevronDown size={22} />}
        </div>
      </div>

      {/* Footer (always visible) */}
      {footer && (
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
          {footer}
        </p>
      )}

      {/* URL Button */}
      {url && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 p-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md hover:shadow-lg items-center justify-center"
          title="Open link"
        >
          <FiExternalLink size={18} />
        </a>
      )}

      {/* Collapsible Metadata Section */}
      {open && metadata.length > 0 && (
        <div className="mt-4 border-t border-gray-200 dark:border-slate-600 pt-4 space-y-3 animate-in fade-in duration-300">
          {metadata.map(({ label, value }, idx) => (
            <div
              key={idx}
              className="flex flex-col md:grid md:grid-cols-[8rem_1fr] gap-2"
            >
              <span className="font-medium text-gray-700 dark:text-gray-300 capitalize text-sm">
                {label.replace(/([A-Z])/g, " $1").trim()}:
              </span>
              <div className="flex-1">{renderValue(value as string)}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
