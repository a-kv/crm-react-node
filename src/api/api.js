import axios from 'axios';
import {ContactListType, ContactType} from "../components/MainPage/ContactList/ContactList";

const API_BASE_ADDRESS = 'https://test-app-contacts.herokuapp.com/contactsList';

type CommonApiType<T> = {
      items: ContactListType
      data: T
}
export type GetContactListApiType = Array<ContactType>


export const instance = axios.create({
    baseURL: API_BASE_ADDRESS,
})

export const api = {
    createContact(title: string) {
        return instance.post<CommonApiType<{ item: ContactType }>>('/', {title: title, tel: 'Entry number'}).then(res => res.data)
    },
    getContactsList() {
        return instance.get<GetContactListApiType>('/').then(res => res.data)
    },

    deleteContact(contactId: string) {
        return instance.delete<CommonApiType<{}>>(`/${contactId}`).then(res => res.data)
    },

    updateContactTitle(contactId: string, title: string) {
        return instance.patch(`/${contactId}`, {title: title}).then(res => {
            return  res.data
        })
    },
    updateContactTel(contactId: string, tel: string) {
        return instance.patch(`/${contactId}`, {tel: tel}).then(res => res.data)
    }

}
