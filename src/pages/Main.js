import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { fetchUsers } from '../redux/actions/users';
import { setSortUsers } from '../redux/actions/filters';
import UserList from '../components/UserList/UserList';
import Form from '../components/Form/Form';

function Main({ search, handleChange, items, setItems, searchUser, sortItems }) {
    // const navigate = useNavigate();
    // const dispatch = useDispatch();
    // const items = useSelector(({ users }) => users.items);
    // const { sortBy } = useSelector(({ filters }) => filters);

    // console.log(searchUser.sort((a, b) => b['id'] - a['id']))
    // const onSelectSortIndex = React.useCallback((index) => {
    //     console.log(searchUser)
    //     if (index === 1) {
    //         setItems(searchUser.sort((a, b) => b['id'] - a['id']))
    //     } else {
    //         setItems(searchUser.sort((a, b) => a['id'] - b['id']))
    //     }
    //     // dispatch(setSortUsers(id))
    // }, [])

    const onSelectSortIndex = (index) => {
        if (index === 1) {
            setItems(searchUser.sort((a, b) => b['name'].length - a['name'].length))
        } else {
            setItems(searchUser.sort((a, b) => a['name'].length - b['name'].length))
        }
    }

    // React.useEffect(() => {
    //     dispatch(fetchUsers(sortBy))
    // }, [sortBy])


    return (
        <div className='main'>
            <Form items={sortItems} search={search} handleChange={handleChange} onClickSortIndex={(id) => onSelectSortIndex(id)} />
            <table className='table'>
                <thead>
                    <tr className='table__titles'>
                        <th className='table-title'>Пользователь №</th>
                        <th className='table-title'>Заголовок поста</th>
                    </tr>
                </thead>
                {items.length !== 0
                    ? searchUser.map((obj) =>
                        <UserList {...obj} key={obj.id} />
                    )
                    : console.log('error')
                }
            </table>
        </div>
    )
}

export default Main