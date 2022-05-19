import React from 'react'
import LogoImage from './LogoImage'
import { ImageFile } from './LogoTypes'

export default function LogosContainer({
  imageList,
}: {
  imageList: Array<ImageFile>
}): JSX.Element {
  const PADDING_PIXELS = 20

  function imageListToLogoImages(imageList: Array<ImageFile>) {
    return imageList.map((image) => (
      <LogoImage image={image.path} name={image.name} />
    ))
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
