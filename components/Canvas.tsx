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
      
      const maxWidth = canvas.width / this.props.imageList.length 
      const size = maxWidth < 300 ? maxWidth : 300; 
      for (let i = 0; i < this.props.imageList.length; i++) {
        let imageObj1 = new Image();
        imageObj1.src = this.props.imageList[i];
        imageObj1.onload = function() {
          const height = imageObj1.height * (size/imageObj1.width)
          ctx.drawImage(imageObj1, 0 + size*i, 0, size, height);
        }
      }
      

  };
  render() {
    return (
      <div>
      <canvas ref="canvas" width={700} height={300}> </canvas>
      </div>
    );
  }
}


