import "./App.css";
import FilteredGrid from "./components/FilteredGrid";

function App() {
	return (
		<>
			<h1 className="text-center text-4xl font-bold mt-20 mb-5">Welcome, captain!</h1>
			<p className="text-center font-semibold mb-10">Here you can view the list of robots in your inventory.</p>
			<FilteredGrid />
		</>
	);
}

export default App;
