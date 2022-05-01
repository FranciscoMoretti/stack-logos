import React from "react";

interface CanvasProps {
  imageList: any,
}

interface CanvasState {
}

export default class Canvas extends React.Component<CanvasProps, CanvasState>  {
  componentDidMount(): void {
    this.updateCanvas();
  };

  updateCanvas() {
      const ctx = this.refs.canvas.getContext('2d');

      var imageObj1 = new Image();
      imageObj1.src = this.props.imageList[0];
      imageObj1.onload = function() {
        ctx.drawImage(imageObj1,0,0, 200, 200);
      }
  };
  render() {
    return (
      <div>
      <canvas ref="canvas" width={300} height={300}> </canvas>
      </div>
    );
  }
}


