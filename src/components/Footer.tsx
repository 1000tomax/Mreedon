import { siteConfig } from '@/data/site';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900">
      <div className="container-custom py-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {siteConfig.social.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
              >
                {link.platform}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
