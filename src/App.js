import './App.css';
import Banner from './Pages/Banner/Banner';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Banner></Banner>
      <Home></Home>
    </div>
  );
}

export default App;
