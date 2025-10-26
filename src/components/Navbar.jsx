import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToBooking = () => {
    const el = document.getElementById('boka-demo');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur bg-white/70 shadow-sm' : 'bg-transparent'
    }`}>
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-violet-500 via-fuchsia-500 to-amber-400" />
          <span className="text-lg font-semibold tracking-tight">AuraVoice</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#funktioner" className="text-gray-600 hover:text-gray-900 transition">Funktioner</a>
          <a href="#case" className="text-gray-600 hover:text-gray-900 transition">Case</a>
          <button onClick={scrollToBooking} className="rounded-full bg-black text-white px-4 py-2 hover:bg-gray-900 transition">
            Boka demo
          </button>
        </nav>
        <button onClick={scrollToBooking} className="md:hidden rounded-full bg-black text-white px-4 py-2">Boka</button>
      </div>
    </header>
  );
}
