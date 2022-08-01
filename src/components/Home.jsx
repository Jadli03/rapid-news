import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import Loader from '../components/Loader'
import NewsCard from './NewsCard'
import Container from 'react-bootstrap/Container';
import NewsCarousel from  './NewsCarousel'
import NewsPage from './NewsPage'
import {data} from './topheadlinedata'
const HomeScreen = () => {
 
  const [loading, setLoading] = useState(false)
  return (
    <>
    <NewsCarousel topheadlines={data.articles} /> 
      <h1 style={{marginTop: '5px'}}>Top Trending</h1>
      {loading ? (
        <Loader />
      ) : (
        <>
      
        <Container>
        <Row>
            {data.articles.map((topnews) => (
                <Col sm={6} md={6} lg={6} xl={4}>
                  {/* <NavLink style={{textDecoration:'none'}} to={`/newspage/${topnews.title}`}> */}
                <NewsCard topnews={topnews} />
                {/* </NavLink> */}
              </Col>
            ))}

      </Row>
          </Container>
        </>
      )}

    
        
    </>
  )
}

export default HomeScreen