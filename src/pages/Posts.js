import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PostList from '../components/PostList/PostList';
import { fetchUsers } from '../redux/actions/users';

function Posts() {
    const dispatch = useDispatch();
    const items = useSelector(({ users }) => users.items);

    React.useEffect(() => {
        dispatch(fetchUsers())
    }, [])
    return (
        <div className='main'>
            {items.length !== 0
                ? items.map((obj) =>
                    <PostList {...obj} key={obj.id} />
                )
                : console.log('error')
            }
        </div>
    )
}

export default Posts