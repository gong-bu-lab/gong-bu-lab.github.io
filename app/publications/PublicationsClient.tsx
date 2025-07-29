'use client';

import { useState } from 'react';
import { MarkdownFile } from '@/lib/markdown';

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
  const [expandedPublications, setExpandedPublications] = useState<Set<string>>(new Set());

  const togglePublication = (publicationId: string) => {
    const newExpanded = new Set(expandedPublications);
    if (newExpanded.has(publicationId)) {
      newExpanded.delete(publicationId);
    } else {
      newExpanded.add(publicationId);
    }
    setExpandedPublications(newExpanded);
  };

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



      {/* Publications by Year */}
      <div className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {sortedYears.map((year) => (
            <div key={year} className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b border-gray-200 pb-4 mt-16">
                {year}
              </h2>
              <div className="space-y-8">
                {publicationsByYear[year].map((paper, paperIndex) => {
                  const publicationId = `${year}-${paperIndex}`;
                  const isExpanded = expandedPublications.has(publicationId);
                  
                  return (
                    <div key={paperIndex} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                {paper.data.title}
                              </h3>
                              <p className="text-gray-600 mb-3">
                                {paper.data.authors}
                              </p>
                              <p className="text-gray-700 mb-3 italic">
                                {paper.data.venue}
                              </p>
                            </div>
                            <button
                              onClick={() => togglePublication(publicationId)}
                              className="ml-4 flex-shrink-0 p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                              aria-label={isExpanded ? "Hide description" : "Show description"}
                            >
                              <svg
                                className={`w-5 h-5 transform transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </button>
                          </div>
                          
                          {/* Collapsible Description */}
                          <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                            <div className="text-gray-600 mb-4 text-sm prose prose-sm max-w-none pt-4 border-t border-gray-100">
                              <div dangerouslySetInnerHTML={{ __html: paper.content }} />
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-4">
                            <a
                              href={`https://doi.org/${paper.data.doi}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-red-600 hover:text-red-800 text-sm font-medium"
                            >
                              DOI: {paper.data.doi}
                            </a>
                          </div>
                        </div>
                        <div className="mt-4 lg:mt-0 lg:ml-6 flex space-x-2">
                          <a
                            href={paper.data.pdf}
                            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                          >
                            PDF
                          </a>
                          <button
                            className="inline-flex items-center px-3 py-2 border border-gray-300 text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                          >
                            Cite
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Statistics */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Publication Statistics</h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="text-3xl font-extrabold text-red-600">{totalPublications}+</div>
                <div className="mt-2 text-sm font-medium text-gray-600">Total Publications</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-extrabold text-green-600">1000+</div>
                <div className="mt-2 text-sm font-medium text-gray-600">Total Citations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-extrabold text-purple-600">15+</div>
                <div className="mt-2 text-sm font-medium text-gray-600">Conference Papers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-extrabold text-orange-600">10+</div>
                <div className="mt-2 text-sm font-medium text-gray-600">Journal Papers</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-red-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Interested in our research?
            </h2>
            <p className="mt-4 text-xl text-red-100">
              Check out our latest publications or get in touch to discuss potential collaborations.
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <a
                href="/people"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-red-600 bg-white hover:bg-gray-50 transition-colors duration-200"
              >
                Meet Our Team
              </a>
              <a
                href="mailto:boqinggo@outlook.com"
                className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-red-700 transition-colors duration-200"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 