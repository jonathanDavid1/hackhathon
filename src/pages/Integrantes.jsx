import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'

function Integrantes() {
  return (<>
  <Navbar/>
  
    <section className="text-gray-600 body-font">
      <div className="container mx-auto px-5 py-24">
        <h1 className="text-3xl text-center font-medium title-font mb-10 text-gray-900">Nuestro Equipo</h1>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/4">
            <div className="h-full bg-gray-100 p-8 rounded">
            <img src="/images/jonathan.png" alt="Jonathan Hernández" className="w-24 h-24 rounded-full mx-auto" />
              <h2 className="text-xl font-medium title-font text-gray-900">Jonathan Hernández</h2>
              <p className="text-gray-500">Desarrollador Web Fullstack</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4">
            <div className="h-full bg-gray-100 p-8 rounded">
            <img src="/images/giselle.jpg" alt="Jonathan Hernández" className="w-24 h-24 rounded-full mx-auto" />
              <h2 className="text-xl font-medium title-font text-gray-900">Gisella Imbeth</h2>
              <p className="text-gray-500">Ingeniera en Sistemas</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4">
            <div className="h-full bg-gray-100 p-8 rounded">
            <img src="/images/anderson.jpg" alt="Jonathan Hernández" className="w-24 h-24 rounded-full mx-auto" />
              <h2 className="text-xl font-medium title-font text-gray-900">Anderson Carvajal</h2>
              <p className="text-gray-500">Estudiante</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4">
            <div className="h-full bg-gray-100 p-8 rounded">
            <img src="/images/yesid.jpg" alt="Jonathan Hernández" className="w-24 h-24 rounded-full mx-auto" />
              <h2 className="text-xl font-medium title-font text-gray-900">Yesid Vera</h2>
              <p className="text-gray-500">Abogado</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
}

export default Integrantes;
