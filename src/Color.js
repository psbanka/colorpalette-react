import "./stylesheets/Color.css"

import React, { Component } from "react"
import { hexToChannels, lumFromChannels } from "luum"

import StarRating from "./StarRating"

export default class Color extends Component {
  computeMainColor(backgroundHexColor) {
    const channels = hexToChannels(backgroundHexColor)
    const luminosity = lumFromChannels(channels)
    return luminosity > 0.5 ? "black" : "white"
  }

  changeColor(event) {
    this.props.onChange(event.target.value)
  }

  render() {
    const mainColor = this.computeMainColor(this.props.color)
    return (
      <section className="color" style={{ backgroundColor: this.props.color }}>
        <h1 style={{ color: mainColor }}>{this.props.title}</h1>
        <button onClick={this.props.onRemove}>X</button>
        <div className="color">
          <p style={{ color: mainColor }}>value: {this.props.color}</p>
          <input
            onChange={(event) => this.changeColor(event)}
            type="color"
            value={this.props.color}
          />
        </div>
        <div>
          <StarRating
            color={mainColor}
            rating={this.props.rating}
            onRate={this.props.onRate}
          />
        </div>
      </section>
    )
  }
}
