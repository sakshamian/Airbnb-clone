import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import SearchPage from './components/SearchPage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Router>
        <Header/>
            
        <Routes>
          <Route path='/search' element={<SearchPage/>} />
          <Route exact path='/' element={<Home/>} />
        </Routes>
        
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
