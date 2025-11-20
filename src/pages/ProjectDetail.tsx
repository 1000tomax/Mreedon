import { useParams, Link, Navigate } from 'react-router-dom';
import { SEO } from '@/components';
import { getProjectBySlug } from '@/data/projects';

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <SEO
        title={project.title}
        description={project.description}
        url={`https://mreedon.com/projects/${project.slug}`}
      />

      <article className="section-padding">
        <div className="container-custom">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <a href="/#projects" className="hover:text-blue-600 dark:hover:text-blue-400">
                  Projects
                </a>
              </li>
              <li>/</li>
              <li className="text-gray-900 dark:text-white">{project.title}</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                {project.category}
              </span>
              <span
                className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${
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
            <h1 className="heading-1 mb-4 text-gray-900 dark:text-white">{project.title}</h1>
            <p className="max-w-3xl text-lg text-gray-600 dark:text-gray-300">
              {project.longDescription}
            </p>
          </header>

          {/* Content */}
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Features */}
              <section className="mb-12">
                <h2 className="heading-2 mb-6 text-gray-900 dark:text-white">Features</h2>
                <ul className="space-y-3">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <svg
                        className="mt-1 h-5 w-5 flex-shrink-0 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Sidebar */}
            <aside>
              <div className="card sticky top-24">
                {/* Technologies */}
                <div className="mb-6">
                  <h3 className="mb-3 font-semibold text-gray-900 dark:text-white">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded bg-gray-100 px-2 py-1 text-sm text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-3">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary block w-full text-center"
                  >
                    Visit Project
                  </a>
                  <Link to="/#projects" className="btn-secondary block w-full text-center">
                    Back to Projects
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </>
  );
}
