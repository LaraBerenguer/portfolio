import './App.css'
import Footer from './layout/Footer';
import Navbar from './layout/Navbar';
import MainButton from './components/ui/Button';
import ProjectsSection from './pages/ProjectsSection';
import ExperienceSection from './pages/ExperienceSection';
import SkillsSection from './pages/SkillsSection';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="card" id='home'>
          Home
        </section>
        <section className="grid" id='experience'>
          <ExperienceSection />
        </section>
        <section className="card" id='projects'>
          <ProjectsSection />
        </section>
        <section className="card" id='skills'>          
          <SkillsSection />
        </section>
        <MainButton>Hello</MainButton>
      </main>
      <Footer />
    </div>
  )
};

export default App;
