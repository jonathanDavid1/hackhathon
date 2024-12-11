
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import Empleos from '../components/Empleos'

const Home = () => {
  
  return (
    <section className='bg-lightBlue text-black mx-auto grid mt-10'>
      <Head>
        <title >Webcraft</title>
        <meta name="description" content="Descripción de mi aplicación" />
      </Head>
      <Navbar />
      <section className='mt-16'>
        <Empleos />
      </section>
  
      <Footer/>
    </section>
  );
};

export default Home;