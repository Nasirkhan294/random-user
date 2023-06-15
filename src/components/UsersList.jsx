import { useSelector } from "react-redux"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "../redux/users/usersSlice";
import User from "./User";

const UsersList = () => {
	const { users, isLoading, error } = useSelector((state) => state.users);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getUser())
	}, [dispatch])


	if (isLoading) {
		return <p>Loading...</p>
	}

	if (error) {
		return <p>Error: {error}</p>
	}


	return (
		<ul>{users.map((user, index) => (
			<User
				key={index}
				name={user.name.first}
				gender={user.gender}
				email={user.email}
			/>
		))}</ul>
	)
}

export default UsersList