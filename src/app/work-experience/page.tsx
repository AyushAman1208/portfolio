import Card, { MetadataDict } from "../components/Card";
import workData from "../../data/work.json";

// Define the shape of a project (robust and matches your data)
interface Work extends MetadataDict{
    jobTitle: string,
    company: string,
    jobType: string,
    joined: string,
    ended: string,
    location: string,
    description: string,
    tags: string[]
}

const works = workData as Work[];

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Work Experience</h1>

      {works.map((p, i) => (
        <Card
          key={i}
          title={p.jobTitle}
          metadataDict={p}
          footer={p.tags?.length ? p.tags.join(", ") : ""}
        />
      ))}
    </div>
  );
}
