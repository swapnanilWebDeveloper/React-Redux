import React from 'react'
import { useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import {
  increment_height,
  decrement_height,
  increment_heightByAmount,
  decrement_heightByAmount,
  getUserAccount
} from '../actions'

function HeightEval() {
  const [incLength, setIncLength] = useState(0);
  const [decLength, setDecLength] = useState(0);

  const [userId, setUserId] = useState(1);

  const length = useSelector(state => state.height.length)
  const width = useSelector(state => state.breadth.width)

  const dispatch = useDispatch();

  const increment_userId = () => {
    if(userId < 8)
    {
      setUserId(userId + 1);
      dispatch(getUserAccount(userId));
    }
    else{
       alert("no next user is available..!!");
    }
  }

  const decrement_userId = () => {
    if(userId > 0)
    {
      setUserId(userId - 1);
      dispatch(getUserAccount(userId));
    }
    else{
       alert("no previous user is available..!!");
    }
  }
  return (
    <div>
      <div className="card">
        <div className="container">
          <h4>Height Component</h4>
          <h3>length : {length}cm</h3>
          <h3>Width : {width}cm</h3>
          <button onClick={() => dispatch(increment_height())}>Increment length +</button>
          <button onClick={() => dispatch(decrement_height())}>Decrement length -</button>

          <br />
          <input type="text" onChange={(e) => setIncLength(+e.target.value)} />
          <button onClick={() => dispatch(increment_heightByAmount(incLength))}>Increment Length By {incLength}cm</button>

          <br />
          <input type="text" onChange={(e) => setDecLength(+e.target.value)} />
          <button onClick={() => dispatch(decrement_heightByAmount(decLength))}>Decrement Length By {decLength}cm</button>
          <br />
          <button onClick={() => increment_userId()}>Init height by userID(increment id)</button>
          <button onClick={() => decrement_userId()}>Init height by userID(decrement id)</button>
        </div>
      </div>
    </div>
  )
}

export default HeightEval
