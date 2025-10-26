import { Phone, Shield, Zap, Clock } from 'lucide-react';

export default function Features() {
  const items = [
    {
      icon: Phone,
      title: 'Naturliga samtal',
      desc: 'AI som förstår intention och för konversationer som känns mänskliga – på svenska och flera språk.'
    },
    {
      icon: Zap,
      title: 'Automatiska bokningar',
      desc: 'Integrerar med din kalender och CRM för att kvalificera och boka rätt möten på sekunder.'
    },
    {
      icon: Shield,
      title: 'Säkerhet i toppklass',
      desc: 'GDPR‑efterlevnad, kryptering och rollbaserad åtkomst för maximal trygghet.'
    },
    {
      icon: Clock,
      title: 'Alltid tillgänglig',
      desc: 'Svarar dygnet runt utan köer. Skalar automatiskt vid hög belastning.'
    }
  ];

  return (
    <section id="funktioner" className="relative py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Byggd för konvertering och kundupplevelse</h2>
          <p className="mt-3 text-gray-600">Snabb att implementera, enkel att anpassa och mätbar från dag ett.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-tr from-violet-500 via-fuchsia-500 to-amber-400 text-white flex items-center justify-center">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
