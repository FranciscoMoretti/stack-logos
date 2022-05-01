import React from 'react';
import Select, { ActionMeta } from 'react-select';

interface Option     {
  label: string,
  value: string,
}

interface SelectorProps {
  value: Option,
  onChange:(option: Option | null, actionMeta: ActionMeta<Option>) => {
  },
  options: Option[],
}

interface SelectorState {
}

export default class Selector extends React.Component<SelectorProps, SelectorState>  {
  render() {
    return (
      <Select
        isMulti
        value={this.props.value}
        onChange={this.props.onChange}
        options={this.props.options}
      />
    );
  }
}