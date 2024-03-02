import React from 'react'
import {useState} from "react"
import { useSelector,useDispatch } from 'react-redux'
import { 
         increment_breadth, 
         decrement_breadth, 
         increment_breadthByAmount,
         decrement_breadthByAmount
        } from '../actions'

function BreadthEval() {
   const [incwidth, setIncWidth] = useState(0);
   const [decwidth, setDecWidth] = useState(0);
  

   const length = useSelector(state => state.height.length)
   const width = useSelector(state => state.breadth.width)

   const dispatch = useDispatch();

  return (
    <div>
          <div className="card">
            <div className="container">
                <h4>Breadth Component</h4>
                <h3>length : {length}cm</h3>
                <h3>width : {width}cm</h3>
                <button onClick={() => dispatch(increment_breadth())}>Increment Width +</button>
                <button onClick={() => dispatch(decrement_breadth())}>Decrement Width -</button>
                
                <br />
                <input type="text" onChange={(e) => setIncWidth(+e.target.value) } />
                <button onClick={() => dispatch(increment_breadthByAmount(incwidth))}>Increment Width By {incwidth}cm</button>
                 
                <br />
                <input type="text" onChange={(e) => setDecWidth(+e.target.value) } />
                <button onClick={() => dispatch(decrement_breadthByAmount(decwidth))}>Decrement Width By {decwidth}cm</button>
            </div>
          </div>
    </div>
  )
}

export default BreadthEval
