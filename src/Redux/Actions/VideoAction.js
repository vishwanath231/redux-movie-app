import { 
    VIDEO
} from '../Constants/Types.js';


// VIDEO
export const video = (data) => {
    return {
        type:VIDEO,
        payload: data
    }
}