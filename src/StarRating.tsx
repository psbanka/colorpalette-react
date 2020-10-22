import React, { Component } from "react"

import Star from "./Star"

type Props = {
  onRate: (rating: number) => void
  rating: number
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
        <p>
          {this.props.rating} of 5 stars
        </p>
      </div>
    )
  }
}
