import { combineReducers } from 'redux'
import { ADD_FISH, ADD_ORDER, REMOVE_FISH, REMOVE_ORDER } from '../actions';

function fish(state, action) {
    switch (action.type) {

        case ADD_FISH:
            return {
                id: action.id,
                fishName: action.fishName,
                fishPrice: action.fishPrice,
                fishDescription: action.fishDescription,
                status: action.status,
                imageUrl: action.imageUrl
            };

        default:
            return state;
   }
}

function orderedFish(state, action) {
    switch (action.type) {

        case ADD_ORDER:
            return {
                id: action.id,
                quantity: action.quantity,
                fishName: action.fishName,
                fishPrice: action.fishPrice
            };

        case REMOVE_ORDER:
            return state.filter(t => t.id != action.key);

        default:
            return state;
   }
}

function fishes(state = [], action) {
    switch (action.type) {

        case ADD_FISH:
            return [
                ...state,
                fish(undefined, action)
            ];

        case REMOVE_FISH:
            return state.filter(t => t.id != action.key);

        default:
            return state;
    }
}

function orderedFishes(state = [], action) {
    switch (action.type) {

        case ADD_ORDER:
            return [
                ...state,
                orderedFish(undefined, action)
            ];

        case REMOVE_ORDER:
            return state.filter(t => t.id != action.key);

        default:
            return state;
    }
}


const fishApp = combineReducers({
    fishes, orderedFishes
})

export default fishApp
