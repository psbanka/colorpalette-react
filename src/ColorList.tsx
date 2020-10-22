import "./stylesheets/ColorList.scss"

import React, { Component } from "react"

import Color from "./Color"

type ColorType = {
  id: string
  title: string
  color: string
  rating: number
}

type Props = {
  colors: ColorType[]
  onRate: (id: string, rating: number) => void
  onRemove: (id: string) => void
}

export default class ColorList extends Component<Props, {}> {
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
