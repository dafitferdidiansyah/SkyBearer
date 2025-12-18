import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Cara Menjadi Juragan Sate"
    description="Gameplay simpel tapi menantang. Siapkan jarimu!"
  >
    {/* Fitur 1: Core Loop */}
    <VerticalFeatureRow
      title="Klik & Geser (Drag & Drop)"
      description="Kontrol yang mudah! Ambil tusuk sate, geser ke panggangan, dan sajikan ke pelanggan sebelum mereka marah."
      image="/assets/images/feature.svg"
      imageAlt="Ilustrasi Gameplay"
    />

    {/* Fitur 2: USP Makanan Enak */}
    <VerticalFeatureRow
      title="Visual Makanan Lezat"
      description="Nikmati grafik sate ayam, kambing, dan bumbu kacang yang terlihat nyata dan bikin lapar pemainnya."
      image="/assets/images/feature2.svg"
      imageAlt="Ilustrasi Sate Enak"
      reverse
    />

    {/* Fitur 3: Arcade Challenge */}
    <VerticalFeatureRow
      title="Tantangan Puzzle Arcade"
      description="Setiap level punya tingkat kesulitan berbeda. Atur strategi membakar agar sate tidak gosong!"
      image="/assets/images/feature3.svg"
      imageAlt="Ilustrasi Tantangan"
    />
  </Section>
);

export { VerticalFeatures };
