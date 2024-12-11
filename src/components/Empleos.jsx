import React, { useState } from 'react';
import Oferta from './Oferta';
import ofertas from '../utils/empleos.json';

const OfertasEmpleo = () => {
  const [servicioSeleccionado, setServicioSeleccionado] = useState('');
  const [paisSeleccionado, setPaisSeleccionado] = useState('');

  // Función para filtrar las ofertas
  const paises = ['USA', 'Germany', 'Canada', 'Australia'];
  const ofertasFiltradas = ofertas.filter((oferta) => {
    return (
      (!servicioSeleccionado || oferta.service === servicioSeleccionado) &&
      (!paisSeleccionado || paises.includes(oferta.country))
    );
  });

  // Opciones de filtro (basadas en los servicios y países disponibles en el JSON)
  const opcionesServicios = [...new Set(ofertas.map((oferta) => oferta.service))];
  const opcionesPaises = [...new Set(ofertas.map((oferta) => oferta.country))];

  return (
    <div className="container mx-auto">
      {/* Selector de servicio */}
      <select
        value={servicioSeleccionado}
        onChange={(e) => setServicioSeleccionado(e.target.value)}
        className="mb-4"
      >
        <option value="">Todos los servicios</option>
        {opcionesServicios.map((servicio) => (
          <option key={servicio} value={servicio}>
            {servicio}
          </option>
        ))}
      </select>

      {/* Selector de país */}
      <select
        value={paisSeleccionado}
        onChange={(e) => setPaisSeleccionado(e.target.value)}
        className="mb-4"
      >
        <option value="">Todos los países</option>
        {opcionesPaises.map((pais) => (
          <option key={pais} value={pais}>
            {pais}
          </option>
        ))}
      </select>

      {/* Lista de ofertas filtradas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {ofertasFiltradas.map((oferta) => (
          <Oferta key={oferta.id} oferta={oferta} />
        ))}
      </div>
    </div>
  );
};

export default OfertasEmpleo;