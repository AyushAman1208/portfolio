"use client";
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

// A flexible dictionary type for metadata
export interface MetadataDict {
  [key: string]: string | string[] | undefined;
}

export interface CardProps {
  title: string;
  footer?: string;
  metadataDict?: MetadataDict;
}

export default function Card({ title, footer, metadataDict }: CardProps) {
  const [open, setOpen] = useState(false);

  // Convert metadataDict into a uniform list for rendering
  const metadata = metadataDict
    ? Object.entries(metadataDict).map(([key, value]) => ({
        label: key,
        value: Array.isArray(value) ? value.join(", ") : value,
      }))
    : [];

  return (
    <div className="bg-white shadow-md rounded-2xl p-6 mb-6 hover:shadow-lg transition">
      {/* Header Row */}
      <div
        className="flex justify-between items-center cursor-pointer select-none"
        onClick={() => setOpen((prev) => !prev)}
      >
        <h3 className="text-xl font-semibold text-blue-600">{title}</h3>
        {open ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
      </div>

      {/* Footer (always visible) */}
      {footer && <p className="text-sm text-gray-500 mt-2">{footer}</p>}

      {/* Collapsible Metadata Section */}
      {open && metadata.length > 0 && (
        <div className="mt-4 border-t pt-4 space-y-2">
          {metadata.map(({ label, value }, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row md:items-center gap-1"
            >
              <span className="font-medium text-gray-700 md:w-32 capitalize">
                {label}:
              </span>
              <span className="text-gray-700 break-words">{value}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
