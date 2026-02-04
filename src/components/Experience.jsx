import React from "react";

const jobs = [
  {
    role: "Application Developer",
    company: "Cimpress India (BuildASign)",
    location: "Bengaluru, India",
    date: "Jan 2024 – Nov 2024",
    points: [
      "Engineered responsive UI components and optimized the EasyCanvasPrints homepage for a platform with 25M+ lifetime orders.",
      "Architected full-stack optimizations across multiple brands, improving Core Web Vitals and reducing page load time by 25%.",
      "Refined data ingestion pipelines by modifying Segment API integrations and DynamoDB schemas to track complex customer behavior.",
    ],
  },
  {
    role: "QA Engineer",
    company: "Cimpress India (BuildASign)",
    location: "Bengaluru, India",
    date: "Aug 2023 – Jan 2024",
    points: [
      "Automated ecommerce workflows using Java Selenium, validating RabbitMQ messaging and analyzing Core Web Vitals with DebugBear.",
      "Performed API testing of Shipping and Order Tracking RESTful APIs using Swagger and Postman to improve workflow reliability.",
      "Supported CI/CD deployments and resolved AWS production issues using Kibana logs to maintain 99.9% uptime.",
    ],
  },
  {
    role: "QA Engineer Intern",
    company: "Cimpress India (BuildASign)",
    location: "Bengaluru, India",
    date: "Feb 2023 – Aug 2023",
    points: [
      "Gained end-to-end understanding of ecommerce systems, from landing pages to complex order lifecycles and plugin integrations.",
      "Authored detailed test cases and feature documentation, significantly improving regression coverage and overall product reliability.",
    ],
  },
];

const Experience = () => (
  <section id="work" className="w-full bg-slate-50 py-32 scroll-mt-24">
    <div className="max-w-6xl mx-auto px-6 lg:px-12">
      <h2 className="text-sm font-black mb-20 text-blue-600 uppercase tracking-[0.3em]">
        Professional Experience
      </h2>
      <div className="space-y-24">
        {jobs.map((job, i) => (
          <div
            key={i}
            className="relative flex flex-col md:flex-row gap-8 md:gap-20"
          >
            {/* Left Column: Role & Date */}
            <div className="md:w-1/3">
              <div className="flex items-start gap-4">
                <div className="relative mt-2 flex flex-col items-center">
                  <span className="h-3 w-3 rounded-full bg-red-600 ring-4 ring-red-100"></span>
                  {i !== jobs.length - 1 && (
                    <span className="mt-3 h-full w-px bg-slate-200"></span>
                  )}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 leading-tight">
                    {job.role}
                  </h3>
                  <p className="text-slate-400 font-bold text-xs mt-2 uppercase tracking-widest">
                    {job.date}
                  </p>
                  <p className="text-slate-400 text-xs font-medium mt-1 uppercase italic">
                    {job.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Detailed Description */}
            <div className="md:w-2/3 border-l-2 border-slate-200 pl-10">
              <p className="text-blue-600 font-bold text-lg mb-6">
                {job.company}
              </p>
              <ul className="space-y-4 list-none">
                {job.points.map((point, idx) => (
                  <li
                    key={idx}
                    className="text-slate-600 leading-relaxed text-lg relative pl-6"
                  >
                    <span className="absolute left-0 text-blue-400">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
