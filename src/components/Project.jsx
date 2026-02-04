import networkTrafficDoc from "../../assets/Network_Traffic_Analysis.pdf";
import semanticModelDoc from "../../assets/Interoperabe_Semantic_Model.pdf";

const projectList = [
  {
    title: "Full-Stack Therapy Booking Platform",
    period: "Nov 2025 – Jan 2026",
    desc: "Developed a MERN stack application with PostgreSQL and RBAC. Implemented Google OAuth 2.0 and automated scheduling via Google Calendar & Meet APIs.",
    tags: ["React", "Node.js", "PostgreSQL", "OAuth 2.0"],
    link: "https://ryyderbros-wellness.vercel.app/",
  },
  {
    title: "Responsive React Real Estate Web Page",
    period: "May 2025 – Jun 2025",
    desc: "Built a modern, fully responsive real estate platform using React, focusing on high-performance UI components and seamless navigation.",
    tags: ["React", "Tailwind CSS", "Responsive Design"],
    link: "https://kbraghul.github.io/ryyderbros-realestate/",
  },
  {
    title: "Interoperable Semantic Model for Solar Polyhouse",
    period: "Aug 2022 – May 2023",
    desc: "Created a Knowledge Graph using BOT and FoodOn ontologies to enable data harmonization across agricultural IoT sensors.",
    tags: ["Semantic Web", "SPARQL", "Ontologies", "IoT"],
    link: semanticModelDoc,
  },
  {
    title: "Credit Card Fraud Detection System",
    period: "Aug 2022 – May 2023",
    desc: "Developed an ML pipeline handling 280,000+ transactions. Applied SMOTE and compared XGBoost and Random Forest models for high precision.",
    tags: ["Python", "Machine Learning", "Scikit-Learn", "TensorFlow"],
    link: "#",
  },
  {
    title: "Network Traffic Analysis",
    period: "Jan 2022 – May 2022",
    desc: "Implemented a socket-based Python application for reliable UDP transfer. Optimized network throughput and latency by 15% using Wireshark analysis.",
    tags: ["Python", "Networking", "Wireshark", "Socket Programming"],
    link: networkTrafficDoc,
  },
  {
    title: "Named Entity Recognition (NER)",
    period: "Jan 2022 – May 2022",
    desc: "Designed an NER system using CRF to process 29,500+ research articles from the CORD-19 dataset, achieving 93% accuracy.",
    tags: ["NLP", "Python", "CRF", "Data Science"],
    link: "#",
  },
];

const Projects = () => (
  <section id="projects" className="w-full py-32 scroll-mt-24">
    <div className="max-w-6xl mx-auto px-6 lg:px-12">
      <h2 className="text-sm font-black mb-20 text-blue-600 uppercase tracking-[0.3em]">
        Technical Projects & Research
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {projectList.map((p, i) => (
          <div
            key={i}
            className="group border-b border-slate-100 pb-12 last:border-0 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
                  {p.title}
                </h3>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pt-1 shrink-0 ml-4">
                  {p.period}
                </span>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {p.desc}
              </p>
            </div>
            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-slate-100 text-slate-500 text-[9px] font-black uppercase rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {p.link && p.link !== "#" ? (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-black uppercase tracking-widest text-slate-900 hover:text-red-600 transition-colors"
                >
                  View Project →
                </a>
              ) : (
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                  Private or In Progress
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
