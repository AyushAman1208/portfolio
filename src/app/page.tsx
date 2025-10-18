import Image from "next/image";
import projects from "../data/projects.json";
import work from "../data/work.json";

export default function HomePage() {
  const bestProject = projects[0];
  const currentJob = work[0];

  return (
    <div className="space-y-12">
      {/* Row 1: Bio */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        <Image src="https://drive.google.com/file/d/10u0J4ZiFQaXAxduj3WagXqhXSUbRK58K/view?usp=sharing" alt="img" width={200} height={200} className="rounded-full shadow-md" />
        <div>
          <h1 className="text-3xl font-bold text-blue-600">Ayush Aman</h1>
          <p className="mt-2 text-lg text-gray-700">
            Robotics and AI Engineer passionate about building intelligent systems
            and AI-driven solutions for real-world challenges.
          </p>
        </div>
      </div>
      {/* Row 2: Best Project */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Best Project</h2>
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h3 className="text-xl font-bold text-blue-600">{bestProject.title}</h3>
          <p className="mt-2 text-gray-700">{bestProject.description}</p>
          <p className="text-sm text-gray-500 mt-2">{bestProject.tags.join(", ")}</p>
        </div>
      </div>

      {/* Row 3: Current Job */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Current Job</h2>
        {currentJob && (<div className="bg-white p-6 rounded-2xl shadow-md">
          <h3 className="text-xl font-bold text-blue-600">{currentJob.jobTitle}</h3>
          <p className="text-gray-600">{currentJob.company} — {currentJob.location}</p>
          <p className="mt-2 text-gray-700">{currentJob.description}</p>
        </div>)}
      </div>
    </div>
  );
}
