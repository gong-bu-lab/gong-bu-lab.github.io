import { getAllMarkdownFilesInDirectory } from '@/lib/markdown';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";


interface EventPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function EventPage({ params }: EventPageProps) {
  const { slug } = await params;
  const events = getAllMarkdownFilesInDirectory('misc');
  const event = events.find(e => e.data.slug === slug);

  if (!event) {
    notFound();
  }

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/misc" 
            className="inline-flex items-center text-red-600 hover:text-red-800 mb-8 font-medium"
          >
            ← Back to Lab Life
          </Link>
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              {event.data.title}
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              {event.data.date}
            </p>
          </div>
        </div>
      </div>

      {/* Event Image */}
      {event.data.image && (
        <div className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative w-full rounded-lg overflow-hidden">
              <Image
                src={event.data.image}
                alt={event.data.title}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      )}

      {/* Event Content */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="markdown-content">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ children }) => <h1 className="text-3xl font-bold text-gray-900 mb-6 mt-8">{children}</h1>,
                h2: ({ children }) => <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-6">{children}</h2>,
                h3: ({ children }) => <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-5">{children}</h3>,
                p: ({ children }) => <p className="mb-4 text-base leading-7 text-gray-700">{children}</p>,
                ul: ({ children }) => <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>,
                ol: ({ children }) => <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>,
                li: ({ children }) => <li className="text-base leading-6 text-gray-700">{children}</li>,
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-gray-300 pl-4 my-4 italic text-gray-600">
                    {children}
                  </blockquote>
                ),
                code: ({ children }) => <code className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono">{children}</code>,
                pre: ({ children }) => <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4">{children}</pre>,
                strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
                em: ({ children }) => <em className="italic">{children}</em>,
                a: ({ href, children }) => (
                  <a href={href} className="text-red-600 hover:text-red-800 underline">
                    {children}
                  </a>
                ),
              }}
            >
              {event.content}
            </ReactMarkdown>
          </div>
        </div>
      </div>

      {/* Back to Events */}
      <div className="py-8 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link 
            href="/misc" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors duration-200"
          >
            View More Events
          </Link>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const events = getAllMarkdownFilesInDirectory('misc');
  
  return events.map((event) => ({
    slug: event.data.slug,
  }));
}
