import React, { Component } from "react";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Col, Container, Row } from "reactstrap";
import alertify from "alertifyjs";

export default class App extends Component {
  state = {
    currentCategory: "",
    products: [],
    cart: []
  };

  componentDidMount() {
    this.getProducts();
  }

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    console.log(category);
    this.getProducts(category.id);
  };

  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";

    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };

  addToCart = (product) =>{
    let newCart = this.state.cart;
    var addedItem = newCart.find(c=> c.product.id===product.id);
    if(addedItem){
      addedItem.quantity+=1;
    }
    else{
      newCart.push({product:product,quantity:1});
    }

    this.setState({cart:newCart});
    alertify.success(product.productName + "added to cart",3);
  }

  removeFromCart=(product) => {
let newCart = this.state.cart.filter(c=> c.product.id!==product.id)
this.setState({cart:newCart})
  }

  render() {
    let categoryInfo = { title: "Category List" };
    let productInfo = { title: "Product List" };
    return (
      <div className="App">
        <div>
          <Container>
            <Navi
            cart={this.state.cart}
            removeFromCart={this.removeFromCart}
            ></Navi>

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
                  addToCart={this.addToCart}
                  currentCategory={this.state.currentCategory}
                  info={productInfo}
                ></ProductList>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
