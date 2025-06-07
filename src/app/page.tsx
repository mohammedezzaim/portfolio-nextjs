import Head from 'next/head';
import { NextPage } from 'next';
import Navbar from '@/app/components/Navbar/Navbar';
import HeroSection from '@/app/components/HeroSection/HeroSection';
import DarkModeToggle from '@/app/components/DarkMode/DarkModeToggle';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutSection from '@/app/components/About/AboutSection';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Mohammed Ezzaim - Portfolio</title>
        <meta name="description" content="Portfolio professionnel de Mohammed Ezzaim - Designer, Developer, Freelancer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Raleway:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <div className="portfolio-app">
        <DarkModeToggle />
        <Navbar />

        <main className="main-content">
          <HeroSection />
          <AboutSection />
        </main>
      </div>
    </>
  );
};

export default Home;