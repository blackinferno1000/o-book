import Navbar from "./components/Navbar.js";
import Hero from "./components/Hero.js";
import Inside from "./components/Inside.js";
import Testimonial from "./components/Testimonial.js";
import About from "./components/About.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <main className="app min-vh-100">
      <Navbar />
      <Hero />
      <Inside />
      <Testimonial />
      <About />
      <Footer />
    </main>
  );
}

export default App;
