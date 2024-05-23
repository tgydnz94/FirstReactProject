import React from "react";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Col, Container, Row } from "reactstrap";

function App() {
  let categoryInfo = {title: "Category List"}
  let productInfo = {title: "Product List"}

  return (
    <div className="App">
      <div>
        <Container>
          <Row>
              <Navi></Navi>
          </Row>

          <Row>
            <Col xs="3">
            <CategoryList info={categoryInfo}></CategoryList>
            </Col>

            <Col xs="9">
            <ProductList info={productInfo}></ProductList>
            </Col>          
          </Row>
        </Container>


      </div>
    </div>
  );
}

export default App;
