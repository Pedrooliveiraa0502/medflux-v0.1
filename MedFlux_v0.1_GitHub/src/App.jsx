import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Placeholder({ title }) {
  return <div className="p-4 text-xl text-center">Página de {title} em construção</div>;
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <header className="bg-blue-600 text-white p-4 shadow">
          <h1 className="text-2xl font-bold">MedFlux</h1>
          <p className="text-sm">Decisões clínicas com segurança e agilidade</p>
        </header>

        <nav className="bg-blue-100 p-2 flex flex-wrap justify-center gap-2 text-blue-700">
          <Link to="/" className="hover:underline">Início</Link>
          <Link to="/gasometria" className="hover:underline">Gasometria</Link>
          <Link to="/prescricao" className="hover:underline">Prescrição</Link>
          <Link to="/reidratacao" className="hover:underline">Reidratação</Link>
          <Link to="/disturbios" className="hover:underline">Distúrbios</Link>
          <Link to="/ferramentas" className="hover:underline">Ferramentas</Link>
          <Link to="/captura" className="hover:underline">Captura de Imagem</Link>
        </nav>

        <main className="flex-grow bg-white p-6">
          <Routes>
            <Route path="/" element={<Placeholder title="Início" />} />
            <Route path="/gasometria" element={<Placeholder title="Gasometria" />} />
            <Route path="/prescricao" element={<Placeholder title="Prescrição" />} />
            <Route path="/reidratacao" element={<Placeholder title="Reidratação" />} />
            <Route path="/disturbios" element={<Placeholder title="Distúrbios Hidroeletrolíticos" />} />
            <Route path="/ferramentas" element={<Placeholder title="Ferramentas Clínicas" />} />
            <Route path="/captura" element={<Placeholder title="Captura de Imagem" />} />
          </Routes>
        </main>

        <footer className="bg-blue-600 text-white text-center p-2 text-sm">
          © 2025 MedFlux – Suporte inteligente à decisão médica
        </footer>
      </div>
    </Router>
  );
}
