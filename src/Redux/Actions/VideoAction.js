import { 
    VIDEO
} from '../Constants/Types.js';


export const video = (data) => {
    return {
        type:VIDEO,
        payload: data
    }
}