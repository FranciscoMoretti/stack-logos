import React from "react";

import { fabric } from "fabric";

export default function Canvas({imageList}) {
  React.useEffect(() => {
    const canvas = new fabric.Canvas("canvas");

    const maxWidth = canvas.width / imageList.length 
    const size = maxWidth < canvas.height ? maxWidth : canvas.height; 
    for (let i = 0; i < imageList.length; i++) {
      fabric.loadSVGFromURL(imageList[i], function(objects, options) {
        var obj = fabric.util.groupSVGElements(objects, options);
        const height = obj.height * (size/obj.width)
        obj.set({
          left: 0 + size*i,
          top: 0,
          width: size,
          height: height,
          scaleX: size/obj.width,
          scaleY: size/obj.width,
        });
        canvas.add(obj).renderAll();
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
