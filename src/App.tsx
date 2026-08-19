import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { ProjectDetail } from './pages/ProjectDetail';
import { Nav } from './components/layout/Nav';
import { RouteScroll } from './components/layout/RouteScroll';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <div className='flex min-h-dvh flex-col'>
      <RouteScroll />
      <Nav />

      <main className='flex-1'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/proyectos/:slug' element={<ProjectDetail />} />
          {/* Unknown paths fall back to the document itself. */}
          <Route path='*' element={<Home />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
