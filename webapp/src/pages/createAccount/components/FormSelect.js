import React, { Component } from "react";
import FormGroup from "./FormGroup";
import { default as ReactSelect } from "react-select";
class FormTextBox extends React.Component {
  shouldDisplayError = () => {
    return this.props.showError && this.props.errorText !== "";
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.showFocus) {
      this.nameInput.focus();
    }
  }
  render() {
    const { id, options, placeholder } = this.props;
    return (
      <div>
        <FormGroup
          id={this.props.Id + "-group"}
          showError={this.shouldDisplayError()}
          errorText={this.props.errorText}
        >
          <label htmlFor={this.props.Id}>{this.props.label}</label>
          <ReactSelect id={id} options={options} placeholder={placeholder} />
        </FormGroup>
      </div>
    );
  }
}
export default FormTextBox;