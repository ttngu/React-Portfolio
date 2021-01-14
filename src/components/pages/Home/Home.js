import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

function Home() {
  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h1>Welcome</h1>
          <p>
            This is a portfolio
          </p>
        </Container>
      </Jumbotron>
    </div>
  )
}

export default Home

