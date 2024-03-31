import { useRef } from "react"
import { useDispatch } from "react-redux"
import { counterActions } from "../store/counter"
import { privacyAction } from "../store/privacy"




const Controls=()=>{

    

    const dispatch=useDispatch()
    const inputElement=useRef()

    const handleincrement=()=>{
       
        dispatch(counterActions.increment())
    }
   
const handleDecrement=()=>{
   
    dispatch(counterActions.decrement())
}

const handleAdd=()=>{

    dispatch(counterActions.add( {number:inputElement.current.value}))
    inputElement.current.value=""
}
    
const handleSubstract=()=>{
    dispatch(counterActions.subtract(Number(inputElement.current.value)
    ))
    inputElement.current.value=""
}

const handlePrivacy=()=>{
    dispatch(privacyAction.privacyToggle())

}

return <> <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
    
<button type="button" onClick={handlePrivacy} class="btn btn-danger">privacy toggle</button>
<button type="button" onClick={handleincrement} class="btn btn-primary">+1</button>

<button type="button" onClick={handleDecrement} class="btn btn-success">-1</button>





{/* <button type="button" class="btn btn-secondary">Secondary</button>

<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button>

<button type="button" class="btn btn-link">Link</button> */}
</div>

<div  className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">

<input type="text" ref={inputElement} placeholder="enter number"  class="btn btn-light number-input"/>

<button type="button" onClick={handleAdd} class="btn btn-info">add</button>

<button type="button" onClick={handleSubstract} class="btn btn-danger">substract</button>

</div>

</>
}
export default Controls