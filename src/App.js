import "./stylesheets/APP.css"

import React, { Component } from "react"

import AddColorForm from "./AddColorForm"
import ColorList from "./ColorList"
import { v4 } from "uuid"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      colors: [
        { id: "foo", title: "hello-kitty", color: "#fff999", rating: 0 },
      ],
    }
    this.onNewColor = this.onNewColor.bind(this)
    this.rateColor = this.rateColor.bind(this)
    this.removeColor = this.removeColor.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onNewColor(title, color) {
    this.setState((prevState) => ({
      colors: [
        ...prevState.colors,
        {
          id: v4(),
          title,
          color,
          rating: 0,
        },
      ],
    }))
  }

  onChange(id, colorCode) {
    this.setState((prevState) => ({
      colors: prevState.colors.map((colorObj) => {
        return colorObj.id !== id
          ? colorObj
          : {
              ...colorObj,
              color: colorCode,
            }
      }),
    }))
  }

  rateColor(id, rating) {
    this.setState((prevState) => ({
      colors: prevState.colors.map((color) =>
        color.id !== id
          ? color
          : {
              ...color,
              rating,
            }
      ),
    }))
  }

  removeColor(id) {
    this.setState((prevState) => ({
      colors: prevState.colors.filter((color) => color.id !== id),
    }))
  }

  render() {
    const { onNewColor, onChange, rateColor, removeColor } = this
    const { colors } = this.state
    return (
      <div className="app">
        <AddColorForm onNewColor={onNewColor} />
        <ColorList
          colors={colors}
          onChange={onChange}
          onRate={rateColor}
          onRemove={removeColor}
        />
      </div>
    )
  }
}
export default App
