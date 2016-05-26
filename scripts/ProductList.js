import React, {Component} from 'react';
import Product from './Product';
import Total from './Total';

export default class ProductList extends Component {
  showProduct(name){
      return (
          alert("You selected " + name)
      );
  }
  
  render() {
    return (
      <div>
        <Product name="Android" price="121" 
            handleShow={this.showProduct}/>
        <Product name="Nokia" price="99"
            handleShow={this.showProduct}/>
        <Product name="Apple" price="249"
            handleShow={this.showProduct}/>
        <Total/>
      </div>
    );
  }
}