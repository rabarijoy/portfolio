'use client';

import { useEffect } from 'react';

interface PersonSchema {
  '@context': string;
  '@type': string;
  name: string;
  jobTitle: string;
  email: string;
  url: string;
  sameAs: string[];
  address: {
    '@type': string;
    addressLocality: string;
    addressCountry: string;
  };
}

interface ProjectSchema {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  url?: string;
  image?: string;
  datePublished?: string;
  creator: {
    '@type': string;
    name: string;
  };
}

export function PersonStructuredData() {
  useEffect(() => {
    const schema: PersonSchema = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Aina Joy Rabarijaona',
      jobTitle: 'Développeur Web',
      email: 'rabarijaonajoy@gmail.com',
      url: 'https://portfolio-joy.vercel.app',
      sameAs: [
        'https://www.linkedin.com/in/joyrabari',
        'https://github.com/rabarijoy',
      ],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Antananarivo',
        addressCountry: 'MG',
      },
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'person-schema';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('person-schema');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return null;
}

export function ProjectStructuredData({ 
  name, 
  description, 
  url, 
  image 
}: { 
  name: string; 
  description: string; 
  url?: string; 
  image?: string;
}) {
  useEffect(() => {
    const schema: ProjectSchema = {
      '@context': 'https://schema.org',
      '@type': 'Project',
      name,
      description,
      url: url || window.location.href,
      image: image || 'https://portfolio-joy.vercel.app/og-image.jpg',
      datePublished: new Date().toISOString(),
      creator: {
        '@type': 'Person',
        name: 'Aina Joy Rabarijaona',
      },
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'project-schema';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('project-schema');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [name, description, url, image]);

  return null;
}



