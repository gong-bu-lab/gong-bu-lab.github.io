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
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="h-96 rounded-lg overflow-hidden">
              <Image
                src={event.data.image}
                alt={event.data.title}
                width={800}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      )}

      {/* Event Content */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            >
            {event.content}
            </ReactMarkdown>
          {/* <div className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: event.content }} />
          </div> */}
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
