import React, {Component} from 'react';

export default class Product extends Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      qty : 0
    }
    this.buy = this.buy.bind(this);
    this.show = this.show.bind(this);
  }
  //deprecated
  //getInitialState(){
  //  return {qty:0}  
  //}
  buy(){
    console.log("buy");
    this.setState({qty: this.state.qty + 1});
  }
  
  show(){
    console.log("show");
    this.props.handleShow(this.props.name).bind(this);
  }
  
  render() {
    return (
      <div>
      <p>{this.props.name} - ${this.props.price}</p>
      <button onClick={this.buy}>Buy</button>
      <button onClick={this.show}>Show</button>
      <h3>Qty: {this.state.qty} Item(s)</h3>
      <hr/>
      </div>
    );
  }
}

