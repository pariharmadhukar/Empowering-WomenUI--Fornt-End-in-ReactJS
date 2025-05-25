import React from 'react';

function Resources() {
  const resources = [
    {
      category: "Career Development",
      items: [
        { title: "Resume Writing Guide", type: "PDF" },
        { title: "Interview Preparation", type: "Video" },
        { title: "Negotiation Skills", type: "Workshop" }
      ]
    },
    {
      category: "Personal Growth",
      items: [
        { title: "Leadership Skills", type: "Course" },
        { title: "Work-Life Balance", type: "Article" },
        { title: "Stress Management", type: "Workshop" }
      ]
    },
    {
      category: "Financial Literacy",
      items: [
        { title: "Investment Basics", type: "Guide" },
        { title: "Budgeting 101", type: "Tool" },
        { title: "Financial Planning", type: "Webinar" }
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-purple-800 mb-8">Resources</h1>
      
      <div className="space-y-8">
        {resources.map((section) => (
          <div key={section.category} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-purple-700 mb-4">{section.category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {section.items.map((item) => (
                <div
                  key={item.title}
                  className="p-4 border border-purple-200 rounded-lg hover:border-purple-400 transition"
                >
                  <h3 className="font-medium text-purple-600">{item.title}</h3>
                  <span className="text-sm text-gray-500">{item.type}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Resources;