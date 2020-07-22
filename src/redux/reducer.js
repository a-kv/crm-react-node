import {v1} from "uuid";
import {api} from "../api/api";

export const ADD_HOUSE = "TodoList/Reducer/ADD-TODOLIST";
export const DELETE_HOUSE = "TodoList/Reducer/DELETE-TODOLIST";
export const DELETE_CARD = "TodoList/Reducer/DELETE-TASK";
export const ADD_CARD = "TodoList/Reducer/ADD-TASK";
export const UPDATE_CARD = "TodoList/Reducer/UPDATE-TASK";
export const SET_HOUSES = "TodoList/Reducer/SET_TODOLISTS";
export const SET_CARDS = "TodoList/Reducer/SET_TASKS";
export const UPDATE_TITLE_HOUSE = "TodoList/Reducer/UPDATE_TITLE_TODOLIST";

/////////////////////////////променять!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const initialState = {
    houses: []
}

export const GiraffeHouseReducer = (state = initialState, action) => {
    let copyState = {...state};

    switch (action.type) {
        case SET_CARDS:
            return {
                ...state,
                houses: state.houses.map(h => {
                    if (h.id !== action.houseId) {
                        return h;
                    } else {
                        return {...h, cards: action.cards}
                    }
                })
            }
        case SET_HOUSES:
            return {
                ...state,
                houses: action.houses.map(h => ({...h, cards: []}))
            }
        case ADD_HOUSE:
            return {
                ...state,
                houses: [...state.houses, action.newHouse]
            }
        case DELETE_HOUSE:
            return {
                ...state,
                houses: state.houses.filter(h => h.id !== action.houseId)
            }
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
        case UPDATE_TITLE_HOUSE: //start from bll
            return {
                ...state,
                houses: state.houses.map(h => {
                    if (h.id !== action.houseId) {
                        return h;
                    } else {
                        return {...h, name: action.name}
                    }
                })
            }

    }
    // console.log("reducer: ", action);
    return state;
}


export const setHousesAC = (houses) => {
    return {type: SET_HOUSES, houses}
}
export const addHouseAC = (newCard) => {
    return {type: ADD_HOUSE, newCard}
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
export const deleteHouseAC = (houseId) => {
    return {type: DELETE_HOUSE, todolistId: houseId};
}
export const deleteCardAC = (cardId, houseId) => {
    return {type: DELETE_CARD, cardId, houseId};
}
export const updateHouseAC = (name, houseId) => {
    return {type: UPDATE_TITLE_HOUSE, name, houseId};
}

//Thunk
//
export const setHouses = ()=> (dispatch) => {
    //request to server
    api.getHouses()
        .then(res => {
            dispatch(setHousesAC(res)) // undef
        });
}
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
