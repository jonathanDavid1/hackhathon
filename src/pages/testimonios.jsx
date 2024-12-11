import Navbar from '../components/Navbar';
import Footer from '../components/Footer'


const testimonios = () => {
    const testimonios = [
        {
          nombre: 'María',
          profesion: 'Diseñadora Gráfica',
          testimonio: 'Nunca pensé que encontraría un trabajo tan bueno desde mi casa. Gracias a webcraft, pude mostrar mi portafolio a empresas de todo el mundo y conseguir un cliente fijo. La flexibilidad horaria me permite compaginar mi trabajo con mi vida personal.',
        },
        {
            nombre: 'Juan',
            profesion: 'Desarrollador web',
            testimonio: '"Después de varios meses buscando empleo sin éxito, decidí crear un perfil en webcraft. En menos de una semana, recibí varias ofertas de trabajo. La plataforma me permitió destacar mis habilidades técnicas y encontrar un trabajo que se ajustaba perfectamente a mi perfil."',
          },
          {
            nombre: 'Ana',
            profesion: 'Asistente Virtual',
            testimonio: 'Como recién graduada, me costaba mucho conseguir mi primera oportunidad laboral. Gracias a webcratf, pude encontrar un trabajo como asistente virtual y ganar experiencia. La plataforma me proporcionó las herramientas necesarias para desarrollar mis habilidades y crecer profesionalmente.',
          },
        
        // ... otros testimonios
      ];
  return (
    <>
     <Navbar />
     <section className="text-gray-600 body-font">
      <div className="container mx-auto px-5 py-24">
        <h1 className="text-3xl text-center font-medium title-font mb-10 text-gray-900">Testimonios</h1>
        <div className="flex flex-wrap -m-4">
          {testimonios.map((testimonio, index) => (
            <div key={index} className="p-4 md:w-1/2">
              <div className="h-full bg-gray-100 p-8 rounded">
                <p className="leading-relaxed mb-3">{testimonio.testimonio}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 mr-4 bg-indigo-500 text-white rounded-full flex items-center justify-center">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-gray-900 text-lg title-font font-medium">{testimonio.nombre}</h2>
                    <h3 className="text-gray-500">{testimonio.profesion}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
     <Footer/>
    </>
  )
}
export default testimonios