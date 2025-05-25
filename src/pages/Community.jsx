import React from 'react';

function Community() {
  const discussions = [
    {
      title: "Career Transitions in Tech",
      author: "Sarah Johnson",
      replies: 24,
      tags: ["career", "technology"]
    },
    {
      title: "Work-Life Balance Tips",
      author: "Maria Garcia",
      replies: 18,
      tags: ["lifestyle", "wellness"]
    },
    {
      title: "Leadership Challenges",
      author: "Emma Wilson",
      replies: 32,
      tags: ["leadership", "career"]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-purple-800">Community Discussions</h1>
        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition">
          Start Discussion
        </button>
      </div>

      <div className="space-y-4">
        {discussions.map((discussion) => (
          <div key={discussion.title} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-purple-700 mb-2">{discussion.title}</h2>
            <div className="flex items-center text-gray-600 mb-3">
              <span>Posted by {discussion.author}</span>
              <span className="mx-2">•</span>
              <span>{discussion.replies} replies</span>
            </div>
            <div className="flex space-x-2">
              {discussion.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Community;