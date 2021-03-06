import "./stylesheets/AddColorForm.css"

import React, { Component } from "react"

export default class AddColorForm extends Component {
  constructor(props) {
    super(props)
    this.submit = this.submit.bind(this)
    this.state = {
      title: "",
      color: "#000000",
    }
    this.submit = this.submit.bind(this)
    this.changeColor = this.changeColor.bind(this)
    this.changeTitle = this.changeTitle.bind(this)
  }

  changeTitle(event) {
    this.setState({ title: event.target.value })
  }
  changeColor(event) {
    this.setState({ color: event.target.value })
  }

  submit(e) {
    e.preventDefault()
    this.props.onNewColor(this.state.title, this.state.color)
    this.setState({ title: "", color: "#000000" })
  }

  render() {
    return (
      <form className="add-color" onSubmit={this.submit}>
        <input
          value={this.state.title}
          onChange={this.changeTitle}
          type="text"
          placeholder="color title..."
          required
        />
        <input
          onChange={this.changeColor}
          type="color"
          value={this.state.color}
          required
        />
        <button> ADD </button>
      </form>
    )
  }
}
