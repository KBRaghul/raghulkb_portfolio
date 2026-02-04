import React from "react";

const skillGroups = [
  {
    category: "Languages",
    items: ["Python", "JavaScript", "C#", "C", "SQL", "HTML", "CSS"],
  },
  {
    category: "Frameworks & Backend",
    items: [
      ".NET Core",
      "ASP.NET MVC",
      "ReactJS",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      "AWS (EC2, S3, DynamoDB, CodeBuild)",
      "Jenkins",
      "Octopus Deploy",
      "Git",
      "Github",
      "Bitbucket",
      "JIRA",
    ],
  },
  {
    category: "QA & Observability",
    items: [
      "Selenium",
      "Manual Testing",
      "Postman",
      "Swagger",
      "JMeter",
      "Kibana",
      "New Relic",
    ],
  },
  {
    category: "Methodologies",
    items: ["Agile", "Scrum", "Kanban"],
  },
];

const Skills = () => (
  <section id="skills" className="w-full py-32 bg-slate-50 scroll-mt-24">
    <div className="max-w-6xl mx-auto px-6 lg:px-12">
      <h2 className="text-sm font-black mb-20 text-blue-600 uppercase tracking-[0.3em]">
        Technical Toolkit
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {skillGroups.map((group, i) => (
          <div key={i} className="space-y-6">
            <h3 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-4">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-white border border-slate-100 rounded text-xs font-bold text-slate-600 shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
