import Header from '../Header/Header'
import About from '../About/About';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';
import Footer  from '../Footer/Footer';

const Home = () => {
  return(
    <div>
      <Header />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
    </div>
  )
}

export default Home