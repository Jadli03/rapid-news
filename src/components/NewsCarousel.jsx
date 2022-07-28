import React from 'react'
import { Carousel} from 'react-bootstrap'


const NewsCarousel = ({topheadlines}) => {
  return (
    <Carousel style={{marginTop:'100px'}} fade>
         {topheadlines.map((topnews) => (
                <Carousel.Item>
                  <center>
                <img
                style={{ height:'500px'}}
                  className="d-block w-100"
                  src={topnews.urlToImage}
                /></center>
                <Carousel.Caption>
                  <h3 style={{opacity:'0.7', color: 'white', backgroundColor:'black'}}>{topnews.title.slice(0,40)}..</h3>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
    </Carousel>
  )
}

export default NewsCarousel