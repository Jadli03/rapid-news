
import { Routes,Route } from 'react-router-dom';
import Login from './components/Login'
import Register from  './components/Register'
import NewsCard from './components/NewsCard'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer';
import NewsPage from './components/NewsPage';
import About  from './components/About';


const App = () => {
  return (
    <div className="App">
          <Header />
        <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/about" element={<About />} />

        <Route  path="/newspage/:id" element={<NewsPage />} />
      </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
