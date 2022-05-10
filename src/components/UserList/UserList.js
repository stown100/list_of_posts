import React from 'react'

function UserList(obj) {
    return (
        <tbody>
            <tr className='table__strings'>
                <td className='table-string table-string-email' title={obj.email}>{obj.email}</td>
                <td className='table-string table-string-name' title={obj.name}>{obj.name}</td>
            </tr>
        </tbody>
    )
}

export default UserList