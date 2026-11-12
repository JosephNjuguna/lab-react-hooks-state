import React from 'react'

const DarkModeToggle = ({ darkmode, setdarkmode }) => {
  function updatedarkmode() {
    if (darkmode === "light") {
      setdarkmode("dark")
    } else {
      setdarkmode("light")
    }
  }
  return (
    <button onClick={updatedarkmode}>Toggle {darkmode} Mode</button>
  )
}

export default DarkModeToggle