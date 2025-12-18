import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import { FAQ } from './FAQ'; // <--- Import FAQ
import { Footer } from './Footer';
import { Gallery } from './Gallery'; // <--- Import Gallery
import { Hero } from './Hero';
import { Team } from './Team';
import { VerticalFeatures } from './VerticalFeatures';

const Base = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <VerticalFeatures />
    <Gallery /> {/* <--- Pasang Galeri di sini */}
    <Team />
    <FAQ /> {/* <--- Pasang FAQ di sini */}
    <Banner />
    <Footer />
  </div>
);

export { Base };
