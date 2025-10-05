import Card from "../components/Card";
import projects from "../../data/projects.json";

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      {projects.map((p, i) => (
        <Card key={i} title={p.title} metadataDict={p} footer={`${p.tags.join(", ")}`} />
      ))}
    </div>
  );
}
