import React, {Component} from 'react';
import ProductStamp from './../components/ProductStamp.js'

export default class Room extends Component {

  constructor(props) {
    super(props);

    this.state = {
      products: props.products,
      roomPhoto: props.roomPhoto,
      roomType: props.roomType,
      selectedProduct: props.products[0]
    };
  }

  render() {
    const products = this.props.products;
    const roomPhoto =  this.props.roomPhoto;
    const roomType = this.props.roomType;
    const updateSelectedProductIndex = this.props.updateSelectedProductIndex;

    // TODO make responsive
    const roomStyle = {
      display: 'inline-block',
      position: 'relative',
      float:'left', // TODO better styles
      width: '50em',
      height: '50em',
      backgroundSize: 'cover',
      backgroundImage: `url(${roomPhoto})`
    };

    return (
      <section className="room-container" style={roomStyle}>
        {products.map( (product, productIndex) =>
          <ProductStamp
            key={product.id}
            product={product}
            productIndex={productIndex}
            updateSelectedProductIndex={updateSelectedProductIndex}
          />
        )}
      </section>
    );
  }
}
