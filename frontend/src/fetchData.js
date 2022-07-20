import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { store } from "./configureStore";
import { fetchBookings } from "./reducers/BookingsSlice";
import { fetchProducts } from "./reducers/ProductsSlice";
import { fetchSellers } from "./reducers/SellersSlice";

export default function FetchData({ interval = 30000 }) {
    const timeRef = useRef();
    const token = useSelector(store => store.user.token);

    useEffect(() => {
        if (!token) return;

        const getDataInterval = setInterval(() => {
            store.dispatch(fetchBookings());
            store.dispatch(fetchProducts());
            store.dispatch(fetchSellers());

            return () => {
                clearInterval(timeRef.current);
            };
        }, interval)

        timeRef.current = getDataInterval;
    }, [interval, token]);

    return null;
}