import React, { Component } from "react"

import Star from "./Star"

export default class StarRating extends Component {
  render() {
    return (
      <div className="star-rating">
        {Array(5)
          .fill()
          .map((n, i) => (
            <Star
              key={i}
              selected={i < this.props.rating}
              onClick={() => this.props.onRate(i + 1)}
            />
          ))}
        <p style={{ color: this.props.color }}>
          {this.props.rating} of {this.props.totalStars} stars
        </p>
      </div>
    )
  }
}
