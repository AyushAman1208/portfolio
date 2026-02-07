import Card, { MetadataDict } from "../components/Card";
import educationData from "../../data/education.json";

// Define the shape of an education entry
interface Education extends MetadataDict {
  course: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  tags: string[];
  logo: string;
}

const education = educationData as Education[];

export default function EducationPage() {
  return (
    <div>
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
          Education
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          My academic background
        </p>
        <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-transparent rounded-full mt-4"></div>
      </div>

      <div className="space-y-4">
        {education.map((e, i) => (
          <Card
            key={i}
            title={e.course}
            description={e.description}
            institution={e.institution}
            metadataDict={e}
            footer={
              e.startDate && e.endDate
                ? `${e.startDate} – ${e.endDate}`
                : ""
            }
          />
        ))}
      </div>
    </div>
  );
}
