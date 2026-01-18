import  { MetadataDict } from "../components/Card";
import projectsData from "../../data/projects.json";
import ProjectsFilter from "./ProjectsFilter";


// Define the shape of a project (robust and matches your data)
interface Project extends MetadataDict {
  title: string;
  description?: string;
  TechStack?: string[];
  tags?: string[];
  url?: string;
}

const projects = projectsData as Project[];

export default function ProjectsPage() {
  // Extract all unique tags and tech stacks
  const allTags = Array.from(
    new Set(projects.flatMap((p) => p.tags || []))
  ).sort();

  const allTechStacks = Array.from(
    new Set(
      projects.flatMap((p) => {
        if (Array.isArray(p.TechStack)) {
          return p.TechStack.map((t) => t.trim());
        }
        return [];
      })
    )
  ).sort();

  return (
    <div>
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">Projects</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">A selection of my recent robotics and AI projects</p>
        <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-transparent rounded-full mt-4"></div>
      </div>

      <ProjectsFilter 
        projects={projects} 
        allTags={allTags} 
        allTechStacks={allTechStacks}
      />
    </div>
  );
}
