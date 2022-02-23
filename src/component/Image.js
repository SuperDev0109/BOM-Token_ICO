import React from 'react'

function Image(props) {
  return (
    <>
        <img className={props.className} src={props.imageName} alt={props.alt} />
    </>
  )
}

export default Image