import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  About,
  Footer,
  Experience,
  Hero,
  Navbar,
  Tech,
  Projects,
  Certifications,
} from './components';
import FridgeDemo from './components/FridgeDemo';

const MainContent = () => (
  <div className="relative z-0">
    <div>
      <Navbar />
      <Hero />
    </div>
    <div className="bg-about bg-cover bg-center bg-no-repeat">
      <About />
    </div>
    <div className="bg-tech bg-cover bg-center bg-no-repeat pb-10">
      <Tech />
    </div>
    <Projects />
    <div
      className="bg-experience bg-cover bg-center bg-no-repeat 
        rounded-tl-[150px] rounded-br-[150px]">
      <div
        className="bg-experienceLight bg-cover bg-center 
        bg-no-repeat rounded-tl-[150px] rounded-br-[130px]">
        <Experience />
      </div>
    </div>
    <div className="bg-flashWhite py-10">
      <Certifications />
    </div>
    <Footer />
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/fridge-demo" element={<FridgeDemo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
