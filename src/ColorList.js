// import PropTypes from 'prop-types' // TODO: REMOVE THIS?
import Color from './Color'
import React, { Component } from 'react'
// import '../stylesheets/ColorList.scss'

// const ColorList = ({ colors = [], onRate = f => f, onRemove = f => f }) =>
//   <div className='color-list'>
//     {(colors.length === 0)
//       ? <p>No Colors Listed. (Add a Color)</p>
//       : colors.map(color =>
//         <Color key={color.id}
//           {...color}
//           onRate={(rating) => onRate(color.id, rating)}
//           onRemove={() => onRemove(color.id)} />
//       )
//     }
//   </div>

// ColorList.propTypes = {
//   colors: PropTypes.array,
//   onRate: PropTypes.func,
//   onRemove: PropTypes.func
// }

// export default ColorList

export default class ColorList extends Component {
  render () {
    return (
      <div className='color-list'>
        {(this.props.colors.length === 0)
          ? <p>No Colors Listed. (Add a Color)</p>
          : this.props.colors.map(color =>
            <Color key={color.id}
              {...color}
              onRate={(rating) => this.props.onRate(color.id, rating)}
              onRemove={() => this.props.onRemove(color.id)} />
          )
        }
      </div>
    )
  }
}
