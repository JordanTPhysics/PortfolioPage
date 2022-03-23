
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Main/>
      <About/>
      <Blog/>
      <Contact/>

      <Navbar/>
    </div>
  );
}

export default App;
