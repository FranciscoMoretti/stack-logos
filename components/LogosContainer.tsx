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

  return <div className="">{imageListToLogoImages(imageList)}</div>
}
