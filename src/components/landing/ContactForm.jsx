// import { useState } from 'react';
// import emailjs from 'emailjs-com';

// export default function ContactForm() {
//   const [status, setStatus] = useState(null);
//   const onSubmit = async (e) => {
//     e.preventDefault();
//     setStatus('sending');
//     try {
//       await emailjs.sendForm(
//         import.meta.env.VITE_EMAILJS_SERVICE_ID || 'SERVICE_ID',
//         import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'TEMPLATE_ID',
//         e.target,
//         import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'PUBLIC_KEY'
//       );
//       setStatus('sent'); e.target.reset();
//     } catch {
//       setStatus('error');
//     }
//   };
//   return (
//     <form onSubmit={onSubmit} className="grid gap-4 md:grid-cols-2">
//       <input name="name" placeholder="Your Name" className="border p-2 rounded" required />
//       <input name="email" type="email" placeholder="Your Email" className="border p-2 rounded" required />
//       <input name="subject" placeholder="Subject" className="border p-2 rounded md:col-span-2" />
//       <textarea name="message" placeholder="Message" className="border p-2 rounded md:col-span-2 h-32" required />
//       <div><button className="bg-blue-600 text-white px-4 py-2 rounded">Send</button></div>
//       <div className="md:col-span-2 text-sm">
//         {status === 'sending' && <span>Sending…</span>}
//         {status === 'sent' && <span className="text-green-600">Message sent!</span>}
//         {status === 'error' && <span className="text-red-600">Something went wrong.</span>}
//       </div>
//     </form>
//   );
// }


import { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const [status, setStatus] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "SERVICE_ID",
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "TEMPLATE_ID",
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "PUBLIC_KEY"
      );
      setStatus("sent");
      e.target.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4 mt-4">
      
      <input
        name="name"
        placeholder="Name"
        className="w-full border border-gray-300 px-4 py-3 text-sm rounded-sm focus:outline-none focus:border-[#feb900]"
        required
      />

      <input
        name="email"
        type="email"
        placeholder="Email"
        className="w-full border border-gray-300 px-4 py-3 text-sm rounded-sm focus:outline-none focus:border-[#feb900]"
        required
      />

      <input
        name="phone"
        placeholder="Phone"
        className="w-full border border-gray-300 px-4 py-3 text-sm rounded-sm focus:outline-none focus:border-[#feb900]"
      />

      <textarea
        name="message"
        placeholder="Message"
        className="w-full border border-gray-300 px-4 py-3 text-sm rounded-sm h-32 resize-none focus:outline-none focus:border-[#feb900]"
        required
      />

      {/* Button */}
      <div className="text-center pt-2">
        <button
          type="submit"
          className="bg-[#feb900] hover:bg-yellow-500 text-white font-semibold px-10 py-3 rounded-md transition"
        >
          Get a quote
        </button>
      </div>

      {/* Status */}
      <div className="text-center text-sm">
        {status === "sending" && <span className="text-gray-600">Sending…</span>}
        {status === "sent" && <span className="text-green-600">Message sent successfully!</span>}
        {status === "error" && <span className="text-red-600">Something went wrong.</span>}
      </div>
    </form>
  );
}
