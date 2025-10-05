import Card, { MetadataDict } from "../components/Card";
import projectsData from "../../data/projects.json";

// Define the shape of a project (robust and matches your data)
interface Project extends MetadataDict {
  title: string;
  description?: string;
  TechStack?: string[];
  tags?: string[];
}

const projects = projectsData as Project[];

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Projects</h1>

      {projects.map((p, i) => (
        <Card
          key={i}
          title={p.title}
          metadataDict={p}
          footer={p.tags?.length ? p.tags.join(", ") : ""}
        />
      ))}
    </div>
  );
}
