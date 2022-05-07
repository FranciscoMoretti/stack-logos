import React from "react";

import { fabric } from "fabric";

export default function Canvas({imageList}) {
  const PADDING_PIXELS = 20;
  React.useEffect(() => {
    const canvas = new fabric.Canvas("canvas");
    const numImages = imageList.length
    
    const canvasWidth = canvas.getWidth()
    const canvasHeight = canvas.getHeight()
    const squareOutterBoxSize = Math.min(canvas.getHeight(), canvasWidth/numImages)
    const squareInnerBoxSize = squareOutterBoxSize - (PADDING_PIXELS * 2)

    const initialOutterBoxXPosition = Math.abs(canvasWidth - squareOutterBoxSize*numImages)/2
    const initialOutterBoxYPosition = Math.abs(canvasHeight - squareOutterBoxSize)/2

    for (let i = 0; i < imageList.length; i++) {
      fabric.loadSVGFromURL(imageList[i], function(objects, options) {
        const object = fabric.util.groupSVGElements(objects, options);
        const scaledObject = scaleObjectToSquare(object, squareInnerBoxSize);
        const xExtraSpace = squareOutterBoxSize - scaledObject.getScaledWidth()
        const yExtraSpace = squareOutterBoxSize - scaledObject.getScaledHeight()
        scaledObject.set({
          left: initialOutterBoxXPosition + squareOutterBoxSize*i + xExtraSpace/2,
          top: initialOutterBoxYPosition + yExtraSpace/2,
        });
        canvas.add(scaledObject).renderAll();
      });
    }

    // UseEffect's cleanup function
    return () => {
      canvas.dispose();
    };
  }, [imageList]);

  return (
    <div className="App">
      <canvas id="canvas" width="700" height="300" />
    </div>
  );

  function scaleObjectToSquare(obj: fabric.Object | fabric.Group, squareSize: number) {
    const origHeight = obj.getScaledWidth();
    const origWidth = obj.getScaledHeight();
    const imageScaleFactor = squareSize / Math.max(origHeight, origWidth);
    const newobj = obj.scale(imageScaleFactor);
    return newobj;
  }
}
