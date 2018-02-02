export const ACTION_TYPES = {
    NEW_DATA: 'new_data'
}

export function newData(first, second) {
    return {
        type: ACTION_TYPES.NEW_DATA,
        first: first,
        second: second
    };
}