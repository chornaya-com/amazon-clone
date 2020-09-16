export const initialState = {
    basket: [],
    user: null,
    searchText: '',
    products: [
        {
            id: 1,
            title: "7 Ways: Easy Ideas for Every Day of the Week Hardcover – 20 Aug. 2020",
            price: 11.99,
            rating: 5,
            image: "https://images-na.ssl-images-amazon.com/images/I/41WaY4MSksL._SX387_BO1,204,203,200_.jpg"
        },
        {
            id: 2,
            title: "The Thursday Murder Club Hardcover – 3 Sept. 2020",
            price: 1.99,
            rating: 4,
            image: "https://images-na.ssl-images-amazon.com/images/I/51AI72eFWbL._SX323_BO1,204,203,200_.jpg"
        },
        {
            id: 3,
            title: "Downton Abbey The Movie [DVD] [2019]",
            price: 9.99,
            rating: 4,
            image: "https://images-na.ssl-images-amazon.com/images/I/51uUi+C8V6L._SY344_BO1,204,203,200_.jpg",
        },
        {
            id: 4,
            title: "Sh**ged. Married. Annoyed. Hardcover – 3 Sept. 2020",
            price: 3.99,
            rating: 3,
            image: "https://images-na.ssl-images-amazon.com/images/I/81zcfMMyAnL._AC_SY679_.jpg",
        },
        {
            id: 5,
            title: "Clementoni 39411 Clementoni-39411-Impossible Puzzle-Marvel-1000 Pieces, Multi-Colour",
            price: 26.99,
            rating: 5,
            image: "https://images-na.ssl-images-amazon.com/images/I/91381CdSItL._AC_SX679_.jpg",
        },
    ]
};

export const getBasketTotal = (basket) => {
    return basket.reduce((amount, item) => item.price + amount, 0);
}

export const SEARCH_ACTION = 'SEARCH';
export const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
        case 'REMOVE_FROM_BASKET':
            let newBasket = [...state.basket];
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(`Can't remove product (id: ${action.id}) as it doesn't exist.`)
            }
            return {...state, basket: newBasket};
        case SEARCH_ACTION:
            return {
                ...state,
                searchText: action.searchText,
                products: initialState
                    .products
                    .filter((product) => product.title.toLowerCase().includes(action.searchText.toLowerCase()))
            }
        default:
            return state;
    }
}

