
import * as cityAction from "../constants/city"
export function initCity(data) {
    return {
        type: cityAction.INIT_CITY,
        data
    }
}
export function updateCity(data) {
    return {
        type: cityAction.UPDATE_CITY,
        data
    }
}