// components/Footer.js

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const facebookLink = 'https://www.facebook.com/tupaginadefacebook';

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <p className="text-center mb-4">WebCraft</p>
        <div className="flex justify-center space-x-4">
          <a href="mailto:jhernadezcorrea@gmail.com" className="hover:underline">
            jhernadezcorrea@gmail.com
          </a>
          <a href="whatsapp://send?phone=[+573105787397]" className="hover:underline">
            Whatsapp
          </a>
          <a href={facebookLink} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
        </div>
        <p className="text-center mt-4">Ofertas de empleo, las mejores vacantes. Encuentra personal adecuado para tu empresa</p>
        <div className="flex justify-center space-x-4 mt-4">
          <Link href="/terminos-y-condiciones" className="hover:underline">
            Términos y condiciones
          </Link>
          <Link href="/politica-de-privacidad" className="underline">
            Política de privacidad
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;