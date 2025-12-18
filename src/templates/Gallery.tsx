import { Section } from '../layout/Section';

const GalleryImage = (props: { src: string; alt: string }) => (
  <div className="min-w-[85%] shrink-0 snap-center first:pl-4 last:pr-4 md:min-w-[40%]">
    <div className="rounded-2xl border-2 border-red-100 bg-white p-2 shadow-xl">
      <img
        src={props.src}
        alt={props.alt}
        className="h-64 w-full rounded-xl object-cover transition-transform duration-300 hover:scale-105"
      />
    </div>
  </div>
);

const Gallery = () => (
  <Section
    title="Galeri Keseruan"
    description="Intip aksi seru para juragan sate saat melayani pelanggan!"
  >
    {/* Container Carousel (Scroll Samping) */}
    <div className="hide-scrollbar mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-8">
      {/* Gambar 1 */}
      <GalleryImage
        src="/assets/images/feature.svg" // Ganti dengan screenshot gameplay 1
        alt="Gameplay Masak"
      />

      {/* Gambar 2 */}
      <GalleryImage
        src="/assets/images/feature2.svg" // Ganti dengan screenshot gameplay 2
        alt="Koleksi Sate"
      />

      {/* Gambar 3 */}
      <GalleryImage
        src="/assets/images/feature3.svg" // Ganti dengan screenshot gameplay 3
        alt="Party Mode"
      />

      {/* Gambar 4 */}
      <GalleryImage
        src="/assets/images/feature.svg" // Ganti dengan screenshot gameplay 4
        alt="Level Boss"
      />
    </div>

    <div className="mt-2 text-center text-sm text-gray-400">
      (Geser ke samping untuk melihat lebih banyak)
    </div>
  </Section>
);

export { Gallery };
