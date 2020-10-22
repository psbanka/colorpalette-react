import "./stylesheets/Star.scss"

import React, { Component } from "react"

type Props = {
  selected: boolean
  onClick: () => void
}

export default class Star extends Component<Props, {}> {
  render() {
    return (
      <div
        className={this.props.selected ? "star selected" : "star"}
        onClick={this.props.onClick}
      />
    )
  }
}
