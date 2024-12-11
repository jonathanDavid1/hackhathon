// components/Oferta.js
const Oferta = ({ oferta }) => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold">Pais: {oferta.Country}</h3>
        <p className="text-gray-700">Descripcion: {oferta.Service}</p>
        <p className="text-gray-500">Metodo de Pago: {oferta['Payment Method']}</p>
      </div>
    );
  };
  
  export default Oferta;