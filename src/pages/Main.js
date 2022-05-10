import React from 'react';
import UserList from '../components/UserList/UserList';
import Form from '../components/Form/Form';

function Main({ search, handleChange, searchUser, sortItems, onSelectSortName }) {

    return (
        <div className='main'>
            <Form items={sortItems} search={search} handleChange={handleChange} onClickSortIndex={(id) => onSelectSortName(id)} />
            <table className='table'>
                <thead>
                    <tr className='table__titles'>
                        <th className='table-title'>Пользователь</th>
                        <th className='table-title'>Заголовок поста</th>
                    </tr>
                </thead>
                {searchUser.length !== 0
                    ? searchUser.map((obj) =>
                        <UserList {...obj} key={obj.id} />
                    )
                    :
                    <tbody>
                        <tr className='table__strings'>
                            <td></td>
                            <td className='table-string_active'>Такого заголовка нет</td>
                        </tr>
                    </tbody>
                }
            </table>
        </div>
    )
}

export default Main