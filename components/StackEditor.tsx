import React from 'react';
import Selector from './Selector';


interface StackEditorProps {
}

interface StackEditorState {
}

import logosData from "../logos/logos.json"

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

export default class StackEditor extends React.Component<StackEditorProps, StackEditorState>  {
  state: any = {
    selectedOption: {label: "Placeholder", value: "Placeholder"},
  };
  handleChange = (selectedOption: any) => {
    this.setState({ selectedOption }, () =>
      console.log(`Option selected:`, this.state.selectedOption)
    );
  };
  render() {
    const { selectedOption } = this.state;

    return (
      <Selector
        value={this.state.selectedOption}
        onChange={this.handleChange}
        options={selectionOptions}
      />
    );
  }
}