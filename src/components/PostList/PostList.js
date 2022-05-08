import React from 'react'

function PostList(obj) {
    return (
        <div className='user-list' title={`Посты пользователя ${Object.values(obj)[0]}`}>
            <h3 className='user-list__name'>{Object.values(obj)[3]}</h3>
        </div>
    )
}

export default PostList;