import "./stylesheets/APP.css"

import React, { useState } from "react"

import AddColorForm from "./AddColorForm"
import ColorList from "./ColorList"
import { v4 } from "uuid"

function App() {
  const initialColor: ColorType = { id: "foo", title: "hello-kitty", color: "#fff999", rating: 0 }
  const [colors, setColors]= useState([initialColor])

  function onNewColor(title: string, color: string) {
    setColors([
        ...colors,
        {
          id: v4(),
          title,
          color,
          rating: 0,
        },
      ],
    )
  }

  function onChange(id: string, colorCode: string) {
    setColors(colors.map((colorObj) => {
        return colorObj.id !== id
          ? colorObj
          : {
              ...colorObj,
              color: colorCode,
            }
      })
    )
  }

  function rateColor(id: string, rating: number) {
    setColors(colors.map((color) =>
        color.id !== id
          ? color
          : {
              ...color,
              rating,
            }
      ))
  }

  function removeColor(id) {
    setColors(colors.filter((color) => color.id !== id))
  }

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

export default App
