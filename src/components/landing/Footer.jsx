// import { Link } from "react-router-dom";
// import { BsTwitter, BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

// export default function Footer() {
//   return (
//     <footer className="border-t bg-white">
//       {/* Content */}
//       <div className="max-w-7xl mx-auto px-4 py-12">
//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
//           {/* Info */}
//           <div>
//             <h3 className="text-xl font-semibold">UpConstruction</h3>
//             <p className="mt-3 text-sm text-gray-600">
//               A108 Adam Street<br />
//               NY 535022, USA<br /><br />
//               <strong>Phone:</strong> +1 5589 55488 55<br />
//               <strong>Email:</strong> info@example.com
//             </p>
//             <div className="flex gap-2 mt-4">
//               <a href="#" className="w-9 h-9 rounded-full border flex items-center justify-center hover:bg-gray-50">
//                 <BsTwitter />
//               </a>
//               <a href="#" className="w-9 h-9 rounded-full border flex items-center justify-center hover:bg-gray-50">
//                 <BsFacebook />
//               </a>
//               <a href="#" className="w-9 h-9 rounded-full border flex items-center justify-center hover:bg-gray-50">
//                 <BsInstagram />
//               </a>
//               <a href="#" className="w-9 h-9 rounded-full border flex items-center justify-center hover:bg-gray-50">
//                 <BsLinkedin />
//               </a>
//             </div>
//           </div>

//           {/* Useful Links */}
//           <div>
//             <h4 className="font-semibold">Useful Links</h4>
//             <ul className="mt-3 space-y-2 text-sm text-gray-700">
//               <li><Link to="/">Home</Link></li>
//               <li><Link to="/about">About us</Link></li>
//               <li><Link to="/services">Services</Link></li>
//               <li><Link to="#">Terms of service</Link></li>
//               <li><Link to="#">Privacy policy</Link></li>
//             </ul>
//           </div>

//           {/* Our Services */}
//           <div>
//             <h4 className="font-semibold">Our Services</h4>
//             <ul className="mt-3 space-y-2 text-sm text-gray-700">
//               <li><Link to="#">Web Design</Link></li>
//               <li><Link to="#">Web Development</Link></li>
//               <li><Link to="#">Product Management</Link></li>
//               <li><Link to="#">Marketing</Link></li>
//               <li><Link to="#">Graphic Design</Link></li>
//             </ul>
//           </div>

//           {/* Hic solutasetp */}
//           <div>
//             <h4 className="font-semibold">Hic solutasetp</h4>
//             <ul className="mt-3 space-y-2 text-sm text-gray-700">
//               <li><Link to="#">Molestiae accusamus iure</Link></li>
//               <li><Link to="#">Excepturi dignissimos</Link></li>
//               <li><Link to="#">Suscipit distinctio</Link></li>
//               <li><Link to="#">Dilecta</Link></li>
//               <li><Link to="#">Sit quas consectetur</Link></li>
//             </ul>
//           </div>

//           {/* Nobis illum */}
//           <div>
//             <h4 className="font-semibold">Nobis illum</h4>
//             <ul className="mt-3 space-y-2 text-sm text-gray-700">
//               <li><Link to="#">Ipsam</Link></li>
//               <li><Link to="#">Laudantium dolorum</Link></li>
//               <li><Link to="#">Dinera</Link></li>
//               <li><Link to="#">Trodelas</Link></li>
//               <li><Link to="#">Flexo</Link></li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Legal */}
//       <div className="border-t">
//         <div className="max-w-7xl mx-auto px-4 py-6 text-center text-sm text-gray-600">
//           <div>&copy; {new Date().getFullYear()} <strong>UpConstruction</strong>. All Rights Reserved</div>
//           <div className="mt-1">
//             Designed by <a href="https://bootstrapmade.com/" className="underline">BootstrapMade</a> • Distributed by{" "}
//             <a href="https://themewagon.com" className="underline">ThemeWagon</a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

import { Link } from "react-router-dom";
import { BsTwitter, BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

export default function Footer() {
    return (
        <footer
            className="relative text-white"
            style={{
                backgroundImage: "url(/assets/img/footer-bg.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gray-900/90"></div>

            {/* Content */}
            <div className="relative max-w-7xl mx-auto px-4 py-16">
                <div className="md:flex justify-around item-center">

                    {/* Info */}
                    <div className="md:mb-10">
                        <h3 className="text-2xl font-bold mb-4">Keneva</h3>
                        <p className="text-sm text-gray-300 leading-relaxed">
                            A108 Adam Street <br />
                            New York, NY 535022 <br /><br />
                            <strong className="text-white">Phone:</strong> +1 5589 55488 55 <br />
                            <strong className="text-white">Email:</strong> info@example.com
                        </p>

                        {/* Social icons */}
                        <div className="flex gap-3 mt-6">
                            {[BsTwitter, BsFacebook, BsInstagram, BsLinkedin].map(
                                (Icon, i) => (
                                    <a
                                        key={i}
                                        href="#"
                                        className="w-9 h-9 flex items-center justify-center border border-gray-500 text-gray-300 hover:text-yellow-500 hover:border-yellow-500 transition"
                                    >
                                        <Icon />
                                    </a>
                                )
                            )}
                        </div>
                    </div>
                    <div className="grid gap-10  grid-cols-1 md:grid-cols-2 lg:grid-cols-4">


                        {/* Useful Links */}
                        <FooterCol
                            title="Useful Links"
                            links={[
                                ["Home", "/"],
                                ["About us", "/about"],
                                ["Services", "/services"],
                                ["Terms of service", "#"],
                                ["Privacy policy", "#"],
                            ]}
                        />

                        {/* Our Services */}
                        <FooterCol
                            title="Our Services"
                            links={[
                                ["Web Design", "#"],
                                ["Web Development", "#"],
                                ["Product Management", "#"],
                                ["Marketing", "#"],
                                ["Graphic Design", "#"],
                            ]}
                        />

                        {/* Hic solutasetp */}
                        <FooterCol
                            title="Hic solutasetp"
                            links={[
                                ["Molestiae accusamus iure", "#"],
                                ["Excepturi dignissimos", "#"],
                                ["Suscipit distinctio", "#"],
                                ["Dilecta", "#"],
                                ["Sit quas consectetur", "#"],
                            ]}
                        />

                        {/* Nobis illum */}
                        <FooterCol
                            title="Nobis illum"
                            links={[
                                ["Ipsam", "#"],
                                ["Laudantium dolorum", "#"],
                                ["Dinera", "#"],
                                ["Trodelas", "#"],
                                ["Flexo", "#"],
                            ]}
                        />
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="relative border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4 py-6 text-center text-sm text-gray-400">
                    <p>
                        © {new Date().getFullYear()}{" "}
                        <span className="text-white font-semibold">Keneva</span>. All
                        Rights Reserved
                    </p>
                    <p className="mt-1">
                        Designed by{" "}
                        <a
                            href="https://bootstrapmade.com/"
                            className="text-yellow-500 hover:underline"
                        >
                            BootstrapMade
                        </a>{" "}
                        • Distributed by{" "}
                        <a
                            href="https://themewagon.com"
                            className="text-yellow-500 hover:underline"
                        >
                            ThemeWagon
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}

/* Reusable column */
const FooterCol = ({ title, links }) => (
    <div>
        <h4 className="font-semibold text-white mb-4">{title}</h4>
        <ul className="space-y-2 text-sm">
            {links.map(([label, to], i) => (
                <li key={i}>
                    <Link
                        to={to}
                        className="text-gray-300 hover:text-yellow-500 transition"
                    >
                        {label}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
);
