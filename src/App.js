import React, { Component } from "react";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Col, Container, Row } from "reactstrap";

export default class App extends Component {
  state = {
    currentCategory: "",
    products: []
  };

  componentDidMount(){
    this.getProducts();
  }

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
  };

  getProducts = () => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };

  render() {
    let categoryInfo = { title: "Category List" };
    let productInfo = { title: "Product List" };
    return (
      <div className="App">
        <div>
          <Container>
            <Row>
              <Navi></Navi>
            </Row>

            <Row>
              <Col xs="3">
                <CategoryList
                  currentCategory={this.state.currentCategory}
                  changeCategory={this.changeCategory}
                  info={categoryInfo}
                ></CategoryList>
              </Col>

              <Col xs="9">
                <ProductList 
                products={this.state.products}
                currentCategory={this.state.currentCategory}
                info={productInfo}></ProductList>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
