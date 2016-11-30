export const ADD_FISH = 'ADD_FISH';
export const REMOVE_FISH = 'REMOVE_FISH';
export const ADD_ORDER = 'ADD_ORDER';

let nextFishId = 0;

export function addFish(data) {
    return {
        type: ADD_FISH,
        id: nextFishId++,
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
        id: nextFishId++,
        quantity: data.quantity,
        fishName: data.fishName,
        fishPrice: data.fishPrice
    };
}
