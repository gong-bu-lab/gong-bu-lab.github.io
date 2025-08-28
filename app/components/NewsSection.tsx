'use client';

import { useState } from 'react';

interface NewsItem {
  slug: string;
  content: string;
  data: Record<string, string | boolean | number | undefined>;
}

interface NewsSectionProps {
  newsItems: NewsItem[];
}

export default function NewsSection({ newsItems }: NewsSectionProps) {
  const [showAll, setShowAll] = useState(false);

  // 显示的新闻数量
  const displayItems = showAll ? newsItems : newsItems.slice(0, 10);

  // 格式化日期
  const formatDate = (dateString: string) => {
    // 直接解析 YYYY-MM-DD 格式，避免时区问题
    const [year, month, day] = dateString.split('-').map(Number);
    const date = new Date(year, month - 1, day); // month - 1 因为 JavaScript 月份从 0 开始
    return `[${date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    })}]`;
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Latest News
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Stay updated with our recent research achievements and lab activities
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <ul className="space-y-4">
            {displayItems.map((item) => (
              <li 
                key={item.slug} 
                className="flex items-start space-x-3"
              >
                {/* 黑色圆点标志 */}
                <div className="flex-shrink-0 w-2 h-2 bg-black rounded-full mt-2"></div>
                
                {/* 新闻内容 */}
                <div className="flex-1 min-w-0 flex items-start space-x-3">
                  <time 
                    dateTime={String(item.data.date || '')} 
                    className="text-sm font-medium text-black whitespace-nowrap flex-shrink-0"
                    style={{ color: '#000000' }}
                  >
                    {formatDate(String(item.data.date || ''))}
                  </time>
                  <span className="text-gray-400 flex-shrink-0">·</span>
                  <div 
                    className="text-gray-700 [&_a]:text-blue-600 [&_a]:underline [&_a:hover]:text-blue-800 [&_strong]:font-semibold [&_strong]:text-gray-900 flex-1 min-w-0"
                    dangerouslySetInnerHTML={{ 
                      __html: item.content 
                    }} 
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* 展开/收起按钮 */}
        {newsItems.length > 10 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors duration-200"
            >
              {showAll ? (
                <>
                  Show Less
                  <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                </>
              ) : (
                <>
                  Show More ({newsItems.length - 10} more)
                  <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
