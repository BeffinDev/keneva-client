import { motion } from 'framer-motion';
import { BsArrowRight, BsCheckCircleFill, BsGearFill, BsShieldFill, BsSpeedometer2, BsPeopleFill } from 'react-icons/bs';
import BreadcrumbHeroSection from '../../components/landing/BreadcrumbHeroSection';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const fadeRight = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const zoomIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

const viewportOnce = { once: true, amount: 0.3 };

export default function ServicesPage() {
  const services = [
    {
      icon: <BsGearFill className="text-3xl" />,
      title: 'General Contracting',
      description: 'Comprehensive construction management from planning to completion.',
    },
    {
      icon: <BsShieldFill className="text-3xl" />,
      title: 'Renovation & Remodeling',
      description: 'Transform your existing space with our expert renovation services.',
    },
    {
      icon: <BsSpeedometer2 className="text-3xl" />,
      title: 'Project Management',
      description: 'Efficient project coordination to ensure timely delivery.',
    },
    {
      icon: <BsPeopleFill className="text-3xl" />,
      title: 'Consulting Services',
      description: 'Expert advice and guidance for your construction projects.',
    },
  ];

  const features = [
    {
      title: 'Expert Team',
      description: 'Our professionals bring years of experience to every project.',
      icon: <BsPeopleFill className="text-2xl" />,
    },
    {
      title: 'Quality Materials',
      description: 'We use only the highest quality materials for lasting results.',
      icon: <BsShieldFill className="text-2xl" />,
    },
    {
      title: 'On-Time Delivery',
      description: 'Projects completed on schedule without compromising quality.',
      icon: <BsSpeedometer2 className="text-2xl" />,
    },
  ];

  return (
    <>
      {/* Hero */}
      <BreadcrumbHeroSection title={"Services"} />

      {/* Services List */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold">Our Services</h2>
          <div className="mx-auto h-0.5 w-16 bg-blue-600/70 mt-3 rounded" />
          <p className="mt-4 text-gray-600">Comprehensive solutions for all your construction needs</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-sm border hover:shadow-lg transition duration-300 hover:-translate-y-1"
            >
              <div className="text-blue-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                Learn more <BsArrowRight className="ml-2" />
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Alternative Services */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold">Additional Services</h2>
            <div className="mx-auto h-0.5 w-16 bg-blue-600/70 mt-3 rounded" />
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              'Design & Build',
              'Pre-Construction Services',
              'Post-Construction Support',
              'Sustainable Building',
              'Infrastructure Development',
              'Maintenance Services',
            ].map((service, i) => (
              <motion.div
                key={i}
                variants={zoomIn}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                transition={{ delay: i * 0.05 }}
                className="bg-white p-6 rounded-lg shadow-sm text-center"
              >
                <h4 className="font-semibold text-lg mb-2">{service}</h4>
                <p className="text-gray-600 text-sm">Professional service tailored to your requirements</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold">Why Choose Us</h2>
          <div className="mx-auto h-0.5 w-16 bg-blue-600/70 mt-3 rounded" />
          <p className="mt-4 text-gray-600">We deliver excellence in every project</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-blue-600 mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and let's bring your vision to life.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
            >
              Get Started
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
