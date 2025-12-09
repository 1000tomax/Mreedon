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

      {/* Header Background */}
      <div className="absolute top-0 left-0 right-0 -z-10 h-[500px] overflow-hidden">
         <div className="absolute top-0 right-0 h-[500px] w-[500px] -translate-y-1/2 translate-x-1/2 rounded-full bg-indigo-500/10 blur-[100px]" />
         <div className="absolute top-0 left-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/10 blur-[100px]" />
      </div>

      <article className="pt-24 pb-20 sm:pt-32 sm:pb-24">
        <div className="container-custom">
          {/* Breadcrumb */}
          <nav className="mb-8 animate-fade-in-up">
            <ol className="flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400">
              <li>
                <Link to="/" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link to="/#projects" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Projects
                </Link>
              </li>
              <li>/</li>
              <li className="text-gray-900 dark:text-white font-semibold">{project.title}</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-16 animate-fade-in-up animation-delay-200">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10 dark:bg-indigo-900/20 dark:text-indigo-300 dark:ring-indigo-700/30">
                {project.category}
              </span>
              <span
                className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ring-1 ring-inset ${
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
            <h1 className="heading-1 mb-6 text-gray-900 dark:text-white">
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-indigo-800 to-gray-900 dark:from-white dark:via-indigo-200 dark:to-white">
                 {project.title}
               </span>
            </h1>
            <p className="max-w-3xl text-xl leading-relaxed text-gray-600 dark:text-gray-300">
              {project.longDescription}
            </p>
          </header>

          {/* Content */}
          <div className="grid gap-12 lg:grid-cols-3 animate-fade-in-up animation-delay-400">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Features */}
              <section className="mb-12">
                <h2 className="heading-2 mb-8 text-gray-900 dark:text-white">Key Features</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {project.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3 rounded-xl border border-gray-100 bg-gray-50/50 p-4 transition-colors hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-900/50 dark:hover:bg-gray-900">
                      <div className="flex-shrink-0 rounded-full bg-indigo-100 p-1 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400">
                         <svg
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="3"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <aside>
              <div className="card sticky top-24">
                {/* Technologies */}
                <div className="mb-8">
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-gray-100 px-2.5 py-1 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
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
                    className="btn-primary block w-full text-center shadow-lg shadow-indigo-500/20"
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
