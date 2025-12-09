import { Link } from 'react-router-dom';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  // Generate a gradient based on the project ID to give each card a unique look
  const getGradient = (id: string) => {
    const gradients = [
      'from-blue-400 to-indigo-500',
      'from-emerald-400 to-cyan-500',
      'from-orange-400 to-pink-500',
      'from-purple-400 to-blue-500',
    ];
    const index = parseInt(id) % gradients.length;
    return gradients[index];
  };

  return (
    <article className="card group flex h-full flex-col overflow-hidden p-0 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
      {/* Visual Placeholder / Header */}
      <div className={`h-48 w-full bg-gradient-to-br ${getGradient(project.id)} relative overflow-hidden`}>
         <div className="absolute inset-0 bg-white/10 opacity-0 transition-opacity group-hover:opacity-100" />
         <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
             <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-800 dark:bg-black/50 dark:text-white">
                {project.category}
             </div>
         </div>
      </div>

      <div className="flex flex-col flex-grow p-6">
        <div className="mb-4 flex items-center justify-between">
            <h3 className="heading-3 text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              {project.title}
            </h3>
             <span
              className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${
                project.status === 'active'
                  ? 'bg-green-50 text-green-700 ring-green-600/20 dark:bg-green-900/20 dark:text-green-400 dark:ring-green-500/20'
                  : project.status === 'development'
                    ? 'bg-yellow-50 text-yellow-800 ring-yellow-600/20 dark:bg-yellow-900/20 dark:text-yellow-400 dark:ring-yellow-500/20'
                    : 'bg-gray-50 text-gray-600 ring-gray-500/10 dark:bg-gray-900/20 dark:text-gray-400 dark:ring-gray-400/20'
              }`}
            >
              {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
            </span>
        </div>

        <p className="mb-6 flex-grow text-sm leading-relaxed text-gray-600 dark:text-gray-300">
          {project.description}
        </p>

        <div className="mb-6 flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 dark:bg-gray-800 dark:text-gray-300 dark:ring-gray-700"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 dark:bg-gray-800 dark:text-gray-300 dark:ring-gray-700">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        <div className="mt-auto flex items-center gap-4 border-t border-gray-100 pt-4 dark:border-gray-800">
          <Link
            to={`/projects/${project.slug}`}
            className="flex items-center text-sm font-semibold text-indigo-600 transition-colors hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
          >
            Details
            <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm font-semibold text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            Live Site
             <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
}
