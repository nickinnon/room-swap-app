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

  /*
   * Checks if pixel alpha val === 0 -> selects component underneath
   * Currently only works if room is at (0,0) in DOM.
   * it will also select the first product on the stack if there is no product under it
   * This is a pretty nasty fuction and should be refacored.
   * TODO break into separate component.
   */
  getPixelCoords(e){
    this.props.updateSelectedProductIndex(this.props.productIndex);
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
    alpha = ctx.getImageData(x, y, 1, 1).data[3]; // [R,G,B,A]

    if( alpha === 0 ) {
      console.log('Click Through')
      e.target.style.display = 'none';
      document.elementFromPoint(e.clientX, e.clientY).click();
      e.target.style.display = 'inline';
    }
  }

  render() {
    const product = this.props.product;
    const style = {
        margin:0,
        padding:0,
        border: '3px solid red',
        position: 'absolute',
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
