import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { modifyText } from "../Redux/text";

const ComponentB = () => {
  const { text } = useSelector((state) => state.text);
  const dispatch = useDispatch();
  console.log(text)
  return (
    <div>
    <h1>COMPONENT B</h1>
      <input
        style={{ fontSize: "2rem", margin:"2rem"}}
        type="text" onChange={(e) => dispatch(modifyText(e.target.value))}
      />
    </div>
  )
}

export default ComponentB