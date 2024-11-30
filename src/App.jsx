import Header from "./sections/header.jsx";
import Hero from "./sections/Hero.jsx";
import Features from "./sections/features.jsx";
import Pricing from "./sections/pricing.jsx";
import Testimonials from "./sections/testimonial.jsx";
import Faq from "./sections/faq.jsx";
import Download from "./sections/dounlode.jsx";
import Footer from "./sections/footer.jsx";

function App() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Faq />
      <Testimonials />
      <Download />
      <Footer />
    </main>
  );
}

export default App;
