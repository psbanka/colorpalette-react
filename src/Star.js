import "./stylesheets/Star.scss"

import React, { Component } from "react"

// const Star = ({ selected = false, onClick = f => f }) =>
//   <div className={(selected) ? 'star selected' : 'star'}
//     onClick={onClick} />

// Star.propTypes = {
//   selected: PropTypes.bool,
//   onClick: PropTypes.func
// }

export default class Star extends Component {
  render() {
    return (
      <div
        className={this.props.selected ? "star selected" : "star"}
        onClick={this.props.onClick}
      />
    )
  }
}
