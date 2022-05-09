import React from 'react'
import { Link } from 'react-router-dom'

function UserList(obj) {
    return (
        // <div className='table__user'>
        <>
            <tbody>
                <tr className='table__strings'>
                    {/* <td></td> */}
                    <td className='table-string table-string-email' title={obj.email}>{obj.email}</td>
                    <td className='table-string table-string-name' title={obj.name}>{obj.name}</td>
                </tr>
            </tbody>
        </>
        // </div>
    )
}

export default UserList