// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HashRouter as Router, Route, Routes } from "react-router-dom";


import HomePage from "./pages/landingPages/HomePage";
import AboutPage from "./pages/landingPages/AboutPage";
import ServicesPage from "./pages/landingPages/ServicesPage";
import ServiceDetails from "./pages/landingPages/ServiceDetails";
import ProjectsPage from "./pages/landingPages/ProjectsPage";
import ProjectDetails from "./pages/landingPages/ProjectDetails";
import BlogPage from "./pages/landingPages/BlogPage";
import BlogDetails from "./pages/landingPages/BlogDetails";
import ContactPage from "./pages/landingPages/ContactPage";
import Header from "./components/landing/Header";
import Footer from "./components/landing/Footer";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/service/:id" element={<ServiceDetails />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogDetails />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}