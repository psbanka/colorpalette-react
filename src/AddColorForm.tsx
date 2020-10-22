import "./stylesheets/AddColorForm.scss"

import React, { ChangeEvent, Component, FormEvent } from "react"

type Props = {
  onNewColor: (title: string, color: string) => void
}

type State = {
  title: string
  color: string
} 

export default class AddColorForm extends Component<Props, State> {
  constructor(props: Props) {
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

  changeTitle(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ title: event?.target?.value })
  }

  changeColor(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ color: event.target.value })
  }

  submit(e: FormEvent<HTMLFormElement>) {
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
