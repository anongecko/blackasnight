import Head from 'next/head';
import { Header } from '../components/ui/Header';
import { HeroSection } from '../components/ui/HeroSection';
import { AboutUs } from '../components/ui/AboutUs';
import { Benefits } from '../components/ui/Benefits';
import { Capabilities } from '../components/ui/Capabilities';
import { Pricing } from '../components/ui/Pricing';
import { ContactUs } from '../components/ui/ContactUs';
import { FAQ } from '../components/ui/FAQ'; // New import
import { Footer } from '../components/ui/Footer';
import { NoScript } from '../components/ui/NoScript';

export default function Home() {
  return (
    <>
      <Head>
        <title>NightGPT - Advanced Cyber Security AI</title>
        <meta name="description" content="NightGPT is a cutting-edge AI specializing in cyber security, making the web a safer place for everyone." />
        <link rel="stylesheet" href="/background-animation.css" />
      </Head>
      <NoScript />
      <Header />
      <main>
        <HeroSection />
        <AboutUs />
        <Benefits />
        <Capabilities />
        <Pricing />
        <ContactUs />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}