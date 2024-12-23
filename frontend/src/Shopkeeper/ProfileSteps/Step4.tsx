import React from 'react'
import { useDispatch } from 'react-redux'
import { setstep } from '../../Slices/StepsReducer'
const Step4 = () => {
    const dispatch=useDispatch();
  return (
    <div>
      yha slotes a jayenge
      <button onClick={()=>{dispatch(setstep(5))}}>Next step</button>
    </div>
  )
}

export default Step4
