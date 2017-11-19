import React, { Component } from 'react';
import getData from './api/getData.js';
import logo from './logo.svg';
import './App.css';

import Room from './containers/Room.js';
import Browse from './containers/Browse.js';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      room_type : '',
      room_photo : '',
      selectedProductIndex : 0,
      products : []
    }

    this.updateProductStamp = this.updateProductStamp.bind(this);
    this.updateSelectedProductIndex = this.updateSelectedProductIndex.bind(this);
  }

  componentWillMount() {
    getData.then(res => {
      const products = this.createInitalProducts(res.products);
      this.setState( Object.assign(res, products) );
    });
  }

  /*
   * Add initial product to similar_producs
   * Can be used if a similar_product is dynamically added
   */
  createInitalProducts(products) {
    const newProducts = products.map( product => {
      const initialProduct = {
        url: product.url,
        price: product.price
      }

      return product.similar_producs.unshift(initialProduct);
    });
    return newProducts;
  }

  /*
   * Updates productStamp in Room
   * NOTE object.assign will accomodate API chnages, such as style changes
   */
  updateProductStamp(newProduct){
    const productIndex = this.state.selectedProductIndex;
    const updatedProduct = this.state.products[productIndex];

    this.setState(Object.assign(updatedProduct, newProduct));
  }

  /*
   * Updates selectedProductIndex
   */
  updateSelectedProductIndex(index){
    this.setState({selectedProductIndex: index})
  }

  render() {
    console.log(this.state)
    if (this.state.products.length > 0) {
      return (
        <section className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>

          <main>
            <Room roomType={this.state.room_type}
                  roomPhoto={this.state.room_photo}
                  products={this.state.products}
                  updateSelectedProductIndex={this.updateSelectedProductIndex}
                  />

            <Browse selectedProduct={this.state.products[this.state.selectedProductIndex]}
                    updateProductStamp={this.updateProductStamp}/>
          </main>
        </section>
      )
    }else{
      return (
        <span>loading . . .</span>
      )
    }
  }
}
