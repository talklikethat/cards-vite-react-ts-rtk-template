import { createSlice } from '@reduxjs/toolkit';
import { ICard } from '../../interfaces/interfaces';

interface CardsListState {
    cards: ICard[];
    loading: 'idle' | 'pending' | 'receive';
    error: string;
    currentRequestId: string;
}

const initialState: CardsListState = {
    cards: [],
    loading: 'idle',
    error: '',
    currentRequestId: '',
};

export const cardsSlice = createSlice({
    initialState,
    name: 'cards',
    reducers: {},
    extraReducers: {},
});

export default cardsSlice.reducer;
