import axios from 'axios';
import { useState, useEffect } from 'react';
import { Routes,Route } from 'react-router-dom';
import Login from './components/Login'
import Register from  './components/Register'
import NewsCard from './components/NewsCard'
import Header from './components/Header'
import Home from './components/Home'


const App = () => {

  const [topheadlines, setTopHeadlines] = useState([]);

  const fetchTopHeadlines = async () => {
    try{
    // const topNews = await axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=cb405a88a7eb4e2f9096feab96c45403')
      //console.log(topNews.data.articles[0])
    }catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    fetchTopHeadlines()
  },[])

  return (
    <div className="App">
          <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
