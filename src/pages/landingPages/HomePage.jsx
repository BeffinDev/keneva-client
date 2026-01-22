// src/pages/landingPages/HomePage.jsx
import { useMemo, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import ContactForm from '../../components/landing/ContactForm';
import { FaMountainCity, FaArrowUpFromGroundWater, FaCompassDrafting, FaTrowelBricks, FaHelmetSafety } from 'react-icons/fa6';
import { BsChevronRight } from 'react-icons/bs';
import AccordionItem from '../../components/landing/AccordionItem.jsx';
import HeroCarousel from '../../components/landing/HeroCarousel.jsx';
import { heroSlides } from '../../constant/data.js';
import { Link } from 'react-router-dom';
import SectionHeader from '../../components/landing/SectionHeader.jsx';
import { BsBriefcase, BsPeople, BsAward } from "react-icons/bs"

const viewportOnce = { once: true, margin: '-120px' };
const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    show: { opacity: 1, y: 0 },
};
const fadeRight = {
    hidden: { opacity: 0, x: -32 },
    show: { opacity: 1, x: 0 },
};
const fadeLeft = {
    hidden: { opacity: 0, x: 32 },
    show: { opacity: 1, x: 0 },
};
const zoomIn = {
    hidden: { opacity: 0, scale: 0.96 },
    show: { opacity: 1, scale: 1 },
};

export default function HomePage() {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [activeTab, setActiveTab] = useState(1);
    const [filter, setFilter] = useState('*');

    // Hero slides
    // const heroSlides = [
    //     '/assets/img/hero-carousel/hero-carousel-1.jpg',
    //     '/assets/img/hero-carousel/hero-carousel-2.jpg',
    //     '/assets/img/hero-carousel/hero-carousel-3.jpg',
    // ];

    // Gallery slides for lightbox demo (can use projects too)
    const gallerySlides = [
        { src: '/assets/img/gallery/gallery-1.jpg' },
        { src: '/assets/img/gallery/gallery-2.jpg' },
        { src: '/assets/img/gallery/gallery-3.jpg' },
        { src: '/assets/img/gallery/gallery-4.jpg' },
    ];

    // Constructions cards
    const constructions = [
        { img: '/assets/img/constructions-1.jpg', title: 'Eligendi omnis sunt veritatis.', desc: 'Fuga in dolorum et iste et culpa. Commodi possimus nesciunt modi voluptatem placeat deleniti adipisci. Cum delectus doloribus non veritatis. Officia temporibus illo magnam. Dolor eos et.' },
        { img: '/assets/img/constructions-2.jpg', title: 'Possimus ut sed velit assumenda', desc: 'Sunt deserunt maiores Fuga in dolorum et iste et culpa. Commodi possimus nesciunt modi voluptatem placeat deleniti adipisci. Cum delectus doloribus non veritatis. Officia temporibus illo magnam. Dolor eos et.' },
        { img: '/assets/img/constructions-3.jpg', title: 'Error beatae dolor inventore aut', desc: 'Dicta porro nobis. Fuga in dolorum et iste et culpa. Commodi possimus nesciunt modi voluptatem placeat deleniti adipisci. Cum delectus doloribus non veritatis. Officia temporibus illo magnam. Dolor eos et.' },
        { img: '/assets/img/constructions-4.jpg', title: 'Expedita voluptas ut ut nesciunt', desc: 'Aut est quidem doloremque Fuga in dolorum et iste et culpa. Commodi possimus nesciunt modi voluptatem placeat deleniti adipisci. Cum delectus doloribus non veritatis. Officia temporibus illo magnam. Dolor eos et.' },
    ];

    // Services
    const services = [
        { title: 'Nesciunt Mete', icon: <FaMountainCity />, link: '/service/1', desc: 'Provident nihil minus qui consequatur non omnis maiores...' },
        { title: 'Eosle Commodi', icon: <FaArrowUpFromGroundWater />, link: '/service/2', desc: 'Ut autem aut autem non a. Sint sint sit facilis...' },
        { title: 'Ledo Markt', icon: <FaCompassDrafting />, link: '/service/3', desc: 'Ut excepturi voluptatem nisi sed. Quidem fuga...' },
        { title: 'Asperiores Commodit', icon: <FaTrowelBricks />, link: '/service/4', desc: 'Non et temporibus minus omnis sed dolor esse...' },
        { title: 'Velit Doloremque', icon: <FaHelmetSafety />, link: '/service/5', desc: 'Cumque et suscipit saepe. Est maiores autem...' },
        { title: 'Dolori Architecto', icon: <FaArrowUpFromGroundWater />, link: '/service/6', desc: 'Hic molestias ea quibusdam eos. Fugiat enim...' },
    ];

    // Features tabs
    const featureTabs = {
        1: { title: 'Modisit', img: '/assets/img/features-1.jpg', points: ['Ullamco laboris nisi ut aliquip...', 'Duis aute irure dolor...', 'Ullamco laboris nisi ut aliquip...'] },
        2: { title: 'Praesenti', img: '/assets/img/features-2.jpg', points: ['Ullamco laboris nisi ut aliquip...', 'Duis aute irure dolor...', 'Provident mollitia neque rerum...', 'Ullamco laboris nisi ut aliquip...'] },
        3: { title: 'Explica', img: '/assets/img/features-3.jpg', points: ['Ullamco laboris nisi ut aliquip...', 'Duis aute irure dolor...', 'Provident mollitia neque rerum...'] },
        4: { title: 'Nostrum', img: '/assets/img/features-4.jpg', points: ['Ullamco laboris nisi ut aliquip...', 'Duis aute irure dolor...', 'Ullamco laboris nisi ut aliquip...'] },
    };

    // Projects with categories
    const allProjects = [
        { img: '/assets/img/projects/remodeling-1.jpg', title: 'Remodeling 1', cat: 'remodeling' },
        { img: '/assets/img/projects/construction-1.jpg', title: 'Construction 1', cat: 'construction' },
        { img: '/assets/img/projects/repairs-1.jpg', title: 'Repairs 1', cat: 'repairs' },
        { img: '/assets/img/projects/design-1.jpg', title: 'Design 1', cat: 'design' },
        { img: '/assets/img/projects/remodeling-2.jpg', title: 'Remodeling 2', cat: 'remodeling' },
        { img: '/assets/img/projects/construction-2.jpg', title: 'Construction 2', cat: 'construction' },
        { img: '/assets/img/projects/repairs-2.jpg', title: 'Repairs 2', cat: 'repairs' },
        { img: '/assets/img/projects/design-2.jpg', title: 'Design 2', cat: 'design' },
        { img: '/assets/img/projects/remodeling-3.jpg', title: 'Remodeling 3', cat: 'remodeling' },
        { img: '/assets/img/projects/construction-3.jpg', title: 'Construction 3', cat: 'construction' },
        { img: '/assets/img/projects/repairs-3.jpg', title: 'Repairs 3', cat: 'repairs' },
        { img: '/assets/img/projects/design-3.jpg', title: 'Design 3', cat: 'design' },
    ];

    const filteredProjects = useMemo(
        () => (filter === '*' ? allProjects : allProjects.filter(p => p.cat === filter)),
        [filter]
    );

    return (
        <>
            {/* <section className="relative hero">
                
                <Swiper
                    modules={[Autoplay, EffectFade, Navigation, Pagination]}
                    loop
                    effect="fade"
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    navigation
                    pagination={{ clickable: true }}
                    className="h-[60vh] md:h-[70vh]"
                >
                    {heroSlides.map((src, i) => (
                        <SwiperSlide key={i}>
                            <div className="w-full h-full">
                                <img src={src} alt={`Hero ${i + 1}`} className="w-full h-full object-cover" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="absolute inset-0 z-5 bg-black/70 pointer-events-none" />
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="absolute inset-0 flex items-center justify-center z-10 px-4"
                >
                    <div className="text-center text-white max-w-3xl">
                        <h1 className="text-3xl md:text-5xl font-bold">
                            Welcome to <span className="text-yellow-400">Keneva</span>
                        </h1>
                        <p className="mt-4 text-lg text-white/90">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <a
                            href="#get-started"
                            className="inline-block mt-6 bg-transparent hover:bg-yellow-400 text-white border-2 border-yellow-400 px-8 py-3 rounded font-medium transition duration-300"
                        >
                            Get Started
                        </a>
                    </div>
                </motion.div>
            </section> */}

            {/* <section className="relative h-[70vh] md:h-[85vh]"> */}
            {/* <section className="relative h-screen">
                <Swiper
                    modules={[Autoplay, EffectFade, Navigation, Pagination]}
                    loop
                    effect="fade"
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    navigation
                    pagination={{ clickable: true }}
                    // className="h-full"
                    className="h-screen"
                >
                    {heroSlides.map((src, i) => (
                        <SwiperSlide key={i}>
                            <img
                                src={src}
                                alt={`Hero ${i + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="absolute inset-0 bg-black/70 z-10" />

                <div className="absolute inset-0 z-20 flex items-center justify-center px-4">
                    <div className="text-center text-white max-w-4xl">
                        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                            Welcome to <br />
                            <span className="text-yellow-400">Keneva</span>
                        </h1>

                        <div className="w-20 h-1 bg-yellow-400 mx-auto my-6" />

                        <p className="text-lg md:text-xl text-white/90">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.
                        </p>

                        <a
                            href="#get-started"
                            className="inline-block mt-8 border-2 border-yellow-400 px-8 py-3 text-white font-semibold rounded hover:bg-yellow-400 hover:text-black transition"
                        >
                            Get Started
                        </a>
                    </div>
                </div>
            </section> */}
            <HeroCarousel slides={heroSlides} />

            {/* Get Started (left copy, right form) */}
            {/* <section id="get-started" className="bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 py-16 grid gap-10 md:grid-cols-2">
                    <motion.div
                        variants={fadeRight}
                        initial="hidden"
                        whileInView="show"
                        viewport={viewportOnce}
                        transition={{ duration: 0.55, ease: 'easeOut' }}
                        className="flex items-center"
                    >
                        <div>
                            <h3 className="text-2xl font-semibold">Minus hic non reiciendis ea possimus at quia.</h3>
                            <p className="mt-3 text-gray-600">
                                Rem id rerum. Debitis deserunt quidem delectus expedita ducimus dolor. Aut iusto ipsa...
                            </p>

                            <p className="mt-3 text-gray-600">
                                Aliquam velit deserunt autem. Inventore et saepe. Tenetur suscipit eligendi labore culpa eos...
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={fadeLeft}
                        initial="hidden"
                        whileInView="show"
                        viewport={viewportOnce}
                        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
                        className="rounded-lg border p-6 bg-white shadow-sm"
                    >
                        <h3 className="text-xl font-semibold">Get a quote</h3>
                        <p className="mt-2 text-gray-600">Vel nobis odio laboriosam et hic voluptatem...</p>
                        <div className="mt-4">
                            <ContactForm />

                        </div>
                    </motion.div>
                </div>
            </section> */}
            <section id="get-started" className="bg-white py-20 px-24">
                <div className="max-w-7xl mx-auto px-20 grid gap-12 md:grid-cols-2 items-center">

                    {/* LEFT CONTENT */}
                    <motion.div
                        variants={fadeRight}
                        initial="hidden"
                        whileInView="show"
                        viewport={viewportOnce}
                        transition={{ duration: 0.55, ease: "easeOut" }}
                    >
                        <h3 className="text-4xl font-bold text-gray-700 leading-snug">
                            Minus hic non reiciendis ea possimus at quia.
                        </h3>

                        {/* Yellow underline */}
                        <div className="w-16 h-1 bg-[#feb900] mt-4 mb-6"></div>

                        <p className="text-gray-600 mb-4 leading-relaxed">
                            Rem id rerum. Debitis deserunt quidem delectus expedita ducimus dolor.
                            Aut iusto ipsa. Eos ipsum nobis ipsa soluta itaque perspiciatis fuga
                            ipsum perspiciatis. Eum amet fugiat totam nisi possimus ut delectus dicta.
                        </p>

                        <p className="text-gray-600 leading-relaxed">
                            Aliquam velit deserunt autem. Inventore et saepe. Tenetur suscipit
                            eligendi labore culpa eos. Deserunt porro magni qui necessitatibus
                            dolorem at animi cupiditate.
                        </p>
                    </motion.div>

                    {/* RIGHT FORM CARD */}
                    <motion.div
                        variants={fadeLeft}
                        initial="hidden"
                        whileInView="show"
                        viewport={viewportOnce}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                        className="bg-gray-50 p-8 rounded-md shadow-sm"
                    >
                        <h3 className="text-lg font-bold text-gray-800 uppercase">
                            Get a quote
                        </h3>

                        <p className="mt-2 text-gray-600 text-sm">
                            Vel nobis odio laboriosam et hic voluptatem. Inventore vitae totam.
                            Rerum repellendus enim linead sero park flows.
                        </p>

                        <div className="mt-6">
                            <ContactForm />
                        </div>
                    </motion.div>

                </div>
            </section>


            {/* Constructions */}
            {/* <section className="max-w-7xl mx-auto px-4 py-16">
                <div className="section-header">
                    <h2>Constructions</h2>
                    <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                    {constructions.map((c, i) => (
                        <motion.div
                            key={i}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={viewportOnce}
                            transition={{ duration: 0.45, ease: 'easeOut', delay: i * 0.05 }}
                            className="overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 construction-card"
                        >

                            <div className="grid grid-cols-1 sm:grid-cols-5">
                                <div className="sm:col-span-2 h-44">
                                    <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${c.img})` }} />
                                </div>
                                <div className="sm:col-span-3 p-6 flex items-center">
                                    <div>
                                        <h4 className="text-lg font-semibold">{c.title}</h4>
                                        <p className="mt-2 text-gray-600">{c.desc}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section> */}
            <section className="max-w-7xl mx-auto px-4 py-16">

                {/* Section Header */}
                <div className="text-center mb-12 ">
                    <h2 className="text-3xl font-bold text-gray-800 relative inline-block">
                        <span className="absolute left-[-60px] top-1/2 w-12 h-[2px] bg-[#feb900]" />
                        Constructions
                        <span className="absolute right-[-60px] top-1/2 w-12 h-[2px] bg-[#feb900]" />
                    </h2>
                    <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
                        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
                    </p>
                </div>

                {/* Cards */}
                <div className="grid gap-8 md:grid-cols-2 px-10">
                    {constructions.map((c, i) => (
                        <motion.div
                            key={i}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={viewportOnce}
                            transition={{ duration: 0.45, ease: "easeOut", delay: i * 0.05 }}
                            className="border border-gray-200 hover:border-gray-300 transition"
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-5">

                                {/* Image */}
                                <div className="sm:col-span-2 h-full overflow-hidden">
                                    <div
                                        className="w-full h-full bg-cover bg-center transition-transform duration-300 hover:scale-105"
                                        style={{
                                            backgroundImage: `url(${c.img})`, backgroundSize: "cover",
                                            backgroundPosition: "center",
                                        }}
                                    />
                                </div>

                                {/* Content */}
                                <div className="sm:col-span-3 p-8 flex items-center">
                                    <div>
                                        <h4 className="text-xl font-semibold text-gray-800">
                                            {c.title}
                                        </h4>
                                        <p className="mt-3 text-gray-600 leading-relaxed">
                                            {c.desc}
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>


            {/* Services */}
            <section className="bg-[#f5f6f7]">
                <div className="max-w-7xl mx-auto px-10 py-16">
                    <div className="section-header">
                        <h2>Services</h2>
                        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-3">
                        {services.map((s, i) => (
                            <motion.div
                                key={i}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={viewportOnce}
                                transition={{ duration: 0.45, ease: 'easeOut', delay: i * 0.06 }}
                                className="group relative p-8 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl service-card"
                            >
                                {/* <div className="text-4xl text-yellow-500 transition-colors group-hover:text-yellow-600 icon">{s.icon}</div> */}
                                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 text-3xl mb-6">
                                    {s.icon}
                                </div>
                                <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                                <p className="mt-2 text-gray-600">{s.desc}</p>
                                <a href={s.link} className="inline-flex items-center gap-1 text-yellow-500 hover:text-yellow-600 mt-3 font-semibold">
                                    Learn more <BsChevronRight />
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>



            {/* Alt Services (split image/text with icon boxes) */}
            {/* <section className="max-w-7xl mx-auto px-4 py-16">
                <div className="section-header">
                    <h2>Alt Services</h2>
                    <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                </div>
                <div className="grid gap-8 md:grid-cols-2">
                    <motion.div
                        variants={zoomIn}
                        initial="hidden"
                        whileInView="show"
                        viewport={viewportOnce}
                        transition={{ duration: 0.55, ease: 'easeOut' }}
                        className="rounded-lg h-80 bg-cover bg-center"
                        style={{ backgroundImage: 'url(/assets/img/alt-services.jpg)' }}
                    />

                    <div className="flex flex-col justify-center">
                        <h3 className="text-2xl font-semibold">Enim quis est voluptatibus aliquid consequatur fugiat</h3>
                        <p className="mt-3 text-gray-600">
                            Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima...
                        </p>
                        {[
                            { icon: 'bi-easel', title: 'Lorem Ipsum', desc: 'Voluptatum deleniti atque corrupti...' },
                            { icon: 'bi-patch-check', title: 'Nemo Enim', desc: 'At vero eos et accusamus...' },
                            { icon: 'bi-brightness-high', title: 'Dine Pad', desc: 'Explicabo est voluptatum asperiores...' },
                            { icon: 'bi-brightness-high', title: 'Tride clov', desc: 'Est voluptatem labore deleniti...' },
                        ].map((it, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, margin: '-80px' }}
                                transition={{ duration: 0.45, ease: 'easeOut', delay: idx * 0.05 }}
                                className="mt-4 flex gap-3"
                            >

                                <div className="text-yellow-500 text-xl"></div>
                                <div>
                                    <h4 className="font-semibold">{it.title}</h4>
                                    <p className="text-gray-600">{it.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section> */}
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


            {/* Features (Tabs) */}
            {/* <section className="bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 py-16">
                    <div className="section-header">
                        <h2>Features</h2>
                        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        {[1, 2, 3, 4].map((t) => (
                            <button
                                key={t}
                                onClick={() => setActiveTab(t)}
                                className={`py-3 rounded border text-center ${activeTab === t ? 'bg-yellow-500 text-white' : 'bg-white hover:bg-gray-100'}`}
                            >
                                <h4 className="font-semibold">{featureTabs[t].title}</h4>
                            </button>
                        ))}
                    </div>
                    <div className="mt-8 grid gap-8 md:grid-cols-2 items-center">
                        <motion.div
                            key={`txt-${activeTab}`}
                            initial="hidden"
                            animate="show"
                            variants={fadeRight}
                            transition={{ duration: 0.35, ease: 'easeOut' }}
                        >

                            <h3 className="text-xl font-semibold">Voluptatem dignissimos provident</h3>
                            <p className="italic mt-2 text-gray-600">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...
                            </p>
                            <ul className="list-disc pl-5 mt-3 text-gray-700">
                                {featureTabs[activeTab].points.map((p, i) => <li key={i}>{p}</li>)}
                            </ul>
                        </motion.div>
                        <motion.div
                            key={`img-${activeTab}`}
                            initial="hidden"
                            animate="show"
                            variants={fadeLeft}
                            transition={{ duration: 0.35, ease: 'easeOut' }}
                            className="text-center"
                        >

                            <img src={featureTabs[activeTab].img} alt="" className="inline-block rounded-lg shadow" />
                        </motion.div>
                    </div>
                </div>
            </section> */}
            <section className="bg-white">
                <div className="max-w-7xl mx-auto px-10 py-16">

                    {/* SECTION HEADER */}
                    <div className="section-header mb-12">
                        <h2>Features</h2>
                        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                    </div>

                    {/* TABS */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 ">
                        {[1, 2, 3, 4].map((t) => (
                            <button
                                key={t}
                                onClick={() => setActiveTab(t)}
                                className="relative pb-4 text-left"
                            >
                                <h4 className="font-semibold text-gray-800">
                                    {featureTabs[t].title}
                                </h4>

                                {/* underline */}
                                <span
                                    className={`absolute left-0 bottom-0 h-[3px] transition-all duration-300
              ${activeTab === t ? "w-full bg-[#feb900]" : "w-full bg-gray-200"}`}
                                />
                            </button>
                        ))}
                    </div>

                    {/* CONTENT */}
                    <div className="mt-12 grid gap-12 md:grid-cols-2 items-center">

                        {/* TEXT */}
                        <motion.div
                            key={`text-${activeTab}`}
                            variants={fadeRight}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.45, ease: "easeOut" }}
                        >
                            <h3 className="text-2xl font-bold text-gray-800 relative inline-block">
                                Voluptatem dignissimos provident
                                <span className="block w-12 h-[3px] bg-[#feb900] mt-3" />
                            </h3>

                            <p className="italic mt-4 text-gray-600">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>

                            <ul className="mt-6 space-y-4">
                                {featureTabs[activeTab].points.map((p, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-700">
                                        <span className="text-[#feb900] mt-1">
                                            <i className="bi bi-check-lg text-lg" />
                                        </span>
                                        <span>{p}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* IMAGE */}
                        <motion.div
                            key={`img-${activeTab}`}
                            variants={fadeLeft}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.45, ease: "easeOut" }}
                        >
                            <img
                                src={featureTabs[activeTab].img}
                                alt=""
                                className="w-full rounded-lg shadow-lg"
                            />
                        </motion.div>

                    </div>
                </div>
            </section>


            {/* Our Projects (with simple client-side filter) */}
            <section className="max-w-7xl mx-auto px-4 py-16">
                <div className="section-header">
                    <h2>Our Projects</h2>
                    <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                </div>

                <div className="project-filters">
                    {[
                        { key: '*', label: 'All' },
                        { key: 'remodeling', label: 'Remodeling' },
                        { key: 'construction', label: 'Construction' },
                        { key: 'repairs', label: 'Repairs' },
                        { key: 'design', label: 'Design' },
                    ].map((f) => (
                        <button
                            key={f.key}
                            onClick={() => setFilter(f.key)}
                            className={`px-4 py-2 rounded-full border text-sm font-medium filter-btn ${filter === f.key ? 'active' : ''}`}
                        >
                            {f.label}
                        </button>
                    ))}
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 px-10">
                    {filteredProjects.map((p, i) => (
                        <motion.div
                            key={`${p.title}-${i}`}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={viewportOnce}
                            transition={{ duration: 0.4, ease: 'easeOut', delay: i * 0.05 }}
                            className="relative overflow-hidden group transition transform duration-300 hover:-translate-y-2 hover:shadow-xl"
                        >

                            <img src={p.img} alt={p.title} className="w-full h-56 object-cover group-hover:scale-[1.02] transition" />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition" />
                            <div className="absolute inset-x-0 bottom-0 p-4 text-white opacity-0 group-hover:opacity-100 transition">
                                <h4 className="font-semibold">{p.title}</h4>
                                <p className="text-sm">Lorem ipsum, dolor sit amet consectetur</p>
                                <div className="flex items-center gap-3 mt-2">
                                    <button onClick={() => setLightboxOpen(true)} className="inline-flex items-center gap-1 underline">
                                        Preview <BsChevronRight />
                                    </button>
                                    <a href="/project/1" className="inline-flex items-center gap-1 underline">
                                        More Details <BsChevronRight />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <Lightbox open={lightboxOpen} close={() => setLightboxOpen(false)} slides={gallerySlides} />
            </section>

            {/* Testimonials (Swiper) */}
            {/* <section className="bg-gray-50">
                <div className="max-w-7xl mx-auto px-10 py-16">
                    <div className="section-header">
                        <h2>Testimonials</h2>
                        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                    </div>

                    <Swiper
                        modules={[Autoplay, Pagination]}
                        loop
                        autoplay={{ delay: 4500, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        spaceBetween={24}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                        }}
                    >
                        {[1, 2, 3, 4, 5].map((n) => {
                            const testimonialData = {
                                1: { name: 'Saul Goodman', role: 'Ceo & Founder', text: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.' },
                                2: { name: 'Sara Wilsson', role: 'Designer', text: 'Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.' },
                                3: { name: 'Jena Karlis', role: 'Store Owner', text: 'Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.' },
                                4: { name: 'Matt Brandon', role: 'Freelancer', text: 'Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.' },
                                5: { name: 'John Larson', role: 'Entrepreneur', text: 'Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.' }
                            }[n];
                            return (
                                <SwiperSlide key={n}>
                                    <motion.div
                                        variants={fadeUp}
                                        initial="hidden"
                                        whileInView="show"
                                        viewport={{ once: true, amount: 0.6 }}
                                        transition={{ duration: 0.45, ease: 'easeOut' }}
                                        className="max-w-2xl mx-auto bg-white p-8 shadow-sm testimonial-card"
                                    >
                                        <img src={`/assets/img/testimonials/testimonials-${n}.jpg`} className="w-20 h-20 rounded-full mx-auto" alt="" />
                                        <h3 className="text-center font-semibold mt-3">{testimonialData.name}</h3>
                                        <p className="text-center text-sm text-gray-500 role">{testimonialData.role}</p>
                                        <p className="text-center text-gray-600 mt-3 italic">"{testimonialData.text}"</p>
                                    </motion.div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </section> */}
            <section className="bg-gray-50 py-20">
                <div className="max-w-7xl mx-auto px-10">

                    {/* Section Header */}
                    {/* <div className="text-center mb-14">
                        <h2 className="text-3xl font-bold text-gray-800 relative inline-block">
                            <span className="before:absolute before:-left-14 before:top-1/2 before:w-12 before:h-[2px] before:bg-yellow-500
                         after:absolute after:-right-14 after:top-1/2 after:w-12 after:h-[2px] after:bg-yellow-500">
                                Testimonials
                            </span>
                        </h2>
                        <p className="text-gray-500 mt-4 max-w-xl mx-auto">
                            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
                        </p>
                    </div> */}
                    <SectionHeader title="Testimonials" description="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit" />

                    <Swiper
                        modules={[Autoplay, Pagination]}
                        loop
                        autoplay={{ delay: 4500, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        spaceBetween={60}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                        }}
                        style={{ paddingInline: "40px", height: "370px" }}
                    >
                        {[1, 2, 3, 4, 5].map((n) => {
                            const testimonialData = {
                                1: { name: 'Saul Goodman', role: 'Ceo & Founder', text: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.' },
                                2: { name: 'Sara Wilsson', role: 'Designer', text: 'Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.' },
                                3: { name: 'Jena Karlis', role: 'Store Owner', text: 'Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.' },
                                4: { name: 'Matt Brandon', role: 'Freelancer', text: 'Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.' },
                                5: { name: 'John Larson', role: 'Entrepreneur', text: 'Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.' }
                            }[n];

                            return (
                                <SwiperSlide>
                                    <motion.div
                                        variants={fadeUp}
                                        initial="hidden"
                                        whileInView="show"
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.45 }}
                                        className="relative bg-white rounded-lg shadow-[0_10px_35px_rgba(0,0,0,0.08)] px-10 py-8"
                                    >
                                        {/* Avatar */}
                                        <div className="absolute -left-10 top-8">
                                            <img
                                                src={`/assets/img/testimonials/testimonials-${n}.jpg`}
                                                className="w-20 h-20 rounded-md object-cover shadow-md"
                                                alt=""
                                            />
                                        </div>

                                        {/* Content */}
                                        <div className="pl-14">
                                            <h3 className="text-lg font-semibold text-gray-800">
                                                {testimonialData.name}
                                            </h3>

                                            <p className="text-sm text-gray-400 mb-1">
                                                {testimonialData.role}
                                            </p>

                                            {/* Stars */}
                                            <div className="flex text-yellow-400 text-sm mb-4">
                                                ★★★★★
                                            </div>

                                            {/* Quote */}
                                            <p className="text-gray-600 italic leading-relaxed relative">
                                                <span className="text-yellow-300 text-5xl leading-none">
                                                    ”
                                                </span>
                                                {testimonialData.text}
                                                <span className="absolute bottom-[-2] text-yellow-300 text-5xl leading-none">
                                                    ”
                                                </span>
                                            </p>
                                        </div>


                                    </motion.div>
                                </SwiperSlide>

                            );
                        })}
                    </Swiper>
                </div>
            </section>


            {/* Recent Blog Posts */}
            {/* <section className="max-w-7xl mx-auto px-4 py-16">
                <div className="section-header">
                    <h2>Recent Blog Posts</h2>
                    <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {[
                        { title: 'Eum ad dolor et. Autem aut fugiat debitis', date: 'January 15, 2024', author: 'Admin', img: '/assets/img/blog/blog-1.jpg' },
                        { title: 'Et repellendus molestiae qui est sed omnis', date: 'January 10, 2024', author: 'Admin', img: '/assets/img/blog/blog-2.jpg' },
                        { title: 'Quia assumenda est et veritati tirana ploder', date: 'January 5, 2024', author: 'Admin', img: '/assets/img/blog/blog-3.jpg' },
                    ].map((post, i) => (
                        <motion.article
                            key={i}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ duration: 0.35, ease: 'easeOut', delay: i * 0.05 }}
                            className="overflow-hidden bg-white flex flex-col shadow-sm hover:shadow-lg transition-shadow"
                        >
                            <div className="relative">
                                <img src={post.img} alt="" className="w-full h-48 object-cover" />
                                <span className="absolute top-3 right-3 bg-yellow-500 text-white text-xs px-2 py-0.5 rounded">
                                    {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                                </span>
                            </div>
                            <div className="p-5 flex-1 flex flex-col">
                                <h3 className="font-semibold">{post.title}</h3>
                                <div className="flex items-center gap-3 text-sm text-gray-500 mt-2">
                                    <span>By {post.author}</span>
                                    <span>/</span>
                                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                                </div>
                                <hr className="my-4" />
                                <a href={`/blog/${i + 1}`} className="inline-flex items-center gap-1 text-yellow-500 hover:text-yellow-600 mt-auto">
                                    <span>Read More</span>
                                    <BsChevronRight />
                                </a>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </section> */}
            <section className="max-w-7xl mx-auto px-4 py-16">
                {/* <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-2">Recent Blog Posts</h2>
                    <p className="text-gray-500">
                        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
                    </p>
                </div> */}
                <SectionHeader title="Recent Blog Posts" description="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit" />


                <div className="grid gap-8 md:grid-cols-3 px-10">
                    {[
                        {
                            title: "Eum ad dolor et. Autem aut fugiat debitis",
                            date: "2024-12-12",
                            author: "Julia Parker",
                            category: "Politics",
                            img: "/assets/img/blog/blog-1.jpg",
                        },
                        {
                            title: "Et repellendus molestiae qui est sed omnis",
                            date: "2024-07-17",
                            author: "Mario Douglas",
                            category: "Sports",
                            img: "/assets/img/blog/blog-2.jpg",
                        },
                        {
                            title: "Quia assumenda est et veritati tirana ploder",
                            date: "2024-09-05",
                            author: "Lisa Hunter",
                            category: "Economics",
                            img: "/assets/img/blog/blog-3.jpg",
                        },
                    ].map((post, i) => (
                        <motion.article
                            key={i}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            className="bg-white shadow-sm hover:shadow-lg transition-shadow flex flex-col h-full "
                        >
                            {/* Image */}
                            <div className="relative">
                                <img
                                    src={post.img}
                                    alt={post.title}
                                    className="w-full h-64 object-cover"
                                />

                                {/* Date badge */}
                                <span className="absolute bottom-4 right-4 bg-yellow-500 text-white text-xs font-semibold px-3 py-1">
                                    {new Date(post.date).toLocaleDateString("en-US", {
                                        month: "long",
                                        day: "2-digit",
                                    })}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="flex flex-col flex-1 px-6 py-7">
                                {/* Title */}
                                <h3 className="font-semibold text-lg leading-snug text-gray-800 mb-4">
                                    {post.title}
                                </h3>

                                {/* Meta */}
                                <div className="flex items-center gap-3 text-sm text-gray-500 mb-6">
                                    <span className="flex items-center gap-1">
                                        <span className="text-yellow-500">👤</span> {post.author}
                                    </span>
                                    <span>/</span>
                                    <span className="flex items-center gap-1">
                                        <span className="text-yellow-500">📁</span> {post.category}
                                    </span>
                                </div>

                                {/* Divider */}
                                <div className="border-t border-gray-100 mb-5"></div>

                                {/* Read More (ALWAYS visible) */}
                                <Link
                                    to={`/blog/${i + 1}`}
                                    className="mt-auto inline-flex items-center gap-1 text-sm text-gray-500 hover:text-yellow-500 transition"
                                >
                                    Read More
                                    <BsChevronRight className="text-xs" />
                                </Link>
                            </div>
                        </motion.article>

                    ))}
                </div>
            </section>


            {/* Clients logos (Swiper) */}
            <section className="bg-white">
                <div className="max-w-7xl mx-auto px-4 py-12">
                    <Swiper
                        modules={[Autoplay]}
                        loop
                        autoplay={{ delay: 2500, disableOnInteraction: false }}
                        spaceBetween={24}
                        breakpoints={{
                            0: { slidesPerView: 2 },
                            640: { slidesPerView: 3 },
                            768: { slidesPerView: 4 },
                            1024: { slidesPerView: 5 },
                        }}
                    >
                        {[1, 2, 3, 4, 5, 6].map((n) => (
                            <SwiperSlide key={`client-${n}`}>
                                <div className="flex items-center justify-center py-4">
                                    <img
                                        src={`/assets/img/clients/client-${n}.png`}
                                        alt={`Client ${n}`}
                                        className="h-40 opacity-70 hover:opacity-100 transition"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            {/* FAQ section */}
            {/* <section className="bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 py-16">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl md:text-3xl font-semibold">Frequently Asked Questions</h2>
                        <p className="mt-2 text-gray-600">Necessitatibus eius consequatur ex aliquid fuga eum quidem.</p>
                    </div>
                    <div className="max-w-3xl mx-auto">
                        {[
                            { q: 'Non consectetur a erat nam at lectus urna duis?', a: 'Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat.' },
                            { q: 'Feugiat scelerisque varius morbi enim nunc?', a: 'Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi.' },
                            { q: 'Dolor sit amet consectetur adipiscing elit?', a: 'Egestas sed tempus urna et pharetra pharetra massa massa ultricies.' },
                        ].map((item, idx) => (
                            <AccordionItem key={idx} idx={idx} q={item.q} a={item.a} />
                        ))}
                    </div>
                </div>
            </section> */}

            <section className="bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 py-20">
                    {/* Header */}
                    {/* <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                           
                        </h2>
                        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
                            Necessitatibus eius consequatur ex aliquid fuga eum quidem.
                        </p>
                    </div> */}
                    <SectionHeader title="Frequently Asked Questions" description="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit" />


                    {/* FAQ */}
                    <div className="max-w-3xl mx-auto space-y-4">
                        {[
                            {
                                q: "Non consectetur a erat nam at lectus urna duis?",
                                a: "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida.",
                            },
                            {
                                q: "Feugiat scelerisque varius morbi enim nunc?",
                                a: "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus et netus.",
                            },
                            {
                                q: "Dolor sit amet consectetur adipiscing elit?",
                                a: "Egestas sed tempus urna et pharetra pharetra massa massa ultricies mi quis hendrerit dolor.",
                            },
                            {
                                q: "Tempus quam pellentesque nec nam aliquam sem?",
                                a: "Molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui.",
                            },
                        ].map((item, idx) => (
                            <AccordionItem key={idx} idx={idx} q={item.q} a={item.a} />
                        ))}
                    </div>
                </div>
            </section>


            {/* Simple stats strip (optional, mirrors counters) */}
            {/* <section className="bg-white">
                <div className="max-w-7xl mx-auto px-4 py-12 grid gap-6 md:grid-cols-3">
                    {[{ n: 120, l: 'Projects' }, { n: 85, l: 'Clients' }, { n: 24, l: 'Awards' }].map((s, i) => (
                        <div key={i} className="p-6 text-center shadow-sm">
                            <div className="text-4xl font-bold text-yellow-500">
                                <CountUp end={s.n} duration={1.4} />+
                            </div>
                            <p className="mt-2 text-gray-600">{s.l}</p>
                        </div>
                    ))}
                </div>
            </section> */}

            <section className="bg-white">
                <div className="max-w-7xl mx-auto px-4 py-20">
                    <div className="grid gap-8 md:grid-cols-3 px-10">
                        {[
                            {
                                n: 120,
                                l: "Projects",
                                icon: <BsBriefcase />,
                            },
                            {
                                n: 85,
                                l: "Clients",
                                icon: <BsPeople />,
                            },
                            {
                                n: 24,
                                l: "Awards",
                                icon: <BsAward />,
                            },
                        ].map((s, i) => (
                            <div
                                key={i}
                                className="group bg-white border border-gray-100 p-8 text-center shadow-sm hover:shadow-lg transition"
                            >
                                {/* Icon */}
                                <div className="flex items-center justify-center w-14 h-14 mx-auto mb-5 rounded-full bg-yellow-50 text-yellow-500 text-2xl">
                                    {s.icon}
                                </div>

                                {/* Counter */}
                                <div className="text-4xl md:text-5xl font-bold text-gray-900">
                                    <CountUp end={s.n} duration={1.6} />+
                                </div>

                                {/* Label */}
                                <p className="mt-2 text-gray-600 font-medium tracking-wide">
                                    {s.l}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}