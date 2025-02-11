import sampleData from "../data/sample.json";
import GridCard from "./GridCard";
import Select from "./Select";
import Input from "./Input";
import { useMemo, useState } from "react";

const FilteredGrid = () => {
	const [selectedJob, setSelectedJob] = useState(undefined);
	const [searchName, setSearchName] = useState(undefined);

	const displayedData = useMemo(() => {
		let currentData = [...sampleData];
		if (selectedJob) {
			currentData = currentData.filter(({ job }) => job === selectedJob);
		}
		if (searchName) {
			currentData = currentData.filter(({ name }) => name.toLowerCase().includes(searchName.toLowerCase()));
		}
		return currentData;
	}, [selectedJob, searchName]);

	const getJobs = () => {
		return sampleData.reduce((acc, { job }) => {
			if (!acc.some((item) => item.value === job)) {
				acc.push({ value: job, label: job });
			}
			return acc;
		}, []);
	};

	return (
		<>
			<div className="m-auto w-4/5 md:w-1/2 flex flex-col md:flex-row gap-10 md:gap-5 justify-center items-stretch md:items-center mt-16 mb-10">
				<Select label="Job" hint="Filter your robots by capacity" value={selectedJob} options={getJobs()} onChange={(value) => setSelectedJob(value)} />
				<Input label="Name" hint="Filter your robots by name" value={searchName} onChange={(e) => setSearchName(e.target.value)} />
				{(selectedJob || searchName) && (
					<button
						className="cursor-pointer p-2 rounded-lg md:p-0 md:w-7 md:h-7 md:rounded-full bg-red-800 text-sm place-self-center"
						onClick={() => {
							setSearchName(undefined);
							setSelectedJob(undefined);
						}}
					>
						<span className="hidden md:inline-block">X</span>
						<span className="inline-block md:hidden">Supprimer les filtres</span>
					</button>
				)}
			</div>
			<div className="px-10 md:px-30 pb-10 transition-all duration-300 ease-out">
				{displayedData.length > 0 ? (
					<GridCard users={displayedData} />
				) : (
					<div className="flex gap-5 items-center justify-center  opacity-0 animate-[fadeIn_0.3s_ease-out_forwards]">
						<img src="assets/images/sad_robot.png" alt="Sad robot icon" className="w-20" />
						<span>Sadly, no results found</span>
					</div>
				)}
			</div>
		</>
	);
};

export default FilteredGrid;
