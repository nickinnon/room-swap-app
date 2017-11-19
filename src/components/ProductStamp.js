import React, { Component } from 'react';

export default class ProductStamp extends Component {

  constructor(props){
    super(props);
    this.onStampTouch = this.onStampTouch.bind(this);
  }

  onStampTouch(){
    this.props.updateSelectedProductIndex(this.props.productIndex)
  }

  render() {
    const product = this.props.product;
    const style = {
        margin:0,
        padding:0,
        position: 'absolute',
        zIndex: product.index,
        left: `${product.left}%`,
        top: `${product.top}%`,
        height: `${product.height}%`,
        width: 'auto'
    };

    return (
      <img style={style} src={product.url} onClick={this.onStampTouch}/>
    );
  }
}
