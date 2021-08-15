import React from "react"

export default function ClearButton({ clear, text }) {
  return (
    <button onClick={clear} id="clear">
      {text}
    </button>
  )
}
