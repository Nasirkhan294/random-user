const User = ({ name, gender, email }) => {
	
	return (
		<div>
			<h1>{name}</h1>
			<p>{gender}</p>
			<p>{email}</p>
		</div>
	)
}

export default User;