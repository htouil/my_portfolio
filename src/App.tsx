import NavBar from './components/NavBar';
import Profil from './components/Profil';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import CoolSeparator from './components/CoolSeparator';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <header className="h-24 sm:h-14">
        <NavBar />
      </header>
      <main className="mx-auto w-full max-w-400 overflow-hidden">
        <Profil />
        <CoolSeparator />
        <Skills />
        <CoolSeparator />
        <Projects />
        <CoolSeparator />
        <ContactMe />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
