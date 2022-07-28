import React from 'react'
import {NavLink} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
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
      <Card.Img variant="top" src={topnews.urlToImage} />
      <Card.Body>
        <Card.Title>{topnews.title.slice(0,100)}</Card.Title>
      </Card.Body>
    </Card>

  )
}

export default NewsCard