import React, { Component } from "react"

import Star from "./Star"

const TOTAL_STARS = 5

type Props = {
  rating: number,
  onRate: (rating: number) => void,
  color: string,
}

export default class StarRating extends Component<Props, {}> {
  render() {
    return (
      <div className="star-rating">
        {Array(5)
          .fill(null)
          .map((n, i) => (
            <Star
              key={i}
              selected={i < this.props.rating}
              onClick={() => this.props.onRate(i + 1)}
            />
          ))}
        <p style={{ color: this.props.color }}>
          {this.props.rating} of {TOTAL_STARS} stars
        </p>
      </div>
    )
  }
}
