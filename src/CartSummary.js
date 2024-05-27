import React, { Component } from "react";

import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
  NavItem,
  NavLink,
} from "reactstrap";

export default class CartSummary extends Component {
  renderSummary() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Your Cart
        </DropdownToggle>
        {this.props.cart.map((cartItem) => (
          <DropdownItem key={cartItem.product.id}>
            <Badge
              color="danger"
              onClick={() => this.props.removeFromCart(cartItem.product)}
            >
              x
            </Badge>
            {cartItem.product.productName}
            <Badge color="success">{cartItem.quantity}</Badge>
          </DropdownItem>
        ))}
        <DropdownMenu right></DropdownMenu>
      </UncontrolledDropdown>
    );
  }

  renderEmptyCart() {
    return <NavItem>Empty Cart</NavItem>;
  }
  render() {
    return (
      <div>
        {this.props.cart.length > 0
          ? this.renderSummary()
          : this.renderEmptyCart}
      </div>
    );
  }
}
