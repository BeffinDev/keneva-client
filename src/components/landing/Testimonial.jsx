import React from 'react'
import SectionHeader from './SectionHeader';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

function Testimonial() {
    return (
        <div>
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
    )
}

export default Testimonial