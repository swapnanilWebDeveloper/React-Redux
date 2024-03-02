import React from 'react'
import { incrementBonus } from '../actions'
import { useDispatch, useSelector } from 'react-redux'

function Bonus() {
   const amount = useSelector(state => state.account.amount)
   const points = useSelector(state => state.bonus.points)

   const dispatch = useDispatch();

  return (
    <div>
         <div className="card">
            <div className="container">
               <h4>
                  <b>Bonus Component</b>
               </h4>
               <h3>Amount : ${amount}</h3>
               <h3>Total points : {points}</h3>
               <button onClick={() => dispatch(incrementBonus())}>Increment +</button>
            </div>
         </div>
    </div>
  )
}

export default Bonus
