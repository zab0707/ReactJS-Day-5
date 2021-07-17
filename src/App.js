import './App.css';

import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Feature from './components/Feature';
import Cards from './components/Cards';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Jumbotron />
      <Feature />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
