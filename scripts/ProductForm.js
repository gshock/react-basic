import React, {Component} from 'react';

export default class ProductForm extends Component {
  constructor(props) {
     super(props);
     this.handleSubmit = this.handleSubmit.bind(this);
  }    
  
  handleSubmit(e){
      e.preventDefault();
      console.log('name:' + this.refs.name.value + ' - $' + this.refs.price.value)
      
      var product = {
          name: this.refs.name.value, 
          price: parseInt(this.refs.price.value)
      }
      
      this.props.handleCreate(product)
      
      this.refs.name.value = ""
      this.refs.price.value = ""
  }
  
  render() {
    return (
      <form  onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Product Name" ref="name"/>
        <input type="text" placeholder="Product Price" ref="price"/>
        <br/>
        <button>Create Product</button> 
        <hr/>         
      </form>
    );
  }
}