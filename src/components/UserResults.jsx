import { useDispatch } from "react-redux"
import { getUser } from "../redux/users/usersSlice"

const UserResults = () => {
	const dispatch = useDispatch();

	const handleChange = (e) => {
		const selectedValue = e.target.value;
		dispatch(getUser(selectedValue))
	}
	return (
		<div className="user-results">
			<label htmlFor="users">How many users would you like?</label>
			<select
				name="users"
				id="users"
				onChange={handleChange}
			>
				<option value="1">1</option>
				<option value="3">3</option>
				<option value="6">6</option>
			</select>
		</div>
	)
}

export default UserResults