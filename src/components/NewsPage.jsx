import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Loader from '../components/Loader'
import axios from 'axios'
import Container from 'react-bootstrap/Container';
import NewsCarousel from  './NewsCarousel'
import {data} from './topheadlinedata'
import { useParams } from 'react-router-dom';
const NewsPage = () => {
  const {id} = useParams();

  const [loading, setLoading] = useState(false)
  const [topheadlines, setTopHeadlines] = useState(data.articles)


  return (
    <>
    <NewsCarousel topheadlines={topheadlines} /> 
      <h1 style={{marginTop: '5px'}}>Top Trending {id}</h1>
      {loading ? (
        <Loader />
      ) : (
        <>
      
        <Container>
        <Row>
            {topheadlines[0].content}
      </Row>
          </Container>
        </>
      )}

    
        
    </>
  )
}

export default NewsPage;