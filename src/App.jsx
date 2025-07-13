import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeCards from './components/HomeCards';
import JobVacancySection from './components/JobVacancySection';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <HomeCards />
            <JobVacancySection />
          </>
        } />
      </Routes>
    </>
  );
}

export default App;
