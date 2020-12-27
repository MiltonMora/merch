import { useState } from 'react';

import initialState from '../initialState';


const useInitialState = () => {
    const [state, setState] = useState(initialState);

    const addToCar = payload => {
        setState({
            ...state,
            cart: [...state.cart, payload],
        });
    }
    
    const removeFromCar = payload => {
        setState({
            ...state,
            cart: state.cart.filter(el => el.id !== payload.id),
        });
    }

    const addToBuyer = payload => {
        setState({
            ...state,
            buyer: [...state.buyer, payload],
        });
    }

    const addNewOrder = payload => {
        setState({
            ...state,
            order: [...state.order, payload],
        });
    }

    return {
        addToCar,
        removeFromCar,
        state,
        addToBuyer,
        addNewOrder,
    }
};

export default useInitialState;