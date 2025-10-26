import { useState } from 'react';

export default function BookingForm() {
  const [form, setForm] = useState({ namn: '', foretag: '', email: '', telefon: '', meddelande: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent('Boka demo – AuraVoice');
    const body = encodeURIComponent(
      `Namn: ${form.namn}\nFöretag: ${form.foretag}\nEmail: ${form.email}\nTelefon: ${form.telefon}\n\nMeddelande:\n${form.meddelande}`
    );
    window.location.href = `mailto:sales@auravoice.ai?subject=${subject}&body=${body}`;
  };

  return (
    <section id="boka-demo" className="py-20">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Boka en live‑demo</h2>
          <p className="mt-3 text-gray-600">Fyll i dina uppgifter så återkommer vi med en personlig genomgång och förslag på nästa steg.</p>
          <ul className="mt-6 space-y-3 text-sm text-gray-700">
            <li>• 30 minuter med produktspecialist</li>
            <li>• Anpassad för din bransch och era mål</li>
            <li>• Konkreta KPI:er och ROI‑estimat</li>
          </ul>
        </div>
        <form onSubmit={handleSubmit} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-700">Namn</label>
              <input name="namn" value={form.namn} onChange={handleChange} required className="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500" />
            </div>
            <div>
              <label className="text-sm text-gray-700">Företag</label>
              <input name="foretag" value={form.foretag} onChange={handleChange} required className="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500" />
            </div>
            <div>
              <label className="text-sm text-gray-700">E‑post</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} required className="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500" />
            </div>
            <div>
              <label className="text-sm text-gray-700">Telefon</label>
              <input name="telefon" value={form.telefon} onChange={handleChange} className="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500" />
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm text-gray-700">Meddelande (valfritt)</label>
              <textarea name="meddelande" rows={4} value={form.meddelande} onChange={handleChange} className="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500" />
            </div>
          </div>
          <button type="submit" className="mt-4 w-full rounded-full bg-black text-white px-6 py-3 hover:bg-gray-900 transition">Skicka förfrågan</button>
          <p className="mt-3 text-xs text-gray-500">Genom att skicka samtycker du till vår integritetspolicy.</p>
        </form>
      </div>
    </section>
  );
}
