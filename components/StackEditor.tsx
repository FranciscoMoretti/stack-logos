import React from 'react';
import LogoImage from './LogoImage'
import Selector from './Selector';


interface StackEditorProps {
}

interface StackEditorState {
}

import logosData from "../public/logos/logos.json"
import Canvas from './Canvas';

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
    selectedOption: {label: "Adyen", value: "Adyen"},
  };
  handleChange = (selectedOption: any) => {
    this.setState({ selectedOption }, () =>
      console.log(`Option selected:`, this.state.selectedOption)
    );
  };
  render() {
    const { selectedOption } = this.state;

    return (
      <div className="flex min-h-screen flex-col items-center justify-center py-2">
        <Selector
          value={selectedOption}
          onChange={this.handleChange}
          options={selectionOptions}
        />
        <Canvas imageList={[imageOfName.get(selectedOption.value)]}/>
        <LogoImage
          image={imageOfName.get(selectedOption.value)}
          name='Placeholder'
        />
      </div>
    );
  }
}