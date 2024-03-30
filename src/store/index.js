import {createStore} from "redux"


const INITIAL_VALUE={
    counter: 0,
    privacy:false
}

const counterReducer=(store=INITIAL_VALUE,action)=>{
    // if(action.type==="INCREMENT"){
    //     return {counter: store.counter+1,privacy:store.privacy}

    // } else if(action.type==="DECREMENT"){
    //     return {counter:store.counter-1,privacy:store.privacy}

    // }
    // else if(action.type==="ADDITION"){
    //     return {counter:store.counter+Number(action.payload.number),privacy:store.privacy}
    // }
    // else if(action.type==="SUBSTRACT"){
    //     return {counter:store.counter-Number(action.payload.number),privacy:store.privacy}
    // }
    // else if(action.type==="PRIVACY"){
    //     return {privacy:!store.privacy,counter:store.counter}
    // }


    if(action.type==="INCREMENT"){
        return {...store,counter: store.counter+1}

    } else if(action.type==="DECREMENT"){
        return {...store,counter:store.counter-1}

    }
    else if(action.type==="ADDITION"){
        return {...store,counter:store.counter+Number(action.payload.number)}
    }
    else if(action.type==="SUBSTRACT"){
        return {...store,counter:store.counter-Number(action.payload.number)}
    }
    else if(action.type==="PRIVACY"){
        return {...store,privacy:!store.privacy}
    }
    
    return store 
}


const counterStore=createStore(counterReducer);


export default counterStore