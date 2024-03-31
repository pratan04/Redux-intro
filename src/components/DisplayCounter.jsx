import { useSelector } from "react-redux"

const DisplayCounter=()=>{
    // const counterObj=useSelector(store=>store.counter)
    // const counter=counterObj.counterVal


    const {counterVal}=useSelector(store=>store.counter)
return <>


<p className="lead mb-4">counter current value {counterVal}</p>

</>

}
export default DisplayCounter