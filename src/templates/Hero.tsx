import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-red-50">
    {' '}
    {/* Warna merah muda/hangat api */}
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="#" className="font-bold text-gray-800 hover:text-red-600">
            Tentang Game
          </Link>
        </li>
        <li>
          <Link href="#" className="font-bold text-gray-800 hover:text-red-600">
            Download
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>
    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Waktunya Membakar\n'}
            <span className="text-red-600">Sate Terenak!</span>
          </>
        }
        description="Grill Party: Game Puzzle Arcade yang bikin lapar. Cukup KLIK dan GESER untuk memanggang sate pesanan pelanggan."
        button={
          <Link href="#">
            <Button xl>Mainkan Sekarang</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
