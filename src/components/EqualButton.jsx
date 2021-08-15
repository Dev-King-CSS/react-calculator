import React from "react"

export default function EqualButton({ calculate, key, text }) {
  return (
    <button onClick={calculate} id="result">
      {text}
    </button>
  )
}
