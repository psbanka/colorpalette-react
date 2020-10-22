import "./stylesheets/APP.scss"

import React, { Component } from "react"

import AddColorForm from "./AddColorForm"
import ColorList from "./ColorList"
import { v4 } from "uuid"

type Color = {
  id: string
  title: string
  color: string
  rating: number
}

type AppState = {
  colors: Color[]
}

class App extends Component<{}, AppState> {
  constructor(props: any) {
    super(props)
    this.state = {
      colors: [
        { id: "foo", title: "hello-kitty", color: "#fff999", rating: 0 },
      ],
    }
    this.onNewColor = this.onNewColor.bind(this)
    this.rateColor = this.rateColor.bind(this)
    this.removeColor = this.removeColor.bind(this)
  }

  onNewColor(title: string, color: string) {
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

  rateColor(id: string, rating: number) {
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

  removeColor(id: string) {
    this.setState((prevState) => ({
      colors: prevState.colors.filter((color) => color.id !== id),
    }))
  }

  render() {
    const { onNewColor, rateColor, removeColor } = this
    const { colors } = this.state
    return (
      <div className="app">
        <AddColorForm onNewColor={onNewColor} />
        <ColorList colors={colors} onRate={rateColor} onRemove={removeColor} />
      </div>
    )
  }
}
export default App
