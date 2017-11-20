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
    const isSelected = this.props.isSelected;
    const container = {
      display: 'inline-block',
      position: 'relative',
      textAlign: 'center',
      width: '10em',
      height: '10em',
      border: isSelected ? '1px Solid red' : '1px Solid rgba(0,0,0,0)'
    };
    const imgStyle = {
      width: '70%',
      verticalAlign: 'bottom',
      height: 'auto'
    }

    // crossOrigin ignores CORS for Canvas (yes it needs to be here too)
    return (
      <div style={container} onClick={this.onProductSelect}>
        <img
          style={imgStyle}
          crossOrigin='Anonymous'
          src={product.url}
        />
        <div>{this.formatPrice(product.price)}</div>
      </div>
    );
  }
}
