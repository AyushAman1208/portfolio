"use client";
import { useState } from "react";
import { FiChevronDown, FiChevronUp, FiExternalLink } from "react-icons/fi";

interface MetadataItem {
  label: string;
  value: string;
  type?: "link" | "text"; // allows clickable URLs
}

interface CardProps {
  title: string;
  footer?: string;
  metadataDict: { [key: string]: string };
}

export default function Card({ title, footer, metadataDict }: CardProps) {
  const [open, setOpen] = useState(false);

  const metadata: MetadataItem[] = [];
  if (metadataDict) {
    Object.keys(metadataDict).forEach((key) => {
      metadata.push({ label: key, value: metadataDict[key] });
    });
  }

  return (
    <div className="bg-white shadow-md rounded-2xl p-6 mb-6 hover:shadow-lg transition">
      {/* Header Row */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <h3 className="text-xl font-semibold text-blue-600">{title}</h3>
        {open ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
      </div>

      {/* Footer always visible */}
      {footer && <p className="text-sm text-gray-500 mt-2">{footer}</p>}

      {/* Collapsible metadata section */}
      {open && (
        <div className="mt-4 border-t pt-4 space-y-2">
          {metadata.map((item, idx) => (
            <div key={idx} className="flex flex-col md:flex-row md:items-center">
              <span className="font-medium text-gray-700 w-32">{item.label}:</span>
              {item.type === "link" ? (
                <a
                  href={item.value}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline flex items-center gap-1"
                >
                  {item.value}
                  <FiExternalLink size={14} />
                </a>
              ) : (
                <span className="text-gray-700">{item.value}</span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

