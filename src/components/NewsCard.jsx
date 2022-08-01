import React from 'react'
import Card from 'react-bootstrap/Card';
const NewsCard = ({topnews}) => {
  return (
    <Card className='card-custom' style={{ margin: '10px', width: '21rem' }}>
      <Card.Img style={{height: '250px' }} variant="top" src={topnews.urlToImage} alt={topnews.source.name} />
      <Card.Body>
        <Card.Title style={{textAlign:'justify'}}>{topnews.title.slice(0,150)}</Card.Title>
      </Card.Body>
    </Card>

  )
}

export default NewsCard