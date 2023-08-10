import React from "react";

class Input extends React.Component {
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Search Location..."
          value={this.props.location}
          onChange={this.props.onChangeInput}
        />
      </div>
    );
  }
}

export default Input;
