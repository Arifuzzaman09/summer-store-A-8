import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaGithub,
} from "react-icons/fa";
import {
    MdEmail,
    MdLocationOn,
    MdPhone,
} from "react-icons/md";

const Footer = () => {
    return (
        <footer className="bg-slate-950 text-gray-300">
            <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-10">

                {/* Logo */}
                <div>
                    <h2 className="text-3xl font-bold text-white">
                        <span className="text-orange-500">Sun</span>
                        <span className="text-green-500">Cart</span>
                    </h2>

                    <p className="mt-4 text-gray-400 leading-7">
                        Your one-stop summer shopping destination. Discover trendy
                        fashion, accessories, skincare and everything you need for
                        the perfect summer.
                    </p>

                    <div className="flex gap-4 mt-6">
                        <a className="bg-white/10 p-3 rounded-full hover:bg-orange-500 transition">
                            <FaFacebookF />
                        </a>

                        <a className="bg-white/10 p-3 rounded-full hover:bg-pink-500 transition">
                            <FaInstagram />
                        </a>

                        <a className="bg-white/10 p-3 rounded-full hover:bg-sky-500 transition">
                            <FaTwitter />
                        </a>

                        <a className="bg-white/10 p-3 rounded-full hover:bg-gray-500 transition">
                            <FaGithub />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-5">
                        Quick Links
                    </h3>

                    <ul className="space-y-3">
                        <li><a className="hover:text-orange-400 transition">Home</a></li>
                        <li><a className="hover:text-orange-400 transition">Shop</a></li>
                        <li><a className="hover:text-orange-400 transition">Categories</a></li>
                        <li><a className="hover:text-orange-400 transition">New Arrivals</a></li>
                        <li><a className="hover:text-orange-400 transition">Contact</a></li>
                    </ul>
                </div>

                {/* Customer */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-5">
                        Customer Care
                    </h3>

                    <ul className="space-y-3">
                        <li>Help Center</li>
                        <li>Shipping</li>
                        <li>Returns</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-5">
                        Contact
                    </h3>

                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <MdLocationOn className="text-2xl text-orange-500" />
                            <span>Khulna, Bangladesh</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <MdPhone className="text-2xl text-green-500" />
                            <span>+880 1300666763</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <MdEmail className="text-2xl text-yellow-500" />
                            <span>support@suncart.com</span>
                        </div>
                    </div>

                    <div className="mt-6">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full rounded-lg bg-white/10 border border-gray-700 px-4 py-3 outline-none focus:border-orange-500"
                        />

                        <button className="w-full mt-3 bg-orange-500 hover:bg-orange-600 py-3 rounded-lg font-semibold transition">
                            Subscribe
                        </button>
                    </div>
                </div>

            </div>

            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-3">

                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} SunCart. All rights reserved.
                    </p>

                    <p className="text-sm text-gray-400">
                        Made with ❤️ using next.js & Tailwind CSS
                    </p>

                </div>
            </div>
        </footer>
    );
};

export default Footer;