import "./App.css";
import sampleData from "./data/sample.json";
import GridCard from "./components/GridCard";

function App() {
	return (
		<>
			<div>
				<h1 className="text-red-500">Coucou</h1>
				<GridCard users={sampleData} />
			</div>
		</>
	);
}

export default App;
