import { Section } from '../layout/Section';

const FAQItem = (props: { question: string; answer: string }) => (
  <div className="mb-6 border-b border-gray-200 pb-4">
    <h3 className="mb-2 text-lg font-bold text-gray-900">
      Q: {props.question}
    </h3>
    <p className="text-gray-600">A: {props.answer}</p>
  </div>
);

const FAQ = () => (
  <Section
    title="Tanya Jawab (FAQ)"
    description="Hal-hal yang sering ditanyakan oleh calon Chef."
  >
    <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
      <FAQItem
        question="Apakah game ini gratis?"
        answer="Ya! Grill Party bisa dimainkan 100% Gratis. Item kosmetik opsional bisa dibeli di dalam game."
      />
      <FAQItem
        question="Bisa main bareng teman (Multiplayer)?"
        answer="Tentu saja! Kamu bisa mabar hingga 4 orang dalam satu dapur via koneksi WiFi atau Online."
      />
      <FAQItem
        question="Spesifikasi HP minimum apa?"
        answer="Game ini ringan! Android 5.0 ke atas dengan RAM 2GB sudah lancar jaya untuk membakar sate."
      />
    </div>
  </Section>
);

export { FAQ };
