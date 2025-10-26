import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import BookingForm from './components/BookingForm';

function Footer() {
  return (
    <footer className="border-t border-gray-200 py-8">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
        <div className="flex items-center gap-3">
          <div className="h-7 w-7 rounded-full bg-gradient-to-tr from-violet-500 via-fuchsia-500 to-amber-400" />
          <span>AuraVoice © {new Date().getFullYear()}</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#funktioner" className="hover:text-gray-900">Funktioner</a>
          <a href="#boka-demo" className="hover:text-gray-900">Boka demo</a>
          <a href="#" className="hover:text-gray-900">Integritet</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <BookingForm />
      </main>
      <Footer />
    </div>
  );
}
