import React, {Component} from 'react';
import Product from './Product';
import Total from './Total';

export default class ProductList extends Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      total : 0
    }
    this.calculateTotal = this.calculateTotal.bind(this);
  }
  
  calculateTotal(price){
      this.setState({total: this.state.total + price});
      alert(this.state.total);
  }
  
  showProduct(name){
      return (
          alert("You selected " + name)
      );
  }
  
  render() {
    return (
      <div>
        <Product name="Android" price={121} 
            handleShow={this.showProduct}
            handleTotal={this.calculateTotal}/>
        <Product name="Nokia" price={99}
            handleShow={this.showProduct}
            handleTotal={this.calculateTotal}/>
        <Product name="Apple" price={249}
            handleShow={this.showProduct}
            handleTotal={this.calculateTotal}/>
        <Total/>
      </div>
    );
  }
}