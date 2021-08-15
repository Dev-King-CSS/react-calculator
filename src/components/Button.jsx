import React from "react"

export default function Button({ handleClick, sign, text }) {
  return (
    <button name={sign} onClick={handleClick}>
      {text}
    </button>
  )
}
