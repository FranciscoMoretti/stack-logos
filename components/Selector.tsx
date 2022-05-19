import React from 'react'
import Select, { ActionMeta, GroupBase, MultiValue, Props } from 'react-select'

export interface Option {
  label: string
  value: string
}

interface SelectorProps {
  value: MultiValue<Option>
  onChange: (
    newValue: MultiValue<Option>,
    actionMeta: ActionMeta<Option>
  ) => void
  options: Option[]
}

interface SelectorState {}

function CustomSelector<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(props: Props<Option, IsMulti, Group>) {
  return (
    <Select
      className="w-full"
      instanceId="select"
      {...props}
      theme={(theme) => ({ ...theme, borderRadius: 0 })}
    />
  )
}

export default class Selector extends React.Component<
  SelectorProps,
  SelectorState
> {
  render() {
    return (
      <CustomSelector
        isMulti
        value={this.props.value}
        onChange={this.props.onChange}
        options={this.props.options}
      />
    )
  }
}
