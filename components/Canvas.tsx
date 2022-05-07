import React from "react";

import { fabric } from "fabric";

export default function Canvas({imageList}) {
  React.useEffect(() => {
    const canvas = new fabric.Canvas("canvas");
    const numImages = imageList.length
    
    const squareSize = Math.min(canvas.height, canvas.width/numImages)


    for (let i = 0; i < imageList.length; i++) {
      fabric.loadSVGFromURL(imageList[i], function(objects, options) {
        var obj = fabric.util.groupSVGElements(objects, options);
        const origHeight = obj.getScaledWidth()
        const origWidth = obj.getScaledHeight()
        const imageScaleFactor = squareSize / Math.max(origHeight, origWidth)
        const newobj = obj.scale(imageScaleFactor)

        newobj.set({
          left: 0 + squareSize*i,
          top: 0,
        });
        canvas.add(newobj).renderAll();
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
}
