import { motion } from 'framer-motion';
import { BsCheckCircleFill } from 'react-icons/bs';
import CountUp from 'react-countup';
import { BsEmojiSmile, BsJournalCheck, BsHeadset, BsPeople } from "react-icons/bs";
import { FaChalkboardTeacher, FaRegCheckCircle, FaRegSun } from "react-icons/fa";
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { team } from '../../constant/data';
import { Link } from 'react-router-dom'
import Testimonial from '../../components/landing/Testimonial';
import BreadcrumbHeroSection from '../../components/landing/BreadcrumbHeroSection';
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

// const fadeRight = {
//   hidden: { opacity: 0, x: -30 },
//   visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
// };

// const fadeLeft = {
//   hidden: { opacity: 0, x: 30 },
//   visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
// };

const fadeLeft = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0 },
};

// const zoomIn = {
//   hidden: { opacity: 0, scale: 0.9 },
//   visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
// };

const zoomIn = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    y: 20
  },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: 'easeOut'
    }
  },
};

const SocialIcon = ({ icon, href = "#" }) => {
  return (
    <Link
      to={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white text-lg hover:text-yellow-400 transition-colors duration-300"
    >
      {icon}
    </Link>
  );
};

const viewportOnce = { once: true, amount: 0.3 };

export default function AboutPage() {
  return (
    <>
      {/* Hero */}

      {/* <section
        className="relative h-[320px] flex items-center justify-center text-center"
        style={{
          backgroundImage: "url('/assets/img/breadcrumbs-bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            About
          </h1>
          <p className="text-sm text-gray-300">
            Home / <span className="text-yellow-400">About</span>
          </p>
        </div>
      </section> */}
      <BreadcrumbHeroSection title={"About"} />

      {/* About Content */}
      {/* <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <img src="/assets/img/about.jpg" alt="About us" className="rounded-lg shadow-lg" />
          </motion.div>
          <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
            <div className="mx-auto h-0.5 w-16 bg-blue-600/70 mt-3 rounded mb-6" />
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="text-gray-600 mb-6">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <ul className="space-y-3">
              {[
                'Expert team of professionals',
                'High-quality materials',
                'On-time project delivery',
                'Customer satisfaction guaranteed',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <BsCheckCircleFill className="text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section> */}

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-14 items-center">

            {/* LEFT CONTENT */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <h5 className="text-sm font-semibold text-gray-400 uppercase mb-2">
                Est 1988
              </h5>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Our Story
              </h2>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Inventore aliquam beatae at et id alias. Ipsa dolores amet
                consequuntur minima quia maxime autem. Quidem id sed
                ratione. Tenetur provident autem in reiciendis rerum at dolor.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex gap-3">
                  <span className="text-yellow-500">✔</span>
                  <span className="text-gray-700">
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-yellow-500">✔</span>
                  <span className="text-gray-700">
                    Duis aute irure dolor in reprehenderit in voluptate velit.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-yellow-500">✔</span>
                  <span className="text-gray-700">
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </span>
                </li>
              </ul>

              {/* Watch Video */}
              <button className="inline-flex items-center gap-3 text-yellow-500 font-semibold">
                <span className="w-10 h-10 rounded-full border-2 border-yellow-500 flex items-center justify-center">
                  ▶
                </span>
                Watch Video
              </button>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <img
                src="/assets/img/about.jpg"
                alt="Construction Work"
                className="rounded shadow-lg"
              />
            </motion.div>

          </div>
        </div>
      </section>




      {/* Stats */}
      {/* <section className="bg-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4 text-center">
            {[
              { n: 85, label: 'Projects Completed' },
              { n: 127, label: 'Happy Clients' },
              { n: 12, label: 'Years in Business' },
              { n: 35, label: 'Team Members' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={zoomIn}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                transition={{ delay: i * 0.1 }}
              >
                <h3 className="text-4xl font-bold text-blue-600 mb-2">
                  <CountUp end={stat.n} duration={1.3} enableScrollSpy scrollSpyOnce />+
                </h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 relative inline-block">
              <span className="before:absolute before:-left-16 before:top-1/2 before:w-12 before:h-[2px] before:bg-yellow-500
                         after:absolute after:-right-16 after:top-1/2 after:w-12 after:h-[2px] after:bg-yellow-500">
                Stats
              </span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">
              Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid gap-8 md:grid-cols-4">
            {[
              {
                n: 232,
                label: "Happy Clients",
                icon: <BsEmojiSmile />
              },
              {
                n: 521,
                label: "Projects",
                icon: <BsJournalCheck />
              },
              {
                n: 1463,
                label: "Hours Of Support",
                icon: <BsHeadset />
              },
              {
                n: 15,
                label: "Hard Workers",
                icon: <BsPeople />
              }
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={zoomIn}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="bg-white rounded-md p-8 flex items-center gap-5
                     shadow-[0_10px_35px_rgba(0,0,0,0.06)]"
              >

                {/* Icon */}
                <div className="text-yellow-500 text-4xl">
                  {stat.icon}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-3xl font-bold text-gray-800 leading-none">
                    <CountUp
                      end={stat.n}
                      duration={1.4}
                      enableScrollSpy
                      scrollSpyOnce
                    />
                  </h3>
                  <p className="text-gray-500 mt-1">
                    {stat.label}
                  </p>
                </div>

              </motion.div>
            ))}
          </div>

        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 items-center px-10">

          {/* LEFT IMAGE */}
          <motion.div
            variants={zoomIn}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url(/assets/img/alt-services.jpg)" }}
          />

          {/* RIGHT CONTENT */}
          <div>

            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 relative inline-block">
              Enim quis est voluptatibus aliquid consequatur fugiat
              <span className="block w-12 h-[3px] bg-[#feb900] mt-4" />
            </h3>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus.
              Non ipsam et sed minima temporibus laudantium. Soluta voluptate sed
              facere corporis dolores excepturi.
            </p>

            {/* FEATURES */}
            <div className="mt-8 space-y-6">
              {[
                { title: "Lorem Ipsum", desc: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident" },
                { title: "Nemo Enim", desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque" },
                { title: "Dine Pad", desc: "Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit. Sunt aut deserunt minus aut eligendi omnis" },
                { title: "Tride clov", desc: "Est voluptatem labore deleniti quis a delectus et. Saepe dolorem libero sit non aspernatur odit amet" },
              ].map((it, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.45, ease: "easeOut", delay: idx * 0.05 }}
                  className="flex gap-4 items-start"
                >
                  {/* ICON */}
                  <div className="w-12 h-12 flex items-center justify-center rounded-md bg-gray-100 text-[#feb900]">
                    <i className="bi bi-brightness-high text-xl" />
                  </div>

                  {/* TEXT */}
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {it.title}
                    </h4>
                    <p className="text-gray-600 mt-1 leading-relaxed">
                      {it.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Enim quis est voluptatibus aliquid consequatur
            </h2>

            <p className="text-gray-600 mb-10">
              Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus.
              Non ipsam et sed minima temporibus laudantium.
              Soluta voluptate sed facere corporis dolores excepturi.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">

              {/* Item 1 */}
              <div className="flex gap-4">
                <FaChalkboardTeacher className="text-yellow-500 text-3xl mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Lorem Ipsum
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Voluptatum deleniti atque corrupti quos dolores et quas molestias
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex gap-4">
                <FaRegCheckCircle className="text-yellow-500 text-3xl mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Nemo Enim
                  </h4>
                  <p className="text-gray-600 text-sm">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex gap-4">
                <FaRegSun className="text-yellow-500 text-3xl mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Dine Pad
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Explicabo est voluptatum asperiores consequatur magnam
                  </p>
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex gap-4">
                <FaRegSun className="text-yellow-500 text-3xl mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Tride clov
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Est voluptatem labore deleniti quis a delectus
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <img
              src="assets/img/alt-services-2.jpg"
              alt="Feature"
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </motion.div>

        </div>
      </section>


      {/* Our team */}
      <section id="team" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">

          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-gray-600">
              Aperiam dolorum et et quia molestias qui eveniet numquam nihil porro
              incidunt dolores placeat sunt id nobis omnis
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="text-center"
              >
                {/* Image */}
                <div className="relative group w-52 h-52 mx-auto mb-6">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full"
                  />

                  {/* Social Icons */}
                  <div className="absolute inset-0 bg-black/60 rounded-full flex items-center justify-center gap-4
                                opacity-0 group-hover:opacity-100 transition">
                    <SocialIcon icon={<FaTwitter />} />
                    <SocialIcon icon={<FaFacebookF />} />
                    <SocialIcon icon={<FaInstagram />} />
                    <SocialIcon icon={<FaLinkedinIn />} />
                  </div>
                </div>

                {/* Info */}
                <h4 className="text-lg font-semibold text-gray-900">
                  {member.name}
                </h4>
                <span className="block text-sm italic text-gray-500 mb-3">
                  {member.role}
                </span>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Testimonials */}

      <section className="max-w-7xl mx-auto px-4 py-20">
        <Testimonial />
      </section>

    </>
  );
}
