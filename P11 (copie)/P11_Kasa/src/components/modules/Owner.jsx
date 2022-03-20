import "../../styles/modules/owner.scss";

function Owner({ host }) {
	const { name, picture } = host;
	const [firstname, ...lastname] = name.split(" ");

	return (
		<div className="Owner">
				<span className="name">
					{firstname}
					<br />
					{lastname}
				</span>
			<div className="picture">
				<img src={picture} alt="owner" />
			</div>
		</div>
	);
}

export default Owner;
