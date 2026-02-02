import React from "react";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

const Hero = () => (
  <section id="about" className="w-full pt-40 pb-24 bg-white">
    <div className="max-w-6xl mx-auto px-6 lg:px-12">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
        {/* Left Side: Content */}
        <div className="max-w-2xl space-y-8">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-widest">
            Available for Summer 2026 Internships
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-slate-900 tracking-tighter">
            Raghul <span className="text-blue-600">KB</span>
          </h1>

          <p className="text-base md:text-lg text-slate-600 leading-relaxed">
            Full-Stack Software Engineer and MS in Computer Science student at
            the University of Alabama at Birmingham (UAB), specializing in the
            architecture of scalable, interoperable systems. I bring a unique
            dual perspective to engineering, with a professional background
            spanning high-traffic application development and enterprise-grade
            quality assurance at Cimpress India.
          </p>

          <div className="flex gap-8 pt-4">
            <a
              href="https://github.com/kbraghul"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-black transition-colors"
            >
              <Github size={28} />
            </a>
            <a
              href="https://linkedin.com/in/raghulkb"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-600 transition-colors"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:raghulkb@uab.edu"
              className="text-slate-400 hover:text-red-500 transition-colors"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>

        {/* Right Side: Huge Resume Button */}
        <div className="w-full lg:w-auto">
          <a
            href="/path-to-your-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center gap-4 p-12 md:p-16 border-4 border-dashed border-slate-200 rounded-3xl hover:border-blue-600 hover:bg-blue-50 transition-all duration-300"
          >
            <div className="p-6 bg-blue-600 rounded-2xl text-white shadow-xl group-hover:scale-110 transition-transform">
              <FileText size={48} />
            </div>
            <div className="text-center">
              <span className="block text-2xl font-black text-slate-900 uppercase tracking-tighter">
                View Full Resume
              </span>
              <span className="text-sm font-bold text-slate-400 uppercase tracking-widest group-hover:text-blue-600 transition-colors">
                PDF Format
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
