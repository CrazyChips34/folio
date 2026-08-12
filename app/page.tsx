import { Navbar } from '../components/Navbar'
import { Main } from '../components/Main'
import { About } from '../components/About'
import { Projects } from '../components/Projects'
import { Skills } from '../components/Skills'
import { Contact } from '../components/Contact'

export default function Home() {
  return (
    <main className='relative bg-black min-h-screen'>
      <div className='noise-overlay' />
      <Navbar />
      <Main />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
