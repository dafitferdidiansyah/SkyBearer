import { Section } from '../layout/Section';

const TeamMember = (props: { img: string; name: string; role: string }) => (
  <div className="rounded-xl border bg-white p-6 text-center transition-shadow hover:shadow-lg">
    <img
      src={props.img}
      alt={props.name}
      className="mx-auto mb-4 size-24 rounded-full border-2 border-red-500 object-cover"
    />
    <h3 className="text-xl font-bold text-gray-900">{props.name}</h3>
    <div className="text-sm font-medium uppercase tracking-wider text-red-500">
      {props.role}
    </div>
  </div>
);

const Team = () => (
  <Section
    title="Tim Dapur (Credits)"
    description="Dipersembahkan oleh tim hebat dibalik Grill Party."
  >
    {/* Menggunakan grid 2 kolom agar pas untuk 2 orang (atau 3 jika Dafit dihitung 2 slot) */}
    <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
      {/* Anggota 1: Dafit */}
      <TeamMember
        img="/assets/images/avatar.png" // Ganti foto Dafit
        name="Dafit"
        role="Coding & Program Game"
      />

      {/* Anggota 2: Jalal */}
      <TeamMember
        img="/assets/images/avatar.png" // Ganti foto Jalal
        name="Jalal"
        role="Desain Grafis"
      />

       <TeamMember
        img="/assets/images/avatar.png" // Ganti foto Dafit
        name="Andrew"
        role="Coding & Program Game"
      />
    </div>
    
  </Section>
);

export { Team };
