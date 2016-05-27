import React, {Component} from 'react';
import Product from './Product';
import Total from './Total';

export default class ProductList extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            total: 0,
            productList: [
                { key:1, name: "Android", price: 121 },
                { key:2, name: "Apple", price: 122 },
                { key:3, name: "Nokia", price: 123 }
            ]
        }
        this.calculateTotal = this.calculateTotal.bind(this);
    }

    calculateTotal(price) {
        this.setState({ total: this.state.total + price });
        console.log("total: " + this.state.total);
    }

    showProduct(name) {
        return (
            alert("You selected " + name)
        );
    }

    render() {
        var component = this;
        var products = component.state.productList.map(function (product) {
            return (
                <div>
                    <Product name={product.name} price={product.price}
                        handleShow={component.showProduct}
                        handleTotal={component.calculateTotal}/>
                </div>
            )
        })

        return (
            <div>
                {products}
                <Total total={this.state.total}/>
            </div>
        );
    }
}