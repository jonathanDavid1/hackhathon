import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const acercadenosotros = () => {
  return (
    <>
    <Navbar/>
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Somos un equipo de desarrolladores
          </h1>
          <p className="mb-8 leading-relaxed">
            Conectamos a las empresas con los mejores candidatos para las profesiones buscadas.
          </p>
          <p className="mb-8 leading-relaxed">
            [Aqui ira mucha mas informacion de la mision y objetivos del proyecto]
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Conoce más
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img className="object-cover object-center rounded" alt="hero" src="/images/team.jpg" />
        </div>
      </div>
    </section>
    <Footer/>

    </>
  )
}
export default acercadenosotros