import { Link } from 'react-router-dom';
import { SEO } from '@/components';

export function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" description="The page you're looking for doesn't exist." />

      <section className="section-padding">
        <div className="container-custom">
          <div className="mx-auto max-w-md text-center">
            <h1 className="heading-1 mb-4 text-gray-900 dark:text-white">404</h1>
            <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <Link to="/" className="btn-primary">
              Go Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
