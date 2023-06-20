import React from 'react'
import { useDispatch, useSelector } from "react-redux";

const ComponentC = () => {
  const { text } = useSelector((state) => state.text);

  return (
    <div>
      <h1>COMPONENT C</h1>
      <p
        style={{ color: "red", fontSize: "2rem", border: "1px solid black", width: "60%", margin: "auto" }}>
        {text}
      </p>
    </div>
  )
}

export default ComponentC