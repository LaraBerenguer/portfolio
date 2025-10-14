import './App.css'
import experience from "../src/data/mockExperience.json"
import Footer from './layout/Footer';
import Navbar from './layout/Navbar';
import MainButton from './components/ui/Button';
import Tab from './components/ui/Tab';
import Badge from './components/ui/Badge';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <section className="card" id='home'>
          Home
        </section>
        <section className="card" id='projects'>
          Projects
        </section>
        <section className="card" id='experience'>
          Experience
          {experience.map(
            tab => <Tab tab={tab} activeTab={true} />
          )}

        </section>
        <section className="card" id='skills'>
          Skills
          {["typescript", "react", "Nodejs"].map(
            skill => <Badge skill={skill}/>
          )}
        </section>
        <MainButton>Hello</MainButton>
      </main>
      <Footer />
    </>
  )
};

export default App;
