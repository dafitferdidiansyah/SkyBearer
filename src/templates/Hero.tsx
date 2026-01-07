import Link from 'next/link';

// Kita pakai komponen Background bawaan KHUSUS untuk Navbar saja (biar putih)
import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <>
    {/* =========================================
        BAGIAN 1: NAVBAR (MENU ATAS)
        Background Putih Polos, terpisah dari gambar
       ========================================= */}
    <Background color="bg-orange-200">
      <Section yPadding="py-6">
        <NavbarTwoColumns logo={<Logo xl />}>
          <li>
            <Link
              href="#"
              className="font-bold text-gray-800 hover:text-red-600"
            >
              Tentang Game
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="font-bold text-gray-800 hover:text-red-600"
            >
              Download
            </Link>
          </li>
        </NavbarTwoColumns>
      </Section>
    </Background>

    {/* =========================================
        BAGIAN 2: HERO CONTENT (JUDUL & TOMBOL)
        Background Gambar HANYA di area ini
       ========================================= */}
    <div
      className="relative bg-cover bg-center bg-no-repeat"
      style={{
        // Pastikan file gambarnya ada di folder public/assets/images/
        backgroundImage: "url('/SkyBearer/assets/images/hero-bg.jpg')",
      }}
    >
      {/* (Opsional) Lapisan gelap transparan agar tulisan terbaca */}
      <div className="absolute inset-0 bg-white/60"></div>

      {/* Konten Judul & Tombol */}
      <div className="relative z-10">
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
      </div>
    </div>
  </>
);

export { Hero };
