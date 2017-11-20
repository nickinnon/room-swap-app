import React, { Component } from 'react';
import ProductListItem from './../components/ProductListItem.js'

export default class Browse extends Component {

  constructor(props){
    super(props);
  }

  render() {
    const selectedProduct = this.props.selectedProduct;
    const similarProducs = selectedProduct.similar_producs;

    const browseStyle = {
      display: 'inline-block',
      position: 'relative',
      verticalAlign: 'top',
      height: '50em'
    };

    if(!selectedProduct || similarProducs.length <= 1){
      return (
        <section style={browseStyle}>
          <h2> {selectedProduct.type} </h2>
          <span> No Similar Products Found . . .</span>
        </section>
      )
    }

    return (
      <section style={browseStyle}>
        <h2> {selectedProduct.type} </h2>
        {similarProducs.map( product =>
          <ProductListItem
            key={product.url}
            product={product}
            isSelected={product.url === selectedProduct.url}
            updateProductStamp={this.props.updateProductStamp}
          />
        )}
      </section>
    );
  }
}
