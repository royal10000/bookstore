import React from 'react'

const Button = ({ buttonName }) => {

  return (
    <>
      <input type="button" value={buttonName} style={{ background: "red", margin: "3rem" }} />
    </>
  )
}

export default Button