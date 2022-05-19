import React from 'react'
import LogoImage from './LogoImage'

export default function LogosContainer({
  imageList,
}: {
  imageList: any
}): JSX.Element {
  const PADDING_PIXELS = 20

  function imageListToLogoImages(imageList: Array<string>) {
    return imageList.map((image) => <LogoImage image={image} name={image} />)
  }

  return <div className="App">{imageListToLogoImages(imageList)}</div>

  function scaleObjectToSquare(
    obj: fabric.Object | fabric.Group,
    squareSize: number
  ) {
    const origHeight = obj.getScaledWidth()
    const origWidth = obj.getScaledHeight()
    const imageScaleFactor = squareSize / Math.max(origHeight, origWidth)
    const newobj = obj.scale(imageScaleFactor)
    return newobj
  }
}
