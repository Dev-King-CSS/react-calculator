import React from "react"
import { BsFillBackspaceFill } from "react-icons/bs"

export default function BackButton({ backspace }) {
  return (
    <button onClick={backspace} id="backspace">
      <BsFillBackspaceFill />
    </button>
  )
}
