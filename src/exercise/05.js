// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor, fontStyle) for the color and the font style
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`
// const smallBox = (
//   <div className="box--small" style={{backgroundColor: 'lightblue'}}>
//     small lightblue box
//   </div>
// )
// const mediumBox = (
//   <div className="box--medium" style={{backgroundColor: 'pink'}}>
//     medium pink box
//   </div>
// )
// const largeBox = (
//   <div className="box--large" style={{backgroundColor: 'orange'}}>
//     large orange box
//   </div>
// )

const Box = ({size, style, text}) => {
  style['fontStyle'] = 'italic'
  const boxSize = size ? `box--${size}` : ''
  return (
    <div className={`box ${boxSize}`} style={style}>
      {text}
    </div>
  )
}

function App() {
  return (
    <div>
      {
        <Box
          size="small"
          text="small lightblue box"
          style={{backgroundColor: 'lightBlue'}}
        />
      }
      {
        <Box
          size="medium"
          text="medium pink box"
          style={{backgroundColor: 'pink'}}
        />
      }
      {
        <Box
          size="large"
          text="large orange box"
          style={{backgroundColor: 'orange'}}
        />
      }
    </div>
  )
}

export default App
