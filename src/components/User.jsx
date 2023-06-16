const User = ({ name, country, picture }) => {
	
	return (
		<div className="user-tag">
			<p className="country">{country}</p>
			<img src={picture} alt="User" />
			<h2 className="name">{name}</h2>
		</div>
	)
}

export default User;