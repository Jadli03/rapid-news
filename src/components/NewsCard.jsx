import React from 'react'
import Card from 'react-bootstrap/Card';
const NewsCard = ({topnews}) => {
  return (
    // <Card className='my-3 p-3 rounded' style={{marginLeft:'10px', width: '20rem', height: '18rem' }}>
    //   <NavLink to=''>
    //     <Card.Img src={topnews.urlToImage}  variant='top' />
    //   </NavLink>
    //   <Card.Body>
    //     <NavLink to=''>
    //       <Card.Title as='div'>
    //         <strong>
    //           {topnews.title}
    //         </strong>
    //       </Card.Title>
    //     </NavLink>
    //   </Card.Body>
    // </Card>

    <Card className='card-custom' style={{ margin: '10px', width: '21rem' }}>
      <Card.Img style={{height: '250px' }} variant="top" src={topnews.urlToImage} alt={topnews.source.name} />
      <Card.Body>
        <Card.Title style={{textAlign:'justify'}}>{topnews.title.slice(0,150)}</Card.Title>
      </Card.Body>
    </Card>

  )
}

export default NewsCard