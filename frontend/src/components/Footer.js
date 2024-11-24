import React from 'react';

function Footer() {
  return (
    <footer className="bg-green-600 text-white text-center p-4">
      <p>&copy; 2024 Becof Chemicals Limited. All rights reserved.</p>
      <div className="container mx-auto">
        <p className="font-semibold">Contact Us</p>
        <p>Email: <a href="mailto:becoforganicchemicals@gmail.com" className="underline">becoforganicchemicals@gmail.com</a></p>
        <p>Phone: <a href="tel:+254735283397" className="underline">+254 735 283397</a></p>

        <div className="mt-4">
          <p>Follow Us:</p>
          <ul className="flex space-x-4 mt-2">
            <li><a href="https://x.com/BecofOrganicChe" target="_blank" rel="noopener noreferrer" className="underline">Twitter</a></li>
            <li><a href="https://www.tiktok.com/@becoforganicchemicals" target="_blank" rel="noopener noreferrer" className="underline">TikTok</a></li>
            <li><a href="https://www.facebook.com/becoforganicchemicals" target="_blank" rel="noopener noreferrer" className="underline">Facebook</a></li>
            <li><a href="https://www.youtube.com/@becoforganicchemicals" target="_blank" rel="noopener noreferrer" className="underline">YouTube</a></li>
            <li><a href="https://www.instagram.com/becoforganicchemicals" target="_blank" rel="noopener noreferrer" className="underline">Instagram</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
