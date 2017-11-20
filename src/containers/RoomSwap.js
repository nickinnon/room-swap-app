import React, { Component } from 'react';
import Room from './Room.js';
import Browse from './Browse.js';

export default class RoomSwap extends Component {
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

  componentDidMount(){
    this.setState(this.props.products);
  }

  updateProductStamp(newProduct){
    const productIndex = this.state.selectedProductIndex;
    const updatedProduct = this.state.products[productIndex];

    this.setState(Object.assign(updatedProduct, newProduct));
  }

  updateSelectedProductIndex(index){
    this.setState({selectedProductIndex: index})
  }

  render() {
    // console.log(this.state)
    if (this.state.products.length > 0) {
      return (
        <section className="App">
          <main>
            <Room
              roomType={this.state.room_type}
              roomPhoto={this.state.room_photo}
              products={this.state.products}
              updateSelectedProductIndex={this.updateSelectedProductIndex}
            />

            <Browse
              selectedProduct={this.state.products[this.state.selectedProductIndex]}
              updateProductStamp={this.updateProductStamp}
            />
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
