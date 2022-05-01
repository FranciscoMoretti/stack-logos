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

  componentDidUpdate(): void {
    this.updateCanvas();
  };

  updateCanvas() {
      const canvas = this.refs.canvas
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      var imageObj1 = new Image();
      imageObj1.src = this.props.imageList[0];
      imageObj1.onload = function() {
        ctx.drawImage(imageObj1, 0, 0, 200, 200);
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


