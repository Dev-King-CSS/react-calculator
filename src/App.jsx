import React, { useState } from "react"
import Button from "./components/Button"
import EqualButton from "./components/EqualButton"
import ClearButton from "./components/ClearButton"
import BackButton from "./components/BackButton"
import Input from "./components/Input"
import "./App.css"

const App = () => {
  const [result, setResult] = useState("")

  const handleClick = e => {
    setResult(result.concat(e.target.name))
  }

  const clear = () => setResult("")
  const backspace = () => setResult(result.slice(0, -1))
  const calculate = () => {
    if (!result) return
    if (
      result === "/" ||
      result === "*" ||
      result === "-" ||
      result === "+" ||
      result.startsWith("/") ||
      result.startsWith("*") ||
      result.endsWith("/") ||
      result.endsWith("*")
    ) {
      return
    }
    try {
      setResult(eval(result).toString())
    } catch (err) {
      setResult("Error")
      setTimeout(() => setResult(""), 1000)
    }
  }

  return (
    <>
      <div className="container">
        <form>
          <Input result={result} />
        </form>

        <div className="keypad">
          <ClearButton clear={clear} text={"Clear"} />
          <BackButton backspace={backspace} />
          <Button sign="/" handleClick={handleClick} text={"÷"} />
          <Button sign="7" handleClick={handleClick} text={"7"} />
          <Button sign="8" handleClick={handleClick} text={"8"} />
          <Button sign="9" handleClick={handleClick} text={"9"} />
          <Button sign="*" handleClick={handleClick} text={"×"} />
          <Button sign="4" handleClick={handleClick} text={"4"} />
          <Button sign="5" handleClick={handleClick} text={"5"} />
          <Button sign="6" handleClick={handleClick} text={"6"} />
          <Button sign="-" handleClick={handleClick} text={"-"} />
          <Button sign="1" handleClick={handleClick} text={"1"} />
          <Button sign="2" handleClick={handleClick} text={"2"} />
          <Button sign="3" handleClick={handleClick} text={"3"} />
          <Button sign="+" handleClick={handleClick} text={"+"} />
          <Button sign="0" handleClick={handleClick} text={"0"} />
          <Button sign="." handleClick={handleClick} text={"."} />
          <EqualButton calculate={calculate} text={"="} />
        </div>
      </div>
    </>
  )
}

export default App
