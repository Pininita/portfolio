import React from 'react'

export const Skills = (props) => {

  const bg = {
    background: `#444 linear-gradient(to right, transparent 50%, ${props.color} 0)` ,
    '--clr': props.color, 
    '--i': props.percentage
  }

  const textColor = {
    color: props.color
  }

  return (
    <div className='s-body'>
      <div className='s-container'>
        <div className={`s-progress ${props.range}`} style={bg}>
          <h3>{props.percentage}<span>%</span></h3>
          <h4 style={textColor}>{props.tool}</h4>
        </div>
      </div>
    </div>
  )
}


