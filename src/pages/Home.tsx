import { SEO, ProjectCard } from '@/components';
import { projects } from '@/data/projects';
import { siteConfig } from '@/data/site';

export function Home() {
  return (
    <>
      <SEO />

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="heading-1 mb-6 text-gray-900 dark:text-white">
              Building Tools That Make a Difference
            </h1>
            <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
              Developer focused on creating practical applications for gaming analytics, financial
              planning, and productivity. Turning complex problems into elegant solutions.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a href="#projects" className="btn-primary">
                View Projects
              </a>
              <a href="#contact" className="btn-secondary">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <h2 className="heading-2 mb-6 text-center text-gray-900 dark:text-white">About</h2>
            <div className="prose prose-gray mx-auto dark:prose-invert">
              <p className="text-gray-600 dark:text-gray-300">
                I'm a developer passionate about building tools that solve real problems. My
                projects span from gaming analytics tools for Old School RuneScape to financial
                planning calculators for retirement savings.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                I focus on creating applications that are not only functional but also intuitive and
                enjoyable to use. Each project is built with attention to detail, performance, and
                user experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-800/50">
        <div className="container-custom">
          <h2 className="heading-2 mb-12 text-center text-gray-900 dark:text-white">Projects</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding">
        <div className="container-custom">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="heading-2 mb-6 text-gray-900 dark:text-white">Get in Touch</h2>
            <p className="mb-8 text-gray-600 dark:text-gray-300">
              Interested in collaborating or have questions about any of my projects? Feel free to
              reach out.
            </p>
            <div className="flex flex-col items-center gap-4">
              {siteConfig.social.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Connect on {link.platform}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
