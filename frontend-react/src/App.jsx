import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

function App() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-10 flex flex-col ...">
      <Navbar />

      <section className="grid grid-cols-1 sm:grid-cols-2 ...">
        {/* Tarjetas 1 a 4 — sin cambios */}
      </section>

      <Footer />
    </main>
  );
}

export default App;
