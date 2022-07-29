import React from 'react'
import { Carousel, Container } from 'react-bootstrap'


const NewsCarousel = ({topheadlines}) => {
  return (
    <Container>
    <Carousel style={{marginTop:'100px'}} fade>
         {topheadlines.map((topnews) => (
                <Carousel.Item>
                  <center>
                <img
                style={{ height:'500px'}}
                  className="d-block w-100"
                  src={topnews.urlToImage}
                  alt={topnews.source.name}
                /></center>
                <Carousel.Caption style={{width:'100%', left:'0'}}>
                  <h3 style={{opacity:'0.7', color: 'white', backgroundColor:'black'}}>
                    {topnews.title.slice(0,300)}..</h3>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
    </Carousel>
    </Container>
  )
}

export default NewsCarousel