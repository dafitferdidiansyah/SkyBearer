import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Pelanggan Sudah Menunggu!"
      subtitle="Ayo bakar satenya sekarang juga."
      button={
        <Link href="#">
          <Button>Mulai Pesta Sate</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
