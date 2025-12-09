import { SEO, ProjectCard } from '@/components';
import { projects } from '@/data/projects';
import { siteConfig } from '@/data/site';

export function Home() {
  return (
    <>
      <SEO />

      {/* Fixed Background Gradients */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-radial-gradient" />
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] dark:opacity-30" />
          <div className="animate-pulse-glow absolute -top-40 -right-40 h-96 w-96 rounded-full bg-indigo-500/20 blur-[100px]" />
          <div className="animate-pulse-glow animation-delay-400 absolute top-20 -left-20 h-72 w-72 rounded-full bg-purple-500/20 blur-[100px]" />
        </div>

        <div className="container-custom relative z-10">
          <div className="mx-auto max-w-4xl py-24 text-center sm:py-32">
            <h1 className="heading-1 mb-6 animate-fade-in-up text-gray-900 dark:text-white">
              Building Tools That <br />
              <span className="text-gradient">Make a Difference</span>
            </h1>
            <p className="mx-auto mb-10 max-w-2xl animate-fade-in-up text-lg text-gray-600 animation-delay-200 dark:text-gray-400">
              Developer focused on creating practical applications for gaming analytics, financial
              planning, and productivity. Turning complex problems into elegant solutions.
            </p>
            <div className="flex animate-fade-in-up flex-col justify-center gap-4 animation-delay-400 sm:flex-row">
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
      <section id="about" className="section-padding bg-gray-50/50 dark:bg-white/5">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <h2 className="heading-2 mb-6 text-center text-gray-900 dark:text-white">About</h2>
            <div className="prose prose-lg prose-indigo mx-auto text-gray-600 dark:text-gray-300">
              <p className="mb-4">
                I'm a developer passionate about building tools that solve real problems. My
                projects span from gaming analytics tools for Old School RuneScape to financial
                planning calculators for retirement savings.
              </p>
              <p>
                I focus on creating applications that are not only functional but also intuitive and
                enjoyable to use. Each project is built with attention to detail, performance, and
                user experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="heading-2 mb-4 text-gray-900 dark:text-white">Featured Projects</h2>
            <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400">
              A collection of applications and tools I've built to solve specific challenges.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-gray-50/50 dark:bg-white/5">
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
                  className="btn-primary w-full sm:w-auto"
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
