import {api} from "../api/api";
import {stopSubmit} from "redux-form";

export const ADD_HOUSE = "reducer/ADD_HOUSE";
export const DELETE_HOUSE = "reducer/DELETE-TODOLIST";
export const DELETE_CARD = "reducer/DELETE-DELETE_CARD";
export const ADD_CARD = "reducer/ADD-ADD_CARD";
export const UPDATE_CARD = "reducer/UPDATE_CARD-TASK";
export const SET_HOUSES = "reducer/SET_HOUSES";
export const SET_CARDS = "reducer/SET_CARDS";
export const UPDATE_TITLE_HOUSE = "reducer/UPDATE_TITLE_HOUSE";
export const CHANGE_HOUSE_FILTER = "reducer/CHANGE_HOUSE_FILTER";

const initialState = {
    houses: []
}

export const GiraffeHouseReducer = (state = initialState, action) => {
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
                        debugger
                        return {
                            ...h,
                            cards: h.cards.filter(с => с.id !== action.cardId)
                        }
                    } else {
                        return h
                    }
                })
            }
        case ADD_CARD:
            return {
                ...state,
                houses: state.houses.map(h => {
                    if (h.id === action.houseId) {
                        return {...h, cards: [action.newCard, ...h.cards ]}
                    } else {
                        return h
                    }
                })
            }
        case UPDATE_CARD:
            return {
                ...state,
                houses: state.houses.map(h => {
                    if (h.id === action.card.houseId) {
                        return {
                            ...h,
                            cards: h.cards.map(с => {
                                if (с.id !== action.card.id) {
                                    return с;
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
        case CHANGE_HOUSE_FILTER:
            return {
                houses: state.houses.map(h => {
                    if (h.id !== action.houseId ) {
                        return {
                            ...h,
                            filter: !h.filter
                        }
                    } else {
                        return {
                            ...h,
                            filter: h.filter
                        }
                    }
                })
            }
        default: return state
    }
}


export const setHousesAC = (houses) => {
    return {type: SET_HOUSES, houses}
}
export const addHouseAC = (newHouse) => {
    return {type: ADD_HOUSE, newHouse}
}
export const setCardsAC = (houseId, cards) => {
    return {type: SET_CARDS, houseId, cards: cards};
}
export const addCardSucsess = (newCard, houseId) => {
    return {type: ADD_CARD, houseId, newCard};
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
export const changeHouseFilterAC = (houseId) => {
    return {type: CHANGE_HOUSE_FILTER, houseId};
}

//Thunk
//
export const setHouses = () => (dispatch) => {
    //request to server
    api.getHouses()
        .then(res => {
            dispatch(setHousesAC(res)) // undef
        });
}
export const addNewHouse = ()  => (dispatch) => {
    api.createHouse()
        .then(res => {
            let newHouse = res;
            dispatch(addHouseAC(newHouse))
        });
}
export const getCards = (houseId) => (dispatch) => {
    api.getCards(houseId)
        .then(res => {
            dispatch(setCardsAC(houseId, res));
        });
}
//
export const addCard = (newCard, houseId) => (dispatch) => {
    api.createCard(newCard, houseId)
        .then(res => {
            let newCard = res
            dispatch(addCardSucsess(newCard, houseId));
        });
}

export const changeHouseFilter = (houseId) => (dispatch) => {
    api.changeHouseFilter(houseId)
        .then(res => {
            dispatch(changeHouseFilterAC(houseId));
        });
}
export const deleteCard = (cardId, houseId) =>   (dispatch) => {
    api.deleteCard(cardId)
        .then(res => {
            dispatch(deleteCardAC(cardId, houseId ));
        });
}
export const saveCard = (card, cardId) => async (dispatch) => {
    const response = await api.updateCard(card)
    dispatch(getCards(card, cardId))
    dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]}));
    return Promise.reject(response.data.messages[0]);
};

