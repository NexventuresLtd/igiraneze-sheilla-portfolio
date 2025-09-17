import { useState, useEffect } from 'react';
import { RenderHome } from './comps/Homer';
import { RenderPortfolio } from './comps/Projects';
import { RenderTimeline } from './comps/Timeline';
import { RenderEssay } from './comps/essay';

import { RenderNavigation } from './comps/NavBar';
import { Footer } from './comps/Foter';
import { RenderEducation } from './comps/Education';
import { RenderAbout } from './comps/About';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Dark mode toggle
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeSection]);



  return (
    <div className={isDarkMode ? 'dark' : ''}>
      {<RenderNavigation setIsMenuOpen={setIsMenuOpen} isDarkMode={isDarkMode} setActiveSection={setActiveSection} isMenuOpen={isMenuOpen} setIsDarkMode={setIsDarkMode} activeSection={activeSection} />}

      <main>
        {activeSection === 'home' && <RenderHome isDarkMode={isDarkMode} setActiveSection={setActiveSection} />}
        {activeSection === 'resume' && "<RenderResume/>"}
        {activeSection === 'portfolio' && <RenderPortfolio isDarkMode={isDarkMode} />}
        {activeSection === 'timeline' && <RenderTimeline isDarkMode={isDarkMode} />}
        {activeSection === 'essay' && <RenderEssay isDarkMode={isDarkMode} />}
        {activeSection === 'education' && <RenderEducation isDarkMode={isDarkMode} />}
        {activeSection === 'about' && <RenderAbout isDarkMode={isDarkMode} />}

      </main>
      <Footer isDarkMode={isDarkMode} setActiveSection={setActiveSection} />
    </div>
  );
}

export default App