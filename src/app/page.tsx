import Image from "next/image";
import projects from "../data/projects.json";
import work from "../data/work.json";

export default function HomePage() {
  const bestProject = projects[0];
  const currentJob = work[0];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="relative py-12">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800 rounded-2xl opacity-50 -z-10"></div>
        
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="relative flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur-lg opacity-75"></div>
            <Image 
              src="/profilePic.JPG" 
              alt="Profile" 
              width={200} 
              height={200} 
              className="relative rounded-full shadow-2xl border-4 border-white dark:border-slate-700 object-cover"
            />
          </div>
          
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-3">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                Ayush Aman
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl">
              Robotics and AI Engineer passionate about building intelligent systems
              and AI-driven solutions for real-world challenges. Located in London with expertise
              in robotics, machine learning, and full-stack development.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="/projects" className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl">
                View Projects
              </a>
              <a href="/work-experience" className="px-6 py-2 bg-gray-200 dark:bg-slate-700 text-gray-900 dark:text-white font-semibold rounded-lg hover:bg-gray-300 dark:hover:bg-slate-600 transition-all">
                Experience
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Best Project Section */}
      <div className="mt-12">
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Featured Project</h2>
          <div className="h-1 flex-grow bg-gradient-to-r from-blue-600 to-transparent rounded-full"></div>
        </div>
        
        <div className="bg-gradient-to-br from-white to-gray-50 dark:from-slate-800 dark:to-slate-900 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-slate-700 hover:shadow-xl transition-all">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent mb-3">{bestProject.title}</h3>
          <p className="text-gray-700 dark:text-gray-300 text-lg mb-4 leading-relaxed">{bestProject.description}</p>
          <div className="flex flex-wrap gap-2">
            {bestProject.tags?.map((tag, idx) => (
              <span key={idx} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Current Job Section */}
      <div className="mt-12">
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Current Position</h2>
          <div className="h-1 flex-grow bg-gradient-to-r from-blue-600 to-transparent rounded-full"></div>
        </div>
        
        {currentJob && (
          <div className="bg-gradient-to-br from-white to-gray-50 dark:from-slate-800 dark:to-slate-900 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-slate-700 hover:shadow-xl transition-all">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">{currentJob.jobTitle}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg font-semibold mt-1">{currentJob.company}</p>
              </div>
              <span className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full text-sm font-semibold">
                Current
              </span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">📍 {currentJob.location}</p>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">{currentJob.description}</p>
          </div>
        )}
      </div>
    </div>
  );
}
