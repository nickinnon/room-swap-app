import React, { Component } from 'react';

export default class ProductStamp extends Component {

  constructor(props){
    super(props);

    this.onStampTouch = this.onStampTouch.bind(this);
    this.getPixelCoords = this.getPixelCoords.bind(this);
  }

  onStampTouch(e){
    this.getPixelCoords(e);
  }

  getPixelCoords(e){

    const stamp = e.target;

    const ctx = document.createElement('canvas').getContext('2d');
    ctx.canvas.width = stamp.width;
    ctx.canvas.height = stamp.height;

    const x = e.pageX - stamp.offsetLeft;
    const y = e.pageY - stamp.offsetTop;
    const w = ctx.canvas.width;
    const h = ctx.canvas.height;
    let alpha;

    ctx.drawImage(stamp, 0, 0, w, h);
    alpha = ctx.getImageData(x, y, 1, 1).data[3]; // [0]R [1]G [2]B [3]A

    if( alpha === 0 ) {
      stamp.style.display = 'none';
      document.elementFromPoint(e.clientX, e.clientY).click();
      stamp.style.display = 'inline';
    } else {
      console.log("alpha not 0");
      this.props.updateSelectedProductIndex(this.props.productIndex);
    }
  }

  render() {
    const product = this.props.product;
    const style = {
        margin:0,
        padding:0,
        border: '3px solid red',
        position: 'absolute',
        zIndex: product.index,
        left: `${product.left}%`,
        top: `${product.top}%`,
        height: `${product.height}%`,
        width: 'auto'
    };

    // crossOrigin ignores CORS for Canvas
    return (
      <img
        style={style}
        crossOrigin='Anonymous'
        src={product.url}
        onClick={this.getPixelCoords}
      />
    );
  }
}
