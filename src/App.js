import "./App.css";
import Nav from "./components/Nav/Nav";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Benefits from "./components/Benefits/Benefits";

function App() {
  return (
    <div className='App'>
      <Nav />
      <Hero />
      <About />
      <Benefits />
    </div>
  );
}

export default App;
