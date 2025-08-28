'use client';

import { useState } from 'react';
import { MarkdownFile } from '@/lib/markdown';
import Image from 'next/image';

interface PublicationsClientProps {
  publicationsByYear: Record<string, MarkdownFile[]>;
  sortedYears: string[];
  researchAreas: string[];
  totalPublications: number;
}

export default function PublicationsClient({
  publicationsByYear,
  sortedYears,
  researchAreas,
  totalPublications
}: PublicationsClientProps) {
  const [selectedYear, setSelectedYear] = useState<string>('all');

  // Get publications for selected year
  const getFilteredPublications = () => {
    if (selectedYear === 'all') {
      return Object.values(publicationsByYear).flat();
    }
    return publicationsByYear[selectedYear] || [];
  };

  const filteredPublications = getFilteredPublications();

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Publications
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
              Our research contributions to the fields of artificial intelligence, machine learning, and computer vision.
            </p>
          </div>
        </div>
      </div>

      {/* Year Filter */}
      <div className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setSelectedYear('all')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                selectedYear === 'all'
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All ({totalPublications})
            </button>
            {sortedYears.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  selectedYear === year
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {year} ({publicationsByYear[year].length})
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Publications */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {filteredPublications.map((paper, index) => (
              <div key={index} className="flex gap-8 items-center">
                {/* Left: Teaser Figure */}
                <div className="flex-shrink-0">
                  {paper.data.teaser ? (
                    <div className="w-80 h-40 flex items-center justify-center bg-white">
                      <Image
                        src={paper.data.teaser}
                        alt={paper.data.title}
                        width={320}
                        height={160}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  ) : (
                    <div className="w-80 h-40 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500 text-sm">No Image</span>
                    </div>
                  )}
                </div>

                {/* Right: Publication Info */}
                <div className="flex-1">
                  {/* Title (Bold) */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {paper.data.title}
                  </h3>
                  
                  {/* Authors */}
                  <p className="text-gray-700 mb-2">
                    {paper.data.authors}
                  </p>
                  
                  {/* Venue + Links */}
                  <div className="flex items-center gap-4 text-sm">
                    <span className="font-bold text-gray-600 italic">
                      {paper.data.venue}
                    </span>
                    
                    {paper.data.pdf && (
                      <a
                        href={paper.data.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-600 hover:text-red-800 font-medium"
                      >
                        [paper]
                      </a>
                    )}
                    
                    {paper.data.project && (
                      <a
                        href={paper.data.project}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-600 hover:text-red-800 font-medium"
                        >
                        [project]
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 