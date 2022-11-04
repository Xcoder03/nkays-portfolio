
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import HeroSection from './Components/HeroSection';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Services from './Components/Services';
import Skills from './Components/Skills';
import './Styles/app.css';



function App() {
  return (
    <div className="App">
     <Navbar />
     <HeroSection />
     <About />
     <Skills />
     <h2 className="h22">What I offer.</h2>
    <Services />
    <h2 className="h2">My Projects</h2>
   <Projects />
   <Contact />
   <Footer />
    </div>
  );
}

export default App;
