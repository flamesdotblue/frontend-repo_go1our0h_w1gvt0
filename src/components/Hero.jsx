import Spline from '@splinetool/react-spline';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollToBooking = () => {
    const el = document.getElementById('boka-demo');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative min-h-[90vh] pt-28 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 flex flex-col items-center text-center gap-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-3 py-1 text-sm text-gray-700 shadow-sm">
          <Sparkles className="h-4 w-4 text-violet-600" />
          <span>3D AI röst‑receptionist</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight">
          En futuristisk AI‑receptionist som fångar fler leads – automatiskt
        </h1>
        <p className="max-w-2xl text-gray-600 md:text-lg">
          Interaktiv 3D‑upplevelse med en intelligent röstagent som svarar direkt, kvalificerar och bokar.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <button onClick={scrollToBooking} className="rounded-full bg-black text-white px-6 py-3 text-sm md:text-base hover:bg-gray-900 transition">
            Boka en personlig demo
          </button>
          <a href="#funktioner" className="rounded-full bg-white text-gray-900 px-6 py-3 text-sm md:text-base border border-gray-200 hover:bg-gray-50 transition">
            Se hur det fungerar
          </a>
        </div>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-left w-full">
          {[
            ['<1s', 'Svarstid'],
            ['24/7', 'Tillgänglighet'],
            ['+32%', 'Fler bokade demos'],
            ['-40%', 'Mindre supporttryck'],
          ].map(([stat, label]) => (
            <div key={label} className="rounded-xl border border-gray-200 bg-white/70 p-4 backdrop-blur">
              <div className="text-2xl font-semibold">{stat}</div>
              <div className="text-sm text-gray-600">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
