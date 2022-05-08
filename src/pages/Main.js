import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { fetchUsers } from '../redux/actions/users';
// import { setPostUsers } from '../redux/actions/filters';
import UserList from '../components/UserList/UserList';
import Form from '../components/Form/Form';

function Main({ search, handleChange }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const items = useSelector(({ users }) => users.items);
    // const { postUser } = useSelector(({ filters }) => filters);
    // Нахожу уникальнорго пользователя
    const unicUser = []
    for (let i = 0; i < items.length; i++) {
        unicUser[items[i]['userId']] = items[i];
    }

    // Поиск по заголовку 
    const searchUser = unicUser.filter(el => {
        return el.title && el.title.toLowerCase().toLowerCase().includes(search.toLowerCase())
    })
    const sortName = [
        'Возрастанию',
        'Убыванию'
    ]

    React.useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    const sortPosts = () => {
        return items.sort((a, b) => a.body.length - b.body.length)
    }

    const pushPosts = () => navigate('/posts')

    // const onSelectPosts = React.useCallback((index) => {
    //     for (let i = 0; i < items.length; i++) {
    //         console.log(items[i].body)
    //     }
    //     dispatch(setPostUsers(index))
    // }, [])

    return (
        <div className='main'>
            <Form items={sortName} search={search} handleChange={handleChange} sortPosts={sortPosts} />
            <table className='table'>
                <thead>
                    <tr className='table__titles'>
                        <th className='table-title'>Пользователь №</th>
                        {/* <th className='table-title'>Название поста</th> */}
                    </tr>
                </thead>
                {items.length !== 0
                    ? searchUser.map((obj) =>
                        <UserList {...obj} key={obj.id} pushPosts={pushPosts} navigete={navigate} />
                    )
                    : console.log('error')
                }
            </table>
        </div>
    )
}

export default Main