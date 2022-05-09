import axios from "axios";


// Получение данных с сервера
export const fetchUsers = (sortBy, category) => (dispatch) => {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then(({data}) => {
        dispatch(setUsers(data))
    })
}

// Метод для хранения данных
export const setUsers = (items) => ({
    type: 'SET_USERS',
    payload: items
})