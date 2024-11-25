import React from 'react';

function Footer() {
  return (
    <footer className="bg-green-600 text-white text-center p-6">
      <div className="container mx-auto">
        <div className="flex-wrap justify-center space-y-2">
          <p>Email:{" "} <a href="mailto:becoforganicchemicals@gmail.com" className="hover:underline">becoforganicchemicals@gmail.com</a></p>
          <p>Phone:{" "} <a href="tel:+254735283397" className="hover:underline">+254 735 283397</a></p>
          <p>Location: Kilifi, Kenya</p>
          <p>Website:{" "} <a href="https://becoforganicchemicals.com" target="_blank" rel="noopener noreferrer" className="hover:underline">becoforganicchemicals.com</a></p>
        </div>

        <div className="mt-6 text-center">
          <p>Follow Us:</p>
          <ul className="flex flex-wrap justify-center space-x-3 mt-2">
            <li><a href="https://x.com/BecofOrganicChe" target="_blank" rel="noopener noreferrer" className="hover:underline">X</a></li>
            <li><a href="https://www.tiktok.com/@becoforganicchemicals" target="_blank" rel="noopener noreferrer" className="hover:underline">TikTok</a></li>
            <li><a href="https://www.facebook.com/becoforganicchemicals" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a></li>
            <li><a href="https://www.youtube.com/@becoforganicchemicals" target="_blank" rel="noopener noreferrer" className="hover:underline">YouTube</a></li>
            <li><a href="https://www.instagram.com/becoforganicchemicals" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a></li>
            <li><a href="https://www.linkedin.com/company/becof-organic-chemicals" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a></li>
          </ul>
        </div>

        <div className="mt-6 text-center">
          <p>&copy; {new Date().getFullYear()} Becof Organic Chemicals Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
