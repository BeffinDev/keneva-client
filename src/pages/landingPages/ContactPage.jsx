import { useState } from "react";
import { motion } from "framer-motion";
import { BsGeoAlt, BsTelephone, BsEnvelope } from "react-icons/bs";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";
import BreadcrumbHeroSection from "../../components/landing/BreadcrumbHeroSection";

/* ---------------- Animations ---------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const viewportOnce = { once: true, amount: 0.2 };

/* ---------------- Floating Inputs ---------------- */
const FloatingInput = ({ label, type = "text", name, value, onChange }) => (
  <div className="relative">
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required
      placeholder=" "
      className="peer w-full px-4 py-3 border border-gray-300 rounded-md
                 focus:outline-none focus:border-yellow-400"
    />
    <label
      className="absolute left-4 top-3 text-gray-500 transition-all
                 peer-placeholder-shown:top-3.5
                 peer-placeholder-shown:text-base
                 peer-focus:top-1
                 peer-focus:text-xs
                 peer-focus:text-yellow-500"
    >
      {label}
    </label>
  </div>
);

const FloatingTextarea = ({ label, name, value, onChange }) => (
  <div className="relative">
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      required
      rows={6}
      placeholder=" "
      className="peer w-full px-4 py-3 border border-gray-300 rounded-md
                 focus:outline-none focus:border-yellow-400 resize-none"
    />
    <label
      className="absolute left-4 top-3 text-gray-500 transition-all
                 peer-placeholder-shown:top-3.5
                 peer-placeholder-shown:text-base
                 peer-focus:top-1
                 peer-focus:text-xs
                 peer-focus:text-yellow-500"
    >
      {label}
    </label>
  </div>
);

/* ---------------- Page ---------------- */
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <BreadcrumbHeroSection title="Contact Us" />

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        {/* Top Cards */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-6 md:grid-cols-3 mb-12"
        >
          {[
            {
              icon: <BsGeoAlt />,
              title: "Address",
              text: "A108 Adam Street, New York, NY 535022",
            },
            {
              icon: <BsTelephone />,
              title: "Call Us",
              text: "+1 5589 55488 55",
            },
            {
              icon: <BsEnvelope />,
              title: "Email Us",
              text: "info@example.com",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-lg p-8 text-center"
            >
              <div className="mx-auto mb-4 w-12 h-12 rounded-full border border-yellow-400
                              text-yellow-400 flex items-center justify-center text-xl">
                {item.icon}
              </div>
              <h3 className="font-semibold mb-1">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.text}</p>
            </div>
          ))}
        </motion.div>

        {/* Map + Form */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Map */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="w-full h-[420px] rounded-lg overflow-hidden shadow-md"
          >
            <iframe
              title="map"
              src="https://www.google.com/maps?q=Downtown%20Conference%20Center,%20New%20York&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </motion.div>

          {/* Form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="bg-white shadow-md rounded-lg p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <FloatingInput
                  label="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <FloatingInput
                  label="Your Email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <FloatingInput
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />

              <FloatingTextarea
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />

              <div className="flex justify-center">

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-yellow-400 text-white px-8 py-3 rounded-full
                           hover:bg-yellow-500 transition disabled:opacity-50 "
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
}
