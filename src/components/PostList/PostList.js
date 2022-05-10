import React from 'react';

function PostList(obj) {
    return (
        <tbody>
            <tr className='table__strings'>
                <td className='table-string table-string-email' title={obj.email}>{obj.email}</td>
                <td className='table-string table-string-name' title={obj.body}>{obj.body}</td>
            </tr>
        </tbody>
    )
}

export default PostList;