import { useSelector } from "react-redux"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "../redux/users/usersSlice";
import User from "./User";
import UserResults from "./UserResults";

const UsersList = () => {
	const { users, isLoading, error } = useSelector((state) => state.users);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getUser(1))
	}, [dispatch])


	if (isLoading) {
		return <p>Loading...</p>
	}

	if (error) {
		return <p>Error: {error}</p>
	}


	return (
		<div className="container">
		    <UserResults />
			<ul>{users.map((user, index) => (
				<User
					key={index}
					name={user.name.first}
					country={user.location.country}
					picture={user.picture.medium}
				/>
			))}</ul>
		</div>
	)
}

export default UsersList