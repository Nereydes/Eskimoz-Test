import "./App.css";
import sampleData from "./data/sample.json";
import GridCard from "./components/GridCard";

function App() {
	return (
		<>
			<div>
				<GridCard users={sampleData} />
			</div>
		</>
	);
}

export default App;
