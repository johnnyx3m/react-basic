export const ADD_FISH = 'ADD_FISH';
export const REMOVE_FISH = 'REMOVE_FISH';
export const ADD_ORDER = 'ADD_ORDER';
export const REMOVE_ORDER = 'REMOVE_ORDER';

let nextFishId = 0;

export function addFish(data) {
    return {
        type: ADD_FISH,
        id: data.id,
        fishName: data.fishName,
        fishPrice: data.fishPrice,
        fishDescription: data.fishDescription,
        status: data.status,
        imageUrl: data.imageUrl
    };
}

export function removeFish(key) {
    return {
        type: REMOVE_FISH,
        key
    };
}

export function addOrder(data) {
    return {
        type: ADD_ORDER,
        id: data.id,
        quantity: data.quantity,
        fishName: data.fishName,
        fishPrice: data.fishPrice
    };
}

export function removeOrder(key) {
    return {
        type: REMOVE_ORDER,
        key
    };
}
