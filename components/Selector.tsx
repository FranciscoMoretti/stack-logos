import React from 'react';
import Select from 'react-select';

interface Option     {
  label: string,
  value: string,
}

interface SelectorProps {
  options: Option[],
}

interface SelectorState {
  selectedOption: Option,
}

export default class Selector extends React.Component<SelectorProps, SelectorState>  {
  state: SelectorState = {
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
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={this.props.options}
      />
    );
  }
}