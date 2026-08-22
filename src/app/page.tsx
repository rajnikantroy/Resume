import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Certifications from '@/components/Certifications';
import Companies from '@/components/Companies';
import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';
import BackToTop from '@/components/ui/BackToTop';
import MotionProvider from '@/components/ui/MotionProvider';

export default function Home() {
  return (
    <MotionProvider>
      <div
        id="top"
        className="min-h-screen bg-white text-gray-900 selection:bg-blue-500 selection:text-white"
      >
        {/* Keyboard users land here first and can jump past the navigation. */}
        <a
          href="#about"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-gray-900 focus:text-white focus:text-sm focus:font-semibold"
        >
          Skip to content
        </a>

        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Certifications />
          <Companies />
          <Achievements />
          <Contact />
        </main>
        <BackToTop />
      </div>
    </MotionProvider>
  );
}
