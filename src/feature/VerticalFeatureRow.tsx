import className from 'classnames';
import { useRouter } from 'next/router';

type IVerticalFeatureRowProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
};

const VerticalFeatureRow = (props: IVerticalFeatureRowProps) => {
  const verticalFeatureClass = className(
    'mt-20',
    'flex',
    'flex-wrap',
    'items-center',
    {
      'flex-row-reverse': props.reverse,
    },
  );

  const router = useRouter();

  return (
    <div className={verticalFeatureClass}>
      <div className="w-full text-center sm:w-1/2 sm:px-6">
        <h3 className="text-3xl font-semibold text-gray-900">{props.title}</h3>
        <div className="mt-6 text-xl leading-9">{props.description}</div>
      </div>

      {/* Container Lingkaran Luar (Border Merah) */}
      <div className="flex w-full justify-center p-6 sm:w-1/2">
        <div className="rounded-full">
          <img
            src={`${router.basePath}${props.image}`}
            alt={props.imageAlt}
            // TAMBAHAN PENTING:
            // 1. rounded-full: Biar gambarnya bulat
            // 2. object-cover: Biar gambar tidak gepeng kalau aslinya persegi panjang
            // 3. w & h: Ukuran disamakan biar jadi lingkaran sempurna (sesuaikan angkanya)
            className="size-70 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export { VerticalFeatureRow };
