import { useState } from 'react'



// per poter utilizzare una dependences bisogna aggiungerla al file interessato(in questo caso app).
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import {Row, Col} from 'react-bootstrap/Row'
import RestaurantNavBar from "./components/comp_navBar"
// Un componente react puo essere anche soltanto una funziona che ritorna/crea una sintassi chiamata jsx
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <RestaurantNavBar/>
    <Container className='container'>
      <Row className='justify-content-center'>
        <Col xs={12} md={8} lg={4}>
        
          <img src='https://placebear.com/300/300' className='w-100'></img>
        </Col>
      </Row>
    </Container>
      <h1 className='text-center'>CIaone</h1>
    </>
  )
}

export default App
