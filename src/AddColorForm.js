import React, { Component } from 'react'
// import '../../stylesheets/AddColorForm.scss'
/* global    */
/* Learn flow types in place of Prop.types */

export default class AddColorForm extends Component {
  constructor (props) {
    super(props)
    this.submit = this.submit.bind(this)
    this.state = {
      title: '',
      color: '#000000'
    }
    this.submit = this.submit.bind(this)
  }

  submit (e) {
    e.preventDefault()
    this.props.onNewColor(this.state.title.value, this.state.color.value) // To ensure that data flows properly (two-way data binding)
    this.setState({title: '', color: '#000000'})
  }
  render () {
    return (
      <form className='add-color' onSubmit={this.submit} >
        <input ref={input => ({title: input})}
          type='text'
          placeholder='color title...' required />
        <input ref={input => ({color: input})}
          type='color' required />
        <button > ADD </button>
      </form>
    )
  }
}
