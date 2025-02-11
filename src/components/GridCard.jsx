import Card from "./Card";

const GridCard = ({ users }) => {
	return (
		<div className="flex gap-15 items-center flex-wrap">
			{users.map((user, index) => (
				<Card key={`${user.name}-${index}`} user={user} />
			))}
		</div>
	);
};

export default GridCard;
