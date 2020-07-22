import axios from 'axios';

const API_BASE_ADDRESS = 'https://json-server-for-crm.herokuapp.com/';

export const instance = axios.create({
    baseURL: API_BASE_ADDRESS,
})

export const api = {
    getHouses() {
        return instance.get('/houses/').then(res => res.data)
    },
    getCards(houseId) {
        return instance.get(`/houses/${houseId}/cards`).then(res => res.data)
    },
    createHouse() {
        return instance.post('/houses', {
            name: 'Вольер',
            filter: false,
            cards: []

        }).then(res => res.data) //ok
    },
    createCard(newCard, houseId) {
        return instance.post(`/houses/${houseId}/cards`, {
                name: 'Имя',
                weight: '-',
                sex: '-',
                height: '-',
                color: '-',
                diet: '-',
                temper: '-',
                image: ''
            }).then(res => res.data)
    },
    deleteCard(cardId) {
        debugger
        return instance.delete(`/cards/${cardId}`).then(res => {
            debugger
            return res.data
        })
    },

    updateCard(card, cardId) {
        return instance.patch(`/cards/${cardId}`, card).then(res => {
            return res
        })
    },
    changeHouseFilter(houseId) {
        return instance.get(`/houses/`).then(res => {
            return res.data
        })
    },
}
