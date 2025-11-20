import { Helmet } from 'react-helmet-async';
import { siteConfig } from '@/data/site';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
}

export function SEO({
  title,
  description = siteConfig.description,
  image,
  url,
  type = 'website',
}: SEOProps) {
  const pageTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title;
  const pageUrl = url || siteConfig.url;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="title" content={pageTitle} />
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={pageUrl} />
      <meta property="twitter:title" content={pageTitle} />
      <meta property="twitter:description" content={description} />
      {image && <meta property="twitter:image" content={image} />}

      {/* Additional SEO */}
      <meta name="author" content={siteConfig.author} />
      <link rel="canonical" href={pageUrl} />
    </Helmet>
  );
}
