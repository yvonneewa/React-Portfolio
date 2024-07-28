import "./App.css";
import { Outlet } from "react-router-dom";
import About from './components/About'; 
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';
import '@fortawesome/fontawesome-free/css/all.min.css'; 

function App() {
  return (
    <>
      <header className="bg-gray-100 py-4">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="logo">Yvonnes Portfolio</div>
          <ul className="flex items-center">
          
            <li className="mr-6">
              <a href="/" className="text-gray-700 hover:text-gray-900">
                About Me
              </a>
            </li>
            <li className="mr-6">
              <a href="/portfolio" className="text-gray-700 hover:text-gray-900">
                Portfolio
              </a>
            </li>
            <li className="mr-6">
              <a href="/resume" className="text-gray-700 hover:text-gray-900">
                Resume
              </a>
            </li>
            <li className="mr-6">
              <a href="/contact" className="text-gray-700 hover:text-gray-900">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="footer">
        <p>
          <ul className="social-icons">
            <li>
              <a href="https://github.com/yvonneewa" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i> {/* GitHub icon */}
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/yvonne-wantings-862139317/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i> {/* LinkedIn icon */}
              </a>
            </li>
             <li>
        <a href="https://stackoverflow.com/users/26451099/user26451099" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-stack-overflow"></i> {/* Stack Overflow icon */}
        </a>
      </li>
          </ul>
        </p>
      </footer>
    </>
  );
}

export default App;
