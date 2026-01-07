import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  // Mengatur ukuran logo (Besar/Kecil)
  const size = props.xl ? 44 : 32;
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`inline-flex items-center text-gray-900 ${fontStyle}`}>
      {/* Memanggil file logo.svg dari folder public */}
      <img
        src="/SkyBearer/assets/images/logo.svg"
        alt="Logo"
        width={size}
        height={size}
        className="mr-2" // Memberi jarak sedikit antara logo dan teks
      />

      {AppConfig.site_name}
    </span>
  );
};

export { Logo };
