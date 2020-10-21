import "./stylesheets/ColorList.scss"

import React, { Component } from "react"

import Color from "./Color"

export default class ColorList extends Component {
  render() {
    return (
      <div className="color-list">
        {this.props.colors.length === 0 ? (
          <p>No Colors Listed. (Add a Color)</p>
        ) : (
          this.props.colors.map((color) => (
            <Color
              key={color.id}
              {...color}
              onRate={(rating) => this.props.onRate(color.id, rating)}
              onRemove={() => this.props.onRemove(color.id)}
            />
          ))
        )}
      </div>
    )
  }
}
