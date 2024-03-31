

import {configureStore} from "@reduxjs/toolkit"
import counterSlice from "./counter";
import privacySlice from "./privacy";








const counterStore=configureStore({
    reducer:{
        counter:counterSlice.reducer,

        privacy:privacySlice.reducer
    }
});



export default counterStore


// const counterReducer=(store=INITIAL_VALUE,action)=>{
   


//     if(action.type==="INCREMENT"){
//         return {...store,counter: store.counter+1}

//     } else if(action.type==="DECREMENT"){
//         return {...store,counter:store.counter-1}

//     }
//     else if(action.type==="ADDITION"){
//         return {...store,counter:store.counter+Number(action.payload.number)}
//     }
//     else if(action.type==="SUBSTRACT"){
//         return {...store,counter:store.counter-Number(action.payload.number)}
//     }
//     else if(action.type==="PRIVACY"){
//         return {...store,privacy:!store.privacy}
//     }
    
//     return store 
// }
