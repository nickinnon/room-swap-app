import React, { Component } from 'react';
import getData from './api/getData.js';
import './App.css';

import RoomSwap from './containers/RoomSwap.js';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      room_type : '',
      room_photo : '',
      selectedProductIndex : 0,
      products : []
    }
  }

  componentWillMount() {
    getData.then(res => {
      res.products = this.createInitalProducts(res.products);
      this.setState( Object.assign(res) );
    });
  }

  /*
   * Sort -> dont use z-index
   * -- Allows us to click through DOM using the same layer
   * add first product to similar products
   */
  createInitalProducts(products) {
    return products.sort( (a,b) => {
      return a.index - b.index;
    }).map( (product) => {
      const similar = product.similar_producs;
      const initialProduct = {
        url: product.url,
        price: product.price
      };
      product.similar_producs = [initialProduct].concat(similar)
      return product;
    });
  }

  render() {
    console.log(this.state);
    if (this.state.products.length > 0) {
      return (
        <RoomSwap products={this.state}/>
      )
    }else{
      return (
        <span>loading . . .</span>
      )
    }
  }
}
