import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cocktails from './components/Cocktails';

gsap.registerEffect(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
    </main>
  )
}

export default App
