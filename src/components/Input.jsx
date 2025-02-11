import { useEffect, useState } from "react";

const Input = ({ label, value, onChange, hint }) => {
	const [inputValue, setInputValue] = useState(value);

	useEffect(() => {
		setInputValue(value);
	}, [value]);

	return (
		<div>
			<label
				className={`group h-10 rounded-lg border flex flex-col gap-2.5 md:gap-0 cursor-text border-white
					${inputValue && "p-0"} ${!inputValue && "p-3 has-[:focus-visible]:p-0"}
				`}
			>
				<span
					className={`
						!leading-none text-xs sm:text-sm xl:text-base font-medium -translate-y-0.5 group-has-[:focus-visible]:-translate-y-6 transition-all
						${inputValue && "-translate-y-6"}
					`}
				>
					{label}
				</span>
				<input
					className="bg-transparent caret-pink-700 w-[calc(100%-10px)] !leading-none text-xs sm:text-sm xl:text-base"
					type="text"
					value={inputValue || ""}
					onChange={(e) => {
						const value = e.target.value;
						setInputValue(value !== "" ? value : undefined);
						if (onChange) {
							onChange(e);
						}
					}}
				/>
			</label>
			{hint && <div className="text-xs my-1">{hint}</div>}
		</div>
	);
};

export default Input;
