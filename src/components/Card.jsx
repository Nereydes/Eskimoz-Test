const Card = ({ user }) => {
	return (
		<div
			className="group w-full min-[445px]:w-40 min-[445px]:hover:w-60 2xl:w-65 2xl:hover:w-80 hover:shadow-lg hover:shadow-indigo-500/50 aspect-3/4 rounded-xl bg-center bg-contain transition-all flex items-end overflow-hidden"
			style={{
				backgroundImage: `url('./assets/images/${user.image}`,
			}}
		>
			<div className="w-full h-1/4 bg-linear-to-tr from-blue-700/80 via-purple-700/80 to-indigo-900/80 p-2.5 grid grid-cols-2 grid-rows-2 group-hover:text-base text-lg min-[445px]:text-xs 2xl:text-xl">
				<span className="font-bold">{user.name}</span>
				<span>{user.age} y.o.</span>
				<span className="truncate">{user.job}</span>
				<span className="truncate">{user.location}</span>
			</div>
		</div>
	);
};

export default Card;
