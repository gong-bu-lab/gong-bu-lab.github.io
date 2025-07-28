export default function Misc() {
  const events = [
    {
      title: "Lab Retreat 2024",
      date: "March 2024",
      description: "Annual lab retreat in the mountains where we discuss research, share ideas, and enjoy outdoor activities.",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Holiday Party",
      date: "December 2023",
      description: "End-of-year celebration with food, games, and a white elephant gift exchange.",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Summer BBQ",
      date: "July 2023",
      description: "Outdoor barbecue with lab members and their families, featuring research presentations and networking.",
      image: "/api/placeholder/400/300"
    }
  ];

  const activities = [
    {
      title: "Coffee & Code",
      description: "Weekly informal meetings where lab members discuss ongoing projects over coffee.",
      icon: "☕"
    },
    {
      title: "Research Seminars",
      description: "Bi-weekly presentations where students and postdocs share their latest research findings.",
      icon: "📊"
    },
    {
      title: "Game Nights",
      description: "Monthly board game and video game sessions to foster team building and creativity.",
      icon: "🎮"
    },
    {
      title: "Hiking Trips",
      description: "Regular outdoor activities to explore local trails and enjoy nature together.",
      icon: "🏔️"
    },
    {
      title: "Reading Groups",
      description: "Discussion groups focused on recent papers and emerging topics in AI and ML.",
      icon: "📚"
    },
    {
      title: "Coding Competitions",
      description: "Friendly competitions to solve algorithmic challenges and improve programming skills.",
      icon: "💻"
    }
  ];

  const labValues = [
    {
      title: "Collaboration",
      description: "We believe in the power of teamwork and collaborative research to solve complex problems.",
      icon: "🤝"
    },
    {
      title: "Innovation",
      description: "We encourage creative thinking and novel approaches to research challenges.",
      icon: "💡"
    },
    {
      title: "Mentorship",
      description: "Senior members actively mentor junior researchers to help them grow and succeed.",
      icon: "🎓"
    },
    {
      title: "Work-Life Balance",
      description: "We promote a healthy balance between research productivity and personal well-being.",
      icon: "⚖️"
    },
    {
      title: "Diversity & Inclusion",
      description: "We celebrate diversity and create an inclusive environment for all lab members.",
      icon: "🌈"
    },
    {
      title: "Open Communication",
      description: "We maintain open lines of communication and encourage honest feedback.",
      icon: "💬"
    }
  ];

  const funFacts = [
    "Our lab has members from 8 different countries",
    "We've published papers in 15+ top-tier conferences and journals",
    "Lab members have won 10+ awards and fellowships",
    "We've organized 5+ workshops and tutorials at major conferences",
    "Our lab has collaborated with 20+ industry partners",
    "We've mentored 50+ undergraduate students in research"
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Lab Life & Culture
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
              Discover what makes the Gong Lab a vibrant and collaborative research community.
            </p>
          </div>
        </div>
      </div>

      {/* Lab Values */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {labValues.map((value, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-200">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lab Activities */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Lab Activities</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {activities.map((activity, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-200">
                <div className="text-3xl mb-4">{activity.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{activity.title}</h3>
                <p className="text-gray-600 text-sm">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Events */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Recent Events</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
                <div className="h-48 bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-600 font-medium">Event Photo</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{event.title}</h3>
                    <span className="text-sm text-gray-500">{event.date}</span>
                  </div>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fun Facts */}
      <div className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Fun Facts About Our Lab</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {funFacts.map((fact, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center">
                <p className="text-gray-900 font-medium">{fact}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lab Environment */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Lab Environment</h2>
              <p className="text-gray-600 mb-6">
                The Gong Lab is located in a modern research facility with state-of-the-art computing resources, 
                collaborative workspaces, and comfortable meeting areas. Our lab space is designed to foster 
                creativity, collaboration, and productivity.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  High-performance computing clusters
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Collaborative meeting spaces
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Quiet areas for focused work
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Coffee and snack areas
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Whiteboards and presentation equipment
                </li>
              </ul>
            </div>
            <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center">
              <span className="text-gray-600 font-medium">Lab Space Photo</span>
            </div>
          </div>
        </div>
      </div>

      {/* Join Our Community */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Join Our Research Community
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We're always looking for talented and motivated individuals who share our passion for 
              research and innovation. Join us in pushing the boundaries of artificial intelligence 
              and machine learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/people"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
              >
                Meet Our Team
              </a>
              <a
                href="mailto:wei.gong@university.edu"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Photo Gallery Placeholder */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Photo Gallery</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 8 }, (_, i) => (
              <div key={i} className="bg-gray-300 h-48 rounded-lg flex items-center justify-center">
                <span className="text-gray-600 font-medium">Photo {i + 1}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-600">
              More photos coming soon! Follow us on social media for regular updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 