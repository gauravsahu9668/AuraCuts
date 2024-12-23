import React from 'react'
import { useDispatch } from 'react-redux'
import { setstep } from '../../Slices/StepsReducer'
const Step5 = () => {
    const dispatch=useDispatch()
  return (
    <div>
      this is step 5
      <button onClick={()=>{dispatch(setstep(6))}}>Next step</button>
    </div>
  )
}

export default Step5
