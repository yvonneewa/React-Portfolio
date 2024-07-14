import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <header class="bg-gray-100 py-4">
        <nav class="container mx-auto flex justify-between items-center">
          <div class="logo">Yvonne's Blog</div>
          <ul class="flex items-center">
            <li class="mr-6">
              <a href="/" class="text-gray-700 hover:text-gray-900">
                About Me
              </a>
            </li>
            <li class="mr-6">
              <a href="/portfolio" class="text-gray-700 hover:text-gray-900">
                Portfolio
              </a>
            </li>
            <li class="mr-6">
              <a href="/contact" class="text-gray-700 hover:text-gray-900">
                Contact
              </a>
            </li>
            <li class="mr-6">
              <a href="/resume" class="text-gray-700 hover:text-gray-900">
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer class="relative pt-8 pb-6 mt-16">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap items-center md:justify-between justify-center">
            <div class="w-full md:w-6/12 px-4 mx-auto text-center">
              <div class="text-sm text-blueGray-500 font-semibold py-1">
                {" "}
                <a
                  href="https://www.creative-tim.com/product/notus-js"
                  class="text-blueGray-500 hover:text-gray-800"
                  target="_blank"
                >
                  
                </a>{" "}
                {" "}
                <a
                  href="https://www.creative-tim.com"
                  class="text-blueGray-500 hover:text-blueGray-800"
                  target="_blank"
                >
                  {" "}
                 
                </a>
                
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
