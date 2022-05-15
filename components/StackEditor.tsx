import React from 'react';
import LogoImage from './LogoImage'
import Selector, {Option} from './Selector';
import domtoimage from 'dom-to-image';

interface StackEditorProps {
}

interface StackEditorState {
}

import logosData from "../public/logos/logos.json"
import Canvas from './Canvas';
import { ActionMeta, MultiValue } from 'react-select';

export type LogoData = {
  name:string,
  shortname:string,
  url:string,
  files:string[],
}

const logos: Array<LogoData> = logosData;

const selectionOptions = logos.map(logo => ({
  label: logo.name,
  value: logo.name,
}))

const imageOfName = new Map(
  logos.map(logo => {
   return [logo.name, 
    '/logos/logos/' + logo.files[0]]
  })
);

export default class StackEditor extends React.Component<StackEditorProps, StackEditorState>  {
  state: any = {
    selectedOption: [{label: "Adyen", value: "Adyen"}],
  };
  handleChange = (newValue: MultiValue<Option>,  actionMeta: ActionMeta<Option>) => {
    this.setState({ selectedOption: newValue }, () =>
      console.log(`Option selected:`, this.state.selectedOption)
    );
  };
      
  onClickDownloadImage = () => {
    domtoimage.toPng(document.getElementById('canvas'))
      .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'my-image-name.jpeg';
        link.href = dataUrl;
        link.click();
    })
  };

  render() {
    const { selectedOption } = this.state;
    const imageLIst = selectedOption.map(option => {
      return imageOfName.get(option.value);
    })
    return (
      <div className="flex min-h-screen flex-col items-center justify-center py-2">
        <Selector
          value={selectedOption}
          onChange={this.handleChange}
          options={selectionOptions}
        />
        <Canvas imageList={imageLIst}/>
        <button onClick={this.onClickDownloadImage}>
          Download image
        </button>
      </div>
    );
  }
}