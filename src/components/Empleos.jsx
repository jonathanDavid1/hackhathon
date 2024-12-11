import React, { useState } from 'react';
import Oferta from './Oferta';
import ofertas from '../utils/empleos.json';

const OfertasEmpleo = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedService, setSelectedService] = useState(''); // Nuevo estado para el servicio

  // Función para filtrar las ofertas
  const filteredOfertas = ofertas.filter(oferta => {
    return oferta.Country.toLowerCase().includes(selectedCountry.toLowerCase()) &&
           oferta.Service.toLowerCase().includes(selectedService.toLowerCase());
  });

  return (
    <div>
      <h2 className='mx-4 text-lg font-bold'>Mas adelante haremos uso de la API de chatgpt o gemini advance para hacer un analisis mas preciso para conectar mejor empresas con los candidatos</h2>
      <div className="flex mx-auto px-4 mb-3">
        {/* Input para filtrar por país */}
        <input
          type="text"
          placeholder="Filtrar por país"
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
          className="border border-gray-300 p-2 rounded mr-2 flex-grow"
        />

        {/* Nuevo input para filtrar por servicio */}
        <input
          type="text"
          placeholder="Filtrar por profesion"
          value={selectedService}
          onChange={(e) => setSelectedService(e.target.value)}
          className="border border-gray-300 p-2 rounded"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-4">
      {/* Mostrar las ofertas filtradas */}
      {filteredOfertas.map(oferta => (
        <Oferta key={oferta.id} oferta={oferta} />
      ))}
      </div>
    </div>
  );
};

export default OfertasEmpleo;