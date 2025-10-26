export default function PainPoints() {
  const items = [
    {
      title: 'Missade samtal = tappade affärer',
      desc: 'Upp till 48% av intresserade köpare väljer en konkurrent om de inte får svar direkt.'
    },
    {
      title: 'Hög kostnad att bemanna telefonen',
      desc: 'Skift, vikariat och toppar gör bemanning dyrt – särskilt utanför kontorstid.'
    },
    {
      title: 'Ojämn kvalitet och noll spårbarhet',
      desc: 'Svårt att säkerställa konsekvent bemötande och att mäta vad som faktiskt händer i varje samtal.'
    }
  ];

  return (
    <section id="case" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">3 vanliga utmaningar för företagare</h2>
          <p className="mt-3 text-gray-600">Här är tre hinder som ofta står i vägen för tillväxt – och som vår AI‑receptionist adresserar direkt.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <div key={it.title} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="text-sm text-gray-500">0{i + 1}</div>
              <h3 className="mt-2 text-lg font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{it.desc}</p>
              <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-amber-400 group-hover:w-24 transition-all" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
