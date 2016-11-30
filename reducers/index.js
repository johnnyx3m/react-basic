import { combineReducers } from 'redux';
import { ADD_FISH, REMOVE_FISH } from '../actions';

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

const fishApp = combineReducers({
    fishes
})

export default fishApp
