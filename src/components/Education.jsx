const education = [
  {
    degree: "Master of Science in Computer Science",
    school: "University of Alabama at Birmingham",
    year: "Expected Dec 2026",
    desc: "Focused on advanced software engineering and system architecture.",
  },
  {
    degree: "B.Tech in Computer Science and Engineering",
    school: "Amrita Viswa Vidyapeetham, India",
    year: "May 2023",
    desc: "Foundational studies in software engineering and NLP research.",
  },
];

const Education = () => (
  <section id="education" className="w-full py-24 bg-white">
    <div className="max-w-6xl mx-auto px-6 lg:px-12">
      <h2 className="text-sm font-black mb-12 text-blue-600 uppercase tracking-[0.3em]">
        Education
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {education.map((edu, i) => (
          <div key={i} className="space-y-3">
            <h3 className="text-xl font-bold text-slate-900">{edu.degree}</h3>
            <p className="text-blue-600 font-semibold">{edu.school}</p>
            <p className="text-slate-400 text-sm font-bold">{edu.year}</p>
            <p className="text-slate-600 leading-relaxed text-sm">{edu.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
