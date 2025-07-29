import { getAllMarkdownFilesInDirectory } from '@/lib/markdown';
import PublicationsClient from './PublicationsClient';

export default function Publications() {
  const publicationFiles = getAllMarkdownFilesInDirectory('publications');
  
  // Group publications by year
  const publicationsByYear = publicationFiles.reduce((acc, pub) => {
    const year = pub.data.year;
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(pub);
    return acc;
  }, {} as Record<string, typeof publicationFiles>);

  // Sort years in descending order
  const sortedYears = Object.keys(publicationsByYear).sort((a, b) => parseInt(b) - parseInt(a));

  // Get unique research areas
  const researchAreas = Array.from(
    new Set(publicationFiles.map(pub => pub.data.researchArea).filter(Boolean))
  );

  return (
    <PublicationsClient 
      publicationsByYear={publicationsByYear}
      sortedYears={sortedYears}
      researchAreas={researchAreas}
      totalPublications={publicationFiles.length}
    />
  );
} 