import React from 'react';
import Form from '../components/Form/Form';
import PostList from '../components/PostList/PostList';

function Posts({ search, handleChange, searchText, sortItems, onSelectSortBody }) {

    return (
        <div className='posts'>
            <Form items={sortItems} search={search} handleChange={handleChange} onClickSortIndex={(id) => onSelectSortBody(id)} />
            <table className='table'>
                <thead>
                    <tr className='table__titles'>
                        <th className='table-title'>Пользователь</th>
                        <th className='table-title'>Пост</th>
                    </tr>
                </thead>
                {searchText.length !== 0
                    ? searchText.map((obj) =>
                        <PostList {...obj} key={obj.id} />
                    )
                    :
                    <tbody>
                        <tr className='table__strings'>
                            <td></td>
                            <td className='table-string_active'>Такого поста нет</td>
                        </tr>
                    </tbody>
                }
            </table>
        </div>
    )
}

export default Posts