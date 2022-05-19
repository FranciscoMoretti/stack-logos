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
      <LogoImage className="m-3" image={image.path} name={image.name} />
    ))
  }

  function formatLogoImages(logoImageList: Array<JSX.Element>) {
    return <div className="flex w-full flex-row">{logoImageList}</div>
  }

  return formatLogoImages(imageListToLogoImages(imageList))
}
