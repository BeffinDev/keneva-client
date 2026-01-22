import { useState } from 'react';
import { motion } from 'framer-motion';
import { BsFilter, BsXLg } from 'react-icons/bs';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import BreadcrumbHeroSection from '../../components/landing/BreadcrumbHeroSection';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const zoomIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

const viewportOnce = { once: true, amount: 0.3 };

const projects = [
  {
    id: 1,
    title: 'Modern Office Building',
    category: 'commercial',
    image: '/assets/img/projects/project-1.jpg',
    description: 'State-of-the-art commercial complex with sustainable design.',
  },
  {
    id: 2,
    title: 'Luxury Residential Villa',
    category: 'residential',
    image: '/assets/img/projects/project-2.jpg',
    description: 'Elegant villa with modern amenities and panoramic views.',
  },
  {
    id: 3,
    title: 'Industrial Warehouse',
    category: 'industrial',
    image: '/assets/img/projects/project-3.jpg',
    description: 'Large-scale industrial facility with advanced logistics.',
  },
  {
    id: 4,
    title: 'Shopping Mall Complex',
    category: 'commercial',
    image: '/assets/img/projects/project-4.jpg',
    description: 'Multi-level retail space with entertainment facilities.',
  },
  {
    id: 5,
    title: 'Apartment Complex',
    category: 'residential',
    image: '/assets/img/projects/project-5.jpg',
    description: 'Modern residential complex with community amenities.',
  },
  {
    id: 6,
    title: 'Manufacturing Plant',
    category: 'industrial',
    image: '/assets/img/projects/project-6.jpg',
    description: 'Advanced manufacturing facility with green technology.',
  },
];

const categories = ['all', 'commercial', 'residential', 'industrial'];

export default function ProjectsPage() {
  const [filter, setFilter] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const lightboxSlides = filteredProjects.map(project => ({
    src: project.image,
    alt: project.title,
  }));

  return (
    <>
      {/* Hero */}
      <BreadcrumbHeroSection title={"Projects"} />

      {/* Filter */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition duration-300 ${
                filter === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={zoomIn}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="aspect-w-16 aspect-h-12 bg-gray-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                  onClick={() => openLightbox(index)}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-200 mb-3">{project.description}</p>
                  <button
                    onClick={() => openLightbox(index)}
                    className="inline-flex items-center text-white hover:text-blue-200"
                  >
                    <BsFilter className="mr-2" />
                    View Project
                  </button>
                </div>
              </div>
              <div className="absolute top-4 right-4">
                <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                  {project.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          slides={lightboxSlides}
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={lightboxIndex}
          plugins={[]}
        />
      )}

      {/* CTA */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <h2 className="text-3xl font-bold text-white mb-4">Have a Project in Mind?</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can bring your vision to life with our expertise.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
            >
              Start a Project
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
