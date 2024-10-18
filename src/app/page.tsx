import About from './components/About';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Speakers from './components/Speakers';
import Sponsors from './components/Sponsors';
import Tickets from './components/Tickets';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Tickets />
      <Speakers />
      <About />
      <Sponsors />
      <Faq />
      <Footer />
    </div>
  );
}
