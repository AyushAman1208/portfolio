import Card, { MetadataDict } from "../components/Card";
import workData from "../../data/work.json";

// Define the shape of a project (robust and matches your data)
interface Work extends MetadataDict {
  jobTitle: string;
  company: string;
  jobType: string;
  joined: string;
  ended: string;
  location: string;
  description: string;
  tags: string[];
}

const works = workData as Work[];

export default function WorkExperiencePage() {
  return (
    <div>
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
          Work Experience
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          My professional journey in robotics, AI, and software engineering
        </p>
        <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-transparent rounded-full mt-4"></div>
      </div>

      <div className="space-y-4">
        {works.map((p, i) => (
          <Card
            key={i}
            title={p.jobTitle}
            description={p.description}
            institution={p.company}
            metadataDict={p}
            footer={p.tags?.length ? p.tags.join(", ") : ""}
          />
        ))}
      </div>
    </div>
  );
}
