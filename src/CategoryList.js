import React, {Component} from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component{
    render(){
    return(
        <div>
            <h2>Categories</h2>
            <ListGroup>
            <ListGroupItem>First</ListGroupItem>
            <ListGroupItem>Second</ListGroupItem>
            <ListGroupItem>Third</ListGroupItem>
            </ListGroup>            
        </div>
    )}
}