import './App.css'
import Footer from './layout/Footer';
import Navbar from './layout/Navbar';
import MainButton from './components/ui/Button';

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
        </section>
        <section className="card" id='skills'>
          Skills
        </section>
        <MainButton>Hello</MainButton>
      </main>
      <Footer />
    </>
  )
};

export default App;
