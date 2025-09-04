import NewsSection from "./components/NewsSection";
import { getAllMarkdownFilesInDirectory, markdownToHtml } from '@/lib/markdown';

export default async function Home() {
  // 获取新闻数据并转换为 HTML
  const newsFiles = getAllMarkdownFilesInDirectory('news');
  const newsItems = await Promise.all(
    newsFiles.map(async (item) => ({
      ...item,
      content: await markdownToHtml(item.content)
    }))
  );
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[40rem] w-full overflow-hidden">
        {/* 背景图片 */}
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/bostonu.png)'
          }}
        >
          {/* 渐变蒙版层 */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/30 to-black/50"></div> 
          
          {/* Lab 标题 */}
          <div className="relative h-full flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-lg">
                Gong Lab
              </h1>
              <p className="mt-4 text-xl text-white drop-shadow-md sm:text-2xl">
                Boston University
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Research Overview Section */}
      <div id="research" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Research Overview
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
              Our lab focuses on cutting-edge research in computer vision, machine learning, and foundational AI models.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Research Area 1 */}
            <div className="bg-white overflow-hidden shadow-lg rounded-lg">
              <div className="p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-red-500 rounded-md flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Machine Learning</h3>
                  </div>
                </div>
                <p className="mt-4 text-gray-600">
                  Developing novel algorithms and architectures for deep learning, machine unlearning, and neural network optimization.
                </p>
              </div>
            </div>

            {/* Research Area 2 */}
            <div className="bg-white overflow-hidden shadow-lg rounded-lg">
              <div className="p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Computer Vision</h3>
                  </div>
                </div>
                <p className="mt-4 text-gray-600">
                  Exploring computer vision problems in advanced foundation models, including image generation and vision language understanding.
                </p>
              </div>
            </div>

            {/* Research Area 3 */}
            <div className="bg-white overflow-hidden shadow-lg rounded-lg">
              <div className="p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-purple-500 rounded-md flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Foundational AI</h3>
                  </div>
                </div>
                <p className="mt-4 text-gray-600">
                  Aligning foundational models with human developmental research to build more powerful AI systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* News Section */}
      <NewsSection newsItems={newsItems} />

      {/* Lab Stats Section */}
      {/* <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="text-3xl font-extrabold text-red-600">15+</div>
              <div className="mt-2 text-sm font-medium text-gray-600">Lab Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-extrabold text-green-600">50+</div>
              <div className="mt-2 text-sm font-medium text-gray-600">Publications</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-extrabold text-purple-600">10+</div>
              <div className="mt-2 text-sm font-medium text-gray-600">Research Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-extrabold text-orange-600">5+</div>
              <div className="mt-2 text-sm font-medium text-gray-600">Years of Research</div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Call to Action */}
      {/* <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Ready to join our research?</span>
            <span className="block text-red-600">Get in touch with us today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="/people"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors duration-200"
              >
                Meet Our Team
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="/publications"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-red-600 bg-white hover:bg-gray-50 transition-colors duration-200"
              >
                View Publications
              </a>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
