import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

import { FilterMainProps } from "./filterMain.types";


const initialFilterMainState: FilterMainProps = {
    city: '',
    rooms: '',
    priceFrom: '',
    priceTo: ''
}

export const filterMainSlice = createSlice({
    name: 'filterMain',
    initialState: initialFilterMainState,
    reducers: {
        setCity(state, action: PayloadAction<string>) {
            state.city = action.payload;
        },
        setRooms(state, action: PayloadAction<number|string>) {
            state.rooms = action.payload;
        },
        setPriceFrom(state, action: PayloadAction<number|string>) {
            state.priceFrom = action.payload;
        },
        setPriceTo(state, action: PayloadAction<number|string>) {
            state.priceTo = action.payload;
        },
    }
})

export const filterMainReducer = filterMainSlice.reducer;
export const filterMainActions = filterMainSlice.actions;