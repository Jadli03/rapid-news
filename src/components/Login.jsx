import React, { useState } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import FormContainer from './FormContainer'
import { NavLink }from 'react-bootstrap'
const Login= () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className='login-page'>
    <FormContainer >
      <h1>Sign In</h1>
     
      <Form>
        <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary'>
          Sign In
        </Button>
      </Form>

      <Row className='py-3'>
        <Col>
          New User ?
          <NavLink to='/signup'>
            Register
          </NavLink>
        </Col>
      </Row>
    </FormContainer>
    </div>
  )
}

export default Login