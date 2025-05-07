import React from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Facebook,
  Twitter,
  Youtube,
  Instagram,
  Linkedin,
  PlayCircle
} from 'lucide-react';
import { motion } from 'framer-motion';
import Logo from '../assets/Logo.jpg';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, type: 'spring' }
  })
};

function Footer() {
  return (
    <footer className="bg-green-600 text-white px-4 sm:px-6 py-10">
      <div className="container mx-auto max-w-7xl grid gap-6 sm:grid-cols-2 md:grid-cols-4 text-sm sm:text-base">

        {/* Column 1 */}
        <motion.div
          className="bg-white/10 rounded-2xl shadow-lg p-6 space-y-4 text-center md:text-left"
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
        >
          <img src={Logo} alt="Becof Logo" className="h-14 mx-auto md:mx-0" />
          <p className="text-white/90">
            Becof Organic Chemicals Limited is committed to sustainable agriculture and safer chemical solutions.
          </p>
        </motion.div>

        {/* Column 2 */}
        <motion.div
          className="bg-white/10 rounded-2xl shadow-lg p-6 space-y-2"
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
        >
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <div className="flex items-start gap-2 break-all">
            <Mail size={18} className="mt-1" />
            <a href="mailto:becoforganicchemicals@gmail.com" className="hover:underline">becoforganicchemicals@gmail.com</a>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={18} />
            <a href="tel:+254735283397" className="hover:underline">+254 735 283397</a>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={18} />
            <span>Kilifi, Kenya</span>
          </div>
          <div className="flex items-start gap-2 break-all">
            <Globe size={18} className="mt-1" />
            <a
              href="https://becoforganicchemicals.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              becoforganicchemicals.com
            </a>
          </div>
        </motion.div>

        {/* Column 3 */}
        <motion.div
          className="bg-white/10 rounded-2xl shadow-lg p-6 space-y-3"
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
        >
          <h3 className="text-lg font-semibold mb-2">Subscribe to Newsletter</h3>
          <p>Get the latest updates and offers.</p>
          <form className="flex flex-wrap gap-2">
            <input
              type="email"
              placeholder="Email"
              className="px-3 py-2 rounded text-black flex-1 min-w-0 w-full sm:w-auto"
              required
            />
            <button
              type="submit"
              className="bg-white text-green-700 font-semibold px-4 py-2 rounded hover:bg-green-100 transition whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </motion.div>

        {/* Column 4 */}
        <motion.div
          className="bg-white/10 rounded-2xl shadow-lg p-6 space-y-4"
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
        >
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex gap-4 justify-center md:justify-start flex-wrap">
            {[{
              href: "https://x.com/BecofOrganicChe", icon: <Twitter />
            }, {
              href: "https://www.tiktok.com/@becoforganicchemicals", icon: <PlayCircle />
            }, {
              href: "https://www.facebook.com/becoforganicchemicals", icon: <Facebook />
            }, {
              href: "https://www.youtube.com/@becoforganicchemicals", icon: <Youtube />
            }, {
              href: "https://www.instagram.com/becoforganicchemicals", icon: <Instagram />
            }, {
              href: "https://www.linkedin.com/company/becof-organic-chemicals", icon: <Linkedin />
            }].map(({ href, icon }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 hover:text-green-300 transition-transform duration-300"
                aria-label="Social Icon"
              >
                {icon}
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Divider */}
      <hr className="my-8 border-white/30" />

      {/* Bottom Section */}
      <div className="text-center text-xs space-y-3 px-4">
        <p>&copy; {new Date().getFullYear()} Becof Organic Chemicals Limited. All rights reserved.</p>
        <p>
          Need a similar website?{" "}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSc5wB4BdJ-QwCgiV0e_rWxpubjcZTiLgDkt3AFh3B_VPCg7GA/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-semibold hover:text-green-200"
          >
            Contact TEVEXA here
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;




