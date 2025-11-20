import { Link } from 'react-router-dom';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="card group flex flex-col">
      <div className="mb-4 flex items-center justify-between">
        <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
          {project.category}
        </span>
        <span
          className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
            project.status === 'active'
              ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
              : project.status === 'development'
                ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
                : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
          }`}
        >
          {project.status}
        </span>
      </div>

      <h3 className="heading-3 mb-2 text-gray-900 dark:text-white">{project.title}</h3>

      <p className="mb-4 flex-grow text-sm text-gray-600 dark:text-gray-400">
        {project.description}
      </p>

      <div className="mb-4 flex flex-wrap gap-2">
        {project.technologies.slice(0, 3).map((tech) => (
          <span
            key={tech}
            className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-700 dark:bg-gray-700 dark:text-gray-300"
          >
            {tech}
          </span>
        ))}
        {project.technologies.length > 3 && (
          <span className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-700 dark:bg-gray-700 dark:text-gray-300">
            +{project.technologies.length - 3}
          </span>
        )}
      </div>

      <div className="flex items-center gap-3">
        <Link
          to={`/projects/${project.slug}`}
          className="text-sm font-medium text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
        >
          View Details
        </Link>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
        >
          Visit Site
        </a>
      </div>
    </article>
  );
}
