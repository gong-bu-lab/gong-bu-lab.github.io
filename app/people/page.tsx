import { getAllMarkdownFilesInDirectory, markdownToHtml } from '@/lib/markdown';

export default async function People() {
  const peopleFiles = getAllMarkdownFilesInDirectory('people');
  
  // Group people by category
  const faculty = peopleFiles.filter(p => p.data.category === 'faculty');
  const postdocs = peopleFiles.filter(p => p.data.category === 'postdoc');
  const graduate = peopleFiles.filter(p => p.data.category === 'graduate');
  const undergraduate = peopleFiles.filter(p => p.data.category === 'undergraduate');

  const alumni = [
    {
      name: "Dr. Jennifer Lee",
      title: "Former Ph.D. Student",
      current: "Research Scientist at Google",
      year: "2023"
    },
    {
      name: "Dr. Robert Brown",
      title: "Former Postdoc",
      current: "Assistant Professor at Stanford",
      year: "2022"
    },
    {
      name: "Dr. Amanda Davis",
      title: "Former Ph.D. Student",
      current: "Machine Learning Engineer at Microsoft",
      year: "2022"
    }
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Our Team
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
              Meet the talented researchers and students who make the Gong Lab a hub of innovation and discovery.
            </p>
          </div>
        </div>
      </div>

      {/* Faculty */}
      {faculty.length > 0 && (
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-12">Faculty</h2>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {faculty.map((member, index) => (
                <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                  <div className="p-8">
                    <div className="flex items-center space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center">
                          <span className="text-2xl font-bold text-gray-600">
                            {member.data.name.split(' ').map((n: string) => n[0]).join('')}
                          </span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900">{member.data.name}</h3>
                        <p className="text-lg text-blue-600 font-medium">{member.data.title}</p>
                        <p className="text-gray-600 mt-2">{member.data.research}</p>
                        <a href={`mailto:${member.data.email}`} className="text-blue-600 hover:text-blue-800 mt-2 inline-block">
                          {member.data.email}
                        </a>
                      </div>
                    </div>
                    <div className="mt-6 text-gray-700 prose prose-sm max-w-none">
                      <div dangerouslySetInnerHTML={{ __html: member.content }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Postdocs */}
      {postdocs.length > 0 && (
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-12">Postdoctoral Researchers</h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {postdocs.map((member, index) => (
                <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                  <div className="p-6">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-xl font-bold text-gray-600">
                          {member.data.name.split(' ').map((n: string) => n[0]).join('')}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{member.data.name}</h3>
                      <p className="text-blue-600 font-medium">{member.data.title}</p>
                      <p className="text-gray-600 mt-2 text-sm">{member.data.research}</p>
                      <a href={`mailto:${member.data.email}`} className="text-blue-600 hover:text-blue-800 mt-2 inline-block text-sm">
                        {member.data.email}
                      </a>
                    </div>
                    <div className="mt-4 text-gray-700 text-sm prose prose-sm max-w-none">
                      <div dangerouslySetInnerHTML={{ __html: member.content }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Graduate Students */}
      {graduate.length > 0 && (
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-12">Graduate Students</h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {graduate.map((member, index) => (
                <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                  <div className="p-6">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-xl font-bold text-gray-600">
                          {member.data.name.split(' ').map((n: string) => n[0]).join('')}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{member.data.name}</h3>
                      <p className="text-blue-600 font-medium">{member.data.title}</p>
                      <p className="text-gray-600 mt-2 text-sm">{member.data.research}</p>
                      <a href={`mailto:${member.data.email}`} className="text-blue-600 hover:text-blue-800 mt-2 inline-block text-sm">
                        {member.data.email}
                      </a>
                    </div>
                    <div className="mt-4 text-gray-700 text-sm prose prose-sm max-w-none">
                      <div dangerouslySetInnerHTML={{ __html: member.content }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Undergraduate Students */}
      {undergraduate.length > 0 && (
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-12">Undergraduate Researchers</h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {undergraduate.map((member, index) => (
                <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                  <div className="p-6">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-xl font-bold text-gray-600">
                          {member.data.name.split(' ').map((n: string) => n[0]).join('')}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{member.data.name}</h3>
                      <p className="text-blue-600 font-medium">{member.data.title}</p>
                      <p className="text-gray-600 mt-2 text-sm">{member.data.research}</p>
                      <a href={`mailto:${member.data.email}`} className="text-blue-600 hover:text-blue-800 mt-2 inline-block text-sm">
                        {member.data.email}
                      </a>
                    </div>
                    <div className="mt-4 text-gray-700 text-sm prose prose-sm max-w-none">
                      <div dangerouslySetInnerHTML={{ __html: member.content }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Alumni */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-12">Alumni</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {alumni.map((member, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="p-6">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                    <p className="text-blue-600 font-medium">{member.title}</p>
                    <p className="text-gray-600 mt-2 text-sm">{member.current}</p>
                    <p className="text-gray-500 mt-1 text-sm">Graduated: {member.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Join Us Section */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Interested in joining our lab?
            </h2>
            <p className="mt-4 text-xl text-blue-100">
              We're always looking for talented researchers and students to join our team.
            </p>
            <div className="mt-8">
              <a
                href="mailto:wei.gong@university.edu"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-colors duration-200"
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