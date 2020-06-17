import React, {useCallback, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loadUsers} from "../store/modules/users/actions";

const Users = () => {
    const dispatch = useDispatch();

    const users = useSelector(
        ({users}) => users.users
    );

    const fetchUsers = useCallback(() => dispatch(loadUsers()), [])

    useEffect(() => {
       fetchUsers();
    }, [fetchUsers])

    return (
        <div>
            <ul>
                { users.length && users.map((user) => (
                    <li key={user.id}>{ user.name }</li>
                ))}
            </ul>
        </div>
    )
}

export default Users;
