import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Loader from '../components/Loader'
import NewsCard from './NewsCard'
import axios from 'axios'
import Container from 'react-bootstrap/Container';
import NewsCarousel from  './NewsCarousel'
const HomeScreen = () => {

 const[loading, setLoading] = useState(true)

  const [topheadlines, setTopHeadlines] = useState([]);

  const fetchTopHeadlines =  () => {
    axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=cb405a88a7eb4e2f9096feab96c45403')
    .then((response) => {
      setTopHeadlines(response.data.articles.filter(top => top.urlToImage != null))
      setLoading(false)
    })
    .catch(err => console.log(err) )
  }
  useEffect(() => {
    fetchTopHeadlines()
  },[])


  return (
    <>
    <NewsCarousel topheadlines={topheadlines} /> 
      <h1 style={{marginTop: '40px'}}>Top Trending</h1>
      {loading ? (
        <Loader />
      ) : (
        <>
        <Container>
          <Row>
            {topheadlines.map((topnews) => (
                <Col sm={6} md={6} lg={6} xl={4}>
                <NewsCard topnews={topnews} />
              </Col>
            ))}
          </Row>
          </Container>
          {/* <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
          /> */}
        </>
      )}
    </>
  )
}

export default HomeScreen