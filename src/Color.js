// import PropTypes from 'prop-types'
import StarRating from './StarRating'
import React, { Component } from 'react'
// import '../../stylesheets/Color.scss'

// const Color = ({ title, color, rating = 0, onRemove = f => f, onRate = f => f}) =>
//   <section className='color'>
//     <h1>{title}</h1>
//     <button onClick={onRemove}>X</button>
//     <div className='color'
//       style={{ backgroundColor: color }} />
//     <div>
//       <StarRating starsSelected={rating} onRate={onRate} />
//     </div>
//   </section>

// Color.propTypes = {
//   title: PropTypes.string.isRequired,
//   color: PropTypes.string.isRequired,
//   rating: PropTypes.number,
//   onRemove: PropTypes.func,
//   onRate: PropTypes.func
// }

// export default Color

export default class Color extends Component {
  render () {
    return (
      <section className='color'>
        <h1>{this.props.title}</h1>
        <button onClick={this.props.onRemove}>X</button>
        <div className='color'
          style={{ backgroundColor: this.props.color }} />
        <div>
          <StarRating starsSelected={this.props.rating} onRate={this.props.onRate} />
        </div>
      </section>
    )
  }
}
