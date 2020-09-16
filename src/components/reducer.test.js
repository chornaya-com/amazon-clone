import {initialState, reducer, SEARCH_ACTION} from "./reducer";

describe('reducer', () => {
    it('should set user and return new state', () => {
        const testUser = {};
        const state = {};

        const newState = reducer(state, {
            type: 'SET_USER',
            user: testUser,
        });

        expect(newState.user).toBe(testUser);

        // check new instance for the state created
        expect(newState).not.toBe(state);
    });

    it('should return same state if nothing changed', () => {
        const state = {};
        const newState = reducer(state, {
            type: 'DUMMY_ACTION'
        });

        expect(newState).toBe(state);
    });

    it('should add items to basket', () => {
        const newState = reducer(initialState, {
            type: 'ADD_TO_BASKET',
            item: {id: 1},
        });

        const newState2 = reducer(newState, {
            type: 'ADD_TO_BASKET',
            item: {id: 2},
        });

        expect(newState.basket.length).toBe(initialState.basket.length + 1);
        expect(newState2.basket.length).toBe(2);
    });

    it('should remove from basket', () => {
        const state = {
            ...initialState,
            basket: [
                {id: 1},
                {id: 2},
            ]
        };

        const newState = reducer(state, {
            type: 'REMOVE_FROM_BASKET',
            id: 2,
        });

        expect(newState.basket.length).toBe(1);
    });

    it('should return result products for search', () => {
        const expectedProducts = [
            {
                id: 1,
                title: "7 Ways: Easy Ideas for Every Day of the Week Hardcover – 20 Aug. 2020",
                price: 11.99,
                rating: 5,
                image: "https://images-na.ssl-images-amazon.com/images/I/41WaY4MSksL._SX387_BO1,204,203,200_.jpg"
            },
        ];

        // check that search text case insensitive
        const searchText = "7 wAyS";

        const newState = reducer(initialState, {
            type: SEARCH_ACTION,
            searchText
        });

        expect(newState.products).toEqual(expectedProducts);
        expect(newState.searchText).toBe(searchText);
    })
});