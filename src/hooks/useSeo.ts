import { useEffect } from 'react';

interface SeoOptions {
  title: string;
  description?: string;
}

const DEFAULT_DESCRIPTION =
  'We craft software, design unique digital experiences, and empower AI to elevate your business.';

export const useSeo = ({ title, description }: SeoOptions) => {
  useEffect(() => {
    document.title = title ? `${title} | Kinwits Technologies` : 'Kinwits Technologies';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description ?? DEFAULT_DESCRIPTION);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', document.title);

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description ?? DEFAULT_DESCRIPTION);
    }

    return () => {
      document.title = 'Kinwits Technologies';
      if (metaDescription) metaDescription.setAttribute('content', DEFAULT_DESCRIPTION);
    };
  }, [title, description]);
};
