export const ADD_FISH = 'ADD_FISH'
export const REMOVE_FISH = 'REMOVE_FISH'
export const LOGOUT = 'LOGOUT'

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

export function logout() {
    return {
        type: LOGOUT
    };
}

export function removeFish(id) {
    return {
        type: REMOVE_FISH,
        id
    };
}
