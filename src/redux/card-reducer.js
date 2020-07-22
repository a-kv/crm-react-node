import {api} from "../api/api";

export const DELETE_CARD = "card-reducer/DELETE-DELETE_CARD";
export const ADD_CARD = "card-reducer/ADD-ADD_CARD";
export const UPDATE_CARD = "card-reducer/UPDATE_CARD-TASK";
export const SET_CARDS = "card-reducer/SET_CARDS";

/////////////////////////////променять!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const initialState = {
    cards: []
}

export const GiraffeCardsReducer = (state = initialState, action) => {
    let copyState = {...state};

    switch (action.type) {
        case SET_CARDS:
                return {

                    // ...state,
                    // cards: action.cards                }
            //     houses: state.houses.map(h => {
            //         if (h.id !== action.houseId) {
            //             return h;
            //         } else {
            //             return {...h, cards: action.cards}
            //         }
            //     })
            // }

        case DELETE_CARD:
            return {
                ...state,
                houses: state.houses.map(h => {
                    if (h.id === action.houseId) {
                        return {
                            ...h,
                            cards: h.cards.filter(t => t.id !== action.cardId)
                        }
                    } else {
                        return h
                    }
                })
            }
        case ADD_CARD:
            let newCard = {
                id: action.id,
                name: 'Name',
                weight: 800,
                sex: 'M',
                height: 4.9,
                color: 'green',
                diet: 'None',
                temper: 'Wild',
                image: 'giraffe_egor.jpg'
            }
            copyState[action.houseId] = [newCard, ...copyState[action.houseId]]
        case UPDATE_CARD:
            return {
                ...state,
                houses: state.houses.map(h => {
                    if (h.id === action.card.houseId) {
                        return {
                            ...h,
                            cards: h.cards.map(t => {
                                if (t.id !== action.card.id) {
                                    return t;
                                } else {
                                    return action.card;
                                }
                            })
                        }
                    } else {
                        return h
                    }
                })
            }

    }
    return state;
}

export const setCardsAC = (houseId, cards) => {
    return {type: SET_CARDS, houseId, cards: cards};
}
export const addCardSucsess = (newTask, houseId) => {
    return {type: ADD_CARD, houseId, newTask};
}
export const updateCardAC = (card) => {
    return {type: UPDATE_CARD, card};
}
export const deleteCardAC = (cardId, houseId) => {
    return {type: DELETE_CARD, cardId, houseId};
}


//Thunk
//

// export const addHouse = (name)  => (dispatch) => {
//     api.createHouse(name)
//         .then(res => {
//             let newCard = res.data.item;
//             dispatch(addHouseAC(newCard))
//         });
// }
export const getCards = (houseId)  => (dispatch) => {
    api.getCards(houseId)
        .then(res => {
            dispatch(setCardsAC(houseId, res.items)); //items
        });
}
//
// export const addCard = (newText, houseId)  => (dispatch) => {
//     api.createCard(newText, houseId)
//         .then(res => {
//             if (res.resultCode === 0) {
//                 let newCard = res.data.item;
//                 dispatch(addCardSucsess(newCard, houseId));
//             }
//         });
// }
// export const updateCard = (houseId, cardId, newCard) => (dispatch) => {
//     api.updateCard(houseId, cardId, newCard)
//         .then(res => {
//             if (res.resultCode === 0) {
//                 dispatch(updateCardAC(res.data.item));
//             }
//         });
// }
//
// export const deleteHouse = (houseId)  => (dispatch) => {
//     api.deleteHouse(houseId)
//         .then(res => {
//             if (res.resultCode === 0) {
//                 dispatch(deleteHouseAC(houseId));
//             }
//         });
// }
// export const deleteCard = (cardId, houseId)  => (dispatch) => {
//     api.deleteTodoList(houseId)
//         .then(res => {
//             if (res.resultCode === 0) {
//                 dispatch(deleteCardAC(cardId, houseId));
//             }
//         });
// }
// export const updateHouse = (name, houseId) => (dispatch) => {
//     api.updataHouse(name, houseId)
//         .then(res => {
//             if (res.resultCode === 0) {
//                 debugger
//                 dispatch(updateHouseAC(name, houseId));
//             }
//         });
// }
