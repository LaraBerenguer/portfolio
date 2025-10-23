import './App.css'
import experience from "../src/data/mockProjects.json"
import data from "../src/data/data.json"
import Footer from './layout/Footer';
import Navbar from './layout/Navbar';
import MainButton from './components/ui/Button';
import Tab from './components/ui/Tab';
import Badge from './components/ui/Badge';
import ProjectCard from './components/ui/ProjectCard';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <section className="card" id='home'>
          Home
        </section>
        <section className="grid" id='projects'>
          Projects
          {data.projects.filter(project => project.category === "projects").map(
            data => <ProjectCard key={data.id} data={data} />
          )}
        </section>
        <section className="card" id='experience'>
          Experience
          {experience.map(
            tab => <Tab key={tab.id} tab={tab} activeTab={true} />
          )}

        </section>
        <section className="card" id='skills'>
          Skills
          {["typescript", "react", "Nodejs"].map(
            skill => <Badge key={skill} skill={skill} />
          )}
        </section>
        <MainButton>Hello</MainButton>
      </main>
      <Footer />
    </>
  )
};

export default App;
