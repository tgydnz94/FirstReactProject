import React from "react";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Col, Container, Row } from "reactstrap";

function App() {
  return (
    <div className="App">
      <div>
        <Container>
          <Row>
              <Navi></Navi>
          </Row>

          <Row>
            <Col xs="3">
            <CategoryList></CategoryList>
            </Col>

            <Col xs="9">
            <ProductList></ProductList>
            </Col>          
          </Row>
        </Container>


      </div>
    </div>
  );
}

export default App;
