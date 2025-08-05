import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeCards from './components/HomeCards';
import JobCategoriesPage from './components/JobCategoriesPage';
import FindCompanies from './components/FindCompanies';
import CurrentJobOpenings from './components/CurrentJobOpenings';
import StatsSection from './components/StatsSection';
import Testimonials from './components/Testimonials';
import BlogPage from './components/BlogPage';
import Footer from './components/Footer';
import UploadCVSection from './components/UploadCVSection ';
import JobsPage from './pages/JobsPage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <HomeCards />
            <CurrentJobOpenings />
            <JobCategoriesPage />
            <FindCompanies />
            < StatsSection />
            <Testimonials />
            <BlogPage />
          </>
        } />
          <Route path="/JobsPage" element={<JobsPage />}></Route> 
      </Routes>
            <UploadCVSection />
            <Footer />
    </>
  );
}

export default App;
