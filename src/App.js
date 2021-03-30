import "./App.css";
import Nav from "./components/Nav/Nav";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Benefits from "./components/Benefits/Benefits";
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className='App'>
      <Nav />
      <Hero />
      <About />
      <Benefits />
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
