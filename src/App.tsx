import './App.css'
import Navbar from './layout/Navbar';

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
        <button className='px-4 py-2 border-1 rounded-lg border-primary hover:text-primary hover:border-primary-dark focus:border-gold transition-all'>
          Hellooo
        </button>
      </main>
    </>
  )
};

export default App;
