import React from 'react'
import Selector, { Option } from './Selector'
import domtoimage from 'dom-to-image'
import logosData from '../public/logos/logos.json'
import Canvas from './Canvas'
import { ActionMeta, MultiValue } from 'react-select'
import LogosContainer from './LogosContainer'
import { ImageFile, LogoData } from './LogoTypes'

interface StackEditorProps {}

interface StackEditorState {
  selectedOptions: Array<Option>
}

const logos: Array<LogoData> = logosData

const selectionOptions: Array<Option> = logos.map((logo) => ({
  label: logo.name,
  value: logo.name,
}))

const imageOfName = new Map(
  logos.map((logo) => {
    return [logo.name, '/logos/logos/' + logo.files[0]]
  })
)

export default class StackEditor extends React.Component<
  StackEditorProps,
  StackEditorState
> {
  state: StackEditorState = {
    selectedOptions: [{ label: 'Adyen', value: 'Adyen' }],
  }
  handleChange = (
    newValue: MultiValue<Option>,
    actionMeta: ActionMeta<Option>
  ) => {
    this.setState({ selectedOptions: [...newValue] }, () =>
      console.log(`Options selected:`, this.state.selectedOptions)
    )
  }

  onClickDownloadImage = () => {
    let canvas = document.getElementById('canvas')
    if (canvas) {
      domtoimage.toPng(canvas).then(function (dataUrl) {
        var link = document.createElement('a')
        link.download = 'my-image-name.jpeg'
        link.href = dataUrl
        link.click()
      })
    }
  }

  render() {
    const { selectedOptions } = this.state
    let imageList: Array<ImageFile> = []
    for (const option of selectedOptions) {
      let path = imageOfName.get(option.value)
      if (path) {
        imageList.push({
          name: option.value,
          path: path,
        })
      }
    }

    return (
      <div className="flex min-h-screen flex-col items-center justify-center py-2">
        <Selector
          value={selectedOptions}
          onChange={this.handleChange}
          options={selectionOptions}
        />
        <LogosContainer imageList={imageList} />
        <Canvas imageList={imageList} />
        <button onClick={this.onClickDownloadImage}>Download image</button>
      </div>
    )
  }
}
