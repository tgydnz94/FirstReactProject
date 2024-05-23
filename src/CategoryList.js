import React, {Component} from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component{
    constructor(props){
        super(props);
        state:{}
    }
    render(){
    return(
        <div>
            <h2>{this.props.info.title}</h2>
            <ListGroup>
            <ListGroupItem>First</ListGroupItem>
            <ListGroupItem>Second</ListGroupItem>
            <ListGroupItem>Third</ListGroupItem>
            </ListGroup>            
        </div>
    )}
}