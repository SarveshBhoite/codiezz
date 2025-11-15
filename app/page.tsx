// import Header from '@/components/header';
import Benefits from '../components/Benefits';
import Clients from '../components/Clients';
import Faq from '../components/Faq';
import Hero from '../components/hero';
import ProjectShowcase from '../components/ProjectShowcase';
import Services from '../components/Services';

export default function Home() {
  return (
    <main>
      {/* <Header /> */}
      <Hero />
      <ProjectShowcase />
      <Services />
      <Benefits />
      <Faq />
      {/* Add more sections here */}
    </main>
  );
}