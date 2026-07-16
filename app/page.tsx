import {Navbar} from '../components/Navbar'
import {Main}  from '../components/Main'
import {About} from '../components/About'
import {Projects} from '../components/Projects'
import {Skills} from '../components/Skills'
import {Contact} from '../components/Contact'

export default function Home() {
  return (
    <main className='px-6 md:px-16 lg:px-32 bg-paper'>
      <Navbar />
      <Main />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
