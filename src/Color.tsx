import "./stylesheets/Color.scss"

import React, { Component } from "react"

import StarRating from "./StarRating"

type Props = {
  color: string
  onRate: (rating: number) => void
  onRemove: () => void
  rating: number
  title: string
}

export default class Color extends Component<Props, {}> {
  render() {
    return (
      <section className="color">
        <h1>{this.props.title}</h1>
        <button onClick={this.props.onRemove}>
          <span role='img' aria-label='close'>✖️</span>
        </button>
        <div className="color" style={{ backgroundColor: this.props.color }} />
        <div>
          <StarRating rating={this.props.rating} onRate={this.props.onRate} />
        </div>
      </section>
    )
  }
}
