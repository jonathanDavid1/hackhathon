import Navbar from '../components/Navbar';
import Footer from '../components/Footer'

const patrocinadores = () => {
  return (
    <>
    <Navbar/>
    <section className="text-gray-600 body-font">
      <div className="container mx-auto px-5 py-24">
        <h1 className="text-3xl text-center font-medium title-font mb-10 text-gray-900">Nuestra Propuesta</h1>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/2">
            <div className="h-full bg-gray-100 p-8 rounded">
              <div className="image-container">
                <img src="/images/FESC.png" alt="Facultad de Estudios Sociales y Ciencias Humanas" className="rounded-full object-cover h-48 w-full" />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-3">FESC</h2>
              <p className="leading-relaxed mb-3">Explora el mundo de la Facultad de Estudios Sociales y Ciencias Humanas. Descubre nuestras diversas carreras y programas académicos.</p>
              <a className="text-indigo-500" href="#">Más información</a>
            </div>
          </div>
          <div className="p-4 md:w-1/2">
            <div className="h-full bg-gray-100 p-8 rounded">
              <div className="image-container">
                <img src="/images/team.jpg" alt="Facultad de Estudios Sociales y Ciencias Humanas" className="rounded-full object-cover h-48 w-full" />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-3">Talento Tech</h2>
              <p className="leading-relaxed mb-3">Programación. Blockchain. Arquitectura en la nube. Inteligencia artificial. Ciberseguridad. ¡Seguimos trabajando para cambiar vidas, impulsar el talento digital ...</p>
              <a className="text-indigo-500" href="#">Más información</a>
            </div>
          </div>
          <div className="p-4 md:w-1/2">
            <div className="h-full bg-gray-100 p-8 rounded">
              <div className="image-container">
                <img src="/images/serendicus.png" alt="Facultad de Estudios Sociales y Ciencias Humanas" className="rounded-full object-cover h-48 w-full"/>
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-3">Serendicus</h2>
              <p className="leading-relaxed mb-3">Explora uno de los lugares con mas futuro en norte de santander</p>
              <a className="text-indigo-500" href="#">Más información</a>
            </div>
          </div>
          <div className="p-4 md:w-1/2">
            <div className="h-full bg-gray-100 p-8 rounded">
              <div className="image-container">
                <img src="/images/mintic.png" alt="Facultad de Estudios Sociales y Ciencias Humanas" className="rounded-full object-cover h-48 w-full" />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-3">MinTic</h2>
              <p className="leading-relaxed mb-3"> promotor de programas y proyectos que fortalecen las competencias ciudadanas digitales de acuerdo con el contexto de cada región y establece alianzas público-privadas ...</p>
              <a className="text-indigo-500" href="#">Más información</a>
            </div>
          </div>
          {/* Repite esta estructura para las otras secciones */}
        </div>
        
      </div>
    </section>
    <Footer/>
    </>
  )
}
export default patrocinadores