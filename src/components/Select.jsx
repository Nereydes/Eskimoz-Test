import { useState, useEffect } from "react";

const Select = ({ label, options, value, onChange, hint }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedValue, setSelectedValue] = useState(value);

	useEffect(() => {
		setSelectedValue(value);
	}, [value]);

	const handleOptionClick = (option) => {
		setSelectedValue(option.value);
		setIsOpen(false);
		if (onChange) onChange(option.value);
	};

	return (
		<div className="relative -top-0.5">
			<label
				className={`group h-10 rounded-lg border flex flex-col cursor-pointer border-white ${selectedValue && "p-0"} ${
					!selectedValue && "p-3 has-[:focus-visible]:p-0"
				}`}
				onClick={() => setIsOpen(!isOpen)}
			>
				<span
					className={`
						!leading-none text-xs sm:text-sm xl:text-base font-medium -translate-y-0.5 group-has-[:focus-visible]:-translate-y-6 transition-all
						${selectedValue && "-translate-y-6"}
					`}
				>
					{label}
				</span>
				<div className="text-xs sm:text-sm xl:text-base -translate-y-1 md:-translate-y-2.5 translate-x-2">
					{selectedValue ? options.find((opt) => opt.value === selectedValue)?.label : ""}
				</div>
			</label>

			{isOpen && (
				<ul
					className="absolute z-10 bg-violet-950 border border-white rounded-lg mt-2 shadow-md max-h-60 overflow-y-auto w-full text-xs lg:text-sm 2xl:text-base"
					onBlur={() => setIsOpen(false)}
				>
					{options.map((option) => (
						<li
							key={option.value}
							onClick={() => handleOptionClick(option)}
							className={`p-2 hover:bg-indigo-950 cursor-pointer ${selectedValue === option.value && "bg-violet-300/50 font-bold"}`}
						>
							{option.label}
						</li>
					))}
				</ul>
			)}
			{hint && <div className="text-xs mt-1">{hint}</div>}
		</div>
	);
};
export default Select;
