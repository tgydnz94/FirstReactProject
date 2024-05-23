import React, {Component} from "react";

export default class ProductList extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
    return(
        <div>
            <h3>{this.props.info.title}</h3>

        </div>
    )}
}