import React from 'react'
import { Link } from 'react-router-dom'

function UserList(obj, pushPosts) {
    return (
        // <div className='table__user'>
        <>
            <tbody>
                <tr className='table__strings'>
                    <td></td>
                    <Link to={`/posts${Object.values(obj)[0]}`}><td className='table-string'>{Object.values(obj)[0]}</td></Link>
                    {/* <td className='table-string'><span className='user-list__title-span'></span>{Object.values(obj)[2]}</td> */}
                </tr>
            </tbody>
        </>
        // </div>
    )
}

export default UserList