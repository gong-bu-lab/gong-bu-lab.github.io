import { getAllMarkdownFilesInDirectory, markdownToHtml } from '@/lib/markdown';
import Image from 'next/image';

export default async function People() {
  // Get people from different subdirectories
  const faculty = getAllMarkdownFilesInDirectory('people/pi');
  const graduate = getAllMarkdownFilesInDirectory('people/graduate');
  const visiting = getAllMarkdownFilesInDirectory('people/visiting');
  const undergraduate = getAllMarkdownFilesInDirectory('people/undergraduate');
  const alumni = getAllMarkdownFilesInDirectory('people/alumni');

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
                <div key={index}>
                  {member.data.website ? (
                    <a 
                      href={member.data.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer"
                    >
                      <div className="p-6">
                        <div className="flex items-center space-x-8">
                          <div className="flex-shrink-0">
                            {member.data.image && member.data.image !== "/api/placeholder/300/300" ? (
                              <div className="w-48 h-48 rounded-full overflow-hidden">
                                <Image
                                  src={member.data.image}
                                  alt={member.data.name}
                                  width={192}
                                  height={192}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            ) : (
                              <div className="w-48 h-48 bg-gray-300 rounded-full flex items-center justify-center">
                                <span className="text-4xl font-bold text-gray-600">
                                  {member.data.name.split(' ').map((n: string) => n[0]).join('')}
                                </span>
                              </div>
                            )}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-gray-900">{member.data.name}</h3>
                            <p className="text-base text-red-600 font-medium">{member.data.title}</p>
                            {member.data.date && (
                              <p className="text-gray-600 mt-1 text-sm">{member.data.date}</p>
                            )}
                            <p className="text-red-600 hover:text-red-800 mt-1 text-sm">
                              {member.data.email}
                            </p>
                          </div>
                        </div>
                        <div className="mt-4 text-gray-700 prose prose-sm max-w-none text-sm">
                          <div dangerouslySetInnerHTML={{ __html: member.content }} />
                        </div>
                      </div>
                    </a>
                  ) : (
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                      <div className="p-6">
                        <div className="flex items-center space-x-8">
                          <div className="flex-shrink-0">
                            {member.data.image && member.data.image !== "/api/placeholder/300/300" ? (
                              <div className="w-48 h-48 rounded-full overflow-hidden">
                                <Image
                                  src={member.data.image}
                                  alt={member.data.name}
                                  width={192}
                                  height={192}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            ) : (
                              <div className="w-48 h-48 bg-gray-300 rounded-full flex items-center justify-center">
                                <span className="text-4xl font-bold text-gray-600">
                                  {member.data.name.split(' ').map((n: string) => n[0]).join('')}
                                </span>
                              </div>
                            )}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-gray-900">{member.data.name}</h3>
                            <p className="text-base text-red-600 font-medium">{member.data.title}</p>
                            {member.data.date && (
                              <p className="text-gray-600 mt-1 text-sm">{member.data.date}</p>
                            )}
                            <a href={`mailto:${member.data.email}`} className="text-red-600 hover:text-red-800 mt-1 inline-block text-sm">
                              {member.data.email}
                            </a>
                          </div>
                        </div>
                        <div className="mt-4 text-gray-700 prose prose-sm max-w-none text-sm">
                          <div dangerouslySetInnerHTML={{ __html: member.content }} />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Postdocs */}
      {/* {postdocs.length > 0 && (
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-12">Postdoctoral Researchers</h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {postdocs.map((member, index) => (
                <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                  <div className="p-6">
                    <div className="text-center">
                      {member.data.image && member.data.image !== "/api/placeholder/300/300" ? (
                        <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4">
                          <Image
                            src={member.data.image}
                            alt={member.data.name}
                            width={80}
                            height={80}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-xl font-bold text-gray-600">
                            {member.data.name.split(' ').map((n: string) => n[0]).join('')}
                          </span>
                        </div>
                      )}
                      <h3 className="text-xl font-bold text-gray-900">{member.data.name}</h3>
                      <p className="text-red-600 font-medium">{member.data.title}</p>
                      <p className="text-gray-600 mt-2 text-sm">{member.data.research}</p>
                      <a href={`mailto:${member.data.email}`} className="text-red-600 hover:text-red-800 mt-2 inline-block text-sm">
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
      )} */}

      {/* Graduate Students */}
      {graduate.length > 0 && (
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-12">Graduate Students</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {graduate.map((member, index) => (
                <div key={index}>
                  {member.data.website ? (
                    <a 
                      href={member.data.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl hover:scale-[1.05] transition-all duration-300 cursor-pointer"
                    >
                      <div className="p-4">
                        <div className="text-center">
                          {member.data.image && member.data.image !== "/api/placeholder/300/300" ? (
                            <div className="w-36 h-36 rounded-full overflow-hidden mx-auto mb-3">
                              <Image
                                src={member.data.image}
                                alt={member.data.name}
                                width={144}
                                height={144}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          ) : (
                            <div className="w-36 h-36 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-3">
                              <span className="text-2xl font-bold text-gray-600">
                                {member.data.name.split(' ').map((n: string) => n[0]).join('')}
                              </span>
                            </div>
                          )}
                          <h3 className="text-lg font-bold text-gray-900">{member.data.name}</h3>
                          <p className="text-red-600 font-medium text-sm">{member.data.title}</p>
                          {member.data.date && (
                            <p className="text-gray-600 mt-1 text-xs">{member.data.date}</p>
                          )}
                          <p className="text-red-600 hover:text-red-800 mt-1 text-xs">
                            {member.data.email}
                          </p>
                        </div>
                        <div className="mt-3 text-gray-700 text-xs prose prose-sm max-w-none">
                          <div dangerouslySetInnerHTML={{ __html: member.content }} />
                        </div>
                      </div>
                    </a>
                  ) : (
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                      <div className="p-4">
                        <div className="text-center">
                          {member.data.image && member.data.image !== "/api/placeholder/300/300" ? (
                            <div className="w-36 h-36 rounded-full overflow-hidden mx-auto mb-3">
                              <Image
                                src={member.data.image}
                                alt={member.data.name}
                                width={144}
                                height={144}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          ) : (
                            <div className="w-36 h-36 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-3">
                              <span className="text-2xl font-bold text-gray-600">
                                {member.data.name.split(' ').map((n: string) => n[0]).join('')}
                              </span>
                            </div>
                          )}
                          <h3 className="text-lg font-bold text-gray-900">{member.data.name}</h3>
                          <p className="text-red-600 font-medium text-sm">{member.data.title}</p>
                          {member.data.date && (
                            <p className="text-gray-600 mt-1 text-xs">{member.data.date}</p>
                          )}
                          <a href={`mailto:${member.data.email}`} className="text-red-600 hover:text-red-800 mt-1 inline-block text-xs">
                            {member.data.email}
                          </a>
                        </div>
                        <div className="mt-3 text-gray-700 text-xs prose prose-sm max-w-none">
                          <div dangerouslySetInnerHTML={{ __html: member.content }} />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Visiting Students */}
      {visiting.length > 0 && (
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-12">Visiting Students</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {visiting.map((member, index) => (
                <div key={index}>
                  {member.data.website ? (
                    <a 
                      href={member.data.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl hover:scale-[1.05] transition-all duration-300 cursor-pointer"
                    >
                      <div className="p-4">
                        <div className="text-center">
                          {member.data.image && member.data.image !== "/api/placeholder/300/300" ? (
                            <div className="w-36 h-36 rounded-full overflow-hidden mx-auto mb-3">
                              <Image
                                src={member.data.image}
                                alt={member.data.name}
                                width={144}
                                height={144}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          ) : (
                            <div className="w-36 h-36 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-3">
                              <span className="text-2xl font-bold text-gray-600">
                                {member.data.name.split(' ').map((n: string) => n[0]).join('')}
                              </span>
                            </div>
                          )}
                          <h3 className="text-lg font-bold text-gray-900">{member.data.name}</h3>
                          <p className="text-red-600 font-medium text-sm">{member.data.title}</p>
                          {member.data.date && (
                            <p className="text-gray-600 mt-1 text-xs">{member.data.date}</p>
                          )}
                          <p className="text-red-600 hover:text-red-800 mt-1 text-xs">
                            {member.data.email}
                          </p>
                        </div>
                        <div className="mt-3 text-gray-700 text-xs prose prose-sm max-w-none">
                          <div dangerouslySetInnerHTML={{ __html: member.content }} />
                        </div>
                      </div>
                    </a>
                  ) : (
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                      <div className="p-4">
                        <div className="text-center">
                          {member.data.image && member.data.image !== "/api/placeholder/300/300" ? (
                            <div className="w-36 h-36 rounded-full overflow-hidden mx-auto mb-3">
                              <Image
                                src={member.data.image}
                                alt={member.data.name}
                                width={144}
                                height={144}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          ) : (
                            <div className="w-36 h-36 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-3">
                              <span className="text-2xl font-bold text-gray-600">
                                {member.data.name.split(' ').map((n: string) => n[0]).join('')}
                              </span>
                            </div>
                          )}
                          <h3 className="text-lg font-bold text-gray-900">{member.data.name}</h3>
                          <p className="text-red-600 font-medium text-sm">{member.data.title}</p>
                          {member.data.date && (
                            <p className="text-gray-600 mt-1 text-xs">{member.data.date}</p>
                          )}
                          <a href={`mailto:${member.data.email}`} className="text-red-600 hover:text-red-800 mt-1 inline-block text-xs">
                            {member.data.email}
                          </a>
                        </div>
                        <div className="mt-3 text-gray-700 text-xs prose prose-sm max-w-none">
                          <div dangerouslySetInnerHTML={{ __html: member.content }} />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Undergraduate Students */}
      {undergraduate.length > 0 && (
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-12">Undergraduate Researchers</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {undergraduate.map((member, index) => (
                <div key={index}>
                  {member.data.website ? (
                    <a 
                      href={member.data.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl hover:scale-[1.05] transition-all duration-300 cursor-pointer"
                    >
                      <div className="p-4">
                        <div className="text-center">
                          {member.data.image && member.data.image !== "/api/placeholder/300/300" ? (
                            <div className="w-36 h-36 rounded-full overflow-hidden mx-auto mb-3">
                              <Image
                                src={member.data.image}
                                alt={member.data.name}
                                width={144}
                                height={144}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          ) : (
                            <div className="w-36 h-36 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-3">
                              <span className="text-2xl font-bold text-gray-600">
                                {member.data.name.split(' ').map((n: string) => n[0]).join('')}
                              </span>
                            </div>
                          )}
                          <h3 className="text-lg font-bold text-gray-900">{member.data.name}</h3>
                          <p className="text-red-600 font-medium text-sm">{member.data.title}</p>
                          {member.data.date && (
                            <p className="text-gray-600 mt-1 text-xs">{member.data.date}</p>
                          )}
                          <p className="text-red-600 hover:text-red-800 mt-1 text-xs">
                            {member.data.email}
                          </p>
                        </div>
                        <div className="mt-3 text-gray-700 text-xs prose prose-sm max-w-none">
                          <div dangerouslySetInnerHTML={{ __html: member.content }} />
                        </div>
                      </div>
                    </a>
                  ) : (
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                      <div className="p-4">
                        <div className="text-center">
                          {member.data.image && member.data.image !== "/api/placeholder/300/300" ? (
                            <div className="w-36 h-36 rounded-full overflow-hidden mx-auto mb-3">
                              <Image
                                src={member.data.image}
                                alt={member.data.name}
                                width={144}
                                height={144}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          ) : (
                            <div className="w-36 h-36 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-3">
                              <span className="text-2xl font-bold text-gray-600">
                                {member.data.name.split(' ').map((n: string) => n[0]).join('')}
                              </span>
                            </div>
                          )}
                          <h3 className="text-lg font-bold text-gray-900">{member.data.name}</h3>
                          <p className="text-red-600 font-medium text-sm">{member.data.title}</p>
                          {member.data.date && (
                            <p className="text-gray-600 mt-1 text-xs">{member.data.date}</p>
                          )}
                          <a href={`mailto:${member.data.email}`} className="text-red-600 hover:text-red-800 mt-1 inline-block text-xs">
                            {member.data.email}
                          </a>
                        </div>
                        <div className="mt-3 text-gray-700 text-xs prose prose-sm max-w-none">
                          <div dangerouslySetInnerHTML={{ __html: member.content }} />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Alumni */}
      {alumni.length > 0 && (
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-12">Alumni</h2>
            <div className="space-y-3">
              {alumni.map((member, index) => (
                <div key={index} className="text-sm">
                  {member.data.website ? (
                    <a 
                      href={member.data.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-red-600 hover:text-red-800 transition-colors duration-200"
                    >
                      {member.data.name}
                    </a>
                  ) : (
                    <span className="font-semibold text-gray-900">
                      {member.data.name}
                    </span>
                  )}
                  <span className="text-gray-600"> ({member.data.date}) - </span>
                  <span className="text-gray-700">{member.data.nowAt}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 