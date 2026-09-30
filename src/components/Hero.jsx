import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => (
  <section id="about" className="w-full pt-40 pb-24 scroll-mt-24">
    <div className="max-w-6xl mx-auto px-6 lg:px-12">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
        {/* Left Side: Content */}
        <div className="max-w-2xl space-y-8">
          <div className="inline-block px-3 py-1 rounded-full bg-red-50 text-red-600 text-[10px] font-bold uppercase tracking-widest">
            Available for Summer 2026 Internships
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-slate-900 tracking-tight font-display">
            Raghul <span className="text-red-600">KB</span>
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
              className="text-slate-400 hover:text-red-600 transition-colors"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:raghulkb1507@gmail.com"
              className="text-slate-400 hover:text-red-500 transition-colors"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
