import React, { Component } from 'react';

export default class ProductListItem extends Component {

  constructor(props){
    super(props);

    this.onProductSelect = this.onProductSelect.bind(this);
  }

  onProductSelect(e){
    this.props.updateProductStamp(this.props.product);
  }

  formatPrice(price){
    price = `$${String(price)}`;
    return price = price.includes('.') ? price : price + '.00';
  }

  render() {
    const product = this.props.product;
    const container = {
      display: 'inline-block',
      position: 'inherit',
      textAlign: 'center',
      width: '10em',
      height: '10em'
    };
    const imgStyle = {
      width: '70%',
      height: 'auto'
    }

    return (
      <div style={container} onClick={this.onProductSelect}>
        <img style={imgStyle} src={product.url}/>
        <div>{this.formatPrice(product.price)}</div>
      </div>
    );
  }
}
