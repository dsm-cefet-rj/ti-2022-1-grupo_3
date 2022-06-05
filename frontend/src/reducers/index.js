import { combineReducers } from "redux";
import bookingReducer from "./BookingReducer";
import productReducer from "./ProductReducer";

const rootReducer = combineReducers({
    booking: bookingReducer,
    product: productReducer,
})

export default rootReducer;