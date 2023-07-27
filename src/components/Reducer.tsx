import React, {useReducer} from 'react'

interface State {
    val: number
}

const initialState = {
    val : 0
}

// Discriminate Type Unions NOTE :- Only with type not with interface.
type Action = {type: 'increment'} | {type: 'decrement'}

const valReducer = (state: State, action: Action) => {
    switch(action.type) {
        case 'increment' :
            return {...state, val : state.val + 1};
        case 'decrement' :
            return {...state, val : state.val - 1};
        default : 
            throw new Error();
    }
}

const Reducer = () => {


    const [state, dispatch] = useReducer(valReducer, initialState);

    return (
        <div style={{ display: 'flex', alignItems : 'center', gap : '1rem' }}>
            <button type='button' onClick={() => dispatch({type : 'increment'})} >+</button>    
            <p>{state.val}</p>
            <button type='button' onClick={() => dispatch({type : 'decrement'})} >-</button>
        </div>
    )
}

export default Reducer