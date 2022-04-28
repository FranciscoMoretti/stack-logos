import React from 'react';
import Select from 'react-select';
import logosData from "../logos/logos.json"

export type LogoData = {
  name:string,
  shortname:string,
  url:string,
  files:string[],
}

const logos: Array<LogoData> = logosData;

const options = logos.map(logo => ({
  label: logo.name,
  value: logo.name,
}))


export default class Selector extends React.Component {
  state = {
    selectedOption: null,
  };
  handleChange = (selectedOption) => {
    this.setState({ selectedOption }, () =>
      console.log(`Option selected:`, this.state.selectedOption)
    );
  };
  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      />
    );
  }
}